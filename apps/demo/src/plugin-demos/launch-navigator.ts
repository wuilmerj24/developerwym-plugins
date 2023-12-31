import { Observable, EventData, Page, Button, Label, TapGestureEventData } from '@nativescript/core';
import { DemoSharedLaunchNavigator } from '@demo/shared';
import { TransporteGoogleMaps, checkAppInstalada, openAppleMaps, openGoogleMaps, openWaze } from '@arepa/launch-navigator';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function checkApp(args: TapGestureEventData) {
  const btn: Button = args.object as Button;
  const page: Page = btn.page;
  const lbl: Label = page.getViewById('lblInstalled');
  lbl.text = `App installed ${checkAppInstalada('com.google.android.apps.maps')}`;
}

export function fnopenGoogleMaps(args: TapGestureEventData) {
  openGoogleMaps({
    daddr: ['villa de cura, aragua. Venezuela', 'quito, pichincha ecuador'],
    saddr: ['maracay aragua venezuela'],
    modoTransporte: TransporteGoogleMaps.DRIVING,
    tipoMapa: 'MAPS',
    avoid: 't',
  })
    .then((res) => {
      console.log('res ', res);
    })
    .catch((err) => {
      console.log('err ', err);
    });
}

export function fnopenWaze(args: TapGestureEventData) {
  openWaze({
    destino: 'Guayaquil',
    navigate: 'yes',
  })
    .then((res) => {
      console.log('res ', res);
    })
    .catch((err) => {
      console.log('err ', err);
    });
}

export function fnopenApple(args: TapGestureEventData) {
  openAppleMaps({
    daddr: 'cc recreo quito ecuador',
    saddr: 'parque la carolina quito ecuador',
    dirflg: 'd',
    tipo: 'k',
  })
    .then((res) => {
      console.log('res ', res);
    })
    .catch((err) => {
      console.log('err ', err);
    });
}
export class DemoModel extends DemoSharedLaunchNavigator {}
