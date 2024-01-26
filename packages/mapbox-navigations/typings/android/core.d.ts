declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.core.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.core';
          public static BUILD_TYPE: string = 'release';
          public static MAPBOX_NAVIGATION_VERSION_NAME: string = '2.17.10';
          public static NAV_NATIVE_SDK_VERSION: string = '162.0.2';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class CopilotSessionObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.CopilotSessionObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.CopilotSessionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void });
          public constructor();
          public onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadata {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadata>;
          public toString(): string;
          public copy$libnavigation_core_release(copilotSessionId: string): com.mapbox.navigation.core.DeveloperMetadata;
          public equals(other: any): boolean;
          public getCopilotSessionId(): string;
          public hashCode(): number;
          public constructor(copilotSessionId: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadataAggregator extends com.mapbox.navigation.core.CopilotSessionObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadataAggregator>;
          public constructor(initialCopilotSessionId: string);
          public onCopilotSessionChanged(session: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
          public unregisterAllObservers(): void;
          public registerObserver(observer: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public unregisterObserver(observer: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadataObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadataObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.DeveloperMetadataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onDeveloperMetadataChanged(param0: com.mapbox.navigation.core.DeveloperMetadata): void });
          public constructor();
          public onDeveloperMetadataChanged(param0: com.mapbox.navigation.core.DeveloperMetadata): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class EtcGateApi {
          public static class: java.lang.Class<com.mapbox.navigation.core.EtcGateApi>;
          public getExperimental$libnavigation_core_release(): com.mapbox.navigator.Experimental;
          public updateEtcGateInfo(info: com.mapbox.navigation.core.EtcGateInfo): void;
          public constructor(experimental: com.mapbox.navigator.Experimental);
          public setExperimental$libnavigation_core_release(param0: com.mapbox.navigator.Experimental): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class EtcGateInfo {
          public static class: java.lang.Class<com.mapbox.navigation.core.EtcGateInfo>;
          public toString(): string;
          public getMonotonicTimestampNanoseconds(): number;
          public getId(): number;
          public equals(other: any): boolean;
          public hashCode(): number;
          public constructor(id: number, monotonicTimestampNanoseconds: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class HistoryRecordingStateHandler extends com.mapbox.navigation.core.trip.session.TripSessionStateObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.HistoryRecordingStateHandler>;
          public constructor();
          public unregisterStateChangeObserver(observer: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
          public currentCopilotSession(): com.mapbox.navigation.core.internal.HistoryRecordingSessionState;
          public registerCopilotSessionObserver(observer: com.mapbox.navigation.core.CopilotSessionObserver): void;
          public unregisterAllCopilotSessionObservers(): void;
          public setRoutes(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public lastSetRoutesFailed(): void;
          public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
          public unregisterAllStateChangeObservers(): void;
          public unregisterCopilotSessionObserver(observer: com.mapbox.navigation.core.CopilotSessionObserver): void;
          public registerStateChangeObserver(observer: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
          public onSessionStateChanged(tripSessionState: com.mapbox.navigation.core.trip.session.TripSessionState): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class MapboxNavigation {
          public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigation>;
          public registerRouteAlternativesObserver(routeAlternativesObserver: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
          public getTilesetDescriptorFactory(): com.mapbox.navigation.core.navigator.TilesetDescriptorFactory;
          public onEVDataUpdated(data: java.util.Map<string, string>): void;
          public setNavigationRoutes(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public moveRoutesFromPreviewToNavigator(): void;
          public getRoadObjectMatcher(): com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcher;
          public onDestroy(): void;
          public getNavigationRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
          public setRerouteOptionsAdapter(rerouteOptionsAdapter: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
          public postCustomEvent$libnavigation_core_release(telemetry: string, $i$f$runInTelemetryContext: string, this_$iv: string): void;
          public constructor(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions);
          public unregisterOffRouteObserver(offRouteObserver: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
          public getExperimental(): com.mapbox.navigator.Experimental;
          public requestAlternativeRoutes(callback: com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback): void;
          public registerEHorizonObserver(eHorizonObserver: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
          public registerOnRoutesSetStartedObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
          public getRoadObjectsStore(): com.mapbox.navigation.core.trip.session.eh.RoadObjectsStore;
          public registerDeveloperMetadataObserver(developerMetadataObserver: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          /** @deprecated */
          public resetTripSession(): void;
          public getZLevel(): java.lang.Integer;
          public registerLocationObserver(locationObserver: com.mapbox.navigation.core.trip.session.LocationObserver): void;
          public unregisterRouteAlternativesObserver(routeAlternativesObserver: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
          public setArrivalController(): void;
          /** @deprecated */
          public getRoutes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
          public setArrivalController(arrivalController: com.mapbox.navigation.core.arrival.ArrivalController): void;
          public startTripSession(): void;
          public unregisterRoutesObserver(routesObserver: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
          public registerNavigationSessionStateObserver(navigationSessionStateObserver: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
          /** @deprecated */
          public setRerouteController(): void;
          public postUserFeedback(feedbackType: string, description: string, feedbackSource: string, screenshot: string, feedbackSubType: androidNative.Array<string>): void;
          public unregisterNavigationSessionStateObserver(navigationSessionStateObserver: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
          public registerRoadObjectsOnRouteObserver(roadObjectsOnRouteObserver: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
          public setRoutesPreview(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public setNavigationRoutes(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, initialLegIndex: number): void;
          public registerRoutesPreviewObserver(observer: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
          public registerRouteAlternativesObserver(routeAlternativesObserver: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
          public unregisterRoutesPreviewObserver(observer: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
          public getNavigationSessionState(): com.mapbox.navigation.core.trip.session.NavigationSessionState;
          public unregisterNavigationVersionSwitchObserver(observer: com.mapbox.navigation.core.NavigationVersionSwitchObserver): void;
          public setRoutesPreview(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, primaryRouteIndex: number): void;
          public registerRoutesObserver(routesObserver: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
          public requestAlternativeRoutes(): void;
          public registerArrivalObserver(arrivalObserver: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
          public isRunningForegroundService(): boolean;
          public provideFeedbackMetadataWrapper(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper;
          public postUserFeedback$libnavigation_core_release(telemetry: string, $i$f$runInTelemetryContext: string, this_$iv: string, this_: string, feedbackType: androidNative.Array<string>, description: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata, feedbackSource: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
          public unregisterEHorizonObserver(eHorizonObserver: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
          public unregisterRoutesInvalidatedObserver(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
          public getRerouteController(): com.mapbox.navigation.core.reroute.NavigationRerouteController;
          public getRouteRefreshController(): com.mapbox.navigation.core.routerefresh.RouteRefreshController;
          public postUserFeedback(feedbackType: string, description: string, feedbackSource: string, screenshot: string, feedbackMetadata: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata): void;
          /** @deprecated */
          public setRerouteController(it: com.mapbox.navigation.core.reroute.RerouteController): void;
          public getGraphAccessor(): com.mapbox.navigation.core.trip.session.eh.GraphAccessor;
          public getMapboxReplayer(): com.mapbox.navigation.core.replay.MapboxReplayer;
          public stopTripSession(): void;
          public registerRoutesInvalidatedObserver(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
          public setNavigationRoutes(it: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, item$iv$iv: number, $this$mapTo$iv$iv: com.mapbox.navigation.core.RoutesSetCallback): void;
          public registerNavigationVersionSwitchObserver(observer: com.mapbox.navigation.core.NavigationVersionSwitchObserver): void;
          /** @deprecated */
          public setRoutes(routes: java.util.List<any>): void;
          public constructor($this$incidentsOptions_u24lambda_u2d0: com.mapbox.navigation.base.options.NavigationOptions, param3: com.mapbox.navigation.utils.internal.ThreadController);
          public unregisterOnRoutesSetStartedObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
          public cancelRouteRequest(requestId: number): void;
          public registerBannerInstructionsObserver(bannerInstructionsObserver: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
          public unregisterLocationObserver(locationObserver: com.mapbox.navigation.core.trip.session.LocationObserver): void;
          public getNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
          public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
          public startTripSession(withForegroundService: boolean): void;
          public resetTripSession($i$f$logD: com.mapbox.navigation.core.TripSessionResetCallback): void;
          /** @deprecated */
          public requestRoutes(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routesRequestCallback: com.mapbox.navigation.base.route.RouterCallback): number;
          public getHistoryRecorder(): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
          public unregisterTripSessionStateObserver(tripSessionStateObserver: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
          public navigateNextRouteLeg(callback: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
          public registerOffRouteObserver(offRouteObserver: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
          public setRerouteEnabled(enabled: boolean): void;
          public setTripNotificationInterceptor(interceptor: com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor): void;
          public registerRouteProgressObserver(routeProgressObserver: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
          /** @deprecated */
          public setRerouteController(it: com.mapbox.navigation.core.reroute.NavigationRerouteController): void;
          public isDestroyed(): boolean;
          public unregisterDeveloperMetadataObserver(developerMetadataObserver: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public isRerouteEnabled(): boolean;
          public registerTripSessionStateObserver(tripSessionStateObserver: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
          public postUserFeedback(feedbackType: string, description: string, feedbackSource: string, screenshot: string): void;
          public registerVoiceInstructionsObserver(voiceInstructionsObserver: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
          public unregisterRoadObjectsOnRouteObserver(roadObjectsOnRouteObserver: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
          public unregisterVoiceInstructionsObserver(voiceInstructionsObserver: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
          public startReplayTripSession(withForegroundService: boolean): void;
          public requestRoutes(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, callback: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
          public requestAlternativeRoutes(callback: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback): void;
          public getEtcGateAPI(): com.mapbox.navigation.core.EtcGateApi;
          public unregisterArrivalObserver(arrivalObserver: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
          public changeRoutesPreviewPrimaryRoute(newPrimaryRoute: com.mapbox.navigation.base.route.NavigationRoute): void;
          /** @deprecated */
          public setRoutes(routes: java.util.List<any>, initialLegIndex: number): void;
          public getAlternativeMetadataFor(it: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
          public getAlternativeMetadataFor(navigationRoute: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
          public currentLegIndex(): number;
          public requestRoadGraphDataUpdate(callback: com.mapbox.navigation.core.RoadGraphDataUpdateCallback): void;
          public unregisterRouteProgressObserver(routeProgressObserver: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
          public getCopilotHistoryRecorder$libnavigation_core_release(): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
          public isReplayEnabled(): boolean;
          public getTripSessionState(): com.mapbox.navigation.core.trip.session.TripSessionState;
          public unregisterRouteAlternativesObserver(routeAlternativesObserver: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
          public getHistoryRecordingStateHandler$libnavigation_core_release(): com.mapbox.navigation.core.HistoryRecordingStateHandler;
          public postUserFeedback(feedbackType: string, description: string, feedbackSource: string, screenshot: string, feedbackSubType: androidNative.Array<string>, feedbackMetadata: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata): void;
          public unregisterBannerInstructionsObserver(bannerInstructionsObserver: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
        }
        export module MapboxNavigation {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigation.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class MapboxNavigationProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigationProvider>;
          public static INSTANCE: com.mapbox.navigation.core.MapboxNavigationProvider;
          /** @deprecated */
          public static create(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.MapboxNavigation;
          /** @deprecated */
          public static destroy(): void;
          public static isCreated(): boolean;
          /** @deprecated */
          public static retrieve(): com.mapbox.navigation.core.MapboxNavigation;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class NavigationComponentProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.NavigationComponentProvider>;
          public static INSTANCE: com.mapbox.navigation.core.NavigationComponentProvider;
          public createRoutesCacheClearer(): com.mapbox.navigation.core.RoutesCacheClearer;
          public createRerouteController(directionsSession: com.mapbox.navigation.core.directions.session.DirectionsSession, tripSession: com.mapbox.navigation.core.trip.session.TripSession, routeOptionsProvider: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, rerouteOptions: com.mapbox.navigation.base.options.RerouteOptions, threadController: com.mapbox.navigation.utils.internal.ThreadController, evDynamicDataHolder: com.mapbox.navigation.core.ev.EVDynamicDataHolder): com.mapbox.navigation.core.reroute.InternalRerouteController;
          public createHistoryRecordingStateHandler(): com.mapbox.navigation.core.HistoryRecordingStateHandler;
          public createEVDynamicDataHolder(): com.mapbox.navigation.core.ev.EVDynamicDataHolder;
          public createRouteRefreshRequestDataProvider(): com.mapbox.navigation.core.RoutesProgressDataProvider;
          public createArrivalProgressObserver(tripSession: com.mapbox.navigation.core.trip.session.TripSession): com.mapbox.navigation.core.arrival.ArrivalProgressObserver;
          public createTripService(applicationContext: globalAndroid.content.Context, tripNotification: com.mapbox.navigation.base.trip.notification.TripNotification, threadController: com.mapbox.navigation.utils.internal.ThreadController): com.mapbox.navigation.core.trip.service.TripService;
          public createTripSession(tripService: com.mapbox.navigation.core.trip.service.TripService, tripSessionLocationEngine: com.mapbox.navigation.core.trip.session.TripSessionLocationEngine, navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, threadController: com.mapbox.navigation.utils.internal.ThreadController): com.mapbox.navigation.core.trip.session.TripSession;
          public createNavigationSession(): com.mapbox.navigation.core.trip.session.NavigationSession;
          public createNativeNavigator(cacheHandle: com.mapbox.navigator.CacheHandle, config: com.mapbox.navigator.ConfigHandle, historyRecorderComposite: com.mapbox.navigator.HistoryRecorderHandle, accessToken: string, router: com.mapbox.navigator.RouterInterface): com.mapbox.navigation.navigator.internal.MapboxNativeNavigator;
          public createDirectionsSession(router: com.mapbox.navigation.base.internal.NavigationRouterV2): com.mapbox.navigation.core.directions.session.DirectionsSession;
          public createDeveloperMetadataAggregator(it: com.mapbox.navigation.core.HistoryRecordingStateHandler): com.mapbox.navigation.core.DeveloperMetadataAggregator;
          public createBillingController(accessToken: string, navigationSession: com.mapbox.navigation.core.trip.session.NavigationSession, tripSession: com.mapbox.navigation.core.trip.session.TripSession, arrivalProgressObserver: com.mapbox.navigation.core.arrival.ArrivalProgressObserver): com.mapbox.navigation.core.accounts.BillingController;
          public createTripSessionLocationEngine(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.trip.session.TripSessionLocationEngine;
          public createRoutesPreviewController(scope: kotlinx.coroutines.CoroutineScope): com.mapbox.navigation.core.preview.RoutesPreviewController;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class NavigationVersionSwitchObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.NavigationVersionSwitchObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.NavigationVersionSwitchObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSwitchToFallbackVersion(param0: string): void; onSwitchToTargetVersion(param0: string): void });
          public constructor();
          public onSwitchToTargetVersion(param0: string): void;
          public onSwitchToFallbackVersion(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoadGraphDataUpdateCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoadGraphDataUpdateCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.RoadGraphDataUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRoadGraphDataUpdateInfoAvailable(param0: boolean, param1: com.mapbox.navigation.core.RoadGraphVersionInfo): void });
          public constructor();
          public onRoadGraphDataUpdateInfoAvailable(param0: boolean, param1: com.mapbox.navigation.core.RoadGraphVersionInfo): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoadGraphVersionInfo {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoadGraphVersionInfo>;
          public getDataset(): string;
          public constructor(dataset: string, version: string);
          public getVersion(): string;
          public toString(): string;
          public equals(other: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesCacheClearer implements com.mapbox.navigation.core.directions.session.RoutesObserver, com.mapbox.navigation.core.preview.RoutesPreviewObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesCacheClearer>;
          public routesPreviewUpdated(update: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void;
          public routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void;
          public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
          public constructor();
          public onRoutesChanged(it: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesInvalidatedObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesInvalidatedObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.RoutesInvalidatedObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRoutesInvalidated(param0: com.mapbox.navigation.core.RoutesInvalidatedParams): void });
          public constructor();
          public onRoutesInvalidated(param0: com.mapbox.navigation.core.RoutesInvalidatedParams): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesInvalidatedParams {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesInvalidatedParams>;
          public toString(): string;
          public getInvalidatedRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
          public constructor(invalidatedRoutes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>);
          public equals(other: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesProgressDataProvider extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesProgressDataProvider>;
          public onRouteProgressChanged(it: com.mapbox.navigation.base.trip.model.RouteProgress): void;
          public constructor();
          public onNewRoutes(): void;
          public getRouteRefreshRequestDataOrWait(it: any): any;
          public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesRefreshData {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesRefreshData>;
          public component1(): com.mapbox.navigation.base.route.NavigationRoute;
          public copy(primaryRoute: com.mapbox.navigation.base.route.NavigationRoute, primaryRouteProgressData: com.mapbox.navigation.core.internal.RouteProgressData, alternativeRoutesProgressData: java.util.List<any>): com.mapbox.navigation.core.RoutesRefreshData;
          public constructor(primaryRoute: com.mapbox.navigation.base.route.NavigationRoute, primaryRouteProgressData: com.mapbox.navigation.core.internal.RouteProgressData, alternativeRoutesProgressData: java.util.List<any>);
          public toString(): string;
          public getPrimaryRoute(): com.mapbox.navigation.base.route.NavigationRoute;
          public getAllRoutesRefreshData(): java.util.List<any>;
          public component3(): java.util.List<any>;
          public equals(other: any): boolean;
          public getAlternativeRoutesProgressData(): java.util.List<any>;
          public component2(): com.mapbox.navigation.core.internal.RouteProgressData;
          public hashCode(): number;
          public getPrimaryRouteProgressData(): com.mapbox.navigation.core.internal.RouteProgressData;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesRefreshDataProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesRefreshDataProvider>;
          public getRoutesRefreshData(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, routes: any): any;
          public constructor(routesProgressDataProvider: com.mapbox.navigation.core.RoutesProgressDataProvider);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.RoutesSetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRoutesSet(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.core.RoutesSetError, com.mapbox.navigation.core.RoutesSetSuccess>): void });
          public constructor();
          public onRoutesSet(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.core.RoutesSetError, com.mapbox.navigation.core.RoutesSetSuccess>): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetError {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetError>;
          public constructor(message: string);
          public toString(): string;
          public equals(other: any): boolean;
          public getMessage(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetSuccess {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetSuccess>;
          public constructor(ignoredAlternatives: java.util.Map<string, com.mapbox.navigation.core.RoutesSetError>);
          public toString(): string;
          public equals(other: any): boolean;
          public getIgnoredAlternatives(): java.util.Map<string, com.mapbox.navigation.core.RoutesSetError>;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutingTilesFiles {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutingTilesFiles>;
          public static TILES_PATH_SUB_DIR: string = 'mbx_nav/tiles';
          public getApplicationContext(): globalAndroid.content.Context;
          public absolutePath(tileDir: com.mapbox.navigation.base.options.RoutingTilesOptions): string;
          public constructor(applicationContext: globalAndroid.content.Context);
        }
        export module RoutingTilesFiles {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.core.RoutingTilesFiles.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export abstract class SetRoutes {
          public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes>;
        }
        export module SetRoutes {
          export class Alternatives extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.Alternatives>;
            public equals(other: any): boolean;
            public getLegIndex(): number;
            public hashCode(): number;
            public copy(legIndex: number): com.mapbox.navigation.core.SetRoutes.Alternatives;
            public component1(): number;
            public constructor(legIndex: number);
            public toString(): string;
          }
          export class CleanUp extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.CleanUp>;
            public static INSTANCE: com.mapbox.navigation.core.SetRoutes.CleanUp;
          }
          export class NewRoutes extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.NewRoutes>;
            public equals(other: any): boolean;
            public copy(legIndex: number): com.mapbox.navigation.core.SetRoutes.NewRoutes;
            public getLegIndex(): number;
            public hashCode(): number;
            public component1(): number;
            public constructor(legIndex: number);
            public toString(): string;
          }
          export class RefreshRoutes extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.RefreshRoutes>;
            public constructor(routeProgressData: com.mapbox.navigation.core.internal.RouteProgressData);
            public equals(other: any): boolean;
            public component1(): com.mapbox.navigation.core.internal.RouteProgressData;
            public copy(routeProgressData: com.mapbox.navigation.core.internal.RouteProgressData): com.mapbox.navigation.core.SetRoutes.RefreshRoutes;
            public getRouteProgressData(): com.mapbox.navigation.core.internal.RouteProgressData;
            public hashCode(): number;
            public toString(): string;
          }
          export class Reorder extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.Reorder>;
            public equals(other: any): boolean;
            public getLegIndex(): number;
            public hashCode(): number;
            public component1(): number;
            public constructor(legIndex: number);
            public toString(): string;
            public copy(legIndex: number): com.mapbox.navigation.core.SetRoutes.Reorder;
          }
          export class Reroute extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.Reroute>;
            public equals(other: any): boolean;
            public getLegIndex(): number;
            public hashCode(): number;
            public component1(): number;
            public copy(legIndex: number): com.mapbox.navigation.core.SetRoutes.Reroute;
            public constructor(legIndex: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class TripSessionResetCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.TripSessionResetCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.TripSessionResetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onTripSessionReset(): void });
          public constructor();
          public onTripSessionReset(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module accounts {
          export class BillingController {
            public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController>;
            public constructor(navigationSession: com.mapbox.navigation.core.trip.session.NavigationSession, arrivalProgressObserver: com.mapbox.navigation.core.arrival.ArrivalProgressObserver, accessToken: string, tripSession: com.mapbox.navigation.core.trip.session.TripSession);
            public onDestroy(): void;
            public onExternalRouteSet(currentRemainingWaypoints: com.mapbox.navigation.base.route.NavigationRoute, newWaypoints: number): void;
          }
          export module BillingController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.Companion>;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.WhenMappings>;
            }
            export module getRunningOrPausedSessionSkuId {
              export module WhenMappings {
                export class SkuSessionStatus {
                  public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.getRunningOrPausedSessionSkuId.SkuSessionStatus>;
                  public getSkuId(): com.mapbox.common.SessionSKUIdentifier;
                  public toString(): string;
                  public component1(): com.mapbox.common.SessionSKUIdentifier;
                  public getStatus(): com.mapbox.common.BillingSessionStatus;
                  public constructor(skuId: com.mapbox.common.SessionSKUIdentifier, status: com.mapbox.common.BillingSessionStatus);
                  public component2(): com.mapbox.common.BillingSessionStatus;
                  public copy(skuId: com.mapbox.common.SessionSKUIdentifier, status: com.mapbox.common.BillingSessionStatus): com.mapbox.navigation.core.accounts.BillingController.getRunningOrPausedSessionSkuId.SkuSessionStatus;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                }
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
      export module core {
        export module accounts {
          export class BillingServiceProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingServiceProvider>;
            public static INSTANCE: com.mapbox.navigation.core.accounts.BillingServiceProvider;
            public getInstance(): com.mapbox.common.BillingServiceInterface;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalController {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.arrival.ArrivalController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean });
            public constructor();
            public navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.arrival.ArrivalObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onWaypointArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void; onNextRouteLegStart(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): void; onFinalDestinationArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void });
            public constructor();
            public onWaypointArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public onFinalDestinationArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public onNextRouteLegStart(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalProgressObserver extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalProgressObserver>;
            public attach(arrivalController: com.mapbox.navigation.core.arrival.ArrivalController): void;
            public constructor(tripSession: com.mapbox.navigation.core.trip.session.TripSession);
            public unregisterAllObservers(): void;
            public navigateNextRouteLeg(numberOfLegs: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
            public onRouteProgressChanged(hasMoreLegs: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public registerObserver(arrivalObserver: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
            public unregisterObserver(arrivalObserver: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class AutoArrivalController extends com.mapbox.navigation.core.arrival.ArrivalController {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.AutoArrivalController>;
            public navigateNextRouteLeg(shouldNavigateNextRouteLeg: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean;
            public constructor();
            public navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean;
          }
          export module AutoArrivalController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.arrival.AutoArrivalController.Companion>;
              public getAUTO_ARRIVAL_NANOS(): number;
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
      export module core {
        export module directions {
          export class LegacyNavigationRouterAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.directions.LegacyNavigationRouterAdapter>;
            public getRoute(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, callback: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public getRouteRefresh(route: com.mapbox.navigation.base.route.NavigationRoute, routeRefreshRequestData: com.mapbox.navigation.base.internal.RouteRefreshRequestData, callback: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public cancelAll(): void;
            public cancelRouteRequest(requestId: number): void;
            public constructor(legacyRouter: com.mapbox.navigation.base.route.NavigationRouter);
            public getRouteRefresh(route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, callback: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, callback: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRefreshRequest(requestId: number): void;
            public getRouteRefresh(route: com.mapbox.navigation.base.route.NavigationRoute, legIndex: number, callback: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module directions {
          export class LegacyRouterAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.directions.LegacyRouterAdapter>;
            public getRoute(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, callback: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public cancelRouteRequest(requestId: number): void;
            public constructor(legacyRouter: com.mapbox.navigation.base.route.Router);
            public getRouteRefresh(route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, callback: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, callback: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRefreshRequest(requestId: number): void;
            public getRouteRefresh(route: com.mapbox.navigation.base.route.NavigationRoute, legIndex: number, callback: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module directions {
          export module session {
            export class DirectionsSession extends com.mapbox.navigation.core.directions.session.RouteRefresh {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.DirectionsSession>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.DirectionsSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
                getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
                getInitialLegIndex(): number;
                setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
                setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
                getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
                cancelRouteRequest(param0: number): void;
                cancelAll(): void;
                registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
                unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
                unregisterAllSetNavigationRoutesFinishedObserver(): void;
                registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
                unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
                shutdown(): void;
                requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
                cancelRouteRefreshRequest(param0: number): void;
              });
              public constructor();
              public registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public cancelRouteRefreshRequest(param0: number): void;
              public unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getInitialLegIndex(): number;
              public setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
              public setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
              public getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
              public registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              public unregisterAllSetNavigationRoutesFinishedObserver(): void;
              public shutdown(): void;
              public unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public cancelRouteRequest(param0: number): void;
              public getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              public cancelAll(): void;
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
      export module core {
        export module directions {
          export module session {
            export class DirectionsSessionRoutes {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes>;
              public constructor(acceptedRoutes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, ignoredRoutes: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, setRoutesInfo: com.mapbox.navigation.core.SetRoutes);
              public hashCode(): number;
              public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public equals(other: any): boolean;
              public component3(): com.mapbox.navigation.core.SetRoutes;
              public getSetRoutesInfo(): com.mapbox.navigation.core.SetRoutes;
              public toString(): string;
              public toRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public component2(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public copy(acceptedRoutes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, ignoredRoutes: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, setRoutesInfo: com.mapbox.navigation.core.SetRoutes): com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes;
              public getAcceptedRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public getIgnoredRoutes(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
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
      export module core {
        export module directions {
          export module session {
            export class IgnoredRoute {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(navigationRoute: com.mapbox.navigation.base.route.NavigationRoute, reason: string);
              public getReason(): string;
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
      export module core {
        export module directions {
          export module session {
            export class MapboxDirectionsSession extends com.mapbox.navigation.core.directions.session.DirectionsSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.MapboxDirectionsSession>;
              public static DEFAULT_INITIAL_LEG_INDEX: number = 0;
              public registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public setNavigationRoutesFinished(it: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
              public requestRouteRefresh(route: com.mapbox.navigation.base.route.NavigationRoute, routeRefreshRequestData: com.mapbox.navigation.base.internal.RouteRefreshRequestData, callback: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              public setRoutesUpdatedResult(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
              public unregisterSetNavigationRoutesFinishedObserver(routesObserver: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
              public constructor(router: com.mapbox.navigation.base.internal.NavigationRouterV2);
              public registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public registerSetNavigationRoutesStartedObserver(observer: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public unregisterAllSetNavigationRoutesFinishedObserver(): void;
              public unregisterSetNavigationRoutesStartedObserver(observer: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public cancelRouteRefreshRequest(requestId: number): void;
              public cancelRouteRequest(param0: number): void;
              public cancelAll(): void;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public cancelRouteRefreshRequest(param0: number): void;
              public unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getInitialLegIndex(): number;
              public registerSetNavigationRoutesFinishedObserver(it: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
              public setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              public cancelRouteRequest(requestId: number): void;
              public shutdown(): void;
              public unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public requestRoutes(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routerCallback: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              public getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public setNavigationRoutesStarted(it: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
              public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            }
            export module MapboxDirectionsSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.MapboxDirectionsSession.Companion>;
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
      export module core {
        export module directions {
          export module session {
            export class RouteRefresh {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RouteRefresh>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RouteRefresh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void });
              public constructor();
              public cancelRouteRefreshRequest(param0: number): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
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
      export module core {
        export module directions {
          export module session {
            export class RoutesExtra {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesExtra>;
              public static INSTANCE: com.mapbox.navigation.core.directions.session.RoutesExtra;
              public static ROUTES_UPDATE_REASON_CLEAN_UP: string = 'ROUTES_UPDATE_REASON_CLEAN_UP';
              public static ROUTES_UPDATE_REASON_NEW: string = 'ROUTES_UPDATE_REASON_NEW';
              public static ROUTES_UPDATE_REASON_ALTERNATIVE: string = 'ROUTES_UPDATE_REASON_ALTERNATIVE';
              public static ROUTES_UPDATE_REASON_REROUTE: string = 'ROUTES_UPDATE_REASON_REROUTE';
              public static ROUTES_UPDATE_REASON_REFRESH: string = 'ROUTES_UPDATE_REASON_REFRESH';
            }
            export module RoutesExtra {
              export class RoutesUpdateReason {
                public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesExtra.RoutesUpdateReason>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RoutesExtra$RoutesUpdateReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
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
      export module core {
        export module directions {
          export module session {
            export class RoutesObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RoutesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void });
              public constructor();
              public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
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
      export module core {
        export module directions {
          export module session {
            export class RoutesSetStartedParams {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesSetStartedParams>;
              public constructor(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>);
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public copy(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.navigation.core.directions.session.RoutesSetStartedParams;
              public hashCode(): number;
              public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public equals(other: any): boolean;
              public toString(): string;
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
      export module core {
        export module directions {
          export module session {
            export class RoutesUpdatedResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesUpdatedResult>;
              /** @deprecated */
              public getRoutes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
              public constructor(navigationRoutes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, ignoredRoutes: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, reason: string);
              public hashCode(): number;
              public getNavigationRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public equals(other: any): boolean;
              public toString(): string;
              public getIgnoredRoutes(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public getReason(): string;
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
      export module core {
        export module directions {
          export module session {
            export class SetNavigationRoutesStartedObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoutesSetStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void });
              public constructor();
              public onRoutesSetStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
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
      export module core {
        export module directions {
          export module session {
            export class Utils {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.Utils>;
              public static INSTANCE: com.mapbox.navigation.core.directions.session.Utils;
              public createDirectionsSessionRoutes(processedRoute: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, element$iv: com.mapbox.navigation.core.trip.session.NativeSetRouteValue, $this$any$iv: com.mapbox.navigation.core.SetRoutes): com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes;
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
      export module core {
        export module ev {
          export class EVDynamicDataHolder {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVDynamicDataHolder>;
            public currentData(initialData: java.util.Map<string, any>): java.util.Map<string, string>;
            public constructor();
            public updateData(data: java.util.Map<string, string>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module ev {
          export class EVRefreshDataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVRefreshDataProvider>;
            public constructor(evDynamicDataHolder: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public get(this_: com.mapbox.api.directions.v5.models.RouteOptions): java.util.Map<string, string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module ev {
          export class EVRerouteOptionsAdapter extends com.mapbox.navigation.core.reroute.RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVRerouteOptionsAdapter>;
            public onRouteOptions(it: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
            public constructor(evDynamicDataHolder: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module formatter {
          export class FormattedDistanceData {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.FormattedDistanceData>;
            public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
            public equals(other: any): boolean;
            public constructor(distance: number, distanceAsString: string, distanceSuffix: string, unitType: com.mapbox.navigation.base.formatter.UnitType);
            public getDistanceAsString(): string;
            public hashCode(): number;
            public getDistanceSuffix(): string;
            public getDistance(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module formatter {
          export class MapboxDistanceFormatter {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceFormatter>;
            public constructor(options: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
            public formatDistance($this$formatDistance_u24lambda_u2d0: number): globalAndroid.text.SpannableString;
            public getOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public getSpannableDistanceString$libnavigation_core_release(this_: any): globalAndroid.text.SpannableString;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module formatter {
          export class MapboxDistanceUtil {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil>;
            public static INSTANCE: com.mapbox.navigation.core.formatter.MapboxDistanceUtil;
            public formatDistance(distanceInMeters: number, roundingIncrement: number, unitType: com.mapbox.navigation.base.formatter.UnitType, context: globalAndroid.content.Context): com.mapbox.navigation.core.formatter.FormattedDistanceData;
            public formatDistance(distanceInMeters: number, roundingIncrement: number, unitType: com.mapbox.navigation.base.formatter.UnitType, locale: java.util.Locale): number;
            public formatDistance(distanceInMeters: number, roundingIncrement: number, unitType: com.mapbox.navigation.base.formatter.UnitType): number;
            public formatDistance(resources: number, unitStringSuffix: number, this_: com.mapbox.navigation.base.formatter.UnitType, distanceInMeters: globalAndroid.content.Context, roundingIncrement: java.util.Locale): com.mapbox.navigation.core.formatter.FormattedDistanceData;
          }
          export module MapboxDistanceUtil {
            export class FormattingData {
              public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil.FormattingData>;
              public copy(distance: number, distanceAsString: string, turfDistanceUnit: string, unitType: com.mapbox.navigation.base.formatter.UnitType): com.mapbox.navigation.core.formatter.MapboxDistanceUtil.FormattingData;
              public component2(): string;
              public hashCode(): number;
              public getTurfDistanceUnit(): string;
              public constructor(distance: number, distanceAsString: string, turfDistanceUnit: string, unitType: com.mapbox.navigation.base.formatter.UnitType);
              public getDistanceAsString(): string;
              public getDistance(): number;
              public toString(): string;
              public component3(): string;
              public component1(): number;
              public equals(other: any): boolean;
              public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
              public component4(): com.mapbox.navigation.base.formatter.UnitType;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil.WhenMappings>;
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
      export module core {
        export module geodeeplink {
          export class GeoDeeplink {
            public static class: java.lang.Class<com.mapbox.navigation.core.geodeeplink.GeoDeeplink>;
            public constructor(point: com.mapbox.geojson.Point, placeQuery: string);
            public equals(other: any): boolean;
            public getPlaceQuery(): string;
            public getPoint(): com.mapbox.geojson.Point;
            public hashCode(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module geodeeplink {
          export class GeoDeeplinkParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.geodeeplink.GeoDeeplinkParser>;
            public static INSTANCE: com.mapbox.navigation.core.geodeeplink.GeoDeeplinkParser;
            public static parse(query: string): com.mapbox.navigation.core.geodeeplink.GeoDeeplink;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class HistoryFiles {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.HistoryFiles>;
            public constructor(applicationContext: globalAndroid.content.Context);
            public historyRecorderAbsolutePath(this_: com.mapbox.navigation.base.options.HistoryRecorderOptions): string;
            public getApplicationContext(): globalAndroid.content.Context;
            public copilotAbsolutePath(): string;
          }
          export module HistoryFiles {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.HistoryFiles.Companion>;
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
      export module core {
        export module history {
          export class MapboxHistoryReader extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryReader>;
            public constructor(filePath: string);
            public getFilePath(): string;
            public next(): com.mapbox.navigation.core.history.model.HistoryEvent;
            public hasNext(): boolean;
            public remove(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class MapboxHistoryReaderProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryReaderProvider>;
            public static INSTANCE: com.mapbox.navigation.core.history.MapboxHistoryReaderProvider;
            public create(filePath: string): com.mapbox.navigation.core.history.MapboxHistoryReader;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class MapboxHistoryRecorder {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryRecorder>;
            public pushHistory($this$pushHistory_u24lambda_u2d3: string, this_: string): void;
            public copilotFileDirectory$libnavigation_core_release(): string;
            public getHistoryRecorderHandle$libnavigation_core_release(): com.mapbox.navigator.HistoryRecorderHandle;
            public fileDirectory(): string;
            public constructor(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions, historyRecorderHandle: com.mapbox.navigator.HistoryRecorderHandle);
            public setHistoryRecorderHandle$libnavigation_core_release(param0: com.mapbox.navigator.HistoryRecorderHandle): void;
            public stopRecording($this$stopRecording_u24lambda_u2d2: com.mapbox.navigation.core.history.SaveHistoryCallback): void;
            public startRecording(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class SaveHistoryCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.SaveHistoryCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.history.SaveHistoryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSaved(param0: string): void });
            public constructor();
            public onSaved(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export module model {
            export class HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEvent>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.history.model.HistoryEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getEventTimestamp(): number });
              public constructor();
              public getEventTimestamp(): number;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventGetStatus extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventGetStatus>;
              public constructor(eventTimestamp: number, elapsedRealtimeNanos: number);
              public getElapsedRealtimeNanos(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public getEventTimestamp(): number;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper>;
              public constructor();
              public map(this_: com.mapbox.navigator.HistoryRecord): com.mapbox.navigation.core.history.model.HistoryEvent;
            }
            export module HistoryEventMapper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper.WhenMappings>;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventPushHistoryRecord extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventPushHistoryRecord>;
              public constructor(eventTimestamp: number, type: string, properties: string);
              public getProperties(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public getEventTimestamp(): number;
              public getType(): string;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventSetRoute extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventSetRoute>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public getRouteIndex(): number;
              public getProfile(): string;
              public getGeometries(): string;
              public hashCode(): number;
              public getLegIndex(): number;
              /** @deprecated */
              public getDirectionsRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(eventTimestamp: number, navigationRoute: com.mapbox.navigation.base.route.NavigationRoute, routeIndex: number, legIndex: number, profile: string, geometries: string, waypoints: java.util.List<com.mapbox.navigation.core.history.model.HistoryWaypoint>);
              public getEventTimestamp(): number;
              public getWaypoints(): java.util.List<com.mapbox.navigation.core.history.model.HistoryWaypoint>;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventUpdateLocation extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventUpdateLocation>;
              public getLocation(): globalAndroid.location.Location;
              public hashCode(): number;
              public equals(other: any): boolean;
              public constructor(eventTimestamp: number, location: globalAndroid.location.Location);
              public toString(): string;
              public getEventTimestamp(): number;
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
      export module core {
        export module history {
          export module model {
            export class HistoryWaypoint {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryWaypoint>;
              public constructor(point: com.mapbox.geojson.Point, isSilent: boolean);
              public hashCode(): number;
              public getPoint(): com.mapbox.geojson.Point;
              public equals(other: any): boolean;
              public toString(): string;
              public isSilent(): boolean;
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
      export module core {
        export module internal {
          export abstract class HistoryRecordingSessionState {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState>;
            public getSessionId(): string;
          }
          export module HistoryRecordingSessionState {
            export class ActiveGuidance extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.ActiveGuidance>;
              public constructor(sessionId: string);
              public copy(sessionId: string): com.mapbox.navigation.core.internal.HistoryRecordingSessionState.ActiveGuidance;
              public hashCode(): number;
              public getSessionId(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public component1(): string;
            }
            export class FreeDrive extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.FreeDrive>;
              public constructor(sessionId: string);
              public hashCode(): number;
              public copy(sessionId: string): com.mapbox.navigation.core.internal.HistoryRecordingSessionState.FreeDrive;
              public getSessionId(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public component1(): string;
            }
            export class Idle extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.Idle>;
              public static INSTANCE: com.mapbox.navigation.core.internal.HistoryRecordingSessionState.Idle;
              public getSessionId(): string;
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
      export module core {
        export module internal {
          export class HistoryRecordingStateChangeObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onShouldStartRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void; onShouldStopRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void; onShouldCancelRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void });
            public constructor();
            public onShouldCancelRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
            public onShouldStartRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
            public onShouldStopRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class MapboxNavigationSDK {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.MapboxNavigationSDK>;
            public static INSTANCE: com.mapbox.navigation.core.internal.MapboxNavigationSDK;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class MapboxNavigationSDKInitializer extends androidx.startup.Initializer<com.mapbox.navigation.core.internal.MapboxNavigationSDK> {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.MapboxNavigationSDKInitializer>;
            public dependencies(): java.util.List<java.lang.Class<any>>;
            public constructor();
            public create(context: globalAndroid.content.Context): com.mapbox.navigation.core.internal.MapboxNavigationSDK;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class PredictiveCache {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.PredictiveCache>;
            public static INSTANCE: com.mapbox.navigation.core.internal.PredictiveCache;
            /** @deprecated */
            public createMapsController(cacheControllers: any, locationOptions: com.mapbox.common.TileStore, this_: string, mapboxMap: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): void;
            public clean(): void;
            public getNavPredictiveCacheLocationOptions$libnavigation_core_release(): java.util.Set<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions>;
            public getMapsPredictiveCacheLocationOptionsTileVariant$libnavigation_core_release(): java.util.Map<any, java.util.Map<string, any>>;
            public removeAllMapControllersFromDescriptors(mapboxMap: any): void;
            public createMapsControllers(it: any, item$iv$iv: com.mapbox.common.TileStore, $this$mapTo$iv$iv: java.util.List<any>): void;
            public getCachedMapsPredictiveCacheControllersTileVariant$libnavigation_core_release(): java.util.Map<any, java.util.Map<string, com.mapbox.navigator.PredictiveCacheController>>;
            public init(): void;
            public getMapsPredictiveCacheLocationOptions$libnavigation_core_release(): java.util.Map<any, any>;
            /** @deprecated */
            public currentMapsPredictiveCacheControllers(mapboxMap: any): java.util.List<string>;
            public createNavigationController(this_: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): void;
            public getCachedMapsPredictiveCacheControllers$libnavigation_core_release(): java.util.Map<any, java.util.List<any>>;
            public getCachedNavigationPredictiveCacheControllers$libnavigation_core_release(): java.util.Set<com.mapbox.navigator.PredictiveCacheController>;
            /** @deprecated */
            public removeAllMapControllersFromTileVariants(mapboxMap: any): void;
            /** @deprecated */
            public removeMapControllers(it: any, param1: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class ReachabilityService {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.ReachabilityService>;
            public static INSTANCE: com.mapbox.navigation.core.internal.ReachabilityService;
            public removeReachabilityObserver(reachabilityObserverId: number): void;
            public addReachabilityObserver(connectivityHandler: com.mapbox.navigation.utils.internal.ConnectivityHandler): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class RouteProgressData {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.RouteProgressData>;
            public component2(): number;
            public equals(other: any): boolean;
            public constructor(legIndex: number, routeGeometryIndex: number, legGeometryIndex: java.lang.Integer);
            public component3(): java.lang.Integer;
            public getLegGeometryIndex(): java.lang.Integer;
            public getLegIndex(): number;
            public hashCode(): number;
            public component1(): number;
            public copy(legIndex: number, routeGeometryIndex: number, legGeometryIndex: java.lang.Integer): com.mapbox.navigation.core.internal.RouteProgressData;
            public toString(): string;
            public getRouteGeometryIndex(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class RoutesProgressData {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.RoutesProgressData>;
            public getAlternatives(): java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>;
            public equals(other: any): boolean;
            public constructor(primary: com.mapbox.navigation.core.internal.RouteProgressData, alternatives: java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>);
            public component1(): com.mapbox.navigation.core.internal.RouteProgressData;
            public copy(primary: com.mapbox.navigation.core.internal.RouteProgressData, alternatives: java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>): com.mapbox.navigation.core.internal.RoutesProgressData;
            public component2(): java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>;
            public hashCode(): number;
            public getPrimary(): com.mapbox.navigation.core.internal.RouteProgressData;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export module accounts {
            export class MapboxNavigationAccounts {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.accounts.MapboxNavigationAccounts>;
              public static INSTANCE: com.mapbox.navigation.core.internal.accounts.MapboxNavigationAccounts;
              public obtainUrlWithSkuToken($this$obtainUrlWithSkuToken_u24lambda_u2d0: java.net.URL): java.net.URL;
              public obtainSkuId$libnavigation_core_release(): string;
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
      export module core {
        export module internal {
          export module dump {
            export class HelpDumpInterceptor extends com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.HelpDumpInterceptor>;
              public constructor();
              public description(): string;
              public command(): string;
              public intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void;
              public intercept(it: java.io.FileDescriptor, element$iv: java.io.PrintWriter, $this$forEach$iv: java.util.List<string>): void;
              public availableCommands(): java.util.List<any>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpHandler {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpHandler>;
              public constructor();
              public handle(this_: java.io.FileDescriptor, fd: java.io.PrintWriter, writer: androidNative.Array<string>): void;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { command(): string; description(): string; availableCommands(): java.util.List<any>; intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void });
              public constructor();
              public description(): string;
              public command(): string;
              public intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void;
              public availableCommands(): java.util.List<any>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpRegistry {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpRegistry>;
              public static INSTANCE: com.mapbox.navigation.core.internal.dump.MapboxDumpRegistry;
              public getDefaultInterceptor(): com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor;
              public setDefaultInterceptor(value: com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor): void;
              public removeInterceptors(interceptors: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): void;
              public addInterceptors(interceptors: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): boolean;
              public getInterceptors(command: string): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              public getInterceptors(): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpRegistryDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpRegistryDelegate>;
              public constructor();
              public getDefaultInterceptor(): com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor;
              public setDefaultInterceptor(it: com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor): void;
              public removeInterceptors(interceptors: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): void;
              public addInterceptors(interceptors: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): boolean;
              public getInterceptors(it: string): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              public getInterceptors(): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
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
      export module core {
        export module internal {
          export module extensions {
            export class AttachOnLifecycle {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.AttachOnLifecycle>;
              public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
              public constructor(attachEvent: androidx.lifecycle.Lifecycle.Event, detachEvent: androidx.lifecycle.Lifecycle.Event, mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation, observer: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver);
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationExtensions {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationExtensions>;
              public static flowRoutesUpdated($this$flowRoutesUpdated: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.directions.session.RoutesUpdatedResult>;
              public static flowRouteProgress($this$flowRouteProgress: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public static flowSetNavigationRoutesStarted($this$flowSetNavigationRoutesStarted: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.directions.session.RoutesSetStartedParams>;
              public static flowVoiceInstructions($this$flowVoiceInstructions: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public static unregisterHistoryRecordingStateChangeObserver($this$unregisterHistoryRecordingStateChangeObserver: com.mapbox.navigation.core.MapboxNavigation, observer: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
              public static flowRouteAlternativeObserver($this$flowRouteAlternativeObserver: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<any>;
              public static flowLocationMatcherResult($this$flowLocationMatcherResult: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.LocationMatcherResult>;
              public static flowNavigationSessionState($this$flowNavigationSessionState: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.NavigationSessionState>;
              public static flowOnWaypointArrival($this$flowOnWaypointArrival: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public static registerHistoryRecordingStateChangeObserver($this$registerHistoryRecordingStateChangeObserver: com.mapbox.navigation.core.MapboxNavigation, observer: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
              public static flowNewRawLocation($this$flowNewRawLocation: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<globalAndroid.location.Location>;
              public static flowTripSessionState($this$flowTripSessionState: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static retrieveCopilotHistoryRecorder($this$retrieveCopilotHistoryRecorder: com.mapbox.navigation.core.MapboxNavigation): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
              public static flowOnNextRouteLegStart($this$flowOnNextRouteLegStart: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteLegProgress>;
              public static flowOnFinalDestinationArrival($this$flowOnFinalDestinationArrival: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationObserverChain extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationObserverChain>;
              public constructor();
              public remove(observer: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
              public onDetached(it: com.mapbox.navigation.core.MapboxNavigation): void;
              public removeAndDetach(it: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public onAttached(it: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public removeAll(observers: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public clear(): void;
              public toList(): java.util.List<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>;
              public addAll(observers: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public add(observer: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationObserverEx {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationObserverEx>;
              public static navigationListOf(param0: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
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
      export module core {
        export module internal {
          export module lifecycle {
            export class CarAppLifecycleOwner {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.lifecycle.CarAppLifecycleOwner>;
              public constructor();
              public getStartedReferenceCounter$libnavigation_core_release(): androidx.lifecycle.DefaultLifecycleObserver;
              public attach(lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
              public isConfigurationChanging(): boolean;
              public getActivityLifecycleCallbacks$libnavigation_core_release(): globalAndroid.app.Application.ActivityLifecycleCallbacks;
              public getLifecycle(): androidx.lifecycle.Lifecycle;
              public detach(this_: androidx.lifecycle.LifecycleOwner): void;
              public attachAllActivities(application: globalAndroid.app.Application): void;
            }
            export module CarAppLifecycleOwner {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.lifecycle.CarAppLifecycleOwner.Companion>;
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
      export module core {
        export module internal {
          export module telemetry {
            export class CustomEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.CustomEvent>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.CustomEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export module CustomEvent {
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.CustomEvent.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.CustomEvent$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
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
      export module core {
        export module internal {
          export module telemetry {
            export class NavigationCustomEventType {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.NavigationCustomEventType>;
              public static INSTANCE: com.mapbox.navigation.core.internal.telemetry.NavigationCustomEventType;
              public static ANALYTICS: string = 'analytics';
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
      export module core {
        export module internal {
          export module telemetry {
            export class UserFeedback {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.UserFeedback>;
              public getFeedbackId(): string;
              public getScreenshot(): string;
              public hashCode(): number;
              public getLocation(): com.mapbox.geojson.Point;
              public equals(other: any): boolean;
              public getSource(): string;
              public toString(): string;
              public constructor(feedbackId: string, feedbackType: string, source: string, description: string, screenshot: string, feedbackSubType: androidNative.Array<string>, location: com.mapbox.geojson.Point);
              public getDescription(): string;
              public getFeedbackType(): string;
              public getFeedbackSubType(): androidNative.Array<string>;
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
      export module core {
        export module internal {
          export module telemetry {
            export class UserFeedbackCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewUserFeedback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedback): void });
              public constructor();
              public onNewUserFeedback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedback): void;
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
      export module core {
        export module internal {
          export module utils {
            export class CoroutineUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.CoroutineUtils>;
              public static INSTANCE: com.mapbox.navigation.core.internal.utils.CoroutineUtils;
              public createScope(parentJob: kotlinx.coroutines.Job, additionalContext: any): kotlinx.coroutines.CoroutineScope;
              public createChildScope(parentScope: kotlinx.coroutines.CoroutineScope): kotlinx.coroutines.CoroutineScope;
              public withTimeoutOrDefault(default_: number, default_: any, block: any, $continuation: any): any;
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
      export module core {
        export module internal {
          export module utils {
            export class InternalUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.InternalUtils>;
              public static INSTANCE: com.mapbox.navigation.core.internal.utils.InternalUtils;
              public getUNCONDITIONAL_POLLING_INTERVAL_MILLISECONDS$libnavigation_core_release(): number;
              public getUNCONDITIONAL_POLLING_PATIENCE_MILLISECONDS$libnavigation_core_release(): number;
              public setUnconditionalPollingInterval(intervalInMillis: java.lang.Long): void;
              public setUNCONDITIONAL_POLLING_INTERVAL_MILLISECONDS$libnavigation_core_release(param0: number): void;
              public setUnconditionalPollingPatience(patienceInMillis: java.lang.Long): void;
              public setUNCONDITIONAL_POLLING_PATIENCE_MILLISECONDS$libnavigation_core_release(param0: number): void;
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
      export module core {
        export module internal {
          export module utils {
            export abstract class ModuleParams {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams>;
            }
            export module ModuleParams {
              export class NavigationRouter extends com.mapbox.navigation.core.internal.utils.ModuleParams {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams.NavigationRouter>;
                public getNativeRouter(): com.mapbox.navigator.RouterInterface;
                public getRouteParsingManager(): com.mapbox.navigation.base.internal.utils.RouteParsingManager;
                public getAccessToken(): string;
                public getThreadController(): com.mapbox.navigation.utils.internal.ThreadController;
                public constructor(accessToken: string, nativeRouter: com.mapbox.navigator.RouterInterface, threadController: com.mapbox.navigation.utils.internal.ThreadController, routeParsingManager: com.mapbox.navigation.base.internal.utils.RouteParsingManager);
              }
              export class NavigationTripNotification extends com.mapbox.navigation.core.internal.utils.ModuleParams {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams.NavigationTripNotification>;
                public getTripNotificationInterceptorOwner(): com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner;
                public constructor(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions, tripNotificationInterceptorOwner: com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner, distanceFormatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
                public getNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
                public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
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
      export module core {
        export module lifecycle {
          export class ForwardMapboxNavigation {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.ForwardMapboxNavigation>;
            public static forwardMapboxNavigation(attach: any, detach: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationApp {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationApp>;
            public static INSTANCE: com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static registerObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static attachAllActivities(param0: globalAndroid.app.Application): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getObserver(clazz: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public static setup(param0: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
            public static detach(param0: androidx.lifecycle.LifecycleOwner): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static setup(param0: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static disable(): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getObserver(kClass: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public static current(): com.mapbox.navigation.core.MapboxNavigation;
            public static isSetup(): boolean;
            public static getObservers(kClass: any): java.util.List<any>;
            public static unregisterObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getObservers(clazz: java.lang.Class<any>): java.util.List<any>;
            public static attach(param0: androidx.lifecycle.LifecycleOwner): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationAppDelegate {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationAppDelegate>;
            public unregisterObserver(mapboxNavigationObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public current(): com.mapbox.navigation.core.MapboxNavigation;
            public getObservers(kClass: any): java.util.List<any>;
            public constructor();
            public attach(lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
            public getObserver(clazz: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public disable(): void;
            public getObserver(kClass: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
            public registerObserver(mapboxNavigationObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public getObservers(clazz: java.lang.Class<any>): java.util.List<any>;
            public detach(lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
            public setup($this$setup_u24lambda_u2d0: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): com.mapbox.navigation.core.lifecycle.MapboxNavigationAppDelegate;
            public setSetup(param0: boolean): void;
            public attachAllActivities(application: globalAndroid.app.Application): void;
            public isSetup(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void; onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void });
            public constructor();
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationOwner {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner>;
            public current(): com.mapbox.navigation.core.MapboxNavigation;
            public constructor();
            public getObserver(clazz: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public getCarAppLifecycleObserver$libnavigation_core_release(): androidx.lifecycle.DefaultLifecycleObserver;
            public unregister(it: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public getObservers(clazz: any): java.util.List<any>;
            public getObservers(clazz: java.lang.Class<any>): java.util.List<any>;
            public getObserver(clazz: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public disable(): void;
            public setup(navigationOptionsProvider: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): void;
            public register(it: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner;
          }
          export module MapboxNavigationOwner {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner.Companion>;
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
      export module core {
        export module lifecycle {
          export class NavigationOptionsProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { createNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions });
            public constructor();
            public createNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class RequireMapboxNavigation {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.RequireMapboxNavigation>;
            public static requireMapboxNavigation($this$requireMapboxNavigation: androidx.lifecycle.LifecycleOwner, onCreatedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onStartedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onResumedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onInitialize: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class RequireMapboxNavigationDelegate extends any<any, com.mapbox.navigation.core.MapboxNavigation> {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.RequireMapboxNavigationDelegate>;
            public constructor(lifecycleOwner: androidx.lifecycle.LifecycleOwner, onCreatedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onStartedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onResumedObserver: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, onInitialize: any);
            public getValue(mapboxNavigation: any, this_: any): com.mapbox.navigation.core.MapboxNavigation;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class CacheHandleWrapper {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.CacheHandleWrapper>;
            public static INSTANCE: com.mapbox.navigation.core.navigator.CacheHandleWrapper;
            public requestRoadGraphDataUpdate(cache: com.mapbox.navigator.CacheHandleInterface, callback: com.mapbox.navigation.core.RoadGraphDataUpdateCallback): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class LocationEx {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.LocationEx>;
            public static toLocation(param0: com.mapbox.navigator.FixLocation): globalAndroid.location.Location;
            public static toBundle(contents: java.util.HashMap<string, com.mapbox.bindgen.Value>, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
            public static toMap(value: globalAndroid.os.Bundle): java.util.HashMap<string, com.mapbox.bindgen.Value>;
            public static toLocations(param0: java.util.List<any>): java.util.List<globalAndroid.location.Location>;
            public static toFixLocation(bearingAccuracy: globalAndroid.location.Location): com.mapbox.navigator.FixLocation;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class NavigatorMapper {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.NavigatorMapper>;
            public static getRouteProgressFrom(route: com.mapbox.navigation.base.route.NavigationRoute, status: com.mapbox.navigator.NavigationStatus, remainingWaypoints: number, bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions, instructionIndex: java.lang.Integer, lastVoiceInstruction: com.mapbox.api.directions.v5.models.VoiceInstructions, upcomingRoadObjects: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>, currentLegDestination: com.mapbox.navigation.base.route.LegWaypoint): com.mapbox.navigation.base.trip.model.RouteProgress;
            public static getLocationMatcherResult($this$getLocationMatcherResult: com.mapbox.navigation.navigator.internal.TripStatus, enhancedLocation: globalAndroid.location.Location, keyPoints: java.util.List<any>, road: com.mapbox.navigation.base.road.model.Road): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
            public static getCurrentBannerInstructions(param0: com.mapbox.navigator.NavigationStatus, banners: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.api.directions.v5.models.BannerInstructions;
            public static convertState($this$convertState: com.mapbox.navigator.RouteState): com.mapbox.navigation.base.trip.model.RouteProgressState;
            public static prepareSpeedLimit(param0: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.speed.model.SpeedLimit;
            public static getTripStatusFrom($this$getTripStatusFrom: com.mapbox.navigator.NavigationStatus, route: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.navigator.internal.TripStatus;
            public static mapToDirectionsApi($this$mapToDirectionsApi: com.mapbox.navigator.VoiceInstruction): com.mapbox.api.directions.v5.models.VoiceInstructions;
            public static prepareSpeedLimitInfo(speedLimitUnit: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
          }
          export module NavigatorMapper {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.NavigatorMapper.WhenMappings>;
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
      export module core {
        export module navigator {
          export class TilesetDescriptorFactory {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory>;
            public constructor(routingTilesOptions: com.mapbox.navigation.base.options.RoutingTilesOptions, cache: com.mapbox.navigator.CacheHandle, nativeFactoryWrapper: com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper);
            public build(tilesDataset: string): com.mapbox.common.TilesetDescriptor;
            public build(tilesDataset: string, tilesProfile: string, tilesVersion: string): com.mapbox.common.TilesetDescriptor;
            public getSpecificVersion(tilesVersion: string): com.mapbox.common.TilesetDescriptor;
            public build(tilesDataset: string, tilesProfile: string): com.mapbox.common.TilesetDescriptor;
            public build(): com.mapbox.common.TilesetDescriptor;
            public getLatest(): com.mapbox.common.TilesetDescriptor;
          }
          export module TilesetDescriptorFactory {
            export class NativeFactoryWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.navigator.TilesetDescriptorFactory$NativeFactoryWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor; getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor; build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor });
              public constructor();
              public getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor;
              public getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor;
              public build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor;
            }
            export class NativeFactoryWrapperImpl extends com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapperImpl>;
              public constructor();
              public getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor;
              public getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor;
              public getLatest(cache: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor;
              public getSpecificVersion(cache: com.mapbox.navigator.CacheHandle, tilesVersion: string): com.mapbox.common.TilesetDescriptor;
              public build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor;
              public build(tilesDatasetAndProfile: string, tilesVersion: string): com.mapbox.common.TilesetDescriptor;
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
      export module core {
        export module preview {
          export class NativeRoutesDataParser extends com.mapbox.navigation.core.preview.RoutesDataParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.NativeRoutesDataParser>;
            public parse($continuation: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, $result: any): any;
            public constructor();
            public parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesDataParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesDataParser>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesDataParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any });
            public constructor();
            public parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreview {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreview>;
            public getPrimaryRoute(): com.mapbox.navigation.base.route.NavigationRoute;
            public equals(other: any): boolean;
            public hashCode(): number;
            public constructor(routesList: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, alternativesMetadata: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, originalRoutesList: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, primaryRouteIndex: number);
            public getRoutesList(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getOriginalRoutesList(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getPrimaryRouteIndex(): number;
            public toString(): string;
            public getAlternativesMetadata(): java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewController {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewController>;
            public unregisterAllRoutesPreviewObservers(): void;
            public previewNavigationRoutes(routesToPreview: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, primaryRouteIndex: number, onCompleted: any): void;
            public changeRoutesPreviewPrimaryRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
            public unregisterRoutesPreviewObserver(observer: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
            public registerRoutesPreviewObserver(it: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
            public constructor(routesDataParser: com.mapbox.navigation.core.preview.RoutesDataParser, scope: kotlinx.coroutines.CoroutineScope);
            public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewExtra {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewExtra>;
            public static INSTANCE: com.mapbox.navigation.core.preview.RoutesPreviewExtra;
            public static PREVIEW_NEW: string = 'PREVIEW_NEW';
            public static PREVIEW_CLEAN_UP: string = 'PREVIEW_CLEAN_UP';
          }
          export module RoutesPreviewExtra {
            export class RoutePreviewUpdateReason {
              public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewExtra.RoutePreviewUpdateReason>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesPreviewExtra$RoutePreviewUpdateReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
      export module core {
        export module preview {
          export class RoutesPreviewObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesPreviewObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void });
            public constructor();
            public routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewUpdate {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewUpdate>;
            public equals(other: any): boolean;
            public constructor(reason: string, routesPreview: com.mapbox.navigation.core.preview.RoutesPreview);
            public hashCode(): number;
            public getReason(): string;
            public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module replay {
          export class MapboxReplayer {
            public static class: java.lang.Class<com.mapbox.navigation.core.replay.MapboxReplayer>;
            public constructor();
            public pushRealLocation(context: globalAndroid.content.Context, eventTimestamp: number): void;
            public finish(): void;
            public unregisterObservers(): void;
            public eventRealtimeOffset(eventTimestamp: number): number;
            public seekTo(indexOfEvent: com.mapbox.navigation.core.replay.history.ReplayEventBase): void;
            public stop(): void;
            public playFirstLocation(): void;
            public durationSeconds(): number;
            public clearEvents(): void;
            public eventSeconds(this_: number): number;
            public isPlaying$libnavigation_core_release(): boolean;
            public unregisterObserver(observer: com.mapbox.navigation.core.replay.history.ReplayEventsObserver): void;
            public playbackSpeed(this_: number): void;
            public seekTo(it: number): void;
            public pushEvents(events: java.util.List<any>): com.mapbox.navigation.core.replay.MapboxReplayer;
            public play(): void;
            public clearPlayedEvents(): void;
            public registerObserver(observer: com.mapbox.navigation.core.replay.history.ReplayEventsObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module replay {
          export class ReplayLocationEngine extends com.mapbox.navigation.core.replay.history.ReplayEventsObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.replay.ReplayLocationEngine>;
            public requestLocationUpdates(request: com.mapbox.android.core.location.LocationEngineRequest, callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, looper: globalAndroid.os.Looper): void;
            public removeLocationUpdates(callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public requestLocationUpdates(request: com.mapbox.android.core.location.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
            public replayEvents(replayEventBase: java.util.List<any>): void;
            public cleanUpLastLocation$libnavigation_core_release(): void;
            public getLastLocation(callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public constructor(mapboxReplayer: com.mapbox.navigation.core.replay.MapboxReplayer);
            public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
            public replayEvents(param0: java.util.List<any>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module replay {
          export module history {
            export class ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayEventBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getEventTimestamp(): number });
              public constructor();
              public getEventTimestamp(): number;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventGetStatus extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventGetStatus>;
              public component1(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public constructor(eventTimestamp: number);
              public copy(eventTimestamp: number): com.mapbox.navigation.core.replay.history.ReplayEventGetStatus;
              public toString(): string;
              public getEventTimestamp(): number;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventLocation>;
              public component7(): java.lang.Double;
              public getBearing(): java.lang.Double;
              public hashCode(): number;
              public getProvider(): string;
              public getAccuracyHorizontal(): java.lang.Double;
              public component2(): number;
              public constructor(lon: number, lat: number, provider: string, time: java.lang.Double, altitude: java.lang.Double, accuracyHorizontal: java.lang.Double, bearing: java.lang.Double, speed: java.lang.Double);
              public getTime(): java.lang.Double;
              public getSpeed(): java.lang.Double;
              public component6(): java.lang.Double;
              public copy(lon: number, lat: number, provider: string, time: java.lang.Double, altitude: java.lang.Double, accuracyHorizontal: java.lang.Double, bearing: java.lang.Double, speed: java.lang.Double): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public toString(): string;
              public getLon(): number;
              public component8(): java.lang.Double;
              public component3(): string;
              public getAltitude(): java.lang.Double;
              public component1(): number;
              public component5(): java.lang.Double;
              public getLat(): number;
              public equals(other: any): boolean;
              public component4(): java.lang.Double;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventSimulator {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventSimulator>;
              public isPlaying(): boolean;
              public stopSimulator(): void;
              public seekTo(this_: number): void;
              public playbackSpeed(scale: number): void;
              public constructor(replayEvents: com.mapbox.navigation.core.replay.history.ReplayEvents);
              public eventRealtimeOffset(eventTime: number): number;
              public clearPlayedEvents(): void;
              public pushEvents(events: java.util.List<any>): void;
              public stopAndClearEvents(): void;
              public launchSimulator(it: any): kotlinx.coroutines.Job;
            }
            export module ReplayEventSimulator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventSimulator.Companion>;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventUpdateLocation extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation>;
              public component1(): number;
              public hashCode(): number;
              public getLocation(): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public equals(other: any): boolean;
              public constructor(eventTimestamp: number, location: com.mapbox.navigation.core.replay.history.ReplayEventLocation);
              public component2(): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public toString(): string;
              public getEventTimestamp(): number;
              public copy(eventTimestamp: number, location: com.mapbox.navigation.core.replay.history.ReplayEventLocation): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEvents {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEvents>;
              public getEvents(): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public copy(events: java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>): com.mapbox.navigation.core.replay.history.ReplayEvents;
              public component1(): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public toString(): string;
              public constructor(events: java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>);
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayEventsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { replayEvents(param0: java.util.List<any>): void });
              public constructor();
              public replayEvents(param0: java.util.List<any>): void;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistoryEventMapper<Event> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { map(param0: Event): com.mapbox.navigation.core.replay.history.ReplayEventBase });
              public constructor();
              public map(param0: Event): com.mapbox.navigation.core.replay.history.ReplayEventBase;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistoryMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper>;
              public mapToReplayEvent(historyEvent: com.mapbox.navigation.core.history.model.HistoryEvent): com.mapbox.navigation.core.replay.history.ReplayEventBase;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
            }
            export module ReplayHistoryMapper {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder>;
                public build(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper;
                public locationMapper($this$locationMapper_u24lambda_u2d0: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventUpdateLocation>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public setRouteMapper($this$setRouteMapper_u24lambda_u2d1: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventSetRoute>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public constructor();
                public statusMapper($this$statusMapper_u24lambda_u2d2: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventGetStatus>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public pushEventMappers($this$pushEventMappers_u24lambda_u2d3: java.util.List<any>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
              }
              export module Builder {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder.Companion>;
                }
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistorySession extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySession>;
              public constructor();
              public onAttached(it: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public setOptions(options: com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions): void;
              public setHistoryFile(it: string): void;
              public getOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions>;
            }
            export module ReplayHistorySession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySession.Companion>;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistorySessionOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions>;
              public getReplayHistoryMapper(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper;
              public hashCode(): number;
              public getFilePath(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
              public getEnableSetRoute(): boolean;
            }
            export module ReplayHistorySessionOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder>;
                public build(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions;
                public filePath($this$filePath_u24lambda_u2d1: string): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
                public constructor();
                public enableSetRoute($this$enableSetRoute_u24lambda_u2d3: boolean): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
                public replayHistoryMapper($this$replayHistoryMapper_u24lambda_u2d2: com.mapbox.navigation.core.replay.history.ReplayHistoryMapper): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
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
      export module core {
        export module replay {
          export module history {
            export class ReplaySetNavigationRoute extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute>;
              public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public getEventTimestamp(): number;
            }
            export module ReplaySetNavigationRoute {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder>;
                public constructor(eventTimestamp: number);
                public route($this$route_u24lambda_u2d0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder;
                public build(): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute;
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
      export module core {
        export module replay {
          export module history {
            export class ReplaySetRoute extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetRoute>;
              public component2(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public component1(): number;
              public hashCode(): number;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public equals(other: any): boolean;
              public toString(): string;
              public getEventTimestamp(): number;
              public constructor(eventTimestamp: number, route: com.mapbox.api.directions.v5.models.DirectionsRoute);
              public copy(eventTimestamp: number, route: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.core.replay.history.ReplaySetRoute;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayPolylineDecodeStream extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayPolylineDecodeStream>;
              public skip(this_: number): void;
              public getEncodedPath(): string;
              public getCurrent(): com.mapbox.geojson.Point;
              public constructor(encodedPath: string, precision: number);
              public hasNext(): boolean;
              public remove(): void;
              public decode(current: number, param1: string): java.util.List<com.mapbox.geojson.Point>;
              public next(): com.mapbox.geojson.Point;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayProgressObserver extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayProgressObserver>;
              public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
              public updateOptions(options: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): com.mapbox.navigation.core.replay.route.ReplayProgressObserver;
              public constructor(mapboxReplayer: com.mapbox.navigation.core.replay.MapboxReplayer, replayRouteMapper: com.mapbox.navigation.core.replay.route.ReplayRouteMapper);
              public onRouteProgressChanged(routeProgressRouteLeg: com.mapbox.navigation.base.trip.model.RouteProgress): void;
              public constructor(mapboxReplayer: com.mapbox.navigation.core.replay.MapboxReplayer);
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteDriver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteDriver>;
              public constructor();
              public driveRouteLeg(legAnnotation: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public drivePointList(distinctPoints: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, smoothLocations: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteInterpolator {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteInterpolator>;
              public constructor();
              public createSpeedProfile(this_: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, options: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public createBearingProfile(toPoint: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>): void;
              public interpolateSpeed(speedSteps: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, this_: number, options: number, startSpeed: number): com.mapbox.navigation.core.replay.route.ReplayRouteSegment;
            }
            export module ReplayRouteInterpolator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteInterpolator.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public getTimeSeconds(): number;
              public setDistance(param0: number): void;
              public setTimeMillis(param0: number): void;
              public setSpeedMps(param0: number): void;
              public getDistance(): number;
              public toString(): string;
              public getTimeMillis(): number;
              public getBearing(): number;
              public getPoint(): com.mapbox.geojson.Point;
              public setBearing(param0: number): void;
              public getSpeedMps(): number;
              public getRouteIndex(): java.lang.Integer;
              public constructor(routeIndex: java.lang.Integer, point: com.mapbox.geojson.Point);
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteMapper>;
              public mapRouteLegAnnotation(it: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public constructor();
              /** @deprecated */
              public constructor(options: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, logger: com.mapbox.base.common.logger.Logger);
              public mapGeometry(geometry: string): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapDirectionsRouteGeometry(usesPolyline6: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public setOptions(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): void;
              public mapPointList(it: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public static mapToUpdateLocation(eventTimestamp: number, location: globalAndroid.location.Location): com.mapbox.navigation.core.replay.history.ReplayEventBase;
              public static mapToUpdateLocation(eventTimestamp: number, point: com.mapbox.geojson.Point): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
              public constructor(options: com.mapbox.navigation.core.replay.route.ReplayRouteOptions);
              public getOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
              public mapRouteLegGeometry(geometry: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapDirectionsRouteLegAnnotation(routeLeg: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
            }
            export module ReplayRouteMapper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteMapper.Companion>;
                public mapToUpdateLocation$libnavigation_core_release(location: com.mapbox.navigation.core.replay.route.ReplayRouteLocation): com.mapbox.navigation.core.replay.history.ReplayEventBase;
                public mapToUpdateLocation(eventTimestamp: number, location: globalAndroid.location.Location): com.mapbox.navigation.core.replay.history.ReplayEventBase;
                public mapToUpdateLocation(eventTimestamp: number, point: com.mapbox.geojson.Point): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteOptions>;
              public getTurnSpeedMps(): number;
              public toBuilder(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
              public getMaxSpeedMps(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getMinAcceleration(): number;
              public getFrequency(): number;
              public toString(): string;
              public getMaxAcceleration(): number;
              public getUTurnSpeedMps(): number;
            }
            export module ReplayRouteOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder>;
                public maxSpeedMps(maxSpeedMps: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public turnSpeedMps(minSpeedMps: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public frequency($this$frequency_u24lambda_u2d0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public build(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
                public uTurnSpeedMps(uTurnSpeedMps: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public maxAcceleration(maxAcceleration: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public constructor();
                public minAcceleration(minAcceleration: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSegment {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSegment>;
              public hashCode(): number;
              public component2(): number;
              public getStartSpeedMps(): number;
              public component7(): number;
              public component5(): number;
              public getEndSpeedMps(): number;
              public toString(): string;
              public getTotalDistance(): number;
              public getSpeedUpDistance(): number;
              public component8(): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public component1(): number;
              public copy(startSpeedMps: number, maxSpeedMps: number, endSpeedMps: number, totalDistance: number, speedUpDistance: number, cruiseDistance: number, slowDownDistance: number, steps: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>): com.mapbox.navigation.core.replay.route.ReplayRouteSegment;
              public constructor(startSpeedMps: number, maxSpeedMps: number, endSpeedMps: number, totalDistance: number, speedUpDistance: number, cruiseDistance: number, slowDownDistance: number, steps: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>);
              public getMaxSpeedMps(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public component6(): number;
              public getSteps(): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public component3(): number;
              public getSlowDownDistance(): number;
              public getCruiseDistance(): number;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSession extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSession>;
              public constructor();
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public getOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public setOptions($this$setOptions_u24lambda_u2d3: com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions): com.mapbox.navigation.core.replay.route.ReplayRouteSession;
            }
            export module ReplayRouteSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSession.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSessionOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions>;
              public getLocationResetEnabled(): boolean;
              public getReplayRouteOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getDecodeMinDistance(): number;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
            }
            export module ReplayRouteSessionOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder>;
                public locationResetEnabled($this$locationResetEnabled_u24lambda_u2d1: boolean): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
                public build(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
                public constructor();
                public replayRouteOptions($this$replayRouteOptions_u24lambda_u2d0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
                public decodeMinDistance($this$decodeMinDistance_u24lambda_u2d2: number): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSmoother {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSmoother>;
              public constructor();
              public smoothRoute(it: java.util.List<com.mapbox.geojson.Point>, item$iv$iv: number): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public segmentRoute(points: java.util.List<com.mapbox.geojson.Point>, startIndex: number, endIndex: number): java.util.List<com.mapbox.geojson.Point>;
              public distinctPoints(i: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.geojson.Point>;
              public distanceToSegment(p1: com.mapbox.geojson.Point, c: com.mapbox.geojson.Point, v0: com.mapbox.geojson.Point): java.lang.Double;
            }
            export module ReplayRouteSmoother {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSmoother.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteStep {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public getTimeSeconds(): number;
              public hashCode(): number;
              public component2(): number;
              public toString(): string;
              public getAcceleration(): number;
              public constructor(timeSeconds: number, acceleration: number, speedMps: number, positionMeters: number);
              public component1(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public getPositionMeters(): number;
              public component3(): number;
              public getSpeedMps(): number;
              public copy(timeSeconds: number, acceleration: number, speedMps: number, positionMeters: number): com.mapbox.navigation.core.replay.route.ReplayRouteStep;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteTraffic {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteTraffic>;
              public constructor();
              public trafficLocations(distinctRoutePoints: java.util.List<com.mapbox.geojson.Point>, distances: java.util.List<java.lang.Double>, speeds: java.util.List<java.lang.Double>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public mapToDistinctRoutePoints(it: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.geojson.Point>;
            }
            export module ReplayRouteTraffic {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteTraffic.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class RouteLegIdentifier {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.RouteLegIdentifier>;
              public constructor(routeId: string, legIndex: number);
              public copy(routeId: string, legIndex: number): com.mapbox.navigation.core.replay.route.RouteLegIdentifier;
              public hashCode(): number;
              public component2(): number;
              public getLegIndex(): number;
              public equals(other: any): boolean;
              public getRouteId(): string;
              public toString(): string;
              public component1(): string;
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
      export module core {
        export module reroute {
          export class InternalRerouteController extends com.mapbox.navigation.core.reroute.NavigationRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.InternalRerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void; reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void; getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module InternalRerouteController {
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.InternalRerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: com.mapbox.navigation.core.reroute.RerouteResult): void });
              public constructor();
              public onNewRoutes(param0: com.mapbox.navigation.core.reroute.RerouteResult): void;
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
      export module core {
        export module reroute {
          export class InternalRerouteControllerAdapter implements com.mapbox.navigation.core.reroute.InternalRerouteController, com.mapbox.navigation.core.reroute.NavigationRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteControllerAdapter>;
            public reroute(callback: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public reroute(routesCallback: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public registerRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
            public constructor(originalController: com.mapbox.navigation.core.reroute.NavigationRerouteController);
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public unregisterRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(callback: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
          }
          export module InternalRerouteControllerAdapter {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteControllerAdapter.Companion>;
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
      export module core {
        export module reroute {
          export class LegacyRerouteControllerAdapter implements com.mapbox.navigation.core.reroute.NavigationRerouteController, com.mapbox.navigation.core.reroute.RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.LegacyRerouteControllerAdapter>;
            public reroute(routesCallback: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public constructor(legacyRerouteController: com.mapbox.navigation.core.reroute.RerouteController);
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public registerRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
            public unregisterRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(callback: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class MapboxRerouteController extends com.mapbox.navigation.core.reroute.InternalRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteController>;
            public reroute(routesCallback: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public reroute(it: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public constructor(directionsSession: com.mapbox.navigation.core.directions.session.DirectionsSession, tripSession: com.mapbox.navigation.core.trip.session.TripSession, routeOptionsUpdater: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, rerouteOptions: com.mapbox.navigation.base.options.RerouteOptions, threadController: com.mapbox.navigation.utils.internal.ThreadController, compositeRerouteOptionsAdapter: com.mapbox.navigation.core.reroute.MapboxRerouteOptionsAdapter);
            public constructor(directionsSession: com.mapbox.navigation.core.directions.session.DirectionsSession, tripSession: com.mapbox.navigation.core.trip.session.TripSession, routeOptionsUpdater: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, rerouteOptions: com.mapbox.navigation.base.options.RerouteOptions, threadController: com.mapbox.navigation.utils.internal.ThreadController, evDynamicDataHolder: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public registerRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public setRerouteOptionsAdapter$libnavigation_core_release(rerouteOptionsAdapter: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public unregisterRerouteStateObserver(rerouteStateObserver: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(callback: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
          }
          export module MapboxRerouteController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteController.Companion>;
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
      export module core {
        export module reroute {
          export class MapboxRerouteOptionsAdapter extends com.mapbox.navigation.core.reroute.RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteOptionsAdapter>;
            public setExternalOptionsAdapter(param0: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
            public onRouteOptions(value: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
            public constructor(evDynamicDataHolder: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
            public constructor(internalOptionsAdapters: java.util.List<any>);
            public getExternalOptionsAdapter(): com.mapbox.navigation.core.reroute.RerouteOptionsAdapter;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class NavigationRerouteController extends com.mapbox.navigation.core.reroute.RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.NavigationRerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.NavigationRerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void; getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module NavigationRerouteController {
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.NavigationRerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
              public constructor();
              public onNewRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
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
      export module core {
        export module reroute {
          export class RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module RerouteController {
            export class RerouteStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController$RerouteStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void });
              public constructor();
              public onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void;
            }
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: java.util.List<any>): void });
              public constructor();
              public onNewRoutes(param0: java.util.List<any>): void;
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
      export module core {
        export module reroute {
          export class RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteOptionsAdapter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteOptionsAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions });
            public constructor();
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class RerouteResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteResult>;
            public getInitialLegIndex(): number;
            public equals(other: any): boolean;
            public constructor(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, initialLegIndex: number, origin: com.mapbox.navigation.base.route.RouterOrigin);
            public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public hashCode(): number;
            public getOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export abstract class RerouteState {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState>;
          }
          export module RerouteState {
            export class Failed extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Failed>;
              public isRetryable(): boolean;
              public hashCode(): number;
              public constructor(message: string, throwable: java.lang.Throwable);
              public toString(): string;
              public component1(): string;
              public component2(): java.lang.Throwable;
              public component3(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
              public copy(message: string, throwable: java.lang.Throwable, reasons: java.util.List<com.mapbox.navigation.base.route.RouterFailure>): com.mapbox.navigation.core.reroute.RerouteState.Failed;
              public constructor(message: string);
              public equals(other: any): boolean;
              public constructor(message: string, throwable: java.lang.Throwable, reasons: java.util.List<com.mapbox.navigation.base.route.RouterFailure>);
              public getThrowable(): java.lang.Throwable;
              public getMessage(): string;
              public getReasons(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
            }
            export class FetchingRoute extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.FetchingRoute>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.FetchingRoute;
            }
            export class Idle extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Idle>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.Idle;
            }
            export class Interrupted extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Interrupted>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.Interrupted;
            }
            export class RouteFetched extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.RouteFetched>;
              public component1(): com.mapbox.navigation.base.route.RouterOrigin;
              public constructor(routerOrigin: com.mapbox.navigation.base.route.RouterOrigin);
              public hashCode(): number;
              public equals(other: any): boolean;
              public copy(routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.navigation.core.reroute.RerouteState.RouteFetched;
              public toString(): string;
              public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
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
      export module core {
        export module reroute {
          export class RerouteStateObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteStateObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void });
            public constructor();
            public onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export abstract class RouteRequestResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult>;
          }
          export module RouteRequestResult {
            export class Cancellation extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Cancellation>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RouteRequestResult.Cancellation;
            }
            export class Failure extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Failure>;
              public constructor(reasons: java.util.List<com.mapbox.navigation.base.route.RouterFailure>);
              public getReasons(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
            }
            export class Success extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Success>;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public constructor(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin);
              public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
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
      export module core {
        export module routealternatives {
          export class AlternativeMetadataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata });
            public constructor();
            public getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class AlternativeRouteInfo {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo>;
            public equals(other: any): boolean;
            public getDuration(): number;
            public constructor(distance: number, duration: number);
            public hashCode(): number;
            public getDistance(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class AlternativeRouteIntersection {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection>;
            public equals(other: any): boolean;
            public getLocation(): com.mapbox.geojson.Point;
            public constructor(location: com.mapbox.geojson.Point, geometryIndexInRoute: number, geometryIndexInLeg: number, legIndex: number);
            public getLegIndex(): number;
            public hashCode(): number;
            public getGeometryIndexInRoute(): number;
            public toString(): string;
            public getGeometryIndexInLeg(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class AlternativeRouteMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
            public constructor(navigationRoute: com.mapbox.navigation.base.route.NavigationRoute, forkIntersectionOfAlternativeRoute: com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection, forkIntersectionOfPrimaryRoute: com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection, infoFromFork: com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo, infoFromStartOfPrimary: com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo, alternativeId: number);
            /** @deprecated */
            public getAlternativeId(): number;
            public equals(other: any): boolean;
            public getForkIntersectionOfPrimaryRoute(): com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection;
            public getForkIntersectionOfAlternativeRoute(): com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection;
            public hashCode(): number;
            public getInfoFromFork(): com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo;
            public getInfoFromStartOfPrimary(): com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo;
            public toString(): string;
            public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export abstract class DirectionsRequestResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult>;
          }
          export module DirectionsRequestResult {
            export abstract class ErrorResponse extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse>;
            }
            export module ErrorResponse {
              export class NotRetryableError extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.NotRetryableError>;
                public static INSTANCE: com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.NotRetryableError;
              }
              export class RetryableError extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableError>;
                public static INSTANCE: com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableError;
              }
              export class RetryableErrorWithDelay extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableErrorWithDelay>;
                public constructor(delayMilliseconds: number);
                public toString(): string;
                public component1(): number;
                public getDelayMilliseconds(): number;
                public hashCode(): number;
                public equals(other: any): boolean;
                public copy(delayMilliseconds: number): com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableErrorWithDelay;
              }
            }
            export class SuccessfulResponse extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.SuccessfulResponse>;
              public constructor(body: com.mapbox.api.directions.v5.models.DirectionsResponse);
              public getBody(): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public hashCode(): number;
              public equals(other: any): boolean;
              public copy(body: com.mapbox.api.directions.v5.models.DirectionsResponse): com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.SuccessfulResponse;
              public toString(): string;
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
      export module core {
        export module routealternatives {
          export class NavigationRouteAlternativesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void });
            public constructor();
            public onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onRouteAlternativesError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class NavigationRouteAlternativesRequestCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesRequestError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void });
            public constructor();
            public onRouteAlternativesRequestError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void;
            public onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class OnlineRouteAlternativesSwitch extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.OnlineRouteAlternativesSwitch>;
            public constructor(connectTimeoutMilliseconds: number, readTimeoutMilliseconds: number, minimumRetryInterval: number, avoidManeuverSeconds: number);
            public constructor();
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public onAttached(this_: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
      export module core {
        export module routealternatives {
          export class RouteAlternativesController extends com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesController>;
            public unregister(this_: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
            public constructor($this$nativeRouteAlternativesController_u24lambda_u2d0: com.mapbox.navigation.base.route.RouteAlternativesOptions, this_: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, options: com.mapbox.navigation.core.trip.session.TripSession, navigator: com.mapbox.navigation.utils.internal.ThreadController, tripSession: com.mapbox.navigation.base.internal.utils.RouteParsingManager);
            public register(this_: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
            public getMetadataFor(navigationRoute: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
            public processAlternativesMetadata(it: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<any>): void;
            public unregister(routeAlternativesObserver: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
            public getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
            public triggerAlternativeRequest(listener: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback): void;
            public onEVDataUpdated(data: java.util.Map<string, string>): void;
            public register(this_: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
            public unregisterAll(): void;
          }
          export module RouteAlternativesController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesController.Companion>;
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
      export module core {
        export module routealternatives {
          export class RouteAlternativesControllerProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesControllerProvider>;
            public static INSTANCE: com.mapbox.navigation.core.routealternatives.RouteAlternativesControllerProvider;
            public create(options: com.mapbox.navigation.base.route.RouteAlternativesOptions, navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, tripSession: com.mapbox.navigation.core.trip.session.TripSession, threadController: com.mapbox.navigation.utils.internal.ThreadController, routeParsingManager: com.mapbox.navigation.base.internal.utils.RouteParsingManager): com.mapbox.navigation.core.routealternatives.RouteAlternativesController;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesError {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesError>;
            public getMessage(): string;
            public equals(other: any): boolean;
            public constructor(message: string, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, throwable: java.lang.Throwable);
            public hashCode(): number;
            public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getThrowable(): java.lang.Throwable;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesRequestCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesAborted(param0: string): void });
            public constructor();
            public onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onRouteAlternativesAborted(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routeoptions {
          export class RouteOptionsUpdater {
            public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater>;
            public constructor();
            public update(msg: com.mapbox.api.directions.v5.models.RouteOptions, msg: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.core.trip.session.LocationMatcherResult): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult;
          }
          export module RouteOptionsUpdater {
            export abstract class RouteOptionsResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult>;
            }
            export module RouteOptionsResult {
              export class Error extends com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Error>;
                public getError(): java.lang.Throwable;
                public toString(): string;
                public copy(error: java.lang.Throwable): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Error;
                public constructor(error: java.lang.Throwable);
                public component1(): java.lang.Throwable;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Success extends com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Success>;
                public copy(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Success;
                public toString(): string;
                public constructor(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions);
                public getRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                public hashCode(): number;
                public component1(): com.mapbox.api.directions.v5.models.RouteOptions;
                public equals(other: any): boolean;
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
      export module core {
        export module routerefresh {
          export class DirectionsRouteDiffProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.DirectionsRouteDiffProvider>;
            public constructor();
            public buildRouteDiffs(newLeg: com.mapbox.navigation.base.route.NavigationRoute, updatedAnnotations: com.mapbox.navigation.base.route.NavigationRoute, legIndex: number): java.util.List<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class ExpiringDataRemover {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.ExpiringDataRemover>;
            public constructor(localDateProvider: any);
            public removeExpiringDataFromRoutesProgressData(it: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): com.mapbox.navigation.core.routerefresh.RoutesRefresherResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class ImmediateRouteRefreshController {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.ImmediateRouteRefreshController>;
            public cancel(): void;
            public constructor(routeRefresherExecutor: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, stateHolder: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, scope: kotlinx.coroutines.CoroutineScope, listener: com.mapbox.navigation.core.routerefresh.RouteRefresherListener, attemptListener: com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener);
            public requestRoutesRefresh(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, callback: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class PlannedRouteRefreshController {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController>;
            public static MAX_RETRY_COUNT: number = 2;
            public resume(): void;
            public constructor(routeRefresherExecutor: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, delayer: com.mapbox.navigation.core.utils.Delayer, stateHolder: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, listener: com.mapbox.navigation.core.routerefresh.RouteRefresherListener, attemptListener: com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener, parentScope: kotlinx.coroutines.CoroutineScope, retryStrategy: com.mapbox.navigation.core.routerefresh.RetryRouteRefreshStrategy);
            public constructor(routeRefresherExecutor: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, routeRefreshOptions: com.mapbox.navigation.base.route.RouteRefreshOptions, stateHolder: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, parentScope: kotlinx.coroutines.CoroutineScope, listener: com.mapbox.navigation.core.routerefresh.RouteRefresherListener, attemptListener: com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener, timeProvider: com.mapbox.navigation.utils.internal.Time);
            public pause(): void;
            public getRoutesToRefresh(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public startRoutesRefreshing(it: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          }
          export module PlannedRouteRefreshController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController.Companion>;
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
      export module core {
        export module routerefresh {
          export class QueuedRequest {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.QueuedRequest>;
            public getStartCallback(): any;
            public getFinishCallback(): any;
            public equals(other: any): boolean;
            public copy(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, startCallback: any, finishCallback: any): com.mapbox.navigation.core.routerefresh.QueuedRequest;
            public constructor(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, startCallback: any, finishCallback: any);
            public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public hashCode(): number;
            public component2(): any;
            public component3(): any;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RefreshObserversManager {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RefreshObserversManager>;
            public registerInvalidatedObserver(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
            public constructor();
            public registerRefreshObserver(observer: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public unregisterAllObservers(): void;
            public onRoutesRefreshed(observer: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
            public unregisterRefreshObserver(observer: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public onRoutesInvalidated(observer: com.mapbox.navigation.core.RoutesInvalidatedParams): void;
            public unregisterInvalidatedObserver(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RetryRouteRefreshStrategy {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RetryRouteRefreshStrategy>;
            public shouldRetry(): boolean;
            public onNextAttempt(): void;
            public constructor(maxAttemptsCount: number);
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshController extends com.mapbox.navigation.core.directions.session.RoutesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshController>;
            public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
            public destroy$libnavigation_core_release(): void;
            public resumeRouteRefreshes(): void;
            public unregisterRouteRefreshObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public constructor(routeRefreshParentJob: kotlinx.coroutines.Job, plannedRouteRefreshController: com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController, immediateRouteRefreshController: com.mapbox.navigation.core.routerefresh.ImmediateRouteRefreshController, stateHolder: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, refreshObserversManager: com.mapbox.navigation.core.routerefresh.RefreshObserversManager, routeRefresherResultProcessor: com.mapbox.navigation.core.routerefresh.RouteRefresherResultProcessor);
            public registerRoutesInvalidatedObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
            public unregisterRoutesInvalidatedObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.RoutesInvalidatedObserver): void;
            public onRoutesChanged(result: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
            public pauseRouteRefreshes(): void;
            public requestImmediateRouteRefresh(): void;
            public registerRouteRefreshObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public registerRouteRefreshStateObserver(routeRefreshStatesObserver: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public unregisterRouteRefreshStateObserver(routeRefreshStatesObserver: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshControllerProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshControllerProvider>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshControllerProvider;
            public createRouteRefreshController(routeRefreshParentJob: kotlinx.coroutines.CoroutineDispatcher, routeRefresherExecutor: kotlinx.coroutines.CoroutineDispatcher, stateHolder: com.mapbox.navigation.base.route.RouteRefreshOptions, refreshObserversManager: com.mapbox.navigation.core.directions.session.DirectionsSession, routeRefresherResultProcessor: com.mapbox.navigation.core.RoutesProgressDataProvider, routeRefreshResultAttemptProcessor: com.mapbox.navigation.core.ev.EVDynamicDataHolder, plannedRouteRefreshController: com.mapbox.navigation.utils.internal.Time): com.mapbox.navigation.core.routerefresh.RouteRefreshController;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshExtra {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshExtra>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshExtra;
            public static REFRESH_STATE_STARTED: string = 'STARTED';
            public static REFRESH_STATE_FINISHED_SUCCESS: string = 'FINISHED_SUCCESS';
            public static REFRESH_STATE_FINISHED_FAILED: string = 'FINISHED_FAILED';
            public static REFRESH_STATE_CLEARED_EXPIRED: string = 'CLEARED_EXPIRED';
            public static REFRESH_STATE_CANCELED: string = 'CANCELED';
          }
          export module RouteRefreshExtra {
            export class RouteRefreshState {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshExtra.RouteRefreshState>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshExtra$RouteRefreshState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
      export module core {
        export module routerefresh {
          export class RouteRefreshLog {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshLog>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshLog;
            public static LOG_CATEGORY: string = 'RouteRefreshController';
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void });
            public constructor();
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onStarted(): void; onSuccess(): void; onFailure(param0: string): void; onClearedExpired(): void; onCancel(): void });
            public constructor();
            public onFailure(param0: string): void;
            public onCancel(): void;
            public onStarted(): void;
            public onSuccess(): void;
            public onClearedExpired(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshStateHolder extends com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder>;
            public unregisterRouteRefreshStateObserver(observer: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public unregisterAllRouteRefreshStateObservers(): void;
            public constructor();
            public registerRouteRefreshStateObserver(it: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public onFailure(param0: string): void;
            public onCancel(): void;
            public onStarted(): void;
            public onFailure(message: string): void;
            public onSuccess(): void;
            public onClearedExpired(): void;
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshStateResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult>;
            public getMessage(): string;
            public constructor(state: string, message: string);
            public getState(): string;
            public equals(other: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshStatesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNewState(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult): void });
            public constructor();
            public onNewState(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshValidator {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshValidator;
            public validateRoute(route: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult;
            public joinValidationErrorMessages(invalidResult: java.util.List<any>): string;
          }
          export module RouteRefreshValidator {
            export abstract class RouteValidationResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult>;
            }
            export module RouteValidationResult {
              export class Invalid extends com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Invalid>;
                public component1(): string;
                public toString(): string;
                public copy(reason: string): com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Invalid;
                public getReason(): string;
                public constructor(reason: string);
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Valid extends com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Valid>;
                public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Valid;
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
      export module core {
        export module routerefresh {
          export class RouteRefresher {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher>;
            public constructor(routesRefreshDataProvider: com.mapbox.navigation.core.RoutesRefreshDataProvider, evRefreshDataProvider: com.mapbox.navigation.core.ev.EVRefreshDataProvider, routeDiffProvider: com.mapbox.navigation.core.routerefresh.DirectionsRouteDiffProvider, routeRefresh: com.mapbox.navigation.core.directions.session.RouteRefresh);
            public refresh(this_: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, routes: number, routes: any): any;
          }
          export module RouteRefresher {
            export abstract class RouteRefreshResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult>;
            }
            export module RouteRefreshResult {
              export class Fail extends com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Fail>;
                public toString(): string;
                public component1(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
                public copy(error: com.mapbox.navigation.base.route.NavigationRouterRefreshError): com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Fail;
                public constructor(error: com.mapbox.navigation.base.route.NavigationRouterRefreshError);
                public getError(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Success extends com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Success>;
                public toString(): string;
                public copy(route: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Success;
                public constructor(route: com.mapbox.navigation.base.route.NavigationRoute);
                public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                public component1(): com.mapbox.navigation.base.route.NavigationRoute;
                public hashCode(): number;
                public equals(other: any): boolean;
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
      export module core {
        export module routerefresh {
          export class RouteRefresherExecutor {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor>;
            public executeRoutesRefresh(cont: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any, cancellable$iv: any): any;
            public constructor(routeRefresher: com.mapbox.navigation.core.routerefresh.RouteRefresher, timeout: number, scope: kotlinx.coroutines.CoroutineScope);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherListener>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefresherListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void });
            public constructor();
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherResult<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherResult<any>>;
            public component3(): com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public equals(other: any): boolean;
            public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
            public getRouteProgressData(): T;
            public isSuccess(): boolean;
            public getStatus(): com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public component2(): T;
            public hashCode(): number;
            public component1(): com.mapbox.navigation.base.route.NavigationRoute;
            public copy(route: com.mapbox.navigation.base.route.NavigationRoute, routeProgressData: T, status: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus): com.mapbox.navigation.core.routerefresh.RouteRefresherResult<T>;
            public constructor(route: com.mapbox.navigation.base.route.NavigationRoute, routeProgressData: T, status: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherResultProcessor extends com.mapbox.navigation.core.routerefresh.RouteRefresherListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherResultProcessor>;
            public onRoutesRefreshed(currentTime: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
            public constructor(stateHolder: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, observersManager: com.mapbox.navigation.core.routerefresh.RefreshObserversManager, expiringDataRemover: com.mapbox.navigation.core.routerefresh.ExpiringDataRemover, timeProvider: com.mapbox.navigation.utils.internal.Time, staleDataTimeoutMillis: number);
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherStatus {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherStatus>;
            public static SUCCESS: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public static FAILURE: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public static INVALID: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public static INVALIDATED: com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public static valueOf(value: string): com.mapbox.navigation.core.routerefresh.RouteRefresherStatus;
            public static values(): androidNative.Array<com.mapbox.navigation.core.routerefresh.RouteRefresherStatus>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RoutesRefreshAttemptListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesRefreshAttemptFinished(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void });
            public constructor();
            public onRoutesRefreshAttemptFinished(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RoutesRefreshAttemptProcessor extends com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefreshAttemptProcessor>;
            public onRoutesRefreshAttemptFinished(param0: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
            public onRoutesRefreshAttemptFinished(result: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): void;
            public constructor(observersManager: com.mapbox.navigation.core.routerefresh.RefreshObserversManager);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export abstract class RoutesRefresherExecutorResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult>;
          }
          export module RoutesRefresherExecutorResult {
            export class Finished extends com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult.Finished>;
              public copy(value: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult): com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult.Finished;
              public component1(): com.mapbox.navigation.core.routerefresh.RoutesRefresherResult;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(value: com.mapbox.navigation.core.routerefresh.RoutesRefresherResult);
              public getValue(): com.mapbox.navigation.core.routerefresh.RoutesRefresherResult;
            }
            export class ReplacedByNewer extends com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult.ReplacedByNewer>;
              public static INSTANCE: com.mapbox.navigation.core.routerefresh.RoutesRefresherExecutorResult.ReplacedByNewer;
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
      export module core {
        export module routerefresh {
          export class RoutesRefresherResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RoutesRefresherResult>;
            public constructor(primaryRouteRefresherResult: com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>, alternativesRouteRefresherResults: java.util.List<com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>>);
            public equals(other: any): boolean;
            public getPrimaryRouteRefresherResult(): com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>;
            public hashCode(): number;
            public anySuccess(): boolean;
            public anyRequestFailed(): boolean;
            public component1(): com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>;
            public getAlternativesRouteRefresherResults(): java.util.List<com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>>;
            public component2(): java.util.List<com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>>;
            public toString(): string;
            public copy(primaryRouteRefresherResult: com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>, alternativesRouteRefresherResults: java.util.List<com.mapbox.navigation.core.routerefresh.RouteRefresherResult<com.mapbox.navigation.core.internal.RouteProgressData>>): com.mapbox.navigation.core.routerefresh.RoutesRefresherResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class ApplicationLifecycleMonitor {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.ApplicationLifecycleMonitor>;
            public onActivityDestroyed(it: globalAndroid.app.Activity): void;
            public onActivityResumed(activity: globalAndroid.app.Activity): void;
            public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
            public onActivityStopped(activity: globalAndroid.app.Activity): void;
            public obtainPortraitPercentage(): number;
            public constructor(application: globalAndroid.app.Application);
            public onActivityStarted(currentTimeMillis: globalAndroid.app.Activity): void;
            public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
            public onActivityPaused(activity: globalAndroid.app.Activity): void;
            public obtainForegroundPercentage(): number;
          }
          export module ApplicationLifecycleMonitor {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.ApplicationLifecycleMonitor.Companion>;
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
      export module core {
        export module telemetry {
          export class DynamicSessionValues {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.DynamicSessionValues>;
            public getTimeSinceLastReroute(): number;
            public equals(other: any): boolean;
            public setTimeOfReroute(param0: number): void;
            public component4(): java.util.Date;
            public hashCode(): number;
            public constructor(rerouteCount: number, timeOfReroute: number, timeSinceLastReroute: number, driverModeArrivalTime: java.util.Date, currentDistanceTraveled: number, accumulatedDistanceTraveled: number);
            public component6(): number;
            public setRerouteCount(param0: number): void;
            public setCurrentDistanceTraveled(param0: number): void;
            public getTimeOfReroute(): number;
            public component2(): number;
            public getAccumulatedDistanceTraveled(): number;
            public getRerouteCount(): number;
            public resetCurrentDistanceTraveled(): void;
            public component1(): number;
            public accumulateDistanceTraveled(distance: number): void;
            public component5(): number;
            public setDriverModeArrivalTime(param0: java.util.Date): void;
            public constructor();
            public getDriverModeArrivalTime(): java.util.Date;
            public getCurrentDistanceTraveled(): number;
            public copy(rerouteCount: number, timeOfReroute: number, timeSinceLastReroute: number, driverModeArrivalTime: java.util.Date, currentDistanceTraveled: number, accumulatedDistanceTraveled: number): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public toString(): string;
            public setAccumulatedDistanceTraveled(param0: number): void;
            public setTimeSinceLastReroute(param0: number): void;
            public reset(): void;
            public component3(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class EventLocations {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.EventLocations>;
            public onBufferFull(): void;
            public constructor(preEventLocations: java.util.List<any>, postEventLocations: java.util.List<globalAndroid.location.Location>, locationsCollectorListener: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener);
            public getLocationsCollectorListener(): com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener;
            public postEventLocationsSize(): number;
            public addPostEventLocation(location: globalAndroid.location.Location): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class LocationsCollector extends com.mapbox.navigation.core.trip.session.LocationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollector>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.telemetry.LocationsCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getLastLocation(): globalAndroid.location.Location; flushBuffers(): void; flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void; collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void; onNewRawLocation(param0: globalAndroid.location.Location): void; onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void });
            public constructor();
            public onNewRawLocation(param0: globalAndroid.location.Location): void;
            public collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public flushBuffers(): void;
            public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
            public flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public getLastLocation(): globalAndroid.location.Location;
          }
          export module LocationsCollector {
            export class LocationsCollectorListener {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.telemetry.LocationsCollector$LocationsCollectorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onBufferFull(param0: java.util.List<any>, param1: java.util.List<any>): void });
              public constructor();
              public onBufferFull(param0: java.util.List<any>, param1: java.util.List<any>): void;
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
      export module core {
        export module telemetry {
          export class LocationsCollectorImpl extends com.mapbox.navigation.core.telemetry.LocationsCollector {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollectorImpl>;
            public onNewRawLocation(param0: globalAndroid.location.Location): void;
            public constructor();
            public onNewLocationMatcherResult(locationMatcherResult: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
            public onNewRawLocation(rawLocation: globalAndroid.location.Location): void;
            public collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public flushBufferFor(it: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public collectLocations(locationsCollectorListener: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public flushBuffers(): void;
            public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
            public flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public getLastLocation(): globalAndroid.location.Location;
          }
          export module LocationsCollectorImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollectorImpl.Companion>;
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
      export module core {
        export module telemetry {
          export class MapboxNavigationTelemetry {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry>;
            public static INSTANCE: com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry;
            public static LOG_CATEGORY: string = 'MapboxNavigationTelemetry';
            public static MOCK_PROVIDER: string = 'com.mapbox.navigation.core.replay.ReplayLocationEngine';
            public registerUserFeedbackCallback(userFeedbackCallback: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public unregisterUserFeedbackCallback(userFeedbackCallback: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public destroy($this$destroy_u24lambda_u2d4: com.mapbox.navigation.core.MapboxNavigation): void;
            public postUserFeedback(feedbackType: string, description: string, feedbackSource: string, screenshot: string, feedbackSubType: androidNative.Array<string>, feedbackMetadata: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata, userFeedbackCallback: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public initialize(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation, options: com.mapbox.navigation.base.options.NavigationOptions, reporter: com.mapbox.navigation.base.metrics.MetricsReporter, locationsCollector: com.mapbox.navigation.core.telemetry.LocationsCollector): void;
            public postCustomEvent(payload: string, customEventType: string, customEventVersion: string): void;
            public provideFeedbackMetadataWrapper(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper;
            public setApplicationInstance(app: globalAndroid.app.Application): void;
          }
          export module MapboxNavigationTelemetry {
            export abstract class NavTelemetryState {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState>;
            }
            export module NavTelemetryState {
              export class Paused extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Paused>;
                public constructor(sessionMetadataOnPaused: com.mapbox.navigation.core.telemetry.SessionMetadataOnPause);
                public getSessionMetadataOnPaused(): com.mapbox.navigation.core.telemetry.SessionMetadataOnPause;
              }
              export class Running extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Running>;
                public constructor(sessionMetadata: com.mapbox.navigation.core.telemetry.SessionMetadata);
                public getSessionMetadata(): com.mapbox.navigation.core.telemetry.SessionMetadata;
              }
              export class Stopped extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Stopped>;
                public static INSTANCE: com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Stopped;
              }
            }
            export class RouteData {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.RouteData>;
              public constructor();
              public setRouteProgress(value: com.mapbox.navigation.base.trip.model.RouteProgress): void;
              public getOriginalRouteMetrics(): com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute;
              public setNeedHandleDeparture(value: boolean): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public hasRouteAndRouteProgress(): boolean;
              public getNeedHandleDeparture(): boolean;
              public setOriginalRouteMetrics(value: com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute): void;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.WhenMappings>;
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
      export module core {
        export module telemetry {
          export class SessionMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.SessionMetadata>;
            public equals(other: any): boolean;
            public component1(): string;
            public component4(): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public copy(navigatorSessionIdentifier: string, driverModeId: string, driverModeStartTime: java.util.Date, telemetryNavSessionState: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState, dynamicValues: com.mapbox.navigation.core.telemetry.DynamicSessionValues): com.mapbox.navigation.core.telemetry.SessionMetadata;
            public hashCode(): number;
            public component5(): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public constructor(navigatorSessionIdentifier: string, driverModeId: string, driverModeStartTime: java.util.Date, telemetryNavSessionState: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState, dynamicValues: com.mapbox.navigation.core.telemetry.DynamicSessionValues);
            public toString(): string;
            public getDriverModeId(): string;
            public component2(): string;
            public getDriverModeStartTime(): java.util.Date;
            public getDynamicValues(): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public component3(): java.util.Date;
            public setDriverModeId(param0: string): void;
            public getNavigatorSessionIdentifier(): string;
            public getTelemetryNavSessionState(): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class SessionMetadataOnPause {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.SessionMetadataOnPause>;
            public equals(other: any): boolean;
            public component1(): string;
            public hashCode(): number;
            public constructor(navigatorSessionIdentifier: string);
            public getNavigatorSessionIdentifier(): string;
            public copy(navigatorSessionIdentifier: string): com.mapbox.navigation.core.telemetry.SessionMetadataOnPause;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class TelemetryNavSessionState {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.TelemetryNavSessionState>;
            public static TRIP: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public static FREE_DRIVE: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public static values(): androidNative.Array<com.mapbox.navigation.core.telemetry.TelemetryNavSessionState>;
            public static valueOf(value: string): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export module audio {
            export class AudioTypeChain {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeChain>;
              public constructor();
              public setup(unknownAudioType: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Unknown, speakerAudioType: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Speaker, headphonesAudioType: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Headphones, bluetoothAudioType: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Bluetooth): com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
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
      export module core {
        export module telemetry {
          export module audio {
            export abstract class AudioTypeResolver {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver>;
              public chain: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
              public obtainAudioType(param0: globalAndroid.content.Context): string;
              public nextChain(chain: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
              public getChain$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
              public setChain$libnavigation_core_release(param0: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
            }
            export module AudioTypeResolver {
              export class Bluetooth extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Bluetooth>;
                public constructor();
                public obtainAudioType(this_: globalAndroid.content.Context): string;
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Companion>;
              }
              export class Headphones extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Headphones>;
                public constructor();
                public obtainAudioType(audioManager: globalAndroid.content.Context): string;
              }
              export class Speaker extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Speaker>;
                public constructor();
                public obtainAudioType(this_: globalAndroid.content.Context): string;
              }
              export class Unknown extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Unknown>;
                public nextChain(chain: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
                public obtainAudioType(context: globalAndroid.content.Context): string;
                public constructor();
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
      export module core {
        export module telemetry {
          export module events {
            export class AppMetadata {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.AppMetadata>;
              public component2(): string;
              public constructor(name: string, version: string, userId: string, sessionId: string);
              public copy(name: string, version: string, userId: string, sessionId: string): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public hashCode(): number;
              public getUserId(): string;
              public toString(): string;
              public component3(): string;
              public component1(): string;
              public getName(): string;
              public getSessionId(): string;
              public equals(other: any): boolean;
              public component4(): string;
              public getVersion(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class BitmapEncodeOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions>;
              public getWidth(): number;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
              public equals(other: any): boolean;
              public getCompressQuality(): number;
              public toString(): string;
            }
            export module BitmapEncodeOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder>;
                public width(param0: number): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
                public compressQuality(param0: number): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
                public build(): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions;
                public constructor();
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent>;
              public static INSTANCE: com.mapbox.navigation.core.telemetry.events.FeedbackEvent;
              public static INCORRECT_VISUAL: string = 'incorrect_visual';
              public static ROAD_ISSUE: string = 'road_issue';
              public static TRAFFIC_ISSUE: string = 'traffic_issue';
              public static OTHER_ISSUE: string = 'other_issue';
              public static ROAD_CLOSED: string = 'road_closed';
              public static ROUTING_ERROR: string = 'routing_error';
              public static ROUTE_NOT_ALLOWED: string = 'route_not_allowed';
              public static INCORRECT_VISUAL_GUIDANCE: string = 'incorrect_visual_guidance';
              public static INCORRECT_AUDIO_GUIDANCE: string = 'incorrect_audio_guidance';
              public static POSITIONING_ISSUE: string = 'positioning_issue';
              public static ARRIVAL_FEEDBACK_GOOD: string = 'arrival_feedback_good';
              public static ARRIVAL_FEEDBACK_NOT_GOOD: string = 'arrival_feedback_not_good';
              public static REROUTE: string = 'reroute';
              public static UI: string = 'user';
              public static TURN_ICON_INCORRECT: string = 'turn_icon_incorrect';
              public static STREET_NAME_INCORRECT: string = 'street_name_incorrect';
              public static INSTRUCTION_UNNECESSARY: string = 'instruction_unnecessary';
              public static INSTRUCTION_MISSING: string = 'instruction_missing';
              public static MANEUVER_INCORRECT: string = 'maneuver_incorrect';
              public static EXIT_INFO_INCORRECT: string = 'exit_info_incorrect';
              public static LANE_GUIDANCE_INCORRECT: string = 'lane_guidance_incorrect';
              public static INCORRECT_SPEED_LIMIT: string = 'incorrect_speed_limit';
              public static GUIDANCE_TOO_EARLY: string = 'guidance_too_early';
              public static GUIDANCE_TOO_LATE: string = 'guidance_too_late';
              public static PRONUNCIATION_INCORRECT: string = 'pronunciation_incorrect';
              public static ROAD_NAME_REPEATED: string = 'road_name_repeated';
              public static ROUTE_NOT_DRIVE_ABLE: string = 'route_not_driveable';
              public static ROUTE_NOT_PREFERRED: string = 'route_not_preferred';
              public static ALTERNATIVE_ROUTE_NOT_EXPECTED: string = 'alternative_route_not_expected';
              public static ROUTE_INCLUDED_MISSING_ROADS: string = 'route_included_missing_roads';
              public static ROUTE_HAD_ROADS_TOO_NARROW_TO_PASS: string = 'route_had_roads_too_narrow_to_pass';
              public static ROUTED_DOWN_A_ONE_WAY: string = 'routed_down_a_one_way';
              public static TURN_WAS_NOT_ALLOWED: string = 'turn_was_not_allowed';
              public static CARS_NOT_ALLOWED_ON_STREET: string = 'cars_not_allowed_on_street';
              public static STREET_PERMANENTLY_BLOCKED_OFF: string = 'street_permanently_blocked_off';
              public static STREET_TEMPORARILY_BLOCKED_OFF: string = 'street_temporarily_blocked_off';
              public static MISSING_ROAD: string = 'missing_road';
              public static TRAFFIC_CONGESTION: string = 'traffic_congestion';
              public static TRAFFIC_MODERATE: string = 'traffic_moderate';
              public static TRAFFIC_NO: string = 'traffic_no';
              public static ARRIVAL_FEEDBACK_WRONG_LOCATION: string = 'arrival_feedback_wrong_location';
              public static ARRIVAL_FEEDBACK_WRONG_ENTRANCE: string = 'arrival_feedback_wrong_entrance';
              public static ARRIVAL_FEEDBACK_CONFUSING_INSTRUCTIONS: string = 'arrival_feedback_confusing_instructions';
              public static ARRIVAL_FEEDBACK_THIS_PLACE_IS_CLOSED: string = 'arrival_feedback_this_place_is_closed';
              public static DRIVER_MODE_TRIP: string = 'trip';
              public static DRIVER_MODE_FREE_DRIVE: string = 'freeDrive';
            }
            export module FeedbackEvent {
              export class DriverMode {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.DriverMode>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$DriverMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class Source {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.Source>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class SubType {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.SubType>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$SubType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackHelper {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackHelper>;
              public static INSTANCE: com.mapbox.navigation.core.telemetry.events.FeedbackHelper;
              public static getFeedbackSubTypes($i$f$emptyArray: string): androidNative.Array<string>;
              public static getFreeDriveFeedbackTypes(): androidNative.Array<string>;
              public static encodeScreenshot(screenshot: globalAndroid.graphics.Bitmap): string;
              public static getActiveNavigationFeedbackTypes(): androidNative.Array<string>;
              public static encodeScreenshot(newWidth: globalAndroid.graphics.Bitmap, newHeight: com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions): string;
              public static getArrivalFeedbackTypes(): androidNative.Array<string>;
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackMetadata {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadata>;
              public getPercentTimeInPortrait$libnavigation_core_release(): java.lang.Integer;
              public getPercentTimeInForeground$libnavigation_core_release(): java.lang.Integer;
              public toJson(gson: com.google.gson.Gson): string;
              public getSessionIdentifier$libnavigation_core_release(): string;
              public getLocationsBeforeEvent$libnavigation_core_release(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public hashCode(): number;
              public getDriverModeStartTime$libnavigation_core_release(): string;
              public getAppMetadata$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public static fromJson(json: string): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
              public getEventVersion$libnavigation_core_release(): number;
              public constructor(
                sessionIdentifier: string,
                driverModeIdentifier: string,
                driverMode: string,
                driverModeStartTime: string,
                rerouteCount: number,
                locationsBeforeEvent: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>,
                locationsAfterEvent: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>,
                lastLocation: com.mapbox.geojson.Point,
                locationEngineNameExternal: string,
                percentTimeInPortrait: java.lang.Integer,
                percentTimeInForeground: java.lang.Integer,
                eventVersion: number,
                phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState,
                metricsDirectionsRoute: com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute,
                metricsRouteProgress: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress,
                appMetadata: com.mapbox.navigation.core.telemetry.events.AppMetadata
              );
              public getDriverModeIdentifier$libnavigation_core_release(): string;
              public toString(): string;
              public getMetricsRouteProgress$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress;
              public getDriverMode$libnavigation_core_release(): string;
              public getLocationEngineNameExternal$libnavigation_core_release(): string;
              public equals(other: any): boolean;
              public getLastLocation$libnavigation_core_release(): com.mapbox.geojson.Point;
              public getPhoneState$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.PhoneState;
              public getRerouteCount$libnavigation_core_release(): number;
              public getLocationsAfterEvent$libnavigation_core_release(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getMetricsDirectionsRoute$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute;
            }
            export module FeedbackMetadata {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadata.Companion>;
                public fromJson(json: string): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackMetadataWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper>;
              public constructor(sessionIdentifier: string, driverModeIdentifier: string, driverMode: string, driverModeStartTime: string, rerouteCount: number, lastLocation: com.mapbox.geojson.Point, locationEngineNameExternal: string, percentTimeInPortrait: java.lang.Integer, percentTimeInForeground: java.lang.Integer, eventVersion: number, phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState, metricsDirectionsRoute: com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute, metricsRouteProgress: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress, appMetadata: com.mapbox.navigation.core.telemetry.events.AppMetadata, locationsCollector: com.mapbox.navigation.core.telemetry.LocationsCollector);
              public get(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
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
      export module core {
        export module telemetry {
          export module events {
            export class FreeDriveEventType {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FreeDriveEventType>;
              public static START: com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
              public static STOP: com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
              public static values(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.FreeDriveEventType>;
              public getType(): string;
              public static valueOf(value: string): com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
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
      export module core {
        export module telemetry {
          export module events {
            export class MetricsDirectionsRoute {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute>;
              public getStepCount(): number;
              public hashCode(): number;
              public component2(): number;
              public getDistance(): number;
              public toString(): string;
              public component5(): string;
              public constructor(route: com.mapbox.api.directions.v5.models.DirectionsRoute);
              public constructor(stepCount: number, distance: number, duration: number, requestIdentifier: string, geometry: string);
              public component1(): number;
              public getGeometry(): string;
              public getRequestIdentifier(): string;
              public equals(other: any): boolean;
              public component3(): number;
              public component4(): string;
              public getDuration(): number;
              public copy(stepCount: number, distance: number, duration: number, requestIdentifier: string, geometry: string): com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute;
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
      export module core {
        export module telemetry {
          export module events {
            export class MetricsRouteProgress {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress>;
              public getDirectionsRouteDuration(): number;
              public getPreviousStepModifier(): string;
              public hashCode(): number;
              public getDirectionsRouteStepCount(): number;
              public getDurationRemaining(): number;
              public getUpcomingStepType(): string;
              public getDirectionsRouteGeometry(): string;
              public getDistanceTraveled(): number;
              public getLegCount(): number;
              public toString(): string;
              public getUpcomingStepName(): string;
              public getCurrentStepDistance(): number;
              public getDirectionsRouteDistance(): number;
              public getCurrentStepDuration(): number;
              public getDirectionsRouteRequestIdentifier(): string;
              public getLegIndex(): number;
              public equals(other: any): boolean;
              public getPreviousStepInstruction(): string;
              public constructor(_routeProgress: com.mapbox.navigation.base.trip.model.RouteProgress);
              public getDistanceRemaining(): number;
              public getUpcomingStepModifier(): string;
              public getPreviousStepType(): string;
              public getDirectionsRouteProfile(): string;
              public getStepIndex(): number;
              public getStepCount(): number;
              public getPreviousStepName(): string;
              public getCurrentStepDistanceRemaining(): number;
              public getDirectionsRouteIndex(): number;
              public getCurrentStepDurationRemaining(): number;
              public getDirectionsRouteDestination(): com.mapbox.geojson.Point;
              public getUpcomingStepInstruction(): string;
            }
            export module MetricsRouteProgress {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationAppUserTurnstileEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationAppUserTurnstileEvent>;
              public getEvent$libnavigation_core_release(): com.mapbox.common.TurnstileEvent;
              public constructor(event: com.mapbox.common.TurnstileEvent);
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationArriveEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationArriveEvent>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationCancelEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCancelEvent>;
              public setComment(param0: string): void;
              public getComment(): string;
              public getArrivalTimestamp(): string;
              public setArrivalTimestamp(param0: string): void;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public setRating(param0: number): void;
              public getRating(): number;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationCustomEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCustomEvent>;
              public getDriverModeId(): string;
              public setEventVersion(param0: number): void;
              public getOperatingSystem(): string;
              public setType(param0: string): void;
              public setDriverMode(param0: string): void;
              public setCreatedMonotime(param0: number): void;
              public setLocationEngine(param0: string): void;
              public setLng(param0: number): void;
              public getEvent(): string;
              public setLat(param0: number): void;
              public getSdkIdentifier(): string;
              public getLat(): number;
              public getSimulation(): boolean;
              public getCreatedMonotime(): number;
              public getEventVersion(): number;
              public getType(): string;
              public getCreated(): string;
              public getDriverModeStartTimestampMonotime(): number;
              public constructor();
              public toJson(gson: com.google.gson.Gson): string;
              public setPayload(param0: string): void;
              public getDevice(): string;
              public setSdkIdentifier(param0: string): void;
              public toValue(): com.mapbox.bindgen.Value;
              public getLng(): number;
              public getMetricName(): string;
              public getPayload(): string;
              public getCustomEventVersion(): string;
              public setDriverModeStartTimestampMonotime(param0: number): void;
              public getLocationEngine(): string;
              public setSimulation(param0: boolean): void;
              public getDriverModeStartTimestamp(): string;
              public setCustomEventVersion(param0: string): void;
              public getDriverMode(): string;
              public getVersion(): string;
            }
            export module NavigationCustomEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCustomEvent.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationDepartEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationDepartEvent>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
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
      export module core {
        export module telemetry {
          export module events {
            export abstract class NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationEvent>;
              public getOriginalEstimatedDistance(): number;
              public getSdkVersion(): string;
              public getConnectivity(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public getStartTimestamp(): string;
              public setPercentTimeInPortrait(param0: number): void;
              public getTotalStepCount(): number;
              public setRequestIdentifier(param0: string): void;
              public getVolumeLevel(): number;
              public getSessionIdentifier(): string;
              public setDriverMode(param0: string): void;
              public setLocationEngine(param0: string): void;
              public setDistanceRemaining(param0: number): void;
              public getNavigatorSessionIdentifier(): string;
              public getVoiceIndex(): number;
              public getEvent(): string;
              public getTripIdentifier(): string;
              public getGeometry(): string;
              public getApplicationState(): string;
              public getBannerIndex(): number;
              public getLat(): number;
              public setOriginalStepCount(param0: number): void;
              public getLegIndex(): number;
              public setAbsoluteDistanceToDestination(param0: number): void;
              public getBatteryPluggedIn(): boolean;
              public getCreated(): string;
              public setTotalStepCount(param0: number): void;
              public setLegIndex(param0: number): void;
              public getOriginalStepCount(): number;
              public setLegCount(param0: number): void;
              public getDevice(): string;
              public setOriginalEstimatedDistance(param0: number): void;
              public getEventName$libnavigation_core_release(): string;
              public setAppMetadata(param0: com.mapbox.navigation.core.telemetry.events.AppMetadata): void;
              public setSdkIdentifier(param0: string): void;
              public setPercentTimeInForeground(param0: number): void;
              public toValue(): com.mapbox.bindgen.Value;
              public getBatteryLevel(): number;
              public getLng(): number;
              public setTripIdentifier(param0: string): void;
              public getAbsoluteDistanceToDestination(): number;
              public getMetricName(): string;
              public setEstimatedDistance(param0: number): void;
              public setOriginalGeometry(param0: string): void;
              public getLocationEngine(): string;
              public setSimulation(param0: boolean): void;
              public getRequestIdentifier(): string;
              public getRerouteCount(): number;
              public getOriginalGeometry(): string;
              public getVersion(): string;
              public setStepCount(param0: number): void;
              public getAudioType(): string;
              public setOriginalRequestIdentifier(param0: string): void;
              public getEstimatedDistance(): number;
              public setEventVersion(param0: number): void;
              public setRerouteCount(param0: number): void;
              public getDurationRemaining(): number;
              public setVoiceIndex(param0: number): void;
              public getOperatingSystem(): string;
              public getLegCount(): number;
              public setStepIndex(param0: number): void;
              public setLng(param0: number): void;
              public getPercentTimeInForeground(): number;
              public getOriginalEstimatedDuration(): number;
              public setLat(param0: number): void;
              public getScreenBrightness(): number;
              public setProfile(param0: string): void;
              public getSdkIdentifier(): string;
              public getSimulation(): boolean;
              public getDistanceRemaining(): number;
              public getOriginalRequestIdentifier(): string;
              public getDistanceCompleted(): number;
              public getEventVersion(): number;
              public getStepIndex(): number;
              public getAppMetadata(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public getStepCount(): number;
              public setGeometry(param0: string): void;
              public toJson(gson: com.google.gson.Gson): string;
              public getProfile(): string;
              public getPercentTimeInPortrait(): number;
              public setBannerIndex(param0: number): void;
              public setOriginalEstimatedDuration(param0: number): void;
              public setStartTimestamp(param0: string): void;
              public setNavigatorSessionIdentifier(param0: string): void;
              public setEstimatedDuration(param0: number): void;
              public setDistanceCompleted(param0: number): void;
              public setDurationRemaining(param0: number): void;
              public getEstimatedDuration(): number;
              public getDriverMode(): string;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public setSessionIdentifier(param0: string): void;
            }
            export module NavigationEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationEvent.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationFeedbackEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationFeedbackEvent>;
              public setLocationsAfter(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public getScreenshot(): string;
              public getLocationsBefore(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public getUserId(): string;
              public getStep(): com.mapbox.navigation.core.telemetry.events.NavigationStepData;
              public setFeedbackType(param0: string): void;
              public getLocationsAfter(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getDescription(): string;
              public setDescription(param0: string): void;
              public getFeedbackType(): string;
              public constructor($i$f$emptyArray: com.mapbox.navigation.core.telemetry.events.PhoneState, $i$f$emptyArray: com.mapbox.navigation.core.telemetry.events.NavigationStepData);
              public setScreenshot(param0: string): void;
              public getFeedbackId(): string;
              public setSource(param0: string): void;
              public getSource(): string;
              public setLocationsBefore(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public setFeedbackSubType(param0: androidNative.Array<string>): void;
              public getFeedbackSubType(): androidNative.Array<string>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationFreeDriveEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationFreeDriveEvent>;
              public getConnectivity(): string;
              public getAudioType(): string;
              public setEventVersion(param0: number): void;
              public getStartTimestamp(): string;
              public setPercentTimeInPortrait(param0: number): void;
              public getVolumeLevel(): number;
              public getSessionIdentifier(): string;
              public setLocationEngine(param0: string): void;
              public getPercentTimeInForeground(): number;
              public getNavigatorSessionIdentifier(): string;
              public getEventType(): string;
              public getEvent(): string;
              public getApplicationState(): string;
              public getScreenBrightness(): number;
              public setLocation(param0: com.mapbox.navigation.core.telemetry.events.TelemetryLocation): void;
              public getSimulation(): boolean;
              public getEventVersion(): number;
              public getBatteryPluggedIn(): boolean;
              public getCreated(): string;
              public getAppMetadata(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public toJson(gson: com.google.gson.Gson): string;
              public getPercentTimeInPortrait(): number;
              public setAppMetadata(param0: com.mapbox.navigation.core.telemetry.events.AppMetadata): void;
              public setPercentTimeInForeground(param0: number): void;
              public setStartTimestamp(param0: string): void;
              public toValue(): com.mapbox.bindgen.Value;
              public getBatteryLevel(): number;
              public getLocation(): com.mapbox.navigation.core.telemetry.events.TelemetryLocation;
              public setNavigatorSessionIdentifier(param0: string): void;
              public getMetricName(): string;
              public getLocationEngine(): string;
              public setEventType(param0: string): void;
              public setSimulation(param0: boolean): void;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public setSessionIdentifier(param0: string): void;
              public getVersion(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationRerouteEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationRerouteEvent>;
              public setLocationsAfter(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public getSecondsSinceLastReroute(): number;
              public getScreenshot(): string;
              public getLocationsBefore(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public setNewGeometry(param0: string): void;
              public getNewDistanceRemaining(): number;
              public getStep(): com.mapbox.navigation.core.telemetry.events.NavigationStepData;
              public getLocationsAfter(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public setSecondsSinceLastReroute(param0: number): void;
              public constructor($i$f$emptyArray: com.mapbox.navigation.core.telemetry.events.PhoneState, this_: com.mapbox.navigation.core.telemetry.events.NavigationStepData);
              public getNewGeometry(): string;
              public setScreenshot(param0: string): void;
              public getFeedbackId(): string;
              public getNewDurationRemaining(): number;
              public setLocationsBefore(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public constructor(phoneState: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public setNewDistanceRemaining(param0: number): void;
              public setNewDurationRemaining(param0: number): void;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationStepData {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationStepData>;
              public getPreviousName(): string;
              public getUpcomingInstruction(): string;
              public getPreviousInstruction(): string;
              public hashCode(): number;
              public getDurationRemaining(): number;
              public getUpcomingType(): string;
              public getDistance(): number;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress);
              public getPreviousModifier(): string;
              public equals(other: any): boolean;
              public getPreviousType(): string;
              public getDistanceRemaining(): number;
              public getDuration(): number;
              public getUpcomingModifier(): string;
              public getUpcomingName(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class PhoneState {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.PhoneState>;
              public getConnectivity(): string;
              public isBatteryPluggedIn(): boolean;
              public getAudioType(): string;
              public component7(): string;
              public hashCode(): number;
              public component2(): number;
              public getUserId(): string;
              public component10(): string;
              public constructor(volumeLevel: number, batteryLevel: number, screenBrightness: number, isBatteryPluggedIn: boolean, connectivity: string, audioType: string, applicationState: string, created: string, feedbackId: string, userId: string);
              public getVolumeLevel(): number;
              public toString(): string;
              public getApplicationState(): string;
              public getScreenBrightness(): number;
              public equals(other: any): boolean;
              public component3(): number;
              public component6(): string;
              public getCreated(): string;
              public component9(): string;
              public getBatteryLevel(): number;
              public component5(): string;
              public copy(volumeLevel: number, batteryLevel: number, screenBrightness: number, isBatteryPluggedIn: boolean, connectivity: string, audioType: string, applicationState: string, created: string, feedbackId: string, userId: string): com.mapbox.navigation.core.telemetry.events.PhoneState;
              public getFeedbackId(): string;
              public component8(): string;
              public component1(): number;
              public component4(): boolean;
            }
            export module PhoneState {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.PhoneState.Companion>;
                public newInstance$libnavigation_core_release(context: globalAndroid.content.Context): com.mapbox.navigation.core.telemetry.events.PhoneState;
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
      export module core {
        export module telemetry {
          export module events {
            export class TelemetryLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getSpeed(): number;
              public getLongitude(): number;
              public hashCode(): number;
              public component2(): number;
              public component7(): number;
              public component5(): number;
              public getVerticalAccuracy(): number;
              public toString(): string;
              public copy(latitude: number, longitude: number, speed: number, bearing: number, altitude: number, timestamp: string, horizontalAccuracy: number, verticalAccuracy: number): com.mapbox.navigation.core.telemetry.events.TelemetryLocation;
              public getTimestamp(): string;
              public getBearing(): number;
              public component1(): number;
              public getHorizontalAccuracy(): number;
              public component8(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public constructor(latitude: number, longitude: number, speed: number, bearing: number, altitude: number, timestamp: string, horizontalAccuracy: number, verticalAccuracy: number);
              public component3(): number;
              public component6(): string;
              public getLatitude(): number;
              public getAltitude(): number;
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
      export module core {
        export module trip {
          export class MapboxTripStarter extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarter>;
            public refreshLocationPermissions(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public enableMapMatching(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public constructor();
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public getReplayHistorySessionOptions(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions;
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor(services: com.mapbox.navigation.core.trip.MapboxTripStarterServices);
            public enableReplayHistory(options: com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public static getRegisteredInstance(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public static create(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public onAttached(granted: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            public getReplayRouteSessionOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
            public enableReplayRoute(options: com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions): com.mapbox.navigation.core.trip.MapboxTripStarter;
          }
          export module MapboxTripStarter {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarter.Companion>;
              public create(): com.mapbox.navigation.core.trip.MapboxTripStarter;
              public getRegisteredInstance(): com.mapbox.navigation.core.trip.MapboxTripStarter;
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
      export module core {
        export module trip {
          export class MapboxTripStarterServices {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterServices>;
            public constructor();
            public getReplayHistorySession(): com.mapbox.navigation.core.replay.history.ReplayHistorySession;
            public getReplayRouteSession(): com.mapbox.navigation.core.replay.route.ReplayRouteSession;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module trip {
          export abstract class MapboxTripStarterType {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType>;
          }
          export module MapboxTripStarterType {
            export class MapMatching extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.MapMatching>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.MapMatching;
            }
            export class ReplayHistory extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayHistory>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayHistory;
            }
            export class ReplayRoute extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayRoute>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayRoute;
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
      export module core {
        export module trip {
          export class NativeRouteProcessingListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.NativeRouteProcessingListener>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.trip.NativeRouteProcessingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNativeRouteProcessingStarted(): void });
            public constructor();
            public onNativeRouteProcessingStarted(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module trip {
          export module service {
            export class MapboxNotificationData {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxNotificationData>;
              public getNotificationId(): number;
              public component1(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getNotification(): globalAndroid.app.Notification;
              public toString(): string;
              public component2(): globalAndroid.app.Notification;
              public copy(notificationId: number, notification: globalAndroid.app.Notification): com.mapbox.navigation.core.trip.service.MapboxNotificationData;
              public constructor(notificationId: number, notification: globalAndroid.app.Notification);
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
      export module core {
        export module trip {
          export module service {
            export class MapboxTripService extends com.mapbox.navigation.core.trip.service.TripService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxTripService>;
              public stopService(): void;
              public startService(): void;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public constructor(tripNotification: com.mapbox.navigation.base.trip.notification.TripNotification, initializeLambda: any, terminateLambda: any, threadController: com.mapbox.navigation.utils.internal.ThreadController);
              public hasServiceStarted(): boolean;
              public updateNotification(tripNotificationState: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public constructor(applicationContext: globalAndroid.content.Context, tripNotification: com.mapbox.navigation.base.trip.notification.TripNotification, threadController: com.mapbox.navigation.utils.internal.ThreadController);
            }
            export module MapboxTripService {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxTripService.Companion>;
                public unregisterOneTimeNotificationDataObserver$libnavigation_core_release(observer: com.mapbox.navigation.core.trip.service.NotificationDataObserver): void;
                public registerOneTimeNotificationDataObserver$libnavigation_core_release(notificationData: com.mapbox.navigation.core.trip.service.NotificationDataObserver): void;
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
      export module core {
        export module trip {
          export module service {
            export class NavigationNotificationService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.NavigationNotificationService>;
              public constructor();
              public onDestroy(): void;
              public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
              public dump(fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: androidNative.Array<string>): void;
              public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number;
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
      export module core {
        export module trip {
          export module service {
            export class NotificationDataObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.NotificationDataObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.service.NotificationDataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNotificationUpdated(param0: com.mapbox.navigation.core.trip.service.MapboxNotificationData): void });
              public constructor();
              public onNotificationUpdated(param0: com.mapbox.navigation.core.trip.service.MapboxNotificationData): void;
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
      export module core {
        export module trip {
          export module service {
            export class TripService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.TripService>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.service.TripService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { startService(): void; stopService(): void; updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void; hasServiceStarted(): boolean });
              public constructor();
              public stopService(): void;
              public startService(): void;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public hasServiceStarted(): boolean;
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
      export module core {
        export module trip {
          export module session {
            export class BannerInstructionEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent>;
              public getLatestInstructionIndex(): java.lang.Integer;
              public getLatestInstructionWrapper(): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
              public getLatestBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public invalidateLatestBannerInstructions(latestInstructionWrapper: com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper): void;
              public isOccurring(bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions, instructionIndex: java.lang.Integer): boolean;
            }
            export module BannerInstructionEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.Companion>;
                public invoke(): com.mapbox.navigation.core.trip.session.BannerInstructionEvent;
              }
              export class LatestInstructionWrapper {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper>;
                public toString(): string;
                public component1(): number;
                public component2(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public constructor(latestInstructionIndex: number, latestBannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions);
                public getLatestBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public getLatestInstructionIndex(): number;
                public copy(latestInstructionIndex: number, latestBannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export module LatestInstructionWrapper {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper.Companion>;
                  public createOrNull(idx: java.lang.Integer, instruction: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
                }
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
      export module core {
        export module trip {
          export module session {
            export class BannerInstructionsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.BannerInstructionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewBannerInstructions(param0: com.mapbox.api.directions.v5.models.BannerInstructions): void });
              public constructor();
              public onNewBannerInstructions(param0: com.mapbox.api.directions.v5.models.BannerInstructions): void;
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
      export module core {
        export module trip {
          export module session {
            export class CancellableLocationEngine {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.CancellableLocationEngine>;
              public requestLocationUpdates(p0: com.mapbox.android.core.location.LocationEngineRequest, p1: globalAndroid.app.PendingIntent): void;
              public cancelLastLocationTask(callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
              public constructor(originalEngine: com.mapbox.android.core.location.LocationEngine);
              public removeLocationUpdates(p0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
              public removeLocationUpdates(p0: globalAndroid.app.PendingIntent): void;
              public requestLocationUpdates(p0: com.mapbox.android.core.location.LocationEngineRequest, p1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, p2: globalAndroid.os.Looper): void;
              public getLastLocation(callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
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
      export module core {
        export module trip {
          export module session {
            export class LegIndexUpdatedCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onLegIndexUpdatedCallback(param0: boolean): void });
              public constructor();
              public onLegIndexUpdatedCallback(param0: boolean): void;
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
      export module core {
        export module trip {
          export module session {
            export class LocationMatcherResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LocationMatcherResult>;
              public getRoadEdgeMatchProbability(): number;
              public isTeleport(): boolean;
              public getRoad(): com.mapbox.navigation.base.road.model.Road;
              public hashCode(): number;
              /** @deprecated */
              public getSpeedLimit(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public toString(): string;
              public getEnhancedLocation(): globalAndroid.location.Location;
              public isOffRoad(): boolean;
              public getSpeedLimitInfo(): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
              public getInTunnel(): boolean;
              public getZLevel(): java.lang.Integer;
              public constructor(enhancedLocation: globalAndroid.location.Location, keyPoints: java.util.List<any>, isOffRoad: boolean, offRoadProbability: number, isTeleport: boolean, speedLimit: com.mapbox.navigation.base.speed.model.SpeedLimit, speedLimitInfo: com.mapbox.navigation.base.speed.model.SpeedLimitInfo, roadEdgeMatchProbability: number, zLevel: java.lang.Integer, road: com.mapbox.navigation.base.road.model.Road, isDegradedMapMatching: boolean, inTunnel: boolean);
              public getKeyPoints(): java.util.List<globalAndroid.location.Location>;
              public getOffRoadProbability(): number;
              public equals(other: any): boolean;
              public isDegradedMapMatching(): boolean;
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
      export module core {
        export module trip {
          export module session {
            export class LocationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LocationObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.LocationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRawLocation(param0: globalAndroid.location.Location): void; onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void });
              public constructor();
              public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
              public onNewRawLocation(param0: globalAndroid.location.Location): void;
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
      export module core {
        export module trip {
          export module session {
            export class MapboxTripSession extends com.mapbox.navigation.core.trip.session.TripSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.MapboxTripSession>;
              public registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public getLastVoiceInstruction$libnavigation_core_release(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public unregisterAllRoadObjectsOnRouteObservers(): void;
              public setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
              public registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public registerEHorizonObserver(eHorizonObserver: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public setRoutes(this_: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, routes: com.mapbox.navigation.core.SetRoutes, routes: any): any;
              public getPrimaryRoute$libnavigation_core_release(): com.mapbox.navigation.base.route.NavigationRoute;
              public registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public unregisterAllVoiceInstructionsObservers(): void;
              public setLastVoiceInstruction$libnavigation_core_release(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
              public registerVoiceInstructionsObserver(voiceInstructionsObserver: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public stop(): void;
              public unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterRoadObjectsOnRouteObserver(roadObjectsOnRouteObserver: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public unregisterAllRouteProgressObservers(): void;
              public unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public updateLegIndex(this_: number, legIndex: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
              public unregisterOffRouteObserver(offRouteObserver: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public registerLocationObserver(it: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterAllLocationObservers(): void;
              public unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public unregisterAllEHorizonObservers(): void;
              public getRawLocation(): globalAndroid.location.Location;
              public unregisterEHorizonObserver(eHorizonObserver: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public registerBannerInstructionsObserver(bannerInstructionsObserver: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public start(param0: boolean, param1: boolean): void;
              public registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public registerStateObserver(stateObserver: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public unregisterAllStateObservers(): void;
              public registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public unregisterStateObserver(stateObserver: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public registerRoadObjectsOnRouteObserver(roadObjectsOnRouteObserver: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
              public unregisterAllBannerInstructionsObservers(): void;
              public registerRouteProgressObserver(it: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
              public registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public unregisterLocationObserver(locationObserver: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public setPrimaryRoute$libnavigation_core_release(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
              public unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterFallbackVersionsObserver(fallbackVersionsObserver: com.mapbox.navigator.FallbackVersionsObserver): void;
              public constructor(tripService: com.mapbox.navigation.core.trip.service.TripService, tripSessionLocationEngine: com.mapbox.navigation.core.trip.session.TripSessionLocationEngine, navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, threadController: com.mapbox.navigation.utils.internal.ThreadController, eHorizonSubscriptionManager: com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager);
              public registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public start(withTripService: boolean, withReplayEnabled: boolean): void;
              public registerFallbackVersionsObserver(fallbackVersionsObserver: com.mapbox.navigator.FallbackVersionsObserver): void;
              public unregisterBannerInstructionsObserver(bannerInstructionsObserver: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public unregisterAllOffRouteObservers(): void;
              public unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public registerOffRouteObserver(offRouteObserver: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public getZLevel(): java.lang.Integer;
              public unregisterAllFallbackVersionsObservers(): void;
              public getTripService(): com.mapbox.navigation.core.trip.service.TripService;
              public registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public isRunningWithForegroundService(): boolean;
              public unregisterRouteProgressObserver(routeProgressObserver: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public unregisterVoiceInstructionsObserver(voiceInstructionsObserver: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
            }
            export module MapboxTripSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.MapboxTripSession.Companion>;
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
      export module core {
        export module trip {
          export module session {
            export class NativeSetRouteError extends com.mapbox.navigation.core.trip.session.NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteError>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public constructor(error: string);
              public toString(): string;
              public getError(): string;
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
      export module core {
        export module trip {
          export module session {
            export abstract class NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteResult>;
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
      export module core {
        export module trip {
          export module session {
            export class NativeSetRouteValue extends com.mapbox.navigation.core.trip.session.NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteValue>;
              public getNativeAlternatives(): java.util.List<com.mapbox.navigator.RouteAlternative>;
              public constructor(routes: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, nativeAlternatives: java.util.List<any>);
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
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
      export module core {
        export module trip {
          export module session {
            export class NativeStatusProcessingError {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeStatusProcessingError>;
              public constructor(cause: java.lang.Throwable);
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSession implements com.mapbox.navigation.core.directions.session.RoutesObserver, com.mapbox.navigation.core.trip.session.TripSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSession>;
              public constructor();
              public setState$libnavigation_core_release(it: com.mapbox.navigation.core.trip.session.NavigationSessionState): void;
              public onRoutesChanged(result: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
              public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
              public registerNavigationSessionStateObserver$libnavigation_core_release(navigationSessionStateObserver: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
              public getState$libnavigation_core_release(): com.mapbox.navigation.core.trip.session.NavigationSessionState;
              public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
              public unregisterAllNavigationSessionStateObservers$libnavigation_core_release(): void;
              public unregisterNavigationSessionStateObserver$libnavigation_core_release(navigationSessionStateObserver: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
              public onSessionStateChanged(tripSessionState: com.mapbox.navigation.core.trip.session.TripSessionState): void;
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
      export module core {
        export module trip {
          export module session {
            export abstract class NavigationSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState>;
              public getSessionId(): string;
            }
            export module NavigationSessionState {
              export class ActiveGuidance extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.ActiveGuidance>;
                public component1(): string;
                public toString(): string;
                public getSessionId(): string;
                public copy(sessionId: string): com.mapbox.navigation.core.trip.session.NavigationSessionState.ActiveGuidance;
                public constructor(sessionId: string);
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class FreeDrive extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.FreeDrive>;
                public component1(): string;
                public toString(): string;
                public copy(sessionId: string): com.mapbox.navigation.core.trip.session.NavigationSessionState.FreeDrive;
                public getSessionId(): string;
                public constructor(sessionId: string);
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Idle extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.Idle>;
                public static INSTANCE: com.mapbox.navigation.core.trip.session.NavigationSessionState.Idle;
                public getSessionId(): string;
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNavigationSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.NavigationSessionState): void });
              public constructor();
              public onNavigationSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.NavigationSessionState): void;
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSessionUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionUtils>;
              public static INSTANCE: com.mapbox.navigation.core.trip.session.NavigationSessionUtils;
              public getNewHistoryRecordingSessionState(isDriving: boolean, hasRoutes: boolean): com.mapbox.navigation.core.internal.HistoryRecordingSessionState;
              public isDriving(tripSessionState: com.mapbox.navigation.core.trip.session.TripSessionState): boolean;
              public getNewNavigationSessionState(isDriving: boolean, hasRoutes: boolean): com.mapbox.navigation.core.trip.session.NavigationSessionState;
            }
            export module NavigationSessionUtils {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionUtils.WhenMappings>;
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
      export module core {
        export module trip {
          export module session {
            export class OffRouteObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.OffRouteObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.OffRouteObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onOffRouteStateChanged(param0: boolean): void });
              public constructor();
              public onOffRouteStateChanged(param0: boolean): void;
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
      export module core {
        export module trip {
          export module session {
            export class RoadObjectsOnRouteObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoadObjectsOnTheRoute(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>): void });
              public constructor();
              /** @deprecated */
              public onNewRoadObjectsOnTheRoute(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>): void;
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
      export module core {
        export module trip {
          export module session {
            export class RouteProgressObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.RouteProgressObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.RouteProgressObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void });
              public constructor();
              public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
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
      export module core {
        export module trip {
          export module session {
            export class TripSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSession>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.TripSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getTripService(): com.mapbox.navigation.core.trip.service.TripService;
                setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
                getRawLocation(): globalAndroid.location.Location;
                getZLevel(): java.lang.Integer;
                getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
                getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
                getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
                start(param0: boolean, param1: boolean): void;
                stop(): void;
                isRunningWithForegroundService(): boolean;
                registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
                unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
                unregisterAllLocationObservers(): void;
                registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
                unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
                unregisterAllRouteProgressObservers(): void;
                registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
                unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
                unregisterAllOffRouteObservers(): void;
                registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
                unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
                unregisterAllStateObservers(): void;
                registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
                unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
                unregisterAllBannerInstructionsObservers(): void;
                registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
                unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
                unregisterAllVoiceInstructionsObservers(): void;
                updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
                registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
                unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
                unregisterAllRoadObjectsOnRouteObservers(): void;
                registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                unregisterAllEHorizonObservers(): void;
                registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
                unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
                unregisterAllFallbackVersionsObservers(): void;
              });
              public constructor();
              public registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public unregisterAllRoadObjectsOnRouteObservers(): void;
              public updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
              public registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public unregisterAllBannerInstructionsObservers(): void;
              public registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
              public registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public unregisterAllVoiceInstructionsObservers(): void;
              public unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public stop(): void;
              public unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public unregisterAllRouteProgressObservers(): void;
              public unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public unregisterAllLocationObservers(): void;
              public unregisterAllOffRouteObservers(): void;
              public unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public getZLevel(): java.lang.Integer;
              public unregisterAllFallbackVersionsObservers(): void;
              public unregisterAllEHorizonObservers(): void;
              public getRawLocation(): globalAndroid.location.Location;
              public start(param0: boolean, param1: boolean): void;
              public registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public getTripService(): com.mapbox.navigation.core.trip.service.TripService;
              public registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public isRunningWithForegroundService(): boolean;
              public unregisterAllStateObservers(): void;
              public registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
            }
            export module TripSession {
              export class DefaultImpls {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSession.DefaultImpls>;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionLocationEngine {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionLocationEngine>;
              public isReplayEnabled(): boolean;
              public getMapboxReplayer(): com.mapbox.navigation.core.replay.MapboxReplayer;
              public constructor(navigationOptions: com.mapbox.navigation.base.options.NavigationOptions, replayLocationEngineProvider: any);
              public stopLocationUpdates(): void;
              public startLocationUpdates($i$f$logD: boolean, category$iv: any): void;
            }
            export module TripSessionLocationEngine {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionLocationEngine.Companion>;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static STARTED: com.mapbox.navigation.core.trip.session.TripSessionState;
              public static STOPPED: com.mapbox.navigation.core.trip.session.TripSessionState;
              public static values(): androidNative.Array<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static valueOf(value: string): com.mapbox.navigation.core.trip.session.TripSessionState;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.TripSessionStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void });
              public constructor();
              public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
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
      export module core {
        export module trip {
          export module session {
            export class VoiceInstructionsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewVoiceInstructions(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void });
              public constructor();
              public onNewVoiceInstructions(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonObserver {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.EHorizonObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onPositionUpdated(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition, param1: java.util.List<any>): void; onRoadObjectEnter(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void; onRoadObjectExit(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void; onRoadObjectPassed(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo): void; onRoadObjectAdded(param0: string): void; onRoadObjectUpdated(param0: string): void; onRoadObjectRemoved(param0: string): void });
                public constructor();
                public onPositionUpdated(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition, param1: java.util.List<any>): void;
                public onRoadObjectPassed(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo): void;
                public onRoadObjectUpdated(param0: string): void;
                public onRoadObjectRemoved(param0: string): void;
                public onRoadObjectAdded(param0: string): void;
                public onRoadObjectEnter(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void;
                public onRoadObjectExit(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonSubscriptionManager {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void; unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void; unregisterAllObservers(): void; reset(): void });
                public constructor();
                public registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public reset(): void;
                public unregisterAllObservers(): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonSubscriptionManagerImpl extends com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManagerImpl>;
                public constructor(navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, threadController: com.mapbox.navigation.utils.internal.ThreadController);
                public unregisterObserver(observer: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public reset(): void;
                public registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public registerObserver(position: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public unregisterAllObservers(): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class GraphAccessor {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.GraphAccessor>;
                public getGraphPositionCoordinate(graphPosition: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition): com.mapbox.geojson.Point;
                public getPathShape(graphPath: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath): java.util.List<com.mapbox.geojson.Point>;
                public constructor(navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                public getEdgeMetadata(it: number): com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata;
                public getEdgeShape(edgeId: number): java.util.List<com.mapbox.geojson.Point>;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectMatcher {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcher>;
                public registerRoadObjectMatcherObserver(roadObjectMatcherObserver: com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver): void;
                public matchPointObjects(it: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>, item$iv$iv: boolean): void;
                /** @deprecated */
                public matchPolylineObject(roadObjectId: string, polyline: java.util.List<com.mapbox.geojson.Point>): void;
                public matchPolygonObjects(matchableGeometries: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                public matchOpenLRObjects(it: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>, item$iv$iv: boolean): void;
                public cancel(roadObjectIds: java.util.List<string>): void;
                public matchPolygonObjects(it: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, item$iv$iv: boolean): void;
                /** @deprecated */
                public matchOpenLRObject(roadObjectId: string, openLRLocation: string, openLRStandard: string): void;
                public matchPolylineObjects(matchableGeometries: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                public matchPolylineObjects(it: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, item$iv$iv: boolean): void;
                /** @deprecated */
                public matchPolygonObject(roadObjectId: string, polygon: java.util.List<com.mapbox.geojson.Point>): void;
                public matchGantryObjects(it: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, item$iv$iv: boolean): void;
                public matchGantryObjects(matchableGeometries: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                public constructor(navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                /** @deprecated */
                public matchGantryObject(roadObjectId: string, gantry: java.util.List<com.mapbox.geojson.Point>): void;
                public matchOpenLRObjects(matchableOpenLrs: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>): void;
                public matchPointObjects(matchablePoints: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>): void;
                /** @deprecated */
                public matchPointObject(roadObjectId: string, point: com.mapbox.geojson.Point): void;
                public cancelAll(): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectMatcherObserver {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onRoadObjectMatched(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError, com.mapbox.navigation.base.trip.model.roadobject.RoadObject>): void });
                public constructor();
                public onRoadObjectMatched(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError, com.mapbox.navigation.base.trip.model.roadobject.RoadObject>): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectsStore {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectsStore>;
                public addCustomRoadObject(this_: com.mapbox.navigation.base.trip.model.roadobject.RoadObject): void;
                public getRoadObjectIdsByEdgeIds(edgeIds: java.util.List<java.lang.Long>): java.util.List<string>;
                public getRoadObjectsOnTheEdge(objectId: number): java.util.Map<string, com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation>;
                public getRoadObject(it: string): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
                public constructor(navigator: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                public getUpcomingRoadObjects(roadObject: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
                public removeAllCustomRoadObjects(): void;
                public removeCustomRoadObject(roadObjectId: string): void;
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
      export module core {
        export module utils {
          export class Delayer {
            public static class: java.lang.Class<com.mapbox.navigation.core.utils.Delayer>;
            public resumeDelay(this_: any): any;
            public constructor(interval: number, timeProvider: com.mapbox.navigation.utils.internal.Time);
            public delay($completion: any): any;
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper:1
//com.mapbox.navigation.core.routerefresh.RouteRefresherResult:1
