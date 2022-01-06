import { DemoSharedBase } from '../utils';
import {AppsSoportadas,OpcionesBaidumap,OpcionesGoogleMaps,OpcionesWaze,Response,TransporteGoogleMaps,checkAppInstalada,openBaidumap,openGoogleMaps,openWaze} from '@developerwym/navigator';

export class DemoSharedNavigator extends DemoSharedBase {

  testIt() {
    // openGoogleMaps({
    //   daddr:"Maracay aragua venezuela",
    //   modoTransporte:TransporteGoogleMaps.DRIVING,
    //   tipoMapa:"TURN_BY_TURN",
    //   saddr:"Villa de cura aragua venezuela",
    //   avoid:"fth"
    // }).then((res)=>{
    //   console.log(res)
    // })

    // openBaidumap({
    //   destino:"maracay aragua venezuela",
    //   modo:"driving",
    //   origen:"villa de cura aragua venezuela",
    // }).then((res)=>{
    //   console.log(res);

    // }).catch((err)=>{
    //   console.log(err);
    // })

    openWaze({
      destino:"Maracay villa de cura aragua venezuela",
      navigate:"no"
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
}