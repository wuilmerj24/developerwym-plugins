declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.dropin';
          public static BUILD_TYPE: string = 'release';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class ClickBehavior<T> extends java.lang.Object {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.ClickBehavior<any>>;
          public constructor();
          public getOnViewClicked(): kotlinx.coroutines.flow.SharedFlow<T>;
          public onClicked(value: T): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class EmptyBinder {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.EmptyBinder>;
          public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class LeftFrameCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.LeftFrameCoordinator>;
          public flowViewBinders($i$f$unsafeTransform: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.Binder<globalAndroid.view.ViewGroup>>;
          public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, frameLayout: globalAndroid.view.ViewGroup);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class NavigationView {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.NavigationView>;
          public registerMapObserver(observer: com.mapbox.navigation.dropin.map.MapViewObserver): void;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public addListener(listener: com.mapbox.navigation.dropin.navigationview.NavigationViewListener): void;
          public constructor(this_$iv: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, $this$_init__u24lambda_u2d0: string, activity: androidx.lifecycle.ViewModelStoreOwner);
          public getLifecycle(): androidx.lifecycle.Lifecycle;
          public removeListener(listener: com.mapbox.navigation.dropin.navigationview.NavigationViewListener): void;
          public customizeViewOptions(action: any): void;
          public getApi(): com.mapbox.navigation.dropin.NavigationViewApi;
          public unregisterMapObserver(observer: com.mapbox.navigation.dropin.map.MapViewObserver): void;
          public setRouteOptionsInterceptor(routeOptionsInterceptor: com.mapbox.navigation.dropin.RouteOptionsInterceptor): void;
          public getNavigationContext$libnavui_dropin_release(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
          public customizeViewStyles(action: any): void;
          public constructor(context: globalAndroid.content.Context);
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, accessToken: string);
          public customizeViewBinders(action: any): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export abstract class NavigationViewApi {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.NavigationViewApi>;
          public startActiveGuidance(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public startArrival(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public isReplayEnabled(): boolean;
          public routeReplayEnabled(param0: boolean): void;
          public startArrival(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public constructor();
          public getCurrentVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
          public startRoutePreview(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public startFreeDrive(): void;
          public startActiveGuidance(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public startRoutePreview(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          public startDestinationPreview(param0: com.mapbox.geojson.Point): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class NavigationViewApiError {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.NavigationViewApiError>;
          public getType(): number;
          public constructor(type: number, message: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class NavigationViewApiErrorType {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.NavigationViewApiErrorType>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.dropin.NavigationViewApiErrorType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class NavigationViewApiErrorTypes {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.NavigationViewApiErrorTypes>;
          public static INSTANCE: com.mapbox.navigation.dropin.NavigationViewApiErrorTypes;
          public static MissingDestinationInfo: number = 1;
          public static MissingPreviewRoutesInfo: number = 2;
          public static MissingRoutesInfo: number = 3;
          public static InvalidRoutesInfo: number = 4;
          public static IncompleteRoutesInfo: number = 5;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class RightFrameCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.RightFrameCoordinator>;
          public flowViewBinders($i$f$unsafeTransform: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.Binder<globalAndroid.view.ViewGroup>>;
          public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, frameLayout: globalAndroid.view.ViewGroup);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class RouteOptionsInterceptor {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.RouteOptionsInterceptor>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.dropin.RouteOptionsInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { intercept(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder): com.mapbox.api.directions.v5.models.RouteOptions.Builder });
          public constructor();
          public intercept(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class ViewBinderCustomization {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.ViewBinderCustomization>;
          public getManeuverBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelArrivalTextBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setMapViewBinder(param0: com.mapbox.navigation.dropin.map.MapViewBinder): void;
          public setInfoPanelHeaderRoutesPreviewBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getActionButtonsBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelHeaderActiveGuidanceBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setCustomActionButtons(param0: java.util.List<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>): void;
          public getInfoPanelHeaderArrivalBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setActionToggleAudioButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setSpeedLimitBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getInfoPanelPoiNameBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          /** @deprecated */
          public constructor();
          public legacySpeedLimitBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelHeaderDestinationPreviewBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setInfoPanelRoutePreviewButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getSpeedLimitBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelArrivalTextBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelBinder(param0: com.mapbox.navigation.dropin.infopanel.InfoPanelBinder): void;
          public getInfoPanelRoutePreviewButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelTripProgressBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getInfoPanelBinder(): com.mapbox.navigation.dropin.infopanel.InfoPanelBinder;
          public setInfoPanelHeaderArrivalBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setActionButtonsBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getRoadNameBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getActionCameraModeButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public defaultSpeedInfoBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getCustomActionButtons(): java.util.List<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>;
          public getInfoPanelHeaderRoutesPreviewBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelHeaderFreeDriveBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setRightFrameBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setInfoPanelHeaderBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getInfoPanelHeaderFreeDriveBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelTripProgressBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelContentBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setInfoPanelHeaderActiveGuidanceBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setInfoPanelEndNavigationButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getActionRecenterButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelStartNavigationButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getMapViewBinder(): com.mapbox.navigation.dropin.map.MapViewBinder;
          public setActionCameraModeButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setLeftFrameBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getActionToggleAudioButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getLeftFrameBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelEndNavigationButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getRightFrameBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public getInfoPanelContentBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setManeuverBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getActionCompassButtonBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setActionCompassButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public setInfoPanelStartNavigationButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public constructor(navContext: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
          public setRoadNameBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getInfoPanelHeaderDestinationPreviewBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setActionRecenterButtonBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
          public getInfoPanelHeaderBinder(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
          public setInfoPanelPoiNameBinder(param0: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class ViewOptionsCustomization {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.ViewOptionsCustomization>;
          public getShowRecenterActionButton(): java.lang.Boolean;
          public getShowCameraDebugInfo(): java.lang.Boolean;
          public getShowArrivalText(): java.lang.Boolean;
          public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
          public getMapStyleUriDay(): string;
          public getShowInfoPanelInFreeDrive(): java.lang.Boolean;
          public getShowManeuver(): java.lang.Boolean;
          public setShowCompassActionButton(param0: java.lang.Boolean): void;
          public setMapStyleUriDay(param0: string): void;
          public setShowToggleAudioActionButton(param0: java.lang.Boolean): void;
          public constructor();
          public setRouteLineOptions(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): void;
          public getEnableBuildingHighlightOnArrival(): java.lang.Boolean;
          public getShowToggleAudioActionButton(): java.lang.Boolean;
          public setShowArrivalText(param0: java.lang.Boolean): void;
          public getShowPoiName(): java.lang.Boolean;
          public getShowCameraModeActionButton(): java.lang.Boolean;
          public getShowRoutePreviewButton(): java.lang.Boolean;
          public setShowStartNavigationButton(param0: java.lang.Boolean): void;
          public getShowMapScalebar(): java.lang.Boolean;
          public setShowPoiName(param0: java.lang.Boolean): void;
          public setShowRecenterActionButton(param0: java.lang.Boolean): void;
          public getShowRoadName(): java.lang.Boolean;
          public getShowCompassActionButton(): java.lang.Boolean;
          public setEnableMapLongClickIntercept(param0: java.lang.Boolean): void;
          public getEnableMapLongClickIntercept(): java.lang.Boolean;
          public setShowSpeedLimit(param0: java.lang.Boolean): void;
          public setInfoPanelForcedState(param0: java.lang.Integer): void;
          public getShowEndNavigationButton(): java.lang.Boolean;
          public getShowStartNavigationButton(): java.lang.Boolean;
          public setShowCameraDebugInfo(param0: java.lang.Boolean): void;
          public getRouteArrowOptions(): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions;
          public getShowTripProgress(): java.lang.Boolean;
          public setMapStyleUriNight(param0: string): void;
          public getRouteLineOptions(): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;
          public setShowManeuver(param0: java.lang.Boolean): void;
          public setBuildingHighlightOptions(param0: com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions): void;
          public setDistanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): void;
          public isInfoPanelHideable(): java.lang.Boolean;
          public setInfoPanelHideable(param0: java.lang.Boolean): void;
          public setShowCameraModeActionButton(param0: java.lang.Boolean): void;
          public setShowEndNavigationButton(param0: java.lang.Boolean): void;
          public getShowSpeedLimit(): java.lang.Boolean;
          public getBuildingHighlightOptions(): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions;
          public setShowRoutePreviewButton(param0: java.lang.Boolean): void;
          public setRouteArrowOptions(param0: com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions): void;
          public setShowTripProgress(param0: java.lang.Boolean): void;
          public setShowRoadName(param0: java.lang.Boolean): void;
          public getMapStyleUriNight(): string;
          public setShowInfoPanelInFreeDrive(param0: java.lang.Boolean): void;
          public setShowActionButtons(param0: java.lang.Boolean): void;
          public getShowActionButtons(): java.lang.Boolean;
          public setShowMapScalebar(param0: java.lang.Boolean): void;
          public getInfoPanelForcedState(): java.lang.Integer;
          public setEnableBuildingHighlightOnArrival(param0: java.lang.Boolean): void;
        }
        export module ViewOptionsCustomization {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.ViewOptionsCustomization.Companion>;
            public defaultRouteLineOptions(context: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;
            public defaultBuildingHighlightOptions(context: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions;
            public defaultRouteArrowOptions(context: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export class ViewStyleCustomization {
          public static class: java.lang.Class<com.mapbox.navigation.dropin.ViewStyleCustomization>;
          public setRoadNameBackground(param0: java.lang.Integer): void;
          public getSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
          public setArrivalTextAppearance(param0: java.lang.Integer): void;
          public getArrivalTextAppearance(): java.lang.Integer;
          public setAudioGuidanceButtonStyle(param0: java.lang.Integer): void;
          public getInfoPanelPeekHeight(): java.lang.Integer;
          public setRecenterButtonStyle(param0: java.lang.Integer): void;
          public getInfoPanelGuidelineMaxPosPercent(): java.lang.Float;
          /** @deprecated */
          public setSpeedLimitStyle(param0: java.lang.Integer): void;
          public setInfoPanelPeekHeight(param0: java.lang.Integer): void;
          public getDestinationMarkerAnnotationOptions(): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
          public setManeuverViewOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
          public setStartNavigationButtonStyle(param0: java.lang.Integer): void;
          public getInfoPanelMarginEnd(): java.lang.Integer;
          public constructor();
          public setDestinationMarkerAnnotationOptions(param0: com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions): void;
          /** @deprecated */
          public getSpeedLimitTextAppearance(): java.lang.Integer;
          public getManeuverViewOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
          public setEndNavigationButtonStyle(param0: java.lang.Integer): void;
          public setLocationPuckOptions(param0: com.mapbox.navigation.ui.maps.puck.LocationPuckOptions): void;
          public getInfoPanelMarginStart(): java.lang.Integer;
          public setInfoPanelMarginEnd(param0: java.lang.Integer): void;
          /** @deprecated */
          public getSpeedLimitStyle(): java.lang.Integer;
          public getCompassButtonStyle(): java.lang.Integer;
          public getRoadNameBackground(): java.lang.Integer;
          public getRoadNameTextAppearance(): java.lang.Integer;
          public getInfoPanelBackground(): java.lang.Integer;
          public setRoutePreviewButtonStyle(param0: java.lang.Integer): void;
          public setCompassButtonStyle(param0: java.lang.Integer): void;
          public getStartNavigationButtonStyle(): java.lang.Integer;
          public getRoutePreviewButtonStyle(): java.lang.Integer;
          public getAudioGuidanceButtonStyle(): java.lang.Integer;
          public setInfoPanelMarginStart(param0: java.lang.Integer): void;
          public setTripProgressStyle(param0: java.lang.Integer): void;
          public getPoiNameTextAppearance(): java.lang.Integer;
          public setCameraModeButtonStyle(param0: java.lang.Integer): void;
          public getCameraModeButtonStyle(): java.lang.Integer;
          public getTripProgressStyle(): java.lang.Integer;
          public setInfoPanelGuidelineMaxPosPercent(param0: java.lang.Float): void;
          public setInfoPanelBackground(param0: java.lang.Integer): void;
          public setRoadNameTextAppearance(param0: java.lang.Integer): void;
          public setPoiNameTextAppearance(param0: java.lang.Integer): void;
          /** @deprecated */
          public setSpeedLimitTextAppearance(param0: java.lang.Integer): void;
          public getLocationPuckOptions(): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions;
          public getRecenterButtonStyle(): java.lang.Integer;
          public setSpeedInfoOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
          public getEndNavigationButtonStyle(): java.lang.Integer;
        }
        export module ViewStyleCustomization {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.ViewStyleCustomization.Companion>;
            public defaultCompassButtonStyle(): number;
            public defaultManeuverViewOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
            public defaultLocationPuckOptions(context: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions;
            /** @deprecated */
            public defaultSpeedLimitTextAppearance(): number;
            public defaultPoiNameTextAppearance(): number;
            public defaultAudioGuidanceButtonStyle(): number;
            public defaultInfoPanelPeekHeight(context: globalAndroid.content.Context): number;
            public defaultInfoPanelMarginStart(): number;
            public defaultInfoPanelMarginEnd(): number;
            public defaultDestinationMarkerAnnotationOptions($this$defaultDestinationMarkerAnnotationOptions_u24lambda_u2d0: globalAndroid.content.Context): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
            public defaultCameraModeButtonStyle(): number;
            public defaultSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
            public defaultStartNavigationButtonStyle(): number;
            public defaultRoadNameBackground(): number;
            public defaultArrivalTextAppearance(): number;
            public defaultRoutePreviewButtonStyle(): number;
            public defaultEndNavigationButtonStyle(): number;
            /** @deprecated */
            public defaultSpeedLimitStyle(): number;
            public defaultTripProgressStyle(): number;
            public defaultInfoPanelBackground(): number;
            public defaultInfoPanelGuidelineMaxPosPercent(): number;
            public defaultRoadNameTextAppearance(): number;
            public defaultRecenterButtonStyle(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class ActionButtonDescription {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>;
            public getPosition(): com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position;
            public getView(): globalAndroid.view.View;
            public constructor(view: globalAndroid.view.View, position: com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position);
          }
          export module ActionButtonDescription {
            export class Position {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position>;
              public static START: com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position;
              public static END: com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position;
              public static valueOf(value: string): com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position;
              public static values(): androidNative.Array<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription.Position>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export abstract class ActionButtonsBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.ActionButtonsBinder>;
            public constructor();
            public getCameraModeButtonContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCustomButtons$libnavui_dropin_release(): java.util.List<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>;
            public setCustomButtons$libnavui_dropin_release(param0: java.util.List<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>): void;
            public onCreateLayout(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCompassButtonContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCustomButtonsStartContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getContext$libnavui_dropin_release(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public getCustomButtonsEndContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getRecenterButtonContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public verticalSpacing(resources: globalAndroid.content.res.Resources): number;
            public setContext$libnavui_dropin_release(param0: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): void;
            public bind(it: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public getToggleAudioButtonContainer(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
          }
          export module ActionButtonsBinder {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.ActionButtonsBinder.Companion>;
              public defaultBinder(): com.mapbox.navigation.dropin.actionbutton.ActionButtonsBinder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class ActionButtonsCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.ActionButtonsCoordinator>;
            public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, actionList: globalAndroid.view.ViewGroup);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class AudioGuidanceButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.AudioGuidanceButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, verticalSpacing: number);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class CameraModeButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.CameraModeButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, verticalSpacing: number);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class CompassButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.CompassButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, verticalSpacing: number);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class MapboxActionButtonsBinder extends com.mapbox.navigation.dropin.actionbutton.ActionButtonsBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.MapboxActionButtonsBinder>;
            public constructor();
            public getCustomButtonsStartContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getToggleAudioButtonContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCameraModeButtonContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCustomButtonsEndContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public onCreateLayout(layoutInflater: globalAndroid.view.LayoutInflater, root: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getCompassButtonContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getRecenterButtonContainer(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module actionbutton {
          export class RecenterButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.actionbutton.RecenterButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, verticalSpacing: number);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module analytics {
          export class AnalyticsComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.analytics.AnalyticsComponent>;
            public constructor();
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
          export module AnalyticsComponent {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.analytics.AnalyticsComponent.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module arrival {
          export class ArrivalTextComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.arrival.ArrivalTextComponent>;
            public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor(textView: androidx.appcompat.widget.AppCompatTextView, textAppearance: kotlinx.coroutines.flow.StateFlow<java.lang.Integer>);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module audio {
          export class AudioComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.audio.AudioComponentContractImpl>;
            public getStore(): com.mapbox.navigation.ui.app.internal.Store;
            public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public constructor(scope: kotlinx.coroutines.CoroutineScope, store: com.mapbox.navigation.ui.app.internal.Store);
            public mute(): void;
            public unMute(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module backpress {
          export class BackPressedComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.backpress.BackPressedComponent>;
            public constructor(onBackPressedDispatcher: androidx.activity.OnBackPressedDispatcher, store: com.mapbox.navigation.ui.app.internal.Store, lifecycleOwner: androidx.lifecycle.LifecycleOwner);
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module camera {
          export class CameraComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.camera.CameraComponent>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, mapView: com.mapbox.maps.MapView, viewportDataSource: com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource, navigationCamera: com.mapbox.navigation.ui.maps.camera.NavigationCamera, debugger_: com.mapbox.navigation.ui.maps.camera.data.debugger.MapboxNavigationViewportDataSourceDebugger);
            public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
          export module CameraComponent {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.camera.CameraComponent.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module camera {
          export class CameraLayoutObserver {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.camera.CameraLayoutObserver>;
            public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, mapView: globalAndroid.view.View, binding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding);
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module camera {
          export class CameraModeButtonComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.camera.CameraModeButtonComponentContractImpl>;
            public constructor(coroutineScope: kotlinx.coroutines.CoroutineScope, store: com.mapbox.navigation.ui.app.internal.Store);
            public getButtonState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
            public onClick(it: globalAndroid.view.View): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module camera {
          export class RecenterButtonComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.camera.RecenterButtonComponentContractImpl>;
            public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public onClick(view: globalAndroid.view.View): void;
            public constructor(scope: kotlinx.coroutines.CoroutineScope, store: com.mapbox.navigation.ui.app.internal.Store);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxActionButtonsLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxActionButtonsLayoutBinding>;
            public buttonContainer: globalAndroid.widget.LinearLayout;
            public buttonsContainerAudio: globalAndroid.widget.FrameLayout;
            public buttonsContainerBottom: globalAndroid.widget.LinearLayout;
            public buttonsContainerCamera: globalAndroid.widget.FrameLayout;
            public buttonsContainerCenter: globalAndroid.widget.LinearLayout;
            public buttonsContainerCompass: globalAndroid.widget.FrameLayout;
            public buttonsContainerRecenter: globalAndroid.widget.FrameLayout;
            public buttonsContainerTop: globalAndroid.widget.LinearLayout;
            public static bind(buttonContainer: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxActionButtonsLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, attachToParent: boolean): com.mapbox.navigation.dropin.databinding.MapboxActionButtonsLayoutBinding;
            public getRoot(): globalAndroid.widget.LinearLayout;
            public static inflate(inflater: globalAndroid.view.LayoutInflater): com.mapbox.navigation.dropin.databinding.MapboxActionButtonsLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxArrivalTextViewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxArrivalTextViewLayoutBinding>;
            public arrivedText: androidx.appcompat.widget.AppCompatTextView;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxArrivalTextViewLayoutBinding;
            public getRoot(): globalAndroid.view.View;
            public static bind(arrivedText: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxArrivalTextViewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelHeaderActiveGuidanceLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderActiveGuidanceLayoutBinding>;
            public endNavigationButtonLayout: globalAndroid.widget.FrameLayout;
            public tripProgressLayout: globalAndroid.widget.FrameLayout;
            public getRoot(): globalAndroid.view.View;
            public static bind(endNavigationButtonLayout: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderActiveGuidanceLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderActiveGuidanceLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelHeaderArrivalLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderArrivalLayoutBinding>;
            public arrivedTextContainer: globalAndroid.widget.FrameLayout;
            public endNavigationButtonLayout: globalAndroid.widget.FrameLayout;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderArrivalLayoutBinding;
            public static bind(arrivedTextContainer: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderArrivalLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelHeaderDestinationPreviewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderDestinationPreviewLayoutBinding>;
            public poiNameContainer: globalAndroid.widget.FrameLayout;
            public routePreviewContainer: globalAndroid.widget.FrameLayout;
            public startNavigationContainer: globalAndroid.widget.FrameLayout;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderDestinationPreviewLayoutBinding;
            public getRoot(): globalAndroid.view.View;
            public static bind(poiNameContainer: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderDestinationPreviewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelHeaderLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderLayoutBinding>;
            public infoPanelHeaderContent: androidx.constraintlayout.widget.ConstraintLayout;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderLayoutBinding;
            public static bind(infoPanelHeaderContent: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelHeaderRoutePreviewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderRoutePreviewLayoutBinding>;
            public startNavigationContainer: globalAndroid.widget.FrameLayout;
            public tripProgressLayout: globalAndroid.widget.FrameLayout;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderRoutePreviewLayoutBinding;
            public static bind(startNavigationContainer: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelHeaderRoutePreviewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxInfoPanelLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxInfoPanelLayoutBinding>;
            public handle: globalAndroid.view.View;
            public infoPanelContainer: androidx.constraintlayout.widget.ConstraintLayout;
            public infoPanelContent: globalAndroid.widget.FrameLayout;
            public infoPanelHeader: globalAndroid.widget.FrameLayout;
            public static bind(handle: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, attachToParent: boolean): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelLayoutBinding;
            public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
            public static inflate(inflater: globalAndroid.view.LayoutInflater): com.mapbox.navigation.dropin.databinding.MapboxInfoPanelLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxManeuverGuidanceLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxManeuverGuidanceLayoutBinding>;
            public maneuverView: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxManeuverGuidanceLayoutBinding;
            public static bind(maneuverView: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxManeuverGuidanceLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxNavigationViewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding>;
            public actionListLayout: globalAndroid.widget.FrameLayout;
            public barrierLeftContainer: androidx.constraintlayout.widget.Barrier;
            public container: androidx.constraintlayout.widget.ConstraintLayout;
            public coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout;
            public emptyLeftContainer: globalAndroid.widget.FrameLayout;
            public emptyRightContainer: globalAndroid.widget.FrameLayout;
            public guidanceLayout: globalAndroid.widget.FrameLayout;
            public guidelineBegin: androidx.constraintlayout.widget.Guideline;
            public guidelineBottom: androidx.constraintlayout.widget.Guideline;
            public infoPanelLayout: globalAndroid.widget.FrameLayout;
            public mapViewLayout: globalAndroid.widget.FrameLayout;
            public roadNameLayout: globalAndroid.widget.FrameLayout;
            public scalebarLayout: globalAndroid.widget.FrameLayout;
            public speedLimitLayout: globalAndroid.widget.FrameLayout;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding;
            public static bind(actionListLayout: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxPoiTextViewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxPoiTextViewLayoutBinding>;
            public poiName: androidx.appcompat.widget.AppCompatTextView;
            public getRoot(): globalAndroid.view.View;
            public static bind(poiName: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxPoiTextViewLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxPoiTextViewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxRoadNameLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxRoadNameLayoutBinding>;
            public roadNameView: com.mapbox.navigation.ui.maps.roadname.view.MapboxRoadNameView;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxRoadNameLayoutBinding;
            public static bind(roadNameView: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxRoadNameLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxScalebarPlaceholderLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxScalebarPlaceholderLayoutBinding>;
            public scalebarPlaceholder: globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxScalebarPlaceholderLayoutBinding;
            public getRoot(): globalAndroid.view.View;
            public static bind(scalebarPlaceholder: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxScalebarPlaceholderLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxSpeedInfoLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxSpeedInfoLayoutBinding>;
            public speedInfoView: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView;
            public getRoot(): globalAndroid.view.View;
            public static bind(speedInfoView: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxSpeedInfoLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxSpeedInfoLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxSpeedLimitLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxSpeedLimitLayoutBinding>;
            public speedLimitView: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView;
            public getRoot(): globalAndroid.view.View;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxSpeedLimitLayoutBinding;
            public static bind(speedLimitView: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxSpeedLimitLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module databinding {
          export class MapboxTripProgressViewLayoutBinding {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.databinding.MapboxTripProgressViewLayoutBinding>;
            public tripProgressView: com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView;
            public getRoot(): globalAndroid.view.View;
            public static bind(tripProgressView: globalAndroid.view.View): com.mapbox.navigation.dropin.databinding.MapboxTripProgressViewLayoutBinding;
            public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.databinding.MapboxTripProgressViewLayoutBinding;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module extendablebutton {
          export class EndNavigationButtonComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.extendablebutton.EndNavigationButtonComponent>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store, button: com.mapbox.navigation.ui.base.view.MapboxExtendableButton);
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module extendablebutton {
          export class RoutePreviewButtonComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.extendablebutton.RoutePreviewButtonComponent>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store, button: com.mapbox.navigation.ui.base.view.MapboxExtendableButton);
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module extendablebutton {
          export class StartNavigationButtonComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.extendablebutton.StartNavigationButtonComponent>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store, button: com.mapbox.navigation.ui.base.view.MapboxExtendableButton);
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelArrivalTextBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelArrivalTextBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelBehavior {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelBehavior>;
            public constructor();
            public updateSlideOffset(slideOffset: number): void;
            public getSlideOffset(): kotlinx.coroutines.flow.StateFlow<java.lang.Float>;
            public getBottomSheetState(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public updateBottomSheetState(newState: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export abstract class InfoPanelBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelBinder>;
            public getHeaderLayout(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public setBinders$libnavui_dropin_release(headerBinder: com.mapbox.navigation.ui.base.lifecycle.UIBinder, contentBinder: com.mapbox.navigation.ui.base.lifecycle.UIBinder): void;
            public constructor();
            public getContentLayout(param0: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public getContext$libnavui_dropin_release(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public applySystemBarsInsets(layout: globalAndroid.view.ViewGroup, insets: androidx.core.graphics.Insets): void;
            public setContext$libnavui_dropin_release(param0: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): void;
            public bind(binder: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public onCreateLayout(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public setNavigationViewContext$libnavui_dropin_release(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): void;
          }
          export module InfoPanelBinder {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelBinder.Companion>;
              public defaultBinder(): com.mapbox.navigation.dropin.infopanel.InfoPanelBinder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelComponent>;
            public static APPLY_TOP_PADDING_THRESHOLD: number = 0.8;
            public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor(layout: globalAndroid.view.ViewGroup, context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
          }
          export module InfoPanelComponent {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelComponent.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelCoordinator>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, binding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding);
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
          export module InfoPanelCoordinator {
            export class FixBottomSheetLayoutWhenHidden {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelCoordinator.FixBottomSheetLayoutWhenHidden>;
              public constructor(this$0: com.mapbox.navigation.dropin.infopanel.InfoPanelCoordinator);
              public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelEndNavigationButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelEndNavigationButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelHeaderActiveGuidanceBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelHeaderActiveGuidanceBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind($this$bind_u24lambda_u2d0: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelHeaderArrivalBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelHeaderArrivalBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind($this$bind_u24lambda_u2d0: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelHeaderBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelHeaderBinder>;
            public bind(this_: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public constructor(headerContentBinder: kotlinx.coroutines.flow.Flow<any>);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelHeaderDestinationPreviewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelHeaderDestinationPreviewBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind($this$bind_u24lambda_u2d0: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelHeaderRoutesPreviewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelHeaderRoutesPreviewBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind($this$bind_u24lambda_u2d0: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelPoiNameBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelPoiNameBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelRoutePreviewButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelRoutePreviewButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class InfoPanelStartNavigationButtonBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.InfoPanelStartNavigationButtonBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(viewGroup: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module infopanel {
          export class MapboxInfoPanelBinder extends com.mapbox.navigation.dropin.infopanel.InfoPanelBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.infopanel.MapboxInfoPanelBinder>;
            public getContentLayout(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public constructor();
            public bind(layout: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public getHeaderLayout(layout: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public onCreateLayout(layoutInflater: globalAndroid.view.LayoutInflater, root: globalAndroid.view.ViewGroup): globalAndroid.view.ViewGroup;
            public applySystemBarsInsets($this$updatePadding_u24default$iv: globalAndroid.view.ViewGroup, left$iv: androidx.core.graphics.Insets): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class AttributeSetEx {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.AttributeSetEx>;
              public static navigationViewAccessToken(param0: globalAndroid.util.AttributeSet, it: globalAndroid.content.Context): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class ContextEx {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.ContextEx>;
              public static recursiveUnwrap($this$recursiveUnwrap: globalAndroid.content.Context): globalAndroid.content.Context;
              public static toComponentActivity(param0: globalAndroid.content.Context): androidx.activity.ComponentActivity;
              public static toViewModelStoreOwner(param0: globalAndroid.content.Context): androidx.lifecycle.ViewModelStoreOwner;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class NavigationViewContextEx {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.NavigationViewContextEx>;
              public static backPressedComponent($this$backPressedComponent: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, activity: androidx.activity.ComponentActivity): com.mapbox.navigation.dropin.backpress.BackPressedComponent;
              public static poiNameComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$poiNameComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static routePreviewButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$routePreviewButtonComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static audioGuidanceButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$audioGuidanceButtonComponent: globalAndroid.view.ViewGroup, buttonContainer: number): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static locationPermissionComponent($this$locationPermissionComponent: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, activity: androidx.activity.ComponentActivity): com.mapbox.navigation.dropin.permission.LocationPermissionComponent;
              public static arrivalTextComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$arrivalTextComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static infoPanelCoordinator($this$infoPanelCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, binding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding): com.mapbox.navigation.dropin.infopanel.InfoPanelCoordinator;
              public static buildingHighlightComponent($this$buildingHighlightComponent: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, mapView: com.mapbox.maps.MapView): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static leftFrameCoordinator($this$leftFrameCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, emptyLeftContainer: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.LeftFrameCoordinator;
              public static compassButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$compassButtonComponent: globalAndroid.view.ViewGroup, buttonContainer: number): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static cameraModeButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$cameraModeButtonComponent: globalAndroid.view.ViewGroup, buttonContainer: number): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static speedLimitCoordinator($this$speedLimitCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, speedLimitLayout: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.speedlimit.SpeedLimitCoordinator;
              public static locationPuckComponent(puckFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$locationPuckComponent: com.mapbox.maps.MapView): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static analyticsComponent($this$analyticsComponent: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): com.mapbox.navigation.dropin.analytics.AnalyticsComponent;
              public static mapLayoutCoordinator($this$mapLayoutCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, binding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding): com.mapbox.navigation.dropin.map.MapLayoutCoordinator;
              public static maneuverCoordinator($this$maneuverCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, guidanceLayout: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.maneuver.ManeuverCoordinator;
              public static roadNameCoordinator($this$roadNameCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, roadNameLayout: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.roadname.RoadNameCoordinator;
              public static endNavigationButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$endNavigationButtonComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static tripProgressComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$tripProgressComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static scalebarPlaceholderCoordinator($this$scalebarPlaceholderCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, scalebarLayout: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.map.scalebar.ScalebarPlaceholderCoordinator;
              public static rightFrameCoordinator($this$rightFrameCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, emptyRightContainer: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.RightFrameCoordinator;
              public static recenterButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$recenterButtonComponent: globalAndroid.view.ViewGroup, buttonContainer: number): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static actionButtonsCoordinator($this$actionButtonsCoordinator: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, actionListLayout: globalAndroid.view.ViewGroup): com.mapbox.navigation.dropin.actionbutton.ActionButtonsCoordinator;
              public static startNavigationButtonComponent(binderFlow: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, $this$startNavigationButtonComponent: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class NavigationViewContextFlowable {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.NavigationViewContextFlowable>;
              public static headerContentBinder($i$f$flatMapLatest: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class ReloadComponentEx {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.ReloadComponentEx>;
              public static reloadOnChange(flow1: kotlinx.coroutines.flow.Flow, flow2: kotlinx.coroutines.flow.Flow, flow3: kotlinx.coroutines.flow.Flow, factory: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static reloadOnChange(flow1: kotlinx.coroutines.flow.Flow, flow2: kotlinx.coroutines.flow.Flow, factory: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public static reloadOnChange(flow: kotlinx.coroutines.flow.Flow, factory: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class ReloadingComponent<T> extends com.mapbox.navigation.ui.base.lifecycle.UIComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.ReloadingComponent<any>>;
              public getChildComponent$libnavui_dropin_release(): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(flow: kotlinx.coroutines.flow.Flow<any>, factory: any);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module internal {
          export module extensions {
            export class ViewEx {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.internal.extensions.ViewEx>;
              public static onClick(eventActor: globalAndroid.view.View, $this$onClick: kotlinx.coroutines.CoroutineScope, scope: any): void;
              public static updateMargins(param0: globalAndroid.view.View, $this$updateMargins_u24lambda_u2d1: java.lang.Integer, $i$f$updateLayoutParamsTyped: java.lang.Integer, params$iv: java.lang.Integer, $this$updateLayoutParams$iv: java.lang.Integer): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module maneuver {
          export class ManeuverBehavior {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.maneuver.ManeuverBehavior>;
            public constructor();
            public getManeuverViewState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState>;
            public getManeuverViewVisibility(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public updateViewVisibility(visibility: boolean): void;
            public updateBehavior(newState: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module maneuver {
          export class ManeuverComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.maneuver.ManeuverComponentContractImpl>;
            public onManeuverViewStateChanged(state: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void;
            public onManeuverViewVisibilityChanged(isVisible: boolean): void;
            public getContext(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module maneuver {
          export class ManeuverCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.maneuver.ManeuverCoordinator>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, guidanceLayout: globalAndroid.view.ViewGroup);
            public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module maneuver {
          export class ManeuverViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.maneuver.ManeuverViewBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export class MapLayoutCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapLayoutCoordinator>;
            public flowViewBinders($i$f$unsafeTransform: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.Binder<globalAndroid.view.ViewGroup>>;
            public constructor(navigationViewContext: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, binding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding);
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export class MapStyleLoader {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapStyleLoader>;
            public setMapboxMap(param0: com.mapbox.maps.MapboxMap): void;
            public constructor(initialValue$iv: globalAndroid.content.Context, $i$f$observable: com.mapbox.navigation.dropin.navigationview.NavigationViewOptions);
            public getLoadedMapStyle(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.Style>;
            public observeAndReloadNewStyles($this$collect$iv: any): any;
            public loadInitialStyle(): void;
            public getMapboxMap(): com.mapbox.maps.MapboxMap;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export abstract class MapViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapViewBinder>;
            public context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public navigationViewBinding: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding;
            public setNavigationViewBinding$libnavui_dropin_release(param0: com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding): void;
            public constructor();
            public getContext$libnavui_dropin_release(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public getShouldLoadMapStyle(): boolean;
            public setContext$libnavui_dropin_release(param0: com.mapbox.navigation.dropin.navigationview.NavigationViewContext): void;
            public getMapView(param0: globalAndroid.content.Context): com.mapbox.maps.MapView;
            public getNavigationViewBinding$libnavui_dropin_release(): com.mapbox.navigation.dropin.databinding.MapboxNavigationViewLayoutBinding;
            public bind(store: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
          export module MapViewBinder {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapViewBinder.Companion>;
              public defaultBinder(): com.mapbox.navigation.dropin.map.MapViewBinder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export abstract class MapViewObserver {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapViewObserver>;
            public constructor();
            public onAttached(mapView: com.mapbox.maps.MapView): void;
            public onDetached(mapView: com.mapbox.maps.MapView): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export class MapViewOwner {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapViewOwner>;
            public updateMapView(listener: com.mapbox.maps.MapView): void;
            public constructor();
            public unregisterObserver(it: com.mapbox.navigation.dropin.map.MapViewObserver): void;
            public registerObserver(it: com.mapbox.navigation.dropin.map.MapViewObserver): void;
            public getRegisteredObservers$libnavui_dropin_release(): java.util.Set<com.mapbox.navigation.dropin.map.MapViewObserver>;
            public getMapViews(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.MapView>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export class MapboxMapViewBinder extends com.mapbox.navigation.dropin.map.MapViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.MapboxMapViewBinder>;
            public constructor();
            public getMapView($this$getMapView_u24lambda_u2d0: globalAndroid.content.Context): com.mapbox.maps.MapView;
            public getShouldLoadMapStyle(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export class RouteLineComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.map.RouteLineComponentContractImpl>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store, mapClickBehavior: com.mapbox.navigation.dropin.ClickBehavior<com.mapbox.geojson.Point>);
            public setRoutes(this_: com.mapbox.navigation.core.MapboxNavigation, mapboxNavigation: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, routes: java.lang.Integer): void;
            public getRouteInPreview(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
            public onMapClicked(point: com.mapbox.geojson.Point): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module geocoding {
            export class GeocodingComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.geocoding.GeocodingComponent>;
              public constructor(store: com.mapbox.navigation.ui.app.internal.Store);
              public onAttached($i$f$unsafeTransform: com.mapbox.navigation.core.MapboxNavigation): void;
            }
            export module GeocodingComponent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.dropin.map.geocoding.GeocodingComponent.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module geocoding {
            export class POINameComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.geocoding.POINameComponent>;
              public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(store: com.mapbox.navigation.ui.app.internal.Store, textView: androidx.appcompat.widget.AppCompatTextView, textAppearance: kotlinx.coroutines.flow.StateFlow<java.lang.Integer>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module logo {
            export class LogoAttributionComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.logo.LogoAttributionComponent>;
              public constructor(mapView: com.mapbox.maps.MapView, systemBarInsets: kotlinx.coroutines.flow.StateFlow<androidx.core.graphics.Insets>);
              public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module longpress {
            export class FreeDriveLongPressMapComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.longpress.FreeDriveLongPressMapComponent>;
              public constructor(store: com.mapbox.navigation.ui.app.internal.Store, mapView: com.mapbox.maps.MapView, context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module longpress {
            export class RoutePreviewLongPressMapComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.longpress.RoutePreviewLongPressMapComponent>;
              public constructor(store: com.mapbox.navigation.ui.app.internal.Store, mapView: com.mapbox.maps.MapView, context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            }
            export module RoutePreviewLongPressMapComponent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.dropin.map.longpress.RoutePreviewLongPressMapComponent.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module marker {
            export class MapMarkerFactory {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.marker.MapMarkerFactory>;
              public getContext(): globalAndroid.content.Context;
              public constructor(context: globalAndroid.content.Context, cache: com.mapbox.navigation.dropin.util.BitmapMemoryCache);
              public getCache(): com.mapbox.navigation.dropin.util.BitmapMemoryCache;
              public createPin(point: com.mapbox.geojson.Point, iconImage: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
            }
            export module MapMarkerFactory {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.dropin.map.marker.MapMarkerFactory.Companion>;
                public create(context: globalAndroid.content.Context): com.mapbox.navigation.dropin.map.marker.MapMarkerFactory;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module marker {
            export class MapMarkersComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.marker.MapMarkersComponent>;
              public constructor(store: com.mapbox.navigation.ui.app.internal.Store, mapView: com.mapbox.maps.MapView, markerAnnotationOptions: com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions);
              public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
              public getMapView(): com.mapbox.maps.MapView;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module scalebar {
            export class ScalebarComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.scalebar.ScalebarComponent>;
              public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(mapView: com.mapbox.maps.MapView, isEnabled: kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>, systemBarInsets: kotlinx.coroutines.flow.StateFlow<androidx.core.graphics.Insets>, options: kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.formatter.DistanceFormatterOptions>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module scalebar {
            export class ScalebarPlaceholderBinder {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.scalebar.ScalebarPlaceholderBinder>;
              public bind(this_: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
              public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module scalebar {
            export class ScalebarPlaceholderComponent {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.scalebar.ScalebarPlaceholderComponent>;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(scalebarPlaceholder: globalAndroid.view.View, isEnabled: kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>, maneuverViewVisible: kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module map {
          export module scalebar {
            export class ScalebarPlaceholderCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.map.scalebar.ScalebarPlaceholderCoordinator>;
              public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, scalebarLayout: globalAndroid.view.ViewGroup);
              public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.Binder<globalAndroid.view.ViewGroup>>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class MapboxNavigationViewApi extends com.mapbox.navigation.dropin.NavigationViewApi {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.MapboxNavigationViewApi>;
            public constructor();
            public startActiveGuidance(point: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public routeReplayEnabled(enabled: boolean): void;
            public startArrival(point: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public startActiveGuidance(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public startRoutePreview(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public getCurrentVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
            public isReplayEnabled(): boolean;
            public startRoutePreview(point: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store);
            public startArrival(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public startArrival(): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public startDestinationPreview(point: com.mapbox.geojson.Point): void;
            public startRoutePreview(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
            public startFreeDrive(): void;
            public startActiveGuidance(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.bindgen.Expected<com.mapbox.navigation.dropin.NavigationViewApiError, any>;
          }
          export module MapboxNavigationViewApi {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.MapboxNavigationViewApi.Companion>;
              public MissingDestinationInfoError(): com.mapbox.navigation.dropin.NavigationViewApiError;
              public IncompleteRoutesInfoError(): com.mapbox.navigation.dropin.NavigationViewApiError;
              public MissingRoutesInfoError(): com.mapbox.navigation.dropin.NavigationViewApiError;
              public InvalidRoutesInfoError(): com.mapbox.navigation.dropin.NavigationViewApiError;
              public MissingPreviewRoutesInfoError(): com.mapbox.navigation.dropin.NavigationViewApiError;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewBehavior {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewBehavior>;
            public getManeuverBehavior(): com.mapbox.navigation.dropin.maneuver.ManeuverBehavior;
            public constructor();
            public getSpeedInfoBehavior(): com.mapbox.navigation.dropin.ClickBehavior<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue>;
            public getInfoPanelBehavior(): com.mapbox.navigation.dropin.infopanel.InfoPanelBehavior;
            public getMapClickBehavior(): com.mapbox.navigation.dropin.ClickBehavior<com.mapbox.geojson.Point>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewBinder>;
            public getLeftFrameContentBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getActionCompassButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.dropin.infopanel.InfoPanelBinder>;
            public getActionCameraModeButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getActionToggleAudioButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public applyCustomization(it: com.mapbox.navigation.dropin.ViewBinderCustomization): void;
            public getInfoPanelHeaderDestinationPreviewBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getActionRecenterButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getActionButtonsBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getManeuver(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelHeaderArrivalBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public constructor();
            public getInfoPanelHeaderFreeDriveBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelEndNavigationButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelContentBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getRoadName(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelHeaderBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelHeaderActiveGuidanceBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getCustomActionButtons(): kotlinx.coroutines.flow.StateFlow<java.util.List<com.mapbox.navigation.dropin.actionbutton.ActionButtonDescription>>;
            public getRightFrameContentBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelArrivalTextBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getMapViewBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.dropin.map.MapViewBinder>;
            public getInfoPanelRoutePreviewButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelPoiNameBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getSpeedLimit(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelHeaderRoutesPreviewBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelTripProgressBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public getInfoPanelStartNavigationButtonBinder(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewContext {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewContext>;
            public mapAnnotationFactory(): com.mapbox.navigation.dropin.map.marker.MapMarkerFactory;
            public applyBinderCustomization(this_: any): void;
            public getViewModel(): com.mapbox.navigation.dropin.navigationview.NavigationViewModel;
            public getRouteOptionsProvider(): com.mapbox.navigation.ui.app.internal.routefetch.RouteOptionsProvider;
            public getContext(): globalAndroid.content.Context;
            public getBehavior(): com.mapbox.navigation.dropin.navigationview.NavigationViewBehavior;
            public getUiBinders(): com.mapbox.navigation.dropin.navigationview.NavigationViewBinder;
            public getMapStyleLoader(): com.mapbox.navigation.dropin.map.MapStyleLoader;
            public constructor(context: globalAndroid.content.Context, lifecycleOwner: androidx.lifecycle.LifecycleOwner, viewModel: com.mapbox.navigation.dropin.navigationview.NavigationViewModel, storeProvider: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.app.internal.Store>);
            public getListenerRegistry(): com.mapbox.navigation.dropin.navigationview.NavigationViewListenerRegistry;
            public getLocationProvider(): com.mapbox.navigation.ui.maps.location.NavigationLocationProvider;
            public getMapViewOwner(): com.mapbox.navigation.dropin.map.MapViewOwner;
            public applyStyleCustomization(this_: any): void;
            public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
            public getStyles(): com.mapbox.navigation.dropin.navigationview.NavigationViewStyles;
            public applyOptionsCustomization(this_: any): void;
            public getStore(): com.mapbox.navigation.ui.app.internal.Store;
            public getSystemBarsInsets(): kotlinx.coroutines.flow.MutableStateFlow<androidx.core.graphics.Insets>;
            public getOptions(): com.mapbox.navigation.dropin.navigationview.NavigationViewOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export abstract class NavigationViewListener {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewListener>;
            public onFollowingCameraMode(): void;
            public onDestinationChanged(destination: com.mapbox.geojson.Point): void;
            public onFreeDrive(): void;
            public onOverviewCameraMode(): void;
            public onDestinationPreview(): void;
            public onInfoPanelExpanded(): void;
            public onActiveNavigation(): void;
            public onInfoPanelCollapsed(): void;
            public onManeuverExpanded(): void;
            public onInfoPanelSlide(slideOffset: number): void;
            public constructor();
            public onManeuverCollapsed(): void;
            public onInfoPanelDragging(): void;
            public onInfoPanelSettling(): void;
            public onAudioGuidanceStateChanged(muted: boolean): void;
            public onSpeedInfoClicked(speedInfo: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            public onRouteFetchCanceled(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onRouteFetching(requestId: number): void;
            public onRoutePreview(): void;
            public onIdleCameraMode(): void;
            public onRouteFetchFailed(reasons: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): void;
            public onRouteFetchSuccessful(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
            public onCameraPaddingChanged(padding: com.mapbox.maps.EdgeInsets): void;
            public onMapClicked(point: com.mapbox.geojson.Point): void;
            public onInfoPanelHidden(): void;
            public onArrival(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewListenerRegistry {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewListenerRegistry>;
            public getRegisteredListeners$libnavui_dropin_release(): java.util.Set<com.mapbox.navigation.dropin.navigationview.NavigationViewListener>;
            public constructor(store: com.mapbox.navigation.ui.app.internal.Store, behavior: com.mapbox.navigation.dropin.navigationview.NavigationViewBehavior, coroutineScope: kotlinx.coroutines.CoroutineScope);
            public registerListener(listener: com.mapbox.navigation.dropin.navigationview.NavigationViewListener): void;
            public unregisterListener(listener: com.mapbox.navigation.dropin.navigationview.NavigationViewListener): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewModel {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewModel>;
            public constructor();
            public onCleared(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewModelLifecycleOwner {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewModelLifecycleOwner>;
            public constructor();
            public getLifecycle(): androidx.lifecycle.Lifecycle;
            public destroy(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewOptions {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewOptions>;
            public getShowSpeedLimit(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowArrivalText(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowEndNavigationButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowPoiName(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getMapStyleUriNight(): kotlinx.coroutines.flow.StateFlow<string>;
            public getShowStartNavigationButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getEnableMapLongClickIntercept(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public setMapStyleUriDay(param0: kotlinx.coroutines.flow.StateFlow<string>): void;
            public getShowCameraModeActionButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowCompassActionButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowRecenterActionButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowInfoPanelInFreeDrive(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public isInfoPanelHideable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getInfoPanelForcedState(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getShowCameraDebugInfo(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public setMapStyleUriNight(param0: kotlinx.coroutines.flow.StateFlow<string>): void;
            public getRouteLineOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions>;
            public getBuildingHighlightOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions>;
            public applyCustomization(it: com.mapbox.navigation.dropin.ViewOptionsCustomization): void;
            public getShowToggleAudioActionButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowTripProgress(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowMapScalebar(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowRoadName(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getRouteArrowOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions>;
            public getEnableBuildingHighlightOnArrival(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getDistanceFormatterOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.formatter.DistanceFormatterOptions>;
            public getMapStyleUriDay(): kotlinx.coroutines.flow.StateFlow<string>;
            public constructor(context: globalAndroid.content.Context);
            public getShowManeuver(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowActionButtons(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            public getShowRoutePreviewButton(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module navigationview {
          export class NavigationViewStyles {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.navigationview.NavigationViewStyles>;
            public getInfoPanelBackground(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getInfoPanelGuidelineMaxPosPercent(): kotlinx.coroutines.flow.StateFlow<java.lang.Float>;
            public getCompassButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getLocationPuckOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.puck.LocationPuckOptions>;
            public getInfoPanelPeekHeight(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getManeuverViewOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions>;
            public getTripProgressStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getRoutePreviewButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getCameraModeButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            /** @deprecated */
            public getSpeedLimitStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getDestinationMarkerAnnotationOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions>;
            public getRoadNameBackground(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public applyCustomization(it: com.mapbox.navigation.dropin.ViewStyleCustomization): void;
            /** @deprecated */
            public getSpeedLimitTextAppearance(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getEndNavigationButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getSpeedInfoOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions>;
            public getRecenterButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getPoiNameTextAppearance(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getRoadNameTextAppearance(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getInfoPanelMarginEnd(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getInfoPanelMarginStart(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public constructor(context: globalAndroid.content.Context);
            public getAudioGuidanceButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getArrivalTextAppearance(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
            public getStartNavigationButtonStyle(): kotlinx.coroutines.flow.StateFlow<java.lang.Integer>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module permission {
          export class LocationPermissionComponent {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.permission.LocationPermissionComponent>;
            public constructor(this_: androidx.activity.ComponentActivity, componentActivity: com.mapbox.navigation.ui.app.internal.Store);
            public onDetached(it: com.mapbox.navigation.core.MapboxNavigation): void;
            public onAttached(isGranted: com.mapbox.navigation.core.MapboxNavigation): void;
          }
          export module LocationPermissionComponent {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.permission.LocationPermissionComponent.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module permission {
          export class PermissionsLauncherFragment {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.permission.PermissionsLauncherFragment>;
            public static TAG: string = 'MapboxPermissionsLauncherFragment';
            public constructor();
            public onAttach(permission: globalAndroid.content.Context): void;
            public onDetach(): void;
          }
          export module PermissionsLauncherFragment {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.permission.PermissionsLauncherFragment.Companion>;
              public install($this$install_u24lambda_u2d2_u24lambda_u2d0: androidx.fragment.app.FragmentActivity, param1: androidNative.Array<string>, it: androidx.activity.result.ActivityResultCallback<java.util.Map<string, java.lang.Boolean>>): void;
              public uninstall(it: androidx.fragment.app.FragmentActivity): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module roadname {
          export class RoadNameComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.roadname.RoadNameComponentContractImpl>;
            public getMapStyle(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.Style>;
            public getRoadInfo(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.road.model.Road>;
            public constructor(mapStyle: com.mapbox.maps.Style, coroutineScope: kotlinx.coroutines.CoroutineScope, store: com.mapbox.navigation.ui.app.internal.Store);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module roadname {
          export class RoadNameCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.roadname.RoadNameCoordinator>;
            public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, roadNameLayout: globalAndroid.view.ViewGroup);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module roadname {
          export class RoadNameViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.roadname.RoadNameViewBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module speedlimit {
          export class SpeedInfoComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.speedlimit.SpeedInfoComponentContractImpl>;
            public onSpeedInfoClicked(speedInfo: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            public constructor(speedInfoBehavior: com.mapbox.navigation.dropin.ClickBehavior<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue>);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module speedlimit {
          export class SpeedInfoViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.speedlimit.SpeedInfoViewBinder>;
            public getContext(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module speedlimit {
          export class SpeedLimitCoordinator extends com.mapbox.navigation.ui.base.lifecycle.UICoordinator<globalAndroid.view.ViewGroup> {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.speedlimit.SpeedLimitCoordinator>;
            public getContext(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext, speedLimitLayout: globalAndroid.view.ViewGroup);
            public flowViewBinders($this$flowViewBinders: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module speedlimit {
          export class SpeedLimitViewBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.speedlimit.SpeedLimitViewBinder>;
            public getContext(): com.mapbox.navigation.dropin.navigationview.NavigationViewContext;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module tripprogress {
          export class TripProgressBinder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.tripprogress.TripProgressBinder>;
            public constructor(context: com.mapbox.navigation.dropin.navigationview.NavigationViewContext);
            public bind(binding: globalAndroid.view.ViewGroup): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module tripprogress {
          export class TripProgressComponentContractImpl {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.tripprogress.TripProgressComponentContractImpl>;
            public constructor(scope: kotlinx.coroutines.CoroutineScope, store: com.mapbox.navigation.ui.app.internal.Store);
            public getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module util {
          export class BitmapMemoryCache {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.util.BitmapMemoryCache>;
            public static MB_IN_BYTES: number = 1048576;
            public constructor(cacheSize: number);
            public get(this_: string): globalAndroid.graphics.Bitmap;
            public add(key: string, bitmap: globalAndroid.graphics.Bitmap): void;
            public getCacheSize(): number;
          }
          export module BitmapMemoryCache {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.util.BitmapMemoryCache.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module util {
          export class Geocoder {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.util.Geocoder>;
            public 'findAddresses-gIAlu-s'(point: com.mapbox.geojson.Point, $this$findAddresses_gIAlu_s_u24lambda_u2d0: any): any;
            public constructor(accessToken: string);
          }
          export module Geocoder {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.util.Geocoder.Companion>;
              public create(accessToken: string): com.mapbox.navigation.dropin.util.Geocoder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module dropin {
        export module util {
          export class HapticFeedback {
            public static class: java.lang.Class<com.mapbox.navigation.dropin.util.HapticFeedback>;
            public static TICK_DURATION_MS: number = 10;
            public vibrate(milliseconds: number): void;
            public getVibrator$libnavui_dropin_release(): globalAndroid.os.Vibrator;
            public tick(): void;
            public constructor(context: globalAndroid.content.Context);
          }
          export module HapticFeedback {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.dropin.util.HapticFeedback.Companion>;
              public create(context: globalAndroid.content.Context): com.mapbox.navigation.dropin.util.HapticFeedback;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.dropin.ClickBehavior:1
//com.mapbox.navigation.dropin.internal.extensions.ReloadingComponent:1
