import { DemoSharedBase } from '../utils';
import {getOrientacion,Orientacion,setOrientacion} from '@developerwym/ns-screen-orientacion';

export class DemoSharedNsScreenOrientacion extends DemoSharedBase {

  testIt() {
    setOrientacion(Orientacion.LANDSCAPE).then((res)=>{
      alert(getOrientacion());
    })
  }
}