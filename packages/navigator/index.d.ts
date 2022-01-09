import { OpcionesCBPGM } from './common';

export const AppsSoportadas: {
    GOOGLE_MAPS: string;
    WAZE: string;
    BAIDUMAP: string;
    APPLE_MAPS:string;
};

export interface Response {
    error: boolean;
    errorText?: string;
}

// Google maps
export const TransporteGoogleMaps: {
    DRIVING: string;
    WALKING: string;
    BICYCLING: string;
    TRANSIT: string;
};

export interface OpcionesGoogleMaps {
    daddr: string | Array<string>;
    saddr?: string | Array<string>;
    modoTransporte: TransporteGoogleMaps | TransporteGoogleMaps.DRIVING;
    tipoMapa: 'TURN_BY_TURN' | 'MAPS';
    // avoid?: "t" | "h" | "f";
    avoid?: string;
    streetViewOp?: string | Array<string>;
}

// WAZE
export interface OpcionesWaze {
    destino: string | Array<string>;
    navigate: 'yes' | 'no';
}

// BAIDUMAP
export interface OpcionesBaidumap {
    destino: string;
    origen?: string;
    modo: 'driving' | 'walking' | 'bicycling' | 'transit';
}

export interface OpcionesAppleMaps {
    tipo:"s" | "k" | "h" | "r",
    saddr?:string | Array<string>,
    daddr:string | Array<string>,
    dirflg:"d" | "w" | "r"
}

export function checkAppInstalada(packageName): boolean;
export function openGoogleMaps(opciones: OpcionesGoogleMaps): Promise<Response>;
export function openWaze(opciones: OpcionesWaze): Promise<Response>;
export function openBaidumap(opciones: OpcionesBaidumap): Promise<Response>;
export function openAppleMaps(opciones: OpcionesAppleMaps): Promise<Response>;
