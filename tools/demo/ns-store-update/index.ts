import { DemoSharedBase } from '../utils';
import {OpcionesUpdate,ResponseVersion,checkUpdate,getVersionApp,getVersionMarket} from '@developerwym/ns-store-update';

export class DemoSharedNsStoreUpdate extends DemoSharedBase {

  testIt() {
    // getVersionApp().then((res)=>{
    //   alert(JSON.stringify(res))
    // })

    // getVersionMarket("https://play.google.com/store/apps/details?id=com.itsclients").then((res)=>{
    //   alert(JSON.stringify(res))
    // })

    checkUpdate({
      mensaje:"Mensaje p",
      urlAndroid:"https://play.google.com/store/apps/details?id=com.itsclients",
      urlIos:"",
      forceUpdate:false,
    }).then((res)=>{
      alert(JSON.stringify(res));
    })
  }
}