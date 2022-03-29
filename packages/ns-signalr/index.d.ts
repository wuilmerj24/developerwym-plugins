import {isAndroid} from "@nativescript/core";
import { NsSignalrCommon } from './common';
export interface HeaderSignalRI {
    key: string;
    value: string;
}


export interface ConectarI {
    url: string;
    headers?: Array<HeaderSignalRI>;
    shouldSkipNegotiate: boolean;
    withHandshakeResponseTimeout?: number;
    withTransport?: "ALL" | "LONG_POLLING" | "WEBSOCKETS";
    withAccessTokenProvider?: string;
}

export declare class NsSignalr extends NsSignalrCommon {
    
}
