import { NsSignalrCommon } from './common';
import { Observable } from "rxjs";
import {Utils} from "@nativescript/core";
import { ConectarI} from '.';
import { deserialize,serialize } from './utils';
export * from './utils';

export class NsSignalr extends NsSignalrCommon {    
    protected conexion: com.microsoft.signalr.HubConnection=null;
    constructor(
    ){
        super();
        
    }

    async conectar(data:ConectarI):Promise<any>{
        return new Promise(async (rs,rj)=>{
            try {
                if (this.conexion != undefined || this.conexion != null){
                    rs(this.conexion);
                }    
                let headers: java.util.Map<string, string>=new java.util.HashMap<string,string>();
                if(data.headers.length>0){
                    for(let i:number=0;i<data.headers.length;i++){
                        headers.put(data.headers[i].key, data.headers[i].value);
                    }
                }else{
                    headers.put("Content-type","application/json");
                }
                let transport: com.microsoft.signalr.TransportEnum;
                if(data.withTransport){
                    if (data.withTransport=="WEBSOCKETS"){
                        transport = com.microsoft.signalr.TransportEnum.WEBSOCKETS;
                    } else if (data.withTransport == "LONG_POLLING") {
                        transport = com.microsoft.signalr.TransportEnum.LONG_POLLING;
                    } else if (data.withTransport == "ALL") {
                        transport = com.microsoft.signalr.TransportEnum.ALL;
                    }
                }else{
                    transport = com.microsoft.signalr.TransportEnum.ALL;
                }
                let accestoken: io.reactivex.rxjava3.core.Single<string>;
                if(data.withAccessTokenProvider){
                    accestoken == io.reactivex.rxjava3.core.Single.just(data.withAccessTokenProvider);
                }
                this.conexion = await com.microsoft.signalr.HubConnectionBuilder.create(data.url)
                .withHeaders(headers)
                .withTransport(transport)
                .shouldSkipNegotiate(data.shouldSkipNegotiate)
                .withHandshakeResponseTimeout(data.withHandshakeResponseTimeout > 0 ? data.withHandshakeResponseTimeout : 0)
                .withAccessTokenProvider(accestoken)
                .build();
                await this.conexion.start();
                let intervalo;
                let that=this;
                const observable = new Observable(subscriber => {
                    intervalo=Utils.setInterval(()=>{
                        
                        if (that.conexion.getConnectionState() == com.microsoft.signalr.HubConnectionState.CONNECTED) {
                            subscriber.complete();
                        } else {
                            subscriber.next();
                        }
                    },1000)
                });
                observable.subscribe({
                    next(x) {
                        console.log("next estado, ", that.conexion.getConnectionState())
                        if (that.conexion.getConnectionState() == com.microsoft.signalr.HubConnectionState.DISCONNECTED){
                            Utils.clearInterval(intervalo); 
                        }
                    },
                    error(err) {
                        console.log("error, ", that.conexion.getConnectionState())
                        Utils.clearInterval(intervalo); 
                        rj(err);
                    },
                    complete() {
                        console.log("completado, ", that.conexion.getConnectionState())
                        Utils.clearInterval(intervalo); 
                        // this.type = new SignalRTipos().convertir();
                        
                        rs(that.conexion);
                    }
                });
            } catch (error) {
                rj(error);
            }
        })
    }

    async desconectar():Promise<any>{
        return new Promise(async(rs,rj)=>{
            let estado:com.microsoft.signalr.HubConnectionState = await this.conexion.getConnectionState();
            try {
                if (estado == com.microsoft.signalr.HubConnectionState.CONNECTED){
                    await this.conexion.stop();
                    rs(estado);
                }
                rj(estado);
            } catch (error) {
                rj(error);
            }
        })
    }

    public get conectado():boolean{
        return this.conexion.getConnectionState() == com.microsoft.signalr.HubConnectionState.CONNECTED ? true : false;
    }

    get idconexion():string{
        return this.conexion.getConnectionId();
    }

    get instanceId():com.microsoft.signalr.HubConnection{
        return this.conexion;
    }

    on(evento: string, callback: (...payload:any[]) => void): () => void{
        const that=this;
        let datos: any ;
        const listener = this.conexion.on(evento, new com.microsoft.signalr.Action1({
            invoke: async function(args) {
                console.log(args.getClass().getName())
                datos = await deserialize(args);
                // callback.apply(null,datos);
                callback(datos);
            }
        }),java.lang.Object.class);
        return () => {
            listener.unsubscribe();
        }
    }

    send(evento: string, payload: any[]): void {
        if(!evento){
            throw Error(`Evento es:${evento}`);
        }
        try {
            this.conexion.send(evento, payload);
        } catch (error) {
            throw Error(`Se ha generado un error:${error}`);
        }
    }

    invoke(evento: string,payload: any[]): void {
        if(!evento){
            throw Error(`Evento es:${evento}`);
        }
        try {
            this.conexion.invoke(evento, payload);
        } catch (error) {
            throw Error(`Se ha generado un error:${error}`);
        }
    }

    onClose(callback: (...payload: any[]) => void): void {
        this.conexion.onClosed(new com.microsoft.signalr.OnClosedCallback({
            invoke:async function(param0) {
                console.log("se ejecuto el evento: ",param0)
                callback(param0);
            },
        }))
    }
}
