import { DemoSharedBase } from '../utils';
import { Orientacion, getOrientacion, setOrientacion } from '@arepa/screen-orientation';

export class DemoSharedScreenOrientation extends DemoSharedBase {
  getOrientationF() {
    console.log('test screen-orientation!', getOrientacion());
  }
  setOrientationF() {
    setOrientacion(Orientacion.LANDSCAPE_REVERSE)
      .then((res) => {
        console.log('res ', res);
      })
      .catch((err) => {
        console.log('err ', err);
      });
  }
}
