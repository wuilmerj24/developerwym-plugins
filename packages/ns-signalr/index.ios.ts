import { NsSignalrCommon } from './common';


export interface HeaderSignalRI {
    key: string;
    value: string;
}

export const ConexionEstadoOK: string = "CONNECTED";
export const ConexionEstadoCon: string = "CONNECTING";
export const ConexionEstadoDis: string = "DISCONNECTED";

export interface ConectarI {
    url: string;
    headers?: Array<HeaderSignalRI>;
    shouldSkipNegotiate: boolean;
    withHandshakeResponseTimeout?: number;
    withTransport?: com.microsoft.signalr.TransportEnum;
    withAccessTokenProvider?: string;
    // withHubProtocol?: com.microsoft.signalr.HubProtocol
}

export class NsSignalr extends NsSignalrCommon {
    protected conexion: com.microsoft.signalr.HubConnection;
    constructor(
    ) {
        super();

    }

    async conectar(data: ConectarI): Promise<any> {
        
    }

    async desconectar(): Promise<any> {
        
    }

    get conectado(): boolean {
        return
    }

    get idconexion(): string {
        return 
    }

    get instanceId(): com.microsoft.signalr.HubConnection {
        return
    }

    on(evento: string, callback: (...payload: any[]) => void): void {
        
    }

    send(evento: string, ...payload: any[]): void {
    }

    invoke(evento: string, ...payload: any[]): void {
    }
}
