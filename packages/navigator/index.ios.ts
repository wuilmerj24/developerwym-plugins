import { Utils } from "@nativescript/core";
import { OpcionesBaidumap, OpcionesGoogleMaps,OpcionesWaze,Response } from ".";

export const AppsSoportadas = Object.freeze({
    GOOGLE_MAPS: 'comgooglemaps://',
    WAZE: 'waze://',
    BAIDUMAP: 'baidumap://',
});

export const TransporteGoogleMaps = Object.freeze({
    DRIVING: 'driving',
    WALKING: 'walking',
    BICYCLING: 'bicycling',
    TRANSIT: 'transit',
});


export let checkAppInstalada = (packageName: string): boolean => {
    try {
        let check:boolean=UIApplication.sharedApplication.canOpenURL(NSURL.URLWithString(packageName))
        return check;
    } catch (error) {
        return false;
    }
};

export let openGoogleMaps = (opciones: OpcionesGoogleMaps): Promise<Response> =>{
    return new Promise<Response>((rs,rj)=>{
        try {
            if(!checkAppInstalada(AppsSoportadas.GOOGLE_MAPS)){
                console.log("No open");
                rj({error:true,errorText:"App no instalada"});
            }
            let url: string;
            
            url = 'comgooglemaps://?daddr=';

            if (opciones.daddr === null || opciones.daddr === undefined) {
                rj({ error: true, errorText: 'daddr null | undefined' });
            }

            if (typeof opciones.daddr == 'string') {
                url += encodeURI(opciones.daddr);
            } else if (typeof opciones.daddr == 'object') {
                url += `${opciones.daddr[0]},${opciones.daddr[1]}`;
            }

            if (opciones.saddr && opciones.tipoMapa == 'MAPS') {
                if (typeof opciones.saddr == 'string') {
                    url += `&saddr=${encodeURI(opciones.saddr)}`;
                } else if (typeof opciones.saddr == 'object') {
                    url += `&saddr=${opciones.saddr[0]},${opciones.saddr[1]}`;
                }
            }

            url+=`&directionsmode=${opciones.modoTransporte}`;
            
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
            console.log(url);
            rs({error:false});
        } catch (error) {
            rj({error:true,errorText:error});
        }
    });
}

export let openWaze = (opciones: OpcionesWaze): Promise<Response> =>{
    return new Promise<Response>((rs,rj)=>{
        try {
            if(!checkAppInstalada(AppsSoportadas.WAZE)){
                console.log("No open");
                rj({error:true,errorText:"App no instalada"});
            }
            let url: string = 'waze://?q=';
            if (opciones.destino) {
                if (typeof opciones.destino == 'string') {
                    url +=encodeURI(opciones.destino);
                } else if (typeof opciones.destino == 'object') {
                    url +=opciones.destino[0]+","+opciones.destino[1];
                }
            }

            if (opciones.navigate) {
                url += "&navigate="+opciones.navigate;
            }
            console.log(url);
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
            rs({error:false});
        } catch (error) {
            rj({error:true,errorText:error});
        }
    })
}

export let openBaidumap = (opciones: OpcionesBaidumap): Promise<Response> => {
    return new Promise<Response>((rs, rj) => {
        try {
            if (!checkAppInstalada(AppsSoportadas.BAIDUMAP)) {
                rj({ error: true, errorText: 'App no instalada B' });
            }

            let url: string = 'baidumap://map/direction?destination=';

            if (opciones.destino) {
                url +=encodeURI(opciones.destino);
            }

            if (opciones.origen) {
                url += `&origin=${encodeURI(opciones.origen)}`;
            }

            if (opciones.modo) {
                let modo: string;
                if (opciones.modo == 'bicycling') {
                    modo = 'riding';
                } else {
                    modo = opciones.modo;
                }
                url += `&mode=${modo}`;
            }

            url += '&coord_type=wgs84';
            console.log(url);
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(url));
            // UIApplication.sharedApplication.openURL(NSURL.URLWithString("baidumap://map/direction?origin=34.264642646862,108.95108518068&destination=40.007623,116.360582&coord_type=bd09ll&mode=driving"));
            rs({error:false});
        } catch (error) {
            rs({ error: true, errorText: error });
        }
    });
};