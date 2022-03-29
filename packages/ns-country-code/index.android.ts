import { action, ActionBar, ActionItem, ActionItems, Application, Builder, Button, Color, CoreTypes, Frame, getCurrentPage, getRootLayout, GridLayout, GridUnitType, ItemSpec, Label, Page, RootLayout, Screen, SearchBar, ShowModalOptions, StackLayout, View,Image, ListView, ItemEventData, EventData, TextField, Utils} from "@nativescript/core";
import { Codigos, CodigosI } from "./common";
const permissions = require("@master.technology/permissions");


export function getCurrentPais(addPlus: boolean): Promise<any> {
    return new Promise((rs, rj) => {
        let cod:Array<CodigosI>=Codigos;
        return permissions.requestPermission([android.Manifest.permission.READ_PHONE_STATE, android.Manifest.permission.READ_SMS, android.Manifest.permission.READ_PHONE_NUMBERS],"se necesitan los permisos").then((res) => {
            try {
                let context: android.content.Context = Application.android.context;
                let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
                let locale: string = manager.getNetworkCountryIso();
                let countryCode: Array<CodigosI> = cod.filter(item => item.iso2.toUpperCase() === locale.toUpperCase());
                if (countryCode.length>0){
                    rs({ pais: countryCode[0].nombre, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1) });
                }else{
                    rj({error:"Pais no encontrado"})
                }
            } catch (error) {
                console.log(error)
                rj({ error: error });
            }
        }).catch(() => {
            rj({ error: "Permisos son requeridos." });
        });
    });
}

export let listaCodigos:Array<CodigosI>=Codigos;