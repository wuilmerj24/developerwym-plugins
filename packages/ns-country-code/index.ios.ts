import {Codigos, CodigosI} from "./common";

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
export let listaCodigos: Array<CodigosI> = Codigos;