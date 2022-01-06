import { Page } from '@nativescript/core';

export interface OpcionesUpdate {
    mensaje: string;
    forceUpdate?: boolean;
    urlAndroid: string;
    urlIos: string;
    pais?: string;
}

export interface ResponseVersion {
    versionName?: string;
    versionCode?: string;
    error: boolean;
    errorText?: string;
}

export function getVersionMarket(url: string): Promise<ResponseVersion>;
export function getVersionApp(): Promise<ResponseVersion>;
export function checkUpdate(opciones: OpcionesUpdate): Promise<any>;
