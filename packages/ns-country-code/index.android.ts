import { action, ActionBar, ActionItem, ActionItems, Application, Builder, Button, Color, CoreTypes, Frame, getCurrentPage, getRootLayout, GridLayout, GridUnitType, ItemSpec, Label, Page, RootLayout, Screen, SearchBar, ShowModalOptions, StackLayout, View,Image, ListView, ItemEventData, EventData, TextField, Utils} from "@nativescript/core";
import { Codigos, CodigosI } from "./common";
const permissions = require("@master.technology/permissions");


export function getCurrentPais(addPlus: boolean): Promise<any> {
    return new Promise(async (rs, rj) => {
        try {
            permissions.requestPermission([android.Manifest.permission.READ_PHONE_STATE,android.Manifest.permission.READ_SMS]).then(() => {
                let context:android.content.Context=Application.android.context;
                let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
                let locale:string = manager.getNetworkCountryIso();
                let countryCode: any = Codigos.filter(item => item.nombre === locale.toUpperCase());
                console.log("Telf:", manager.getLine1Number().substring(1))
                rs({ pais: countryCode[0].fullNameS, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1)});
            }).catch(() => {
                rj({ error: "Permisos son requeridos." });
            });
        } catch (error) {
            rj({ error: error });
        }
    });
}

export let listaCodigos:Array<CodigosI>=Codigos;