import { DemoSharedBase } from '../utils';
import {getCurrentPais,listaCodigos} from '@developerwym/ns-country-code';


export class DemoSharedNsCountryCode extends DemoSharedBase {

  getPais(){
    getCurrentPais(true).then((res)=>{
      console.log("Result del pais",res);
    }).catch((err)=>{
      console.log("Error: ",err);
    })
  }
}