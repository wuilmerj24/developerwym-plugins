import { DemoSharedBase } from '../utils';
import {OpcionesUpdate,ResponseVersion,checkUpdate,getVersionApp,getVersionMarket} from '@developerwym/ns-store-update';

export class DemoSharedNsStoreUpdate extends DemoSharedBase {

  testIt() {
    // getVersionApp().then((res)=>{
    //   alert(JSON.stringify(res))
    // })

    // getVersionMarket("https://itunes.apple.com/app/id1527840996").then((res)=>{
    //   alert(JSON.stringify(res))
    // }).catch((er)=>{
    //   console.log(er);
    // })

    checkUpdate({
      mensaje:"Mensaje p",
      urlAndroid:"https://play.google.com/store/apps/details?id=com.itsclients",
      urlIos:"https://itunes.apple.com/app/id1527840996",
      // urlIos:"https://apps.apple.com/ec/app/its-on-the-way/id1527840996",
      forceUpdate:false,
    }).then((res)=>{
      alert(JSON.stringify(res));
    }).catch((err)=>{
      console.log(err);
    })
  }
}