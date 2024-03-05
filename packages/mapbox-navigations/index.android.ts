import { Application, ApplicationEventData, Color, GridLayout, Screen, Utils } from '@nativescript/core';
import { GetSetProperty, MapboxNavigationsCommon } from './common';

declare var kotlin: any;
declare var developerwym: any;

export class MapboxNavigations extends MapboxNavigationsCommon {
  navigationView: com.mapbox.navigation.dropin.NavigationView;
  @GetSetProperty()
  token: string;
  @GetSetProperty()
  latLngDestination: string;
  @GetSetProperty()
  routeReplayEnabled: boolean;

  createNativeView(): Object {
    const self = this;
    this.navigationView = new com.mapbox.navigation.dropin.NavigationView(this._context, null, this.token);

    if (this.routeReplayEnabled) {
      this.navigationView.getApi().routeReplayEnabled(true);
    }

    if (this.startRoutePreview) {
      this.navigationView.getApi().startRoutePreview();
    }

    if (this.startActiveGuidance) {
      this.navigationView.getApi().startActiveGuidance();
    }

    if (this.startArrival) {
      this.navigationView.getApi().startArrival();
    }

    if (this.startFreeDrive) {
      this.navigationView.getApi().startFreeDrive();
    }

    if (this.latLngDestination != null || this.latLngDestination != undefined) {
      const latlngs: Array<any> = this.latLngDestination.split(',');
      this.navigationView.getApi().startDestinationPreview(com.mapbox.geojson.Point.fromLngLat(parseFloat(latlngs[0]), parseFloat(latlngs[1])));
    }

    const eventos = new developerwym.plugins.ns.IEventosNavView(
      Application.android.foregroundActivity,
      this.navigationView,
      new developerwym.plugins.ns.IEventosNavView.Eventos({
        onActiveNavigation: () => {
          console.log('onActiveNavigation');
        },
        onArrival: () => {},
        onAudioGuidanceStateChanged: (muted: boolean) => {},
        onCameraPaddingChanged: (edgeInsets: any) => {},
        onDestinationChanged: (destination: com.mapbox.geojson.Point) => {},
        onDestinationPreview: () => {},
        onFollowingCameraMode: () => {},
        onFreeDrive: () => {
          console.log('free ');
        },
        onIdleCameraMode: () => {},
        onInfoPanelCollapsed: () => {},
        onInfoPanelDragging: () => {},
        onInfoPanelExpanded: () => {},
        onInfoPanelHidden: () => {},
        onInfoPanelSettling: () => {},
        onInfoPanelSlide: (slideOffset: number) => {},
        onManeuverCollapsed: () => {},
        onManeuverExpanded: () => {},
        onMapClicked: (point: com.mapbox.geojson.Point) => {
          console.log('click ', point.latitude());
        },
        onOverviewCameraMode: () => {},
        onRouteFetchCanceled: (routeOptions, routerOrigin) => {},
        onRouteFetchFailed: (reasons, routeOptions) => {},
        onRouteFetchSuccessful: (routes, routeOptions) => {},
        onRouteFetching: (requestId: number) => {},
        onRoutePreview: () => {},
        onSpeedInfoClicked: (speedInfo) => {},
      })
    );
    this.navigationView.addListener(eventos);
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
