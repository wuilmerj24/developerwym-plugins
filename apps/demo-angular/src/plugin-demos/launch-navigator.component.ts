import { Component, NgZone } from '@angular/core';
import { DemoSharedLaunchNavigator } from '@demo/shared';
import { TransporteGoogleMaps, checkAppInstalada, openAppleMaps, openGoogleMaps, openWaze } from '@arepa/launch-navigator';
import { Button, Label, Page, TapGestureEventData } from '@nativescript/core';

@Component({
  selector: 'demo-launch-navigator',
  templateUrl: 'launch-navigator.component.html',
})
export class LaunchNavigatorComponent {
  demoShared: DemoSharedLaunchNavigator;
  lblInstalled: string;
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedLaunchNavigator();
  }

  checkApp(args: TapGestureEventData) {
    this.lblInstalled = `App installed ${checkAppInstalada('com.google.android.apps.maps')}`;
  }

  fnopenGoogleMaps(args: TapGestureEventData) {
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

  fnopenWaze(args: TapGestureEventData) {
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

  fnopenApple(args: TapGestureEventData) {
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
}
