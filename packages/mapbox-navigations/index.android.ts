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
    const navigationOptions: com.mapbox.navigation.base.options.NavigationOptions = new com.mapbox.navigation.base.options.NavigationOptions.Builder(this._context)
      .isDebugLoggingEnabled(true)
      // .enableSensors(true)
      .accessToken(this.token)
      .build();
    com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.setup(navigationOptions);

    if (this.routeReplayEnabled) {
      this.navigationView.getApi().routeReplayEnabled(true);
    }

    if (this.startRoutePreview) {
      this.navigationView.getApi().startRoutePreview();
    }

    if (this.startActiveGuidance) {
      // this.navigationView.getApi().startActiveGuidance();
    }

    if (this.startArrival) {
      this.navigationView.getApi().startArrival();
    }

    if (this.startFreeDrive) {
      this.navigationView.getApi().startFreeDrive();
    }

    if (this.latLngDestination != null || this.latLngDestination != undefined) {
      const latlngs: Array<any> = this.latLngDestination.split(',');
      // this.navigationView.getApi().startDestinationPreview(com.mapbox.geojson.Point.fromLngLat(parseFloat(latlngs[0]), parseFloat(latlngs[1])));
    }

    const eventos = new developerwym.plugins.ns.IEventosNavView(
      Application.android.foregroundActivity,
      this.navigationView,
      new developerwym.plugins.ns.IEventosNavView.Eventos({
        onActiveNavigation: () => {
          console.log('onActiveNavigation');
        },
        onArrival: () => {
          console.log('onArrival');
        },
        onAudioGuidanceStateChanged: (muted: boolean) => {
          console.log('onAudioGuidanceStateChanged');
        },
        onCameraPaddingChanged: (edgeInsets: any) => {
          console.log('onCameraPaddingChanged');
        },
        onDestinationChanged: (destination: com.mapbox.geojson.Point) => {
          console.log('onCameraPaddingChanged');
        },
        onDestinationPreview: () => {
          console.log('onDestinationPreview');
        },
        onFollowingCameraMode: () => {
          console.log('onFollowingCameraMode');
        },
        onFreeDrive: () => {
          console.log('free ');
        },
        onIdleCameraMode: () => {
          console.log('onIdleCameraMode');
        },
        onInfoPanelCollapsed: () => {
          console.log('onInfoPanelCollapsed');
        },
        onInfoPanelDragging: () => {
          console.log('onInfoPanelDragging');
        },
        onInfoPanelExpanded: () => {
          console.log('onInfoPanelExpanded');
        },
        onInfoPanelHidden: () => {
          console.log('onInfoPanelHidden');
        },
        onInfoPanelSettling: () => {
          console.log('onInfoPanelSettling');
        },
        onInfoPanelSlide: (slideOffset: number) => {
          console.log('onInfoPanelSlide');
        },
        onManeuverCollapsed: () => {
          console.log('onManeuverCollapsed');
        },
        onManeuverExpanded: () => {
          console.log('onManeuverExpanded');
        },
        onMapClicked: (point: com.mapbox.geojson.Point) => {
          console.log('click ', point.latitude());
        },
        onOverviewCameraMode: () => {
          console.log('onOverviewCameraMode');
        },
        onRouteFetchCanceled: (routeOptions, routerOrigin) => {
          console.log('onRouteFetchCanceled');
        },
        onRouteFetchFailed: (reasons, routeOptions) => {
          console.log('onRouteFetchFailed');
        },
        onRouteFetchSuccessful: (routes, routeOptions) => {
          console.log('onRouteFetchSuccessful');
        },
        onRouteFetching: (requestId: number) => {
          console.log('onRouteFetching');
        },
        onRoutePreview: () => {
          console.log('onRoutePreview:');
        },
        onSpeedInfoClicked: (speedInfo) => {
          console.log('onSpeedInfoClicked:');
        },
      })
    );
    this.navigationView.addListener(eventos);
    this.nativeView = this.navigationView;
    const origin: com.mapbox.geojson.Point = com.mapbox.geojson.Point.fromLngLat(-78.5162, -0.2499);
    const destination: com.mapbox.geojson.Point = com.mapbox.geojson.Point.fromLngLat(-78.5478, -0.3074);
    const coordenadasa: com.mapbox.geojson.Point = com.mapbox.geojson.Point.fromLngLat(-78.5187, -0.267);
    const coordenadasb: com.mapbox.geojson.Point = com.mapbox.geojson.Point.fromLngLat(-78.4777, -0.2414);
    const coordenadas: java.util.List<com.mapbox.geojson.Point> = new java.util.ArrayList();
    coordenadas.add(origin);
    coordenadas.add(coordenadasa);
    coordenadas.add(coordenadasb);
    coordenadas.add(destination);
    const waypointConfigKT = new developerwym.plugins.ns.WaypointConfigKT(this._context);

    Utils.setTimeout(() => {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.current().requestRoutes(
        waypointConfigKT.createRoutes().coordinatesList(coordenadas).profile(com.mapbox.api.directions.v5.DirectionsCriteria.PROFILE_DRIVING).alternatives(java.lang.Boolean.TRUE).enableRefresh(java.lang.Boolean.TRUE).voiceInstructions(java.lang.Boolean.TRUE).build(),
        new com.mapbox.navigation.base.route.NavigationRouterCallback({
          onCanceled(param0, param1) {
            console.log('cancelado ', param0, param1);
          },
          onFailure(param0, param1) {
            console.log('onFailure ', param0, param1);
          },
          onRoutesReady(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin) {
            console.log('onRoutesReady');
            Utils.setTimeout(() => {
              try {
                // self.navigationView.getApi().routeReplayEnabled(true)
                self.navigationView.getApi().startActiveGuidance(param0);
              } catch (error) {
                console.error(error);
              }
            }, 1000);
          },
        })
      );
    }, 3000);

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
