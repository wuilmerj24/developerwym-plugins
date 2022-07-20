import { ConectarI } from ".";


export abstract class NsSignalrCommon  {
    protected abstract conexion;
    abstract conectar(data: ConectarI):Promise<any>;
    abstract desconectar():Promise<any>;
    private readonly _conectado: boolean;
    public get conectado(): boolean {
        return this._conectado;
    }
    private readonly _idconexion: string;
    public get idconexion(): string {
        return this._idconexion;
    }

    private readonly _instanceId;
    public get instanceId() {
        return this._instanceId;
    }

    abstract on(evento: string, callback: (...payload:any[]) => void):void;
    abstract send(evento: string, payload: any[]):void;
    abstract invoke(evento: string,payload: any[]):void;
    abstract onClose(callback: (...payload:any[]) => void):void;
}
