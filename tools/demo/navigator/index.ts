import { DemoSharedBase } from '../utils';
import {AppsSoportadas,OpcionesBaidumap,OpcionesGoogleMaps,OpcionesWaze,Response,TransporteGoogleMaps,checkAppInstalada,openBaidumap,openGoogleMaps,openWaze} from '@developerwym/navigator';

export class DemoSharedNavigator extends DemoSharedBase {

  openG() {

    // alert(checkAppInstalada(AppsSoportadas.WAZE));
    openGoogleMaps({
      daddr:"Maracay aragua venezuela",
      modoTransporte:TransporteGoogleMaps.DRIVING,
      tipoMapa:"MAPS",
      saddr:"Villa de cura aragua venezuela",
      avoid:"fth"
    }).then((res)=>{
      console.log(res)
    })    
  }

  openW(){
    openWaze({
      destino:"tia el recreo quito pichincha ecuador",
      navigate:"yes"
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  openB(){
    openBaidumap({
      destino:"maracay aragua venezuela",
      modo:"driving",
      origen:"villa de cura aragua venezuela",
    }).then((res)=>{
      console.log(res);

    }).catch((err)=>{
      console.log(err);
    })
  }
}