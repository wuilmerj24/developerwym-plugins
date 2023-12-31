import { DemoSharedBase } from '../utils';
import { StoreUpdate } from '@arepa/store-update';

export class DemoSharedStoreUpdate extends DemoSharedBase {
  private storeUpdate: StoreUpdate = new StoreUpdate('');
  testIt() {
    // this.storeUpdate.getVersionNube().then((res)=>{
    //   console.log("Res: ",res);
    // }).catch((er)=>{
    //   console.log(er);
    // })
    // this.storeUpdate.checkUpdate(true);
    this.storeUpdate.checkUpdateNative().then((res) => {});
  }
}
