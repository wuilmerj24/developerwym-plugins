import {Codigos} from "./common";
import {Builder, Button, CoreTypes, Frame, getCurrentPage, GridLayout, Page, ShowModalOptions, StackLayout, View} from "@nativescript/core";

export function  getCurrentPais(addPlus:boolean):Promise<any>{
    return new Promise(async(rs,rj)=>{
        try {
            let carrier:any=new CTTelephonyNetworkInfo().subscriberCellularProvider;
            let countryCode:any=Codigos.filter(item=>item.nombre===carrier.isoCountryCode.toUpperCase());
            rs({pais:countryCode[0].fullNameS,codigo:addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo})
        } catch (error) {
            rj({error:error});
        }
    });
}

export function showList():Promise<any>{
    return new Promise((rs,rj)=>{
        try {
            let page:Page=getCurrentPage();
            
            rs(true)
        } catch (error) {
            rj(error)
        }
    });
}
