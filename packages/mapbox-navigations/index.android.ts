import { Application, ApplicationEventData, Color, GridLayout, Screen, Utils } from '@nativescript/core';
import { MapboxNavigationsCommon } from './common';

declare var developerwym;
declare var kotlin: any;

export class MapboxNavigations extends MapboxNavigationsCommon {
  navigationView: com.mapbox.navigation.dropin.NavigationView;
  createNativeView(): Object {
    this.navigationView = new com.mapbox.navigation.dropin.NavigationView(this._context, null, 'sk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbHF5Y3h4bXcwbmwyMmtsYzdhN2x4bHNyIn0.p_Gqv-I15RwR2LG3EJy-eQ');
    this.navigationView.getApi().routeReplayEnabled(true);
    this.navigationView.getApi().startRoutePreview();
    this.navigationView.getApi().startActiveGuidance();
    this.navigationView.getApi().startArrival();
    this.navigationView.getApi().startFreeDrive();
    this.navigationView.getApi().startDestinationPreview(com.mapbox.geojson.Point.fromLngLat(-78.512327, -0.220164));
    const compassButtonStyle: number = this._context.getResources().getIdentifier('outline_coronavirus_24', 'drawable', this._context.getPackageName());
    this.navigationView.customizeViewStyles(
      new kotlin.jvm.functions.Function1({
        invoke(style: any) {
          style.setRoutePreviewButtonStyle(java.lang.Integer.valueOf(compassButtonStyle));
          return kotlin.Unit.INSTANCE;
        },
      })
    );
    this.nativeView = this.navigationView;

    return this.navigationView;
  }

  get nativeView(): com.mapbox.navigation.dropin.NavigationView {
    return this.navigationView;
  }
  set nativeView(value: com.mapbox.navigation.dropin.NavigationView) {
    this.setNativeView(value);
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
