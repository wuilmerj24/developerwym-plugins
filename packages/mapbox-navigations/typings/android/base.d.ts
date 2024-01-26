declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.base.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.base';
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
      export module base {
        export class ExperimentalMapboxNavigationAPI {
          public static class: java.lang.Class<com.mapbox.navigation.base.ExperimentalMapboxNavigationAPI>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.base.ExperimentalMapboxNavigationAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export class ExperimentalPreviewMapboxNavigationAPI {
          public static class: java.lang.Class<com.mapbox.navigation.base.ExperimentalPreviewMapboxNavigationAPI>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.base.ExperimentalPreviewMapboxNavigationAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export class TimeFormat {
          public static class: java.lang.Class<com.mapbox.navigation.base.TimeFormat>;
          public static INSTANCE: com.mapbox.navigation.base.TimeFormat;
          public static NONE_SPECIFIED: number = -1;
          public static TWELVE_HOURS: number = 0;
          public static TWENTY_FOUR_HOURS: number = 1;
        }
        export module TimeFormat {
          export class Type {
            public static class: java.lang.Class<com.mapbox.navigation.base.TimeFormat.Type>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.TimeFormat$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module extensions {
          export class RouteOptionsExtensions {
            public static class: java.lang.Class<com.mapbox.navigation.base.extensions.RouteOptionsExtensions>;
            public static coordinates(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, it: com.mapbox.geojson.Point, element$iv: java.util.List<com.mapbox.geojson.Point>, $this$forEach$iv: com.mapbox.geojson.Point): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyDefaultNavigationOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, $this$applyDefaultNavigationOptions_u24lambda_u2d2_u24lambda_u2d0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyDefaultNavigationOptions($this$applyDefaultNavigationOptions: com.mapbox.api.directions.v5.models.RouteOptions.Builder): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static coordinates($this$coordinates: com.mapbox.api.directions.v5.models.RouteOptions.Builder, origin: com.mapbox.geojson.Point, destination: com.mapbox.geojson.Point): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyLanguageAndVoiceUnitOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, $this$applyLanguageAndVoiceUnitOptions_u24lambda_u2d3: globalAndroid.content.Context): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module formatter {
          export class DistanceFormatter {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.formatter.DistanceFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { formatDistance(param0: number): globalAndroid.text.SpannableString });
            public constructor();
            public formatDistance(param0: number): globalAndroid.text.SpannableString;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module formatter {
          export class DistanceFormatterOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatterOptions>;
            public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
            public equals(other: any): boolean;
            public getLocale(): java.util.Locale;
            public toBuilder(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
            public hashCode(): number;
            public getRoundingIncrement(): number;
            public getApplicationContext(): globalAndroid.content.Context;
            public toString(): string;
          }
          export module DistanceFormatterOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder>;
              public build(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public roundingIncrement($this$roundingIncrement_u24lambda_u2d1: number): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
              public constructor(applicationContext: globalAndroid.content.Context);
              public unitType($this$unitType_u24lambda_u2d0: com.mapbox.navigation.base.formatter.UnitType): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
              public locale($this$locale_u24lambda_u2d2: java.util.Locale): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
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
      export module base {
        export module formatter {
          export class Rounding {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.Rounding>;
            public static INSTANCE: com.mapbox.navigation.base.formatter.Rounding;
            public static INCREMENT_FIVE: number = 5;
            public static INCREMENT_TEN: number = 10;
            public static INCREMENT_TWENTY_FIVE: number = 25;
            public static INCREMENT_FIFTY: number = 50;
            public static INCREMENT_ONE_HUNDRED: number = 100;
          }
          export module Rounding {
            export class Increment {
              public static class: java.lang.Class<com.mapbox.navigation.base.formatter.Rounding.Increment>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.formatter.Rounding$Increment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export module formatter {
          export class UnitType {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.UnitType>;
            public static IMPERIAL: com.mapbox.navigation.base.formatter.UnitType;
            public static METRIC: com.mapbox.navigation.base.formatter.UnitType;
            public static valueOf(value: string): com.mapbox.navigation.base.formatter.UnitType;
            public static values(): androidNative.Array<com.mapbox.navigation.base.formatter.UnitType>;
            public getValue(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class CoalescingBlockingQueue {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.CoalescingBlockingQueue>;
            public constructor(scope: kotlinx.coroutines.CoroutineScope, mutex: kotlinx.coroutines.sync.Mutex);
            public addJob(item: com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item): void;
          }
          export module CoalescingBlockingQueue {
            export class Item {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item>;
              public constructor(block: any, cancellation: any);
              public copy(block: any, cancellation: any): com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item;
              public hashCode(): number;
              public getBlock(): any;
              public component1(): any;
              public equals(other: any): boolean;
              public toString(): string;
              public component2(): any;
              public getCancellation(): any;
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
      export module base {
        export module internal {
          export class NativeRouteParserWrapper extends com.mapbox.navigation.base.internal.SDKRouteParser {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.NativeRouteParserWrapper>;
            public constructor();
            public parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(response: com.mapbox.bindgen.DataRef, request: string, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(response: string, request: string, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class NavigationRouterV2 extends com.mapbox.navigation.base.route.NavigationRouter {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.NavigationRouterV2>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.internal.NavigationRouterV2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
              cancelRouteRequest(param0: number): void;
              cancelAll(): void;
              getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
              cancelRouteRefreshRequest(param0: number): void;
              shutdown(): void;
            });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            /** @deprecated */
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class RouteRefreshRequestData {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.RouteRefreshRequestData>;
            public equals(other: any): boolean;
            public getLegGeometryIndex(): java.lang.Integer;
            public getLegIndex(): number;
            public getExperimentalProperties(): java.util.Map<string, string>;
            public hashCode(): number;
            public constructor(legIndex: number, routeGeometryIndex: number, legGeometryIndex: java.lang.Integer, experimentalProperties: java.util.Map<string, string>);
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
      export module base {
        export module internal {
          export class SDKRouteParser {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.SDKRouteParser>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.internal.SDKRouteParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>; parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>; '<clinit>'(): void });
            public constructor();
            public parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
          }
          export module SDKRouteParser {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.SDKRouteParser.Companion>;
              public getDefault(): com.mapbox.navigation.base.internal.SDKRouteParser;
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
      export module base {
        export module internal {
          export module accounts {
            export class UrlSkuTokenProvider {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { obtainUrlWithSkuToken(param0: java.net.URL): java.net.URL });
              public constructor();
              public obtainUrlWithSkuToken(param0: java.net.URL): java.net.URL;
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
      export module base {
        export module internal {
          export module extensions {
            export class ContextEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.ContextEx>;
              public static inferDeviceLanguage($this$inferDeviceLanguage: globalAndroid.content.Context): string;
              public static inferDeviceLocale(locales: globalAndroid.content.Context): java.util.Locale;
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
      export module base {
        export module internal {
          export module extensions {
            export class LocaleEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.LocaleEx>;
              public static INSTANCE: com.mapbox.navigation.base.internal.extensions.LocaleEx;
              public static getUnitTypeForLocale($this$getUnitTypeForLocale: java.util.Locale): com.mapbox.navigation.base.formatter.UnitType;
              public static getLocaleDirectionsRoute(directionsRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, context: globalAndroid.content.Context): java.util.Locale;
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
      export module base {
        export module internal {
          export module extensions {
            export class ShieldExtensions {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.ShieldExtensions>;
              public static toMapboxShield(param0: com.mapbox.navigator.Shield): com.mapbox.api.directions.v5.models.MapboxShield;
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
      export module base {
        export module internal {
          export module extensions {
            export module WaypointExKt {
              export module WaypointExKt {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.WaypointExKt.WhenMappings>;
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
      export module base {
        export module internal {
          export module factory {
            export class EHorizonFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.EHorizonFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.EHorizonFactory;
              public buildEHorizonPosition(position: com.mapbox.navigator.ElectronicHorizonPosition): com.mapbox.navigation.base.trip.model.eh.EHorizonPosition;
              public buildNativeMatchableGeometry(matchable: com.mapbox.navigation.base.trip.model.eh.MatchableGeometry): com.mapbox.navigator.MatchableGeometry;
              public buildRoadObjectPassInfo(passInfo: com.mapbox.navigator.RoadObjectPassInfo): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo;
              public buildNativeMatchableOpenLr(matchable: com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr): com.mapbox.navigator.MatchableOpenLr;
              public buildNativeMatchablePoint(matchable: com.mapbox.navigation.base.trip.model.eh.MatchablePoint): com.mapbox.navigator.MatchablePoint;
              public buildRoadObjectDistance(distance: com.mapbox.navigator.RoadObjectDistance): com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo;
              public buildRoadObjectEdgeLocation(edgeLocation: com.mapbox.navigator.RoadObjectEdgeLocation): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation;
              public buildNativeGraphPath(graphPath: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath): com.mapbox.navigator.GraphPath;
              public buildRoadObjectEnterExitInfo(enterExitInfo: com.mapbox.navigator.RoadObjectEnterExitInfo): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo;
              public buildEHorizonEdgeMetadata(edgeMetadata: com.mapbox.navigator.EdgeMetadata): com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata;
              public buildNativeGraphPosition(graphPosition: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition): com.mapbox.navigator.GraphPosition;
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
      export module base {
        export module internal {
          export module factory {
            export class RoadFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RoadFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RoadFactory;
              public buildRoadObject(road: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.road.model.Road;
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
      export module base {
        export module internal {
          export module factory {
            export class RoadObjectFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RoadObjectFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RoadObjectFactory;
              public buildRoadObjectMatchingError($this$buildRoadObjectMatchingError_u24lambda_u2d4: com.mapbox.navigator.RoadObjectMatcherError): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError;
              public buildNativeRoadObject(roadObject: com.mapbox.navigation.base.trip.model.roadobject.RoadObject): com.mapbox.navigator.RoadObject;
              public buildRoadObject(nativeRoadObject: com.mapbox.navigator.RoadObject): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
              public getUpdatedObjectsAhead(it: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>, element$iv$iv: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
              public buildUpcomingRoadObject(roadObject: com.mapbox.navigation.base.trip.model.roadobject.RoadObject, distanceToStart: java.lang.Double, distanceInfo: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo): com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject;
              public toUpcomingRoadObjects(it: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteIndicesFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteIndicesFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteIndicesFactory;
              public buildRouteIndices(legIndex: number, stepIndex: number, routeGeometryIndex: number, legGeometryIndex: number, intersectionIndex: number): com.mapbox.navigation.base.internal.trip.model.RouteIndices;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteLegProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteLegProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteLegProgressFactory;
              public buildRouteLegProgressObject(legIndex: number, routeLeg: com.mapbox.api.directions.v5.models.RouteLeg, distanceTraveled: number, distanceRemaining: number, durationRemaining: number, fractionTraveled: number, currentStepProgress: com.mapbox.navigation.base.trip.model.RouteStepProgress, upcomingStep: com.mapbox.api.directions.v5.models.LegStep, geometryIndex: number, legDestination: com.mapbox.navigation.base.route.LegWaypoint): com.mapbox.navigation.base.trip.model.RouteLegProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteProgressFactory;
              public buildRouteProgressObject(
                route: com.mapbox.navigation.base.route.NavigationRoute,
                bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions,
                voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions,
                currentState: com.mapbox.navigation.base.trip.model.RouteProgressState,
                currentLegProgress: com.mapbox.navigation.base.trip.model.RouteLegProgress,
                upcomingStepPoints: java.util.List<com.mapbox.geojson.Point>,
                inTunnel: boolean,
                distanceRemaining: number,
                distanceTraveled: number,
                durationRemaining: number,
                fractionTraveled: number,
                remainingWaypoints: number,
                upcomingRoadObjects: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>,
                stale: boolean,
                alternativeRouteId: string,
                currentRouteGeometryIndex: number,
                inParkingAisle: boolean,
                alternativeRoutesIndices: java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>
              ): com.mapbox.navigation.base.trip.model.RouteProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteStepProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteStepProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteStepProgressFactory;
              public buildRouteStepProgressObject(stepIndex: number, intersectionIndex: number, instructionIndex: java.lang.Integer, step: com.mapbox.api.directions.v5.models.LegStep, stepPoints: java.util.List<com.mapbox.geojson.Point>, distanceRemaining: number, distanceTraveled: number, fractionTraveled: number, durationRemaining: number): com.mapbox.navigation.base.trip.model.RouteStepProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class SpeedLimitInfoFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.SpeedLimitInfoFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.SpeedLimitInfoFactory;
              public createSpeedLimitInfo(speed: java.lang.Integer, unit: com.mapbox.navigation.base.speed.model.SpeedUnit, sign: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
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
      export module base {
        export module internal {
          export module factory {
            export class TripNotificationStateFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.TripNotificationStateFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.TripNotificationStateFactory;
              public buildTripNotificationState(progress: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.base.trip.model.TripNotificationState;
              public buildTripNotificationState(bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions, distanceRemaining: java.lang.Double, durationRemaining: java.lang.Double, drivingSide: string): com.mapbox.navigation.base.trip.model.TripNotificationState;
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
      export module base {
        export module internal {
          export module maneuver {
            export class ManeuverTurnIcon {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon>;
              public component3(): boolean;
              public component1(): java.lang.Float;
              public component2(): string;
              public hashCode(): number;
              public getShouldFlipIcon(): boolean;
              public toString(): string;
              public getDrivingSide(): string;
              public copy(degree: java.lang.Float, drivingSide: string, shouldFlipIcon: boolean, icon: java.lang.Integer): com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon;
              public getIcon(): java.lang.Integer;
              public equals(other: any): boolean;
              public constructor(degree: java.lang.Float, drivingSide: string, shouldFlipIcon: boolean, icon: java.lang.Integer);
              public component4(): java.lang.Integer;
              public getDegree(): java.lang.Float;
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
      export module base {
        export module internal {
          export module maneuver {
            export class ManeuverTypeModifierPair {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.ManeuverTypeModifierPair>;
              public component2(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public copy(type: string, modifier: string): com.mapbox.navigation.base.internal.maneuver.ManeuverTypeModifierPair;
              public getModifier(): string;
              public getType(): string;
              public component1(): string;
              public constructor(type: string, modifier: string);
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
      export module base {
        export module internal {
          export module maneuver {
            export class TurnIconHelper {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper>;
              public constructor($this$iconMap_u24lambda_u2d0: com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources);
              public retrieveTurnIcon(it: string, iconSpec: java.lang.Float, this_: string, type: string): com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon;
            }
            export module TurnIconHelper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.Companion>;
              }
              export class IconSpec {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.IconSpec>;
                public toString(): string;
                public component1(): number;
                public constructor(icon: number, drivingSideFlippable: boolean);
                public component2(): boolean;
                public getIcon(): number;
                public getDrivingSideFlippable(): boolean;
                public hashCode(): number;
                public copy(icon: number, drivingSideFlippable: boolean): com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.IconSpec;
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
      export module base {
        export module internal {
          export module metric {
            export class MetricEventInternal extends com.mapbox.navigation.base.metrics.MetricEvent {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.metric.MetricEventInternal>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.metric.MetricEventInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { toValue(): com.mapbox.bindgen.Value; getMetricName(): string; toJson(param0: com.google.gson.Gson): string });
              public constructor();
              public toJson(param0: com.google.gson.Gson): string;
              public toValue(): com.mapbox.bindgen.Value;
              public getMetricName(): string;
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
      export module base {
        export module internal {
          export module route {
            export class AnnotationsRefresher {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.AnnotationsRefresher>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.AnnotationsRefresher;
              public getRefreshedAnnotations(congestionNumeric: com.mapbox.api.directions.v5.models.LegAnnotation, congestion: com.mapbox.api.directions.v5.models.LegAnnotation, distance: number): com.mapbox.api.directions.v5.models.LegAnnotation;
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
      export module base {
        export module internal {
          export module route {
            export class InternalRouter {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.InternalRouter>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.route.InternalRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export module internal {
          export module route {
            export class LegWaypointFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.LegWaypointFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.LegWaypointFactory;
              public createLegWaypoint(location: com.mapbox.geojson.Point, name: string, target: com.mapbox.geojson.Point, type: string, metadata: java.util.Map<string, any>): com.mapbox.navigation.base.route.LegWaypoint;
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
      export module base {
        export module internal {
          export module route {
            export class NavigationRouteEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.NavigationRouteEx>;
              public static isExpired(param0: com.mapbox.navigation.base.route.NavigationRoute): boolean;
              public static toTestNavigationRoute($this$toTestNavigationRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, sdkRouteParser: com.mapbox.navigation.base.internal.SDKRouteParser): com.mapbox.navigation.base.route.NavigationRoute;
              public static toTestNavigationRoutes(param0: java.util.List<any>, it: com.mapbox.navigation.base.route.RouterOrigin, item$iv$iv: com.mapbox.navigation.base.internal.SDKRouteParser): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public static nativeRoute($this$nativeRoute: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigator.RouteInterface;
              public static createNavigationRoutes(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routeParser: com.mapbox.navigation.base.internal.SDKRouteParser, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, responseTimeElapsedSeconds: java.lang.Long): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public static createNavigationRoute(directionsRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, sdkRouteParser: com.mapbox.navigation.base.internal.SDKRouteParser): com.mapbox.navigation.base.route.NavigationRoute;
              public static getRouterOrigin($this$routerOrigin: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigator.RouterOrigin;
              public static updateExpirationTime($this$updateExpirationTime: com.mapbox.navigation.base.route.NavigationRoute, newExpirationTimeElapsedSeconds: java.lang.Long): com.mapbox.navigation.base.route.NavigationRoute;
              public static refreshNativePeer($this$refreshNativePeer: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.base.route.NavigationRoute;
              public static refreshRoute(param0: com.mapbox.navigation.base.route.NavigationRoute, it: number, param1: java.lang.Integer, it: java.util.List<any>, item$iv$iv: java.util.List<any>, $this$mapTo$iv$iv: java.util.List<any>, destination$iv$iv: java.util.List<any>, $i$f$mapTo: number, $this$map$iv: java.lang.Integer): com.mapbox.navigation.base.route.NavigationRoute;
              public static update(refreshedRoute: com.mapbox.navigation.base.route.NavigationRoute, $this$update: any, directionsRouteBlock: any, directionsResponseBlock: java.lang.Long): com.mapbox.navigation.base.route.NavigationRoute;
              public static toNavigationRoute($this$toNavigationRoute: com.mapbox.navigator.RouteInterface, responseTimeElapsedSeconds: number, directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, optimiseDirectionsResponseStructure: boolean): com.mapbox.navigation.base.route.NavigationRoute;
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
      export module base {
        export module internal {
          export module route {
            export class RetryableThrowable {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.RetryableThrowable>;
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
      export module base {
        export module internal {
          export module route {
            export class RouteCompatibilityCache {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.RouteCompatibilityCache>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.RouteCompatibilityCache;
              public getFor(it: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.base.route.NavigationRoute;
              public cacheCreationResult(it: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
              public setDirectionsSessionResult(this_: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
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
      export module base {
        export module internal {
          export module route {
            export class Waypoint {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint>;
              public static REGULAR: number = 1;
              public static SILENT: number = 2;
              public static EV_CHARGING_SERVER: number = 3;
              public static EV_CHARGING_USER: number = 4;
              public getType(): number;
              public hashCode(): number;
              public constructor(location: com.mapbox.geojson.Point, name: string, target: com.mapbox.geojson.Point, internalType: com.mapbox.navigation.base.internal.route.Waypoint.InternalType, metadata: java.util.Map<string, any>);
              public getLocation(): com.mapbox.geojson.Point;
              public getMetadata(): java.util.Map<string, com.google.gson.JsonElement>;
              public getName(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public getTarget(): com.mapbox.geojson.Point;
              public getInternalType$libnavigation_base_release(): com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
            }
            export module Waypoint {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.Companion>;
              }
              export class InternalType {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.InternalType>;
                public static Regular: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static Silent: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static EvChargingServer: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static EvChargingUser: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static values(): androidNative.Array<com.mapbox.navigation.base.internal.route.Waypoint.InternalType>;
                public static valueOf(value: string): com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
              }
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.base.internal.route.Waypoint$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.WhenMappings>;
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
      export module base {
        export module internal {
          export module time {
            export class TimeFormatter {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.time.TimeFormatter>;
              public static INSTANCE: com.mapbox.navigation.base.internal.time.TimeFormatter;
              public static formatTimeRemaining(seconds: globalAndroid.content.Context, days: number, hoursAndMinutes: java.util.Locale): globalAndroid.text.SpannableStringBuilder;
              public static formatTime(chain: java.util.Calendar, time: number, type: boolean): string;
              public static formatTime(time: java.util.Calendar, routeDuration: number, type: number, isDeviceTwentyFourHourFormat: boolean): string;
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
      export module base {
        export module internal {
          export module trip {
            export module model {
              export class RouteIndices {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.model.RouteIndices>;
                public toString(): string;
                public constructor(legIndex: number, stepIndex: number, routeGeometryIndex: number, legGeometryIndex: number, intersectionIndex: number);
                public getLegIndex(): number;
                public getIntersectionIndex(): number;
                public getLegGeometryIndex(): number;
                public getStepIndex(): number;
                public getRouteGeometryIndex(): number;
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
      export module base {
        export module internal {
          export module trip {
            export module notification {
              export class NotificationTurnIconResources extends com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources>;
                public getTurnIconDepart(): number;
                public getTurnIconNewNameSharpRight(): number;
                public getTurnIconOffRampLeft(): number;
                public getTurnIconOnRampSlightRight(): number;
                public getTurnIconRotaryRight(): number;
                public getTurnIconContinueSlightLeft(): number;
                public getTurnIconRamp(): number;
                public getTurnIconArrive(): number;
                public getTurnIconContinueUturn(): number;
                public getTurnIconTurnSlightLeft(): number;
                public getTurnIconEndRoadRight(): number;
                public equals(other: any): boolean;
                public getTurnIconInvalidStraight(): number;
                public getTurnIconRoundaboutSharpLeft(): number;
                public getTurnIconOnRampSharpRight(): number;
                public getTurnIconContinueSlightRight(): number;
                public getTurnIconForkStraight(): number;
                public getTurnIconOffRampRight(): number;
                public getTurnIconRotarySharpRight(): number;
                public getTurnIconTurnSharpLeft(): number;
                public getTurnIconMergeSlightLeft(): number;
                public getTurnIconRoundaboutRight(): number;
                public getTurnIconForkSlightRight(): number;
                public getTurnIconTurnSharpRight(): number;
                public getTurnIconMergeStraight(): number;
                public getTurnIconTurnLeft(): number;
                public getTurnIconArriveStraight(): number;
                public getTurnIconNewNameStraight(): number;
                public getTurnIconOnRampRight(): number;
                public getTurnIconOnRamp(): number;
                public getTurnIconNotificationSlightRight(): number;
                public getTurnIconOnRampStraight(): number;
                public static defaultIconSet(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
                public getTurnIconOnRampSharpLeft(): number;
                public getTurnIconNotificationSharpLeft(): number;
                public getTurnIconContinue(): number;
                public getTurnIconForkSlightLeft(): number;
                public getTurnIconForkLeft(): number;
                public getTurnIconOnRampSlightLeft(): number;
                public getTurnIconInvalidUturn(): number;
                public getTurnIconMergeLeft(): number;
                public getTurnIconUturn(): number;
                public getTurnIconMergeSlightRight(): number;
                public getTurnIconNotificationLeft(): number;
                public getTurnIconNotificationSlightLeft(): number;
                public getTurnIconNewNameSharpLeft(): number;
                public getTurnIconRotarySharpLeft(): number;
                public getTurnIconTurnStraight(): number;
                public getTurnIconRoundaboutLeft(): number;
                public getTurnIconArriveLeft(): number;
                public getTurnIconInvalidSlightRight(): number;
                public getTurnIconNewNameLeft(): number;
                public getTurnIconNotificationStraight(): number;
                public getTurnIconRoundaboutSlightLeft(): number;
                public getTurnIconInvalidRight(): number;
                public getTurnIconRotary(): number;
                public toString(): string;
                public getTurnIconOffRampSlightRight(): number;
                public getTurnIconContinueLeft(): number;
                public getTurnIconEndRoadLeft(): number;
                public getTurnIconRoundabout(): number;
                public getTurnIconContinueRight(): number;
                public getTurnIconRoundaboutSharpRight(): number;
                public getTurnIconOffRamp(): number;
                public getTurnIconRotaryLeft(): number;
                public getTurnIconRoundaboutSlightRight(): number;
                public getTurnIconDepartStraight(): number;
                public getTurnIconInvalid(): number;
                public getTurnIconNewNameSlightRight(): number;
                public getTurnIconInvalidLeft(): number;
                public getTurnIconDepartLeft(): number;
                public getTurnIconNewNameSlightLeft(): number;
                public getTurnIconNotificationRight(): number;
                public getTurnIconForkRight(): number;
                public getTurnIconTurnSlightRight(): number;
                public getTurnIconRotaryStraight(): number;
                public getTurnIconContinueStraight(): number;
                public getTurnIconMergeRight(): number;
                public getTurnIconOffRampSlightLeft(): number;
                public getTurnIconNewNameRight(): number;
                public getTurnIconFork(): number;
                public getTurnIconInvalidSlightLeft(): number;
                public getTurnIconArriveRight(): number;
                public getTurnIconOnRampLeft(): number;
                public getTurnIconDepartRight(): number;
                public getTurnIconRotarySlightLeft(): number;
                public toBuilder(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                public getTurnIconNotificationSharpRight(): number;
                public getTurnIconTurnRight(): number;
                public getTurnIconRoundaboutStraight(): number;
                public getTurnIconRotarySlightRight(): number;
                public hashCode(): number;
              }
              export module NotificationTurnIconResources {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder>;
                  public turnIconOnRampSlightRight($this$turnIconOnRampSlightRight_u24lambda_u2d59: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySharpRight($this$turnIconRotarySharpRight_u24lambda_u2d70: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartRight($this$turnIconDepartRight_u24lambda_u2d13: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidRight($this$turnIconInvalidRight_u24lambda_u2d25: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutLeft($this$turnIconRoundaboutLeft_u24lambda_u2d72: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueStraight($this$turnIconContinueStraight_u24lambda_u2d7: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueSlightLeft($this$turnIconContinueSlightLeft_u24lambda_u2d9: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeStraight($this$turnIconMergeStraight_u24lambda_u2d32: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkRight($this$turnIconForkRight_u24lambda_u2d19: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnStraight($this$turnIconTurnStraight_u24lambda_u2d81: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconEndRoadLeft($this$turnIconEndRoadLeft_u24lambda_u2d15: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSharpLeft($this$turnIconNotificationSharpLeft_u24lambda_u2d47: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSharpRight($this$turnIconRoundaboutSharpRight_u24lambda_u2d78: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinue($this$turnIconContinue_u24lambda_u2d4: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampStraight($this$turnIconOnRampStraight_u24lambda_u2d57: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconFork($this$turnIconFork_u24lambda_u2d17: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeLeft($this$turnIconMergeLeft_u24lambda_u2d30: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconEndRoadRight($this$turnIconEndRoadRight_u24lambda_u2d16: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampSlightLeft($this$turnIconOffRampSlightLeft_u24lambda_u2d52: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSlightRight($this$turnIconNewNameSlightRight_u24lambda_u2d39: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconUturn($this$turnIconUturn_u24lambda_u2d86: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueSlightRight($this$turnIconContinueSlightRight_u24lambda_u2d10: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueUturn($this$turnIconContinueUturn_u24lambda_u2d8: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidUturn($this$turnIconInvalidUturn_u24lambda_u2d27: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSharpLeft($this$turnIconOnRampSharpLeft_u24lambda_u2d60: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidSlightLeft($this$turnIconInvalidSlightLeft_u24lambda_u2d28: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeSlightLeft($this$turnIconMergeSlightLeft_u24lambda_u2d33: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSlightRight($this$turnIconTurnSlightRight_u24lambda_u2d83: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampSlightRight($this$turnIconOffRampSlightRight_u24lambda_u2d53: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidStraight($this$turnIconInvalidStraight_u24lambda_u2d26: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnRight($this$turnIconTurnRight_u24lambda_u2d80: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampRight($this$turnIconOffRampRight_u24lambda_u2d51: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveStraight($this$turnIconArriveStraight_u24lambda_u2d3: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryLeft($this$turnIconRotaryLeft_u24lambda_u2d64: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryStraight($this$turnIconRotaryStraight_u24lambda_u2d66: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArrive($this$turnIconArrive_u24lambda_u2d0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeSlightRight($this$turnIconMergeSlightRight_u24lambda_u2d34: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSlightLeft($this$turnIconRoundaboutSlightLeft_u24lambda_u2d75: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkLeft($this$turnIconForkLeft_u24lambda_u2d18: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSlightRight($this$turnIconRoundaboutSlightRight_u24lambda_u2d76: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRamp($this$turnIconOffRamp_u24lambda_u2d49: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutStraight($this$turnIconRoundaboutStraight_u24lambda_u2d74: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartLeft($this$turnIconDepartLeft_u24lambda_u2d12: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidSlightRight($this$turnIconInvalidSlightRight_u24lambda_u2d29: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueRight($this$turnIconContinueRight_u24lambda_u2d6: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySlightRight($this$turnIconRotarySlightRight_u24lambda_u2d68: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameRight($this$turnIconNewNameRight_u24lambda_u2d36: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryRight($this$turnIconRotaryRight_u24lambda_u2d65: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySharpLeft($this$turnIconRotarySharpLeft_u24lambda_u2d69: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSharpRight($this$turnIconOnRampSharpRight_u24lambda_u2d61: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameLeft($this$turnIconNewNameLeft_u24lambda_u2d35: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotary($this$turnIconRotary_u24lambda_u2d63: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRamp($this$turnIconRamp_u24lambda_u2d62: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSharpLeft($this$turnIconNewNameSharpLeft_u24lambda_u2d40: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRamp($this$turnIconOnRamp_u24lambda_u2d54: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationStraight($this$turnIconNotificationStraight_u24lambda_u2d44: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSlightLeft($this$turnIconNotificationSlightLeft_u24lambda_u2d45: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampLeft($this$turnIconOnRampLeft_u24lambda_u2d55: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueLeft($this$turnIconContinueLeft_u24lambda_u2d5: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveLeft($this$turnIconArriveLeft_u24lambda_u2d1: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationRight($this$turnIconNotificationRight_u24lambda_u2d43: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalid($this$turnIconInvalid_u24lambda_u2d23: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameStraight($this$turnIconNewNameStraight_u24lambda_u2d37: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public constructor();
                  public turnIconTurnSharpRight($this$turnIconTurnSharpRight_u24lambda_u2d85: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkSlightLeft($this$turnIconForkSlightLeft_u24lambda_u2d21: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnLeft($this$turnIconTurnLeft_u24lambda_u2d79: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSharpRight($this$turnIconNotificationSharpRight_u24lambda_u2d48: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkSlightRight($this$turnIconForkSlightRight_u24lambda_u2d22: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeRight($this$turnIconMergeRight_u24lambda_u2d31: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSlightLeft($this$turnIconNewNameSlightLeft_u24lambda_u2d38: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampRight($this$turnIconOnRampRight_u24lambda_u2d56: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartStraight($this$turnIconDepartStraight_u24lambda_u2d14: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSharpLeft($this$turnIconRoundaboutSharpLeft_u24lambda_u2d77: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampLeft($this$turnIconOffRampLeft_u24lambda_u2d50: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkStraight($this$turnIconForkStraight_u24lambda_u2d20: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundabout($this$turnIconRoundabout_u24lambda_u2d71: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveRight($this$turnIconArriveRight_u24lambda_u2d2: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSharpLeft($this$turnIconTurnSharpLeft_u24lambda_u2d84: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepart($this$turnIconDepart_u24lambda_u2d11: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidLeft($this$turnIconInvalidLeft_u24lambda_u2d24: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public build(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
                  public turnIconNewNameSharpRight($this$turnIconNewNameSharpRight_u24lambda_u2d41: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySlightLeft($this$turnIconRotarySlightLeft_u24lambda_u2d67: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutRight($this$turnIconRoundaboutRight_u24lambda_u2d73: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationLeft($this$turnIconNotificationLeft_u24lambda_u2d42: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSlightRight($this$turnIconNotificationSlightRight_u24lambda_u2d46: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSlightLeft($this$turnIconOnRampSlightLeft_u24lambda_u2d58: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSlightLeft($this$turnIconTurnSlightLeft_u24lambda_u2d82: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Companion>;
                  public defaultIconSet(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
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
      export module base {
        export module internal {
          export module trip {
            export module notification {
              export class TripNotificationInterceptorOwner {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner>;
                public getInterceptor(): com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor;
                public setInterceptor(param0: com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor): void;
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
      export module base {
        export module internal {
          export module utils {
            export class AlternativesInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.AlternativesInfo>;
              public getUserTriggeredAlternativesRefresh(): boolean;
              public copy(routeResponseInfo: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, userTriggeredAlternativesRefresh: boolean): com.mapbox.navigation.base.internal.utils.AlternativesInfo;
              public hashCode(): number;
              public component2(): boolean;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(routeResponseInfo: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, userTriggeredAlternativesRefresh: boolean);
              public getRouteResponseInfo(): com.mapbox.navigation.base.internal.utils.RouteResponseInfo;
              public component1(): com.mapbox.navigation.base.internal.utils.RouteResponseInfo;
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
      export module base {
        export module internal {
          export module utils {
            export abstract class AlternativesParsingResult<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.AlternativesParsingResult<any>>;
            }
            export module AlternativesParsingResult {
              export class NotActual extends com.mapbox.navigation.base.internal.utils.AlternativesParsingResult<any> {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.AlternativesParsingResult.NotActual>;
                public static INSTANCE: com.mapbox.navigation.base.internal.utils.AlternativesParsingResult.NotActual;
              }
              export class Parsed<T> extends com.mapbox.navigation.base.internal.utils.AlternativesParsingResult<any> {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.AlternativesParsingResult.Parsed<any>>;
                public toString(): string;
                public component1(): any;
                public copy(value: any): com.mapbox.navigation.base.internal.utils.AlternativesParsingResult.Parsed<any>;
                public getValue(): any;
                public constructor(value: any);
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
      export module base {
        export module internal {
          export module utils {
            export class Constants {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.Constants>;
              public constructor();
            }
            export module Constants {
              export class RouteResponse {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.Constants.RouteResponse>;
                public static INSTANCE: com.mapbox.navigation.base.internal.utils.Constants.RouteResponse;
                public static KEY_WAYPOINTS: string = 'waypoints';
                public static KEY_REFRESH_TTL: string = 'refresh_ttl';
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
      export module base {
        export module internal {
          export module utils {
            export class DirectionsRouteEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteEx>;
              public static mapToSdk(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.internal.route.Waypoint>;
              public static refreshTtl(ex: com.mapbox.api.directions.v5.models.DirectionsRoute): java.lang.Integer;
              public static isSameRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, g1: com.mapbox.api.directions.v5.models.DirectionsRoute): boolean;
            }
            export module DirectionsRouteEx {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteEx.WhenMappings>;
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
      export module base {
        export module internal {
          export module utils {
            export class DirectionsRouteMissingConditionsCheck {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteMissingConditionsCheck>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.DirectionsRouteMissingConditionsCheck;
              public getERROR_MESSAGE_TEMPLATE$libnavigation_base_release(): string;
              public checkDirectionsRoute$libnavigation_base_release(urlQueryValue: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
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
      export module base {
        export module internal {
          export module utils {
            export class NotOptimisedRoutesParsingManager extends com.mapbox.navigation.base.internal.utils.RouteParsingManager {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.NotOptimisedRoutesParsingManager>;
              public constructor();
              public parseRouteResponse(param0: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, param1: any, param2: any): any;
              public setPrepareForParsingAction(action: any): void;
              public setPrepareForParsingAction(param0: any): void;
              public parseAlternatives(param0: com.mapbox.navigation.base.internal.utils.AlternativesInfo, param1: any, param2: any): any;
              public parseAlternatives(arguments_: com.mapbox.navigation.base.internal.utils.AlternativesInfo, parsing: any, $continuation: any): any;
              public parseRouteResponse(routeResponseInfo: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, parsing: any, $completion: any): any;
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
      export module base {
        export module internal {
          export module utils {
            export class OptimisedRoutesParsingManager extends com.mapbox.navigation.base.internal.utils.RouteParsingManager {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.OptimisedRoutesParsingManager>;
              public parseRouteResponse(param0: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, param1: any, param2: any): any;
              public constructor(options: com.mapbox.navigation.base.options.LongRoutesOptimisationOptions.OptimiseNavigationForLongRoutes);
              public setPrepareForParsingAction(action: any): void;
              public parseAlternatives(arguments_: com.mapbox.navigation.base.internal.utils.AlternativesInfo, parsing: any, category$iv: any): any;
              public setPrepareForParsingAction(param0: any): void;
              public parseAlternatives(param0: com.mapbox.navigation.base.internal.utils.AlternativesInfo, param1: any, param2: any): any;
              public parseRouteResponse(this_: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, routeResponseInfo: any, parsing: any): any;
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
      export module base {
        export module internal {
          export module utils {
            export class ParseArguments {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.ParseArguments>;
              public component1(): boolean;
              public hashCode(): number;
              public getOptimiseDirectionsResponseStructure(): boolean;
              public equals(other: any): boolean;
              public copy(optimiseDirectionsResponseStructure: boolean): com.mapbox.navigation.base.internal.utils.ParseArguments;
              public toString(): string;
              public constructor(optimiseDirectionsResponseStructure: boolean);
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
      export module base {
        export module internal {
          export module utils {
            export class QueriesProvider {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.QueriesProvider>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.QueriesProvider;
              public getExclusiveQueries$libnavigation_base_release(): java.util.Map<string, string>;
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
      export module base {
        export module internal {
          export module utils {
            export class RouteParsingManager {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.RouteParsingManager>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.utils.RouteParsingManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { setPrepareForParsingAction(param0: any): void; parseRouteResponse(param0: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, param1: any, param2: any): any; parseAlternatives(param0: com.mapbox.navigation.base.internal.utils.AlternativesInfo, param1: any, param2: any): any });
              public constructor();
              public parseRouteResponse(param0: com.mapbox.navigation.base.internal.utils.RouteResponseInfo, param1: any, param2: any): any;
              public setPrepareForParsingAction(param0: any): void;
              public parseAlternatives(param0: com.mapbox.navigation.base.internal.utils.AlternativesInfo, param1: any, param2: any): any;
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
      export module base {
        export module internal {
          export module utils {
            export class RouteResponseInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.RouteResponseInfo>;
              public component1(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getSizeBytes(): number;
              public constructor(sizeBytes: number);
              public toString(): string;
              public copy(sizeBytes: number): com.mapbox.navigation.base.internal.utils.RouteResponseInfo;
            }
            export module RouteResponseInfo {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.RouteResponseInfo.Companion>;
                public fromResponses(it: java.util.List<any>): com.mapbox.navigation.base.internal.utils.RouteResponseInfo;
                public fromResponse(response: java.nio.ByteBuffer): com.mapbox.navigation.base.internal.utils.RouteResponseInfo;
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
      export module base {
        export module internal {
          export module utils {
            export module RouterExKt {
              export module RouterExKt {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.RouterExKt.WhenMappings>;
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
      export module base {
        export module internal {
          export module utils {
            export class WaypointFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.WaypointFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.WaypointFactory;
              public provideWaypoint(location: com.mapbox.geojson.Point, name: string, target: com.mapbox.geojson.Point, type: number, metadata: java.util.Map<string, any>): com.mapbox.navigation.base.internal.route.Waypoint;
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
      export module base {
        export module maneuver {
          export module model {
            export class BaseTurnIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getTurnIconArrive(): number;
                getTurnIconArriveLeft(): number;
                getTurnIconArriveRight(): number;
                getTurnIconArriveStraight(): number;
                getTurnIconContinue(): number;
                getTurnIconContinueLeft(): number;
                getTurnIconContinueRight(): number;
                getTurnIconContinueStraight(): number;
                getTurnIconContinueUturn(): number;
                getTurnIconContinueSlightLeft(): number;
                getTurnIconContinueSlightRight(): number;
                getTurnIconDepart(): number;
                getTurnIconDepartLeft(): number;
                getTurnIconDepartRight(): number;
                getTurnIconDepartStraight(): number;
                getTurnIconEndRoadLeft(): number;
                getTurnIconEndRoadRight(): number;
                getTurnIconFork(): number;
                getTurnIconForkLeft(): number;
                getTurnIconForkRight(): number;
                getTurnIconForkStraight(): number;
                getTurnIconForkSlightLeft(): number;
                getTurnIconForkSlightRight(): number;
                getTurnIconInvalid(): number;
                getTurnIconInvalidLeft(): number;
                getTurnIconInvalidRight(): number;
                getTurnIconInvalidStraight(): number;
                getTurnIconInvalidSlightLeft(): number;
                getTurnIconInvalidSlightRight(): number;
                getTurnIconInvalidUturn(): number;
                getTurnIconMergeLeft(): number;
                getTurnIconMergeRight(): number;
                getTurnIconMergeStraight(): number;
                getTurnIconMergeSlightLeft(): number;
                getTurnIconMergeSlightRight(): number;
                getTurnIconNewNameLeft(): number;
                getTurnIconNewNameRight(): number;
                getTurnIconNewNameStraight(): number;
                getTurnIconNewNameSharpLeft(): number;
                getTurnIconNewNameSharpRight(): number;
                getTurnIconNewNameSlightLeft(): number;
                getTurnIconNewNameSlightRight(): number;
                getTurnIconNotificationLeft(): number;
                getTurnIconNotificationRight(): number;
                getTurnIconNotificationStraight(): number;
                getTurnIconNotificationSharpLeft(): number;
                getTurnIconNotificationSharpRight(): number;
                getTurnIconNotificationSlightLeft(): number;
                getTurnIconNotificationSlightRight(): number;
                getTurnIconOffRamp(): number;
                getTurnIconOffRampLeft(): number;
                getTurnIconOffRampRight(): number;
                getTurnIconOffRampSlightLeft(): number;
                getTurnIconOffRampSlightRight(): number;
                getTurnIconOnRamp(): number;
                getTurnIconOnRampLeft(): number;
                getTurnIconOnRampRight(): number;
                getTurnIconOnRampStraight(): number;
                getTurnIconOnRampSlightLeft(): number;
                getTurnIconOnRampSlightRight(): number;
                getTurnIconOnRampSharpLeft(): number;
                getTurnIconOnRampSharpRight(): number;
                getTurnIconRamp(): number;
                getTurnIconRotary(): number;
                getTurnIconRotaryLeft(): number;
                getTurnIconRotaryRight(): number;
                getTurnIconRotaryStraight(): number;
                getTurnIconRotarySlightLeft(): number;
                getTurnIconRotarySlightRight(): number;
                getTurnIconRotarySharpLeft(): number;
                getTurnIconRotarySharpRight(): number;
                getTurnIconRoundabout(): number;
                getTurnIconRoundaboutLeft(): number;
                getTurnIconRoundaboutRight(): number;
                getTurnIconRoundaboutStraight(): number;
                getTurnIconRoundaboutSlightLeft(): number;
                getTurnIconRoundaboutSlightRight(): number;
                getTurnIconRoundaboutSharpLeft(): number;
                getTurnIconRoundaboutSharpRight(): number;
                getTurnIconTurnLeft(): number;
                getTurnIconTurnRight(): number;
                getTurnIconTurnStraight(): number;
                getTurnIconTurnSlightLeft(): number;
                getTurnIconTurnSlightRight(): number;
                getTurnIconTurnSharpLeft(): number;
                getTurnIconTurnSharpRight(): number;
                getTurnIconUturn(): number;
              });
              public constructor();
              public getTurnIconRoundaboutLeft(): number;
              public getTurnIconContinueSlightRight(): number;
              public getTurnIconNewNameSlightLeft(): number;
              public getTurnIconTurnSharpRight(): number;
              public getTurnIconArriveStraight(): number;
              public getTurnIconArriveRight(): number;
              public getTurnIconDepart(): number;
              public getTurnIconRamp(): number;
              public getTurnIconFork(): number;
              public getTurnIconRoundaboutSlightRight(): number;
              public getTurnIconContinueLeft(): number;
              public getTurnIconNotificationSharpRight(): number;
              public getTurnIconTurnStraight(): number;
              public getTurnIconNotificationLeft(): number;
              public getTurnIconMergeSlightRight(): number;
              public getTurnIconArrive(): number;
              public getTurnIconForkStraight(): number;
              public getTurnIconNewNameSlightRight(): number;
              public getTurnIconOnRampSharpLeft(): number;
              public getTurnIconNewNameSharpRight(): number;
              public getTurnIconOffRampRight(): number;
              public getTurnIconNewNameLeft(): number;
              public getTurnIconRoundaboutSharpRight(): number;
              public getTurnIconTurnRight(): number;
              public getTurnIconNotificationSlightRight(): number;
              public getTurnIconMergeStraight(): number;
              public getTurnIconOnRampRight(): number;
              public getTurnIconEndRoadLeft(): number;
              public getTurnIconInvalidRight(): number;
              public getTurnIconRotarySharpLeft(): number;
              public getTurnIconRoundaboutStraight(): number;
              public getTurnIconRotaryStraight(): number;
              public getTurnIconRotarySharpRight(): number;
              public getTurnIconInvalidUturn(): number;
              public getTurnIconForkRight(): number;
              public getTurnIconForkSlightLeft(): number;
              public getTurnIconForkSlightRight(): number;
              public getTurnIconRotary(): number;
              public getTurnIconDepartStraight(): number;
              public getTurnIconOffRamp(): number;
              public getTurnIconOnRampSlightLeft(): number;
              public getTurnIconOnRampStraight(): number;
              public getTurnIconEndRoadRight(): number;
              public getTurnIconNotificationRight(): number;
              public getTurnIconDepartRight(): number;
              public getTurnIconRotaryRight(): number;
              public getTurnIconRotarySlightLeft(): number;
              public getTurnIconRoundaboutRight(): number;
              public getTurnIconTurnSharpLeft(): number;
              public getTurnIconForkLeft(): number;
              public getTurnIconArriveLeft(): number;
              public getTurnIconRotaryLeft(): number;
              public getTurnIconContinueUturn(): number;
              public getTurnIconNotificationSharpLeft(): number;
              public getTurnIconInvalidStraight(): number;
              public getTurnIconUturn(): number;
              public getTurnIconRoundabout(): number;
              public getTurnIconNewNameSharpLeft(): number;
              public getTurnIconTurnLeft(): number;
              public getTurnIconTurnSlightRight(): number;
              public getTurnIconContinueStraight(): number;
              public getTurnIconOnRampSlightRight(): number;
              public getTurnIconMergeRight(): number;
              public getTurnIconTurnSlightLeft(): number;
              public getTurnIconInvalidLeft(): number;
              public getTurnIconNewNameRight(): number;
              public getTurnIconMergeLeft(): number;
              public getTurnIconNotificationSlightLeft(): number;
              public getTurnIconOnRamp(): number;
              public getTurnIconNewNameStraight(): number;
              public getTurnIconRotarySlightRight(): number;
              public getTurnIconMergeSlightLeft(): number;
              public getTurnIconRoundaboutSharpLeft(): number;
              public getTurnIconContinueSlightLeft(): number;
              public getTurnIconInvalidSlightLeft(): number;
              public getTurnIconOffRampSlightRight(): number;
              public getTurnIconNotificationStraight(): number;
              public getTurnIconInvalid(): number;
              public getTurnIconOnRampLeft(): number;
              public getTurnIconInvalidSlightRight(): number;
              public getTurnIconOffRampSlightLeft(): number;
              public getTurnIconContinue(): number;
              public getTurnIconRoundaboutSlightLeft(): number;
              public getTurnIconContinueRight(): number;
              public getTurnIconOnRampSharpRight(): number;
              public getTurnIconOffRampLeft(): number;
              public getTurnIconDepartLeft(): number;
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
      export module base {
        export module metrics {
          export class DirectionsMetrics {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.DirectionsMetrics>;
            public static INSTANCE: com.mapbox.navigation.base.metrics.DirectionsMetrics;
            public static ROUTE_RETRIEVAL: string = 'route_retrieval_event';
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class MetricEvent {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMetricName(): string; toJson(param0: com.google.gson.Gson): string });
            public constructor();
            public toJson(param0: com.google.gson.Gson): string;
            public getMetricName(): string;
          }
          export module MetricEvent {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent.DefaultImpls>;
            }
            export class Metric {
              public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent.Metric>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricEvent$Metric interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export module metrics {
          export class MetricsObserver {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricsObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMetricUpdated(param0: string, param1: string): void });
            public constructor();
            public onMetricUpdated(param0: string, param1: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class MetricsReporter {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricsReporter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricsReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { addEvent(param0: com.mapbox.navigation.base.metrics.MetricEvent): void; sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent): void; setMetricsObserver(param0: com.mapbox.navigation.base.metrics.MetricsObserver): void; removeObserver(): void });
            public constructor();
            public addEvent(param0: com.mapbox.navigation.base.metrics.MetricEvent): void;
            public sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent): void;
            public removeObserver(): void;
            public setMetricsObserver(param0: com.mapbox.navigation.base.metrics.MetricsObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class NavigationMetrics {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.NavigationMetrics>;
            public static INSTANCE: com.mapbox.navigation.base.metrics.NavigationMetrics;
            public static ARRIVE: string = 'navigation.arrive';
            public static CANCEL_SESSION: string = 'navigation.cancel';
            public static DEPART: string = 'navigation.depart';
            public static REROUTE: string = 'navigation.reroute';
            public static FEEDBACK: string = 'navigation.feedback';
            public static INITIAL_GPS: string = 'initial_gps_event';
            public static FASTER_ROUTE: string = 'navigation.fasterRoute';
            public static APP_USER_TURNSTILE: string = 'appUserTurnstile';
            public static FREE_DRIVE: string = 'navigation.freeDrive';
            public static CUSTOM_EVENT: string = 'navigation.customEvent';
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module options {
          export class AlertServiceOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.AlertServiceOptions>;
            public getCollectRestrictedAreas(): boolean;
            public equals(other: any): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
            public getCollectTunnels(): boolean;
            public getCollectMergingAreas(): boolean;
            public getCollectBridges(): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module AlertServiceOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.AlertServiceOptions.Builder>;
              public constructor();
              public collectRestrictedAreas($this$collectRestrictedAreas_u24lambda_u2d2: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public collectBridges($this$collectBridges_u24lambda_u2d1: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public collectTunnels($this$collectTunnels_u24lambda_u2d0: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public collectMergingAreas($this$collectMergingAreas_u24lambda_u2d3: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public build(): com.mapbox.navigation.base.options.AlertServiceOptions;
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
      export module base {
        export module options {
          export class CopilotOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.CopilotOptions>;
            public equals(other: any): boolean;
            public getMaxHistoryFileLengthMillis(): number;
            public getMaxHistoryFilesPerSession(): number;
            public getShouldSendHistoryOnlyWithFeedback(): boolean;
            public hashCode(): number;
            public getMaxTotalHistoryFilesSizePerSession(): number;
            public getShouldRecordFreeDriveHistories(): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.CopilotOptions.Builder;
            public toString(): string;
          }
          export module CopilotOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.CopilotOptions.Builder>;
              public constructor();
              public shouldSendHistoryOnlyWithFeedback($this$shouldSendHistoryOnlyWithFeedback_u24lambda_u2d0: boolean): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public maxTotalHistoryFilesSizePerSession(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public maxHistoryFileLengthMillis(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public shouldRecordFreeDriveHistories($this$shouldRecordFreeDriveHistories_u24lambda_u2d7: boolean): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public maxHistoryFilesPerSession(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public build(): com.mapbox.navigation.base.options.CopilotOptions;
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
      export module base {
        export module options {
          export class DeviceProfile {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceProfile>;
            public getCustomConfig(): string;
            public equals(other: any): boolean;
            public hashCode(): number;
            public getDeviceType(): com.mapbox.navigation.base.options.DeviceType;
            public toString(): string;
            public toBuilder(): com.mapbox.navigation.base.options.DeviceProfile.Builder;
          }
          export module DeviceProfile {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceProfile.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.DeviceProfile;
              public deviceType($this$deviceType_u24lambda_u2d1: com.mapbox.navigation.base.options.DeviceType): com.mapbox.navigation.base.options.DeviceProfile.Builder;
              public customConfig($this$customConfig_u24lambda_u2d0: string): com.mapbox.navigation.base.options.DeviceProfile.Builder;
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
      export module base {
        export module options {
          export class DeviceType {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceType>;
            public static HANDHELD: com.mapbox.navigation.base.options.DeviceType;
            public static AUTOMOBILE: com.mapbox.navigation.base.options.DeviceType;
            public static valueOf(value: string): com.mapbox.navigation.base.options.DeviceType;
            public static values(): androidNative.Array<com.mapbox.navigation.base.options.DeviceType>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module options {
          export class EHorizonOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions>;
            public getExpansion(): number;
            public equals(other: any): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
            public hashCode(): number;
            public getLength(): number;
            public getAlertServiceOptions(): com.mapbox.navigation.base.options.AlertServiceOptions;
            public getBranchLength(): number;
            public getMinTimeDeltaBetweenUpdates(): java.lang.Double;
            public toString(): string;
          }
          export module EHorizonOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions.Builder>;
              public constructor();
              public expansion($this$expansion_u24lambda_u2d1: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public length($this$length_u24lambda_u2d0: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public build(): com.mapbox.navigation.base.options.EHorizonOptions;
              public branchLength($this$branchLength_u24lambda_u2d2: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public minTimeDeltaBetweenUpdates(it: java.lang.Double): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public alertServiceOptions($this$alertServiceOptions_u24lambda_u2d5: com.mapbox.navigation.base.options.AlertServiceOptions): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
            }
            export module Builder {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions.Builder.Companion>;
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
      export module base {
        export module options {
          export class EventsAppMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.EventsAppMetadata>;
            public getUserId(): string;
            public equals(other: any): boolean;
            public getVersion(): string;
            public toBuilder(): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
            public getSessionId(): string;
            public hashCode(): number;
            public getName(): string;
            public toString(): string;
          }
          export module EventsAppMetadata {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.EventsAppMetadata.Builder>;
              public userId($this$userId_u24lambda_u2d0: string): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
              public constructor(name: string, version: string);
              public sessionId($this$sessionId_u24lambda_u2d1: string): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
              public build(): com.mapbox.navigation.base.options.EventsAppMetadata;
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
      export module base {
        export module options {
          export class HistoryRecorderOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.HistoryRecorderOptions>;
            public equals(other: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder;
            public getFileDirectory(): string;
            public toString(): string;
          }
          export module HistoryRecorderOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.HistoryRecorderOptions;
              public fileDirectory($this$fileDirectory_u24lambda_u2d0: string): com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder;
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
      export module base {
        export module options {
          export class IncidentsOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions>;
            public equals(other: any): boolean;
            public getApiUrl(): string;
            public hashCode(): number;
            public getGraph(): string;
            public toBuilder(): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
            public toString(): string;
          }
          export module IncidentsOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions.Builder>;
              public constructor();
              public graph($this$graph_u24lambda_u2d0: string): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
              public apiUrl($this$apiUrl_u24lambda_u2d1: string): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
              public build(): com.mapbox.navigation.base.options.IncidentsOptions;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions.Companion>;
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
      export module base {
        export module options {
          export abstract class LongRoutesOptimisationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.LongRoutesOptimisationOptions>;
          }
          export module LongRoutesOptimisationOptions {
            export class NoOptimisations extends com.mapbox.navigation.base.options.LongRoutesOptimisationOptions {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.LongRoutesOptimisationOptions.NoOptimisations>;
              public static INSTANCE: com.mapbox.navigation.base.options.LongRoutesOptimisationOptions.NoOptimisations;
            }
            export class OptimiseNavigationForLongRoutes extends com.mapbox.navigation.base.options.LongRoutesOptimisationOptions {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.LongRoutesOptimisationOptions.OptimiseNavigationForLongRoutes>;
              public copy(responseToParseSizeBytes: number): com.mapbox.navigation.base.options.LongRoutesOptimisationOptions.OptimiseNavigationForLongRoutes;
              public component1(): number;
              public getResponseToParseSizeBytes(): number;
              public hashCode(): number;
              public constructor(responseToParseSizeBytes: number);
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
      export module base {
        export module options {
          export class NavigationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.NavigationOptions>;
            public toBuilder(): com.mapbox.navigation.base.options.NavigationOptions.Builder;
            public getRerouteOptions(): com.mapbox.navigation.base.options.RerouteOptions;
            public getHistoryRecorderOptions(): com.mapbox.navigation.base.options.HistoryRecorderOptions;
            public equals(other: any): boolean;
            public getTimeFormatType(): number;
            public getRoutingTilesOptions(): com.mapbox.navigation.base.options.RoutingTilesOptions;
            public getEHorizonOptions(): com.mapbox.navigation.base.options.EHorizonOptions;
            public hashCode(): number;
            public getRouteRefreshOptions(): com.mapbox.navigation.base.route.RouteRefreshOptions;
            public getEnableSensors(): boolean;
            public getCopilotOptions(): com.mapbox.navigation.base.options.CopilotOptions;
            public isDebugLoggingEnabled(): boolean;
            public getIncidentsOptions(): com.mapbox.navigation.base.options.IncidentsOptions;
            public getAccessToken(): string;
            public toString(): string;
            public getEventsAppMetadata(): com.mapbox.navigation.base.options.EventsAppMetadata;
            public getLocationEngineRequest(): com.mapbox.android.core.location.LocationEngineRequest;
            public getDeviceProfile(): com.mapbox.navigation.base.options.DeviceProfile;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public getLocationEngine(): com.mapbox.android.core.location.LocationEngine;
            public getNavigatorPredictionMillis(): number;
            public getLongRoutesOptimisationOptions(): com.mapbox.navigation.base.options.LongRoutesOptimisationOptions;
            public getApplicationContext(): globalAndroid.content.Context;
            public getRouteAlternativesOptions(): com.mapbox.navigation.base.route.RouteAlternativesOptions;
          }
          export module NavigationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.NavigationOptions.Builder>;
              public enableSensors($this$enableSensors_u24lambda_u2d16: boolean): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public build(): com.mapbox.navigation.base.options.NavigationOptions;
              public routeRefreshOptions($this$routeRefreshOptions_u24lambda_u2d10: com.mapbox.navigation.base.route.RouteRefreshOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public routeAlternativesOptions($this$routeAlternativesOptions_u24lambda_u2d12: com.mapbox.navigation.base.route.RouteAlternativesOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public locationEngine($this$locationEngine_u24lambda_u2d1: com.mapbox.android.core.location.LocationEngine): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public navigatorPredictionMillis($this$navigatorPredictionMillis_u24lambda_u2d5: number): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public historyRecorderOptions($this$historyRecorderOptions_u24lambda_u2d14: com.mapbox.navigation.base.options.HistoryRecorderOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public isDebugLoggingEnabled($this$isDebugLoggingEnabled_u24lambda_u2d8: boolean): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public accessToken($this$accessToken_u24lambda_u2d0: string): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public deviceProfile($this$deviceProfile_u24lambda_u2d3: com.mapbox.navigation.base.options.DeviceProfile): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public distanceFormatterOptions($this$distanceFormatterOptions_u24lambda_u2d6: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public eventsAppMetadata($this$eventsAppMetadata_u24lambda_u2d15: com.mapbox.navigation.base.options.EventsAppMetadata): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public locationEngineRequest($this$locationEngineRequest_u24lambda_u2d2: com.mapbox.android.core.location.LocationEngineRequest): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public constructor(applicationContext: globalAndroid.content.Context);
              public eHorizonOptions($this$eHorizonOptions_u24lambda_u2d9: com.mapbox.navigation.base.options.EHorizonOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public longRoutesOptimisationOptions($this$longRoutesOptimisationOptions_u24lambda_u2d18: com.mapbox.navigation.base.options.LongRoutesOptimisationOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public timeFormatType($this$timeFormatType_u24lambda_u2d4: number): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public routingTilesOptions($this$routingTilesOptions_u24lambda_u2d7: com.mapbox.navigation.base.options.RoutingTilesOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public incidentsOptions($this$incidentsOptions_u24lambda_u2d13: com.mapbox.navigation.base.options.IncidentsOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public copilotOptions($this$copilotOptions_u24lambda_u2d17: com.mapbox.navigation.base.options.CopilotOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public rerouteOptions($this$rerouteOptions_u24lambda_u2d11: com.mapbox.navigation.base.options.RerouteOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
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
      export module base {
        export module options {
          export class PredictiveCacheLocationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions>;
            public equals(other: any): boolean;
            public getRouteBufferRadiusInMeters(): number;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
            public getCurrentLocationRadiusInMeters(): number;
            public getDestinationLocationRadiusInMeters(): number;
            public toString(): string;
          }
          export module PredictiveCacheLocationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder>;
              public constructor();
              public routeBufferRadiusInMeters($this$routeBufferRadiusInMeters_u24lambda_u2d1: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
              public currentLocationRadiusInMeters($this$currentLocationRadiusInMeters_u24lambda_u2d0: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
              public destinationLocationRadiusInMeters($this$destinationLocationRadiusInMeters_u24lambda_u2d2: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
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
      export module base {
        export module options {
          export class PredictiveCacheMapsOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>;
            public getMaxZoom(): number;
            public equals(other: any): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
            public getMinZoom(): number;
            public hashCode(): number;
            public getPredictiveCacheLocationOptions(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
            public toString(): string;
          }
          export module PredictiveCacheMapsOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder>;
              public constructor();
              public minZoom($this$minZoom_u24lambda_u2d1: number): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public maxZoom($this$maxZoom_u24lambda_u2d2: number): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public predictiveCacheLocationOptions(it: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions;
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
      export module base {
        export module options {
          export class PredictiveCacheNavigationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions>;
            public equals(other: any): boolean;
            public hashCode(): number;
            public getPredictiveCacheLocationOptions(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder;
            public toString(): string;
          }
          export module PredictiveCacheNavigationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder>;
              public constructor();
              public predictiveCacheLocationOptions($this$predictiveCacheLocationOptions_u24lambda_u2d0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions;
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
      export module base {
        export module options {
          export class PredictiveCacheOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheOptions>;
            /** @deprecated */
            public getPredictiveCacheMapsOptions(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions;
            public equals(other: any): boolean;
            public getPredictiveCacheNavigationOptions(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions;
            public getPredictiveCacheMapsOptionsList(): java.util.List<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
            public hashCode(): number;
            public toString(): string;
          }
          export module PredictiveCacheOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.PredictiveCacheOptions;
              public predictiveCacheNavigationOptions($this$predictiveCacheNavigationOptions_u24lambda_u2d0: com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
              public predictiveCacheMapsOptionsList($this$predictiveCacheMapsOptionsList_u24lambda_u2d1: java.util.List<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
              /** @deprecated */
              public predictiveCacheMapsOptions(predictiveCacheMapsOptions: com.mapbox.navigation.base.options.PredictiveCacheMapsOptions): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
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
      export module base {
        export module options {
          export class RerouteOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.RerouteOptions>;
            public getAvoidManeuverSeconds(): number;
            public equals(other: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.RerouteOptions.Builder;
            public toString(): string;
          }
          export module RerouteOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.RerouteOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.RerouteOptions;
              public avoidManeuverSeconds(param0: number): com.mapbox.navigation.base.options.RerouteOptions.Builder;
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
      export module base {
        export module options {
          export class RoutingTilesOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.RoutingTilesOptions>;
            public getTilesVersion(): string;
            public getTilesDataset(): string;
            public toBuilder(): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
            public equals(other: any): boolean;
            public getTilesProfile(): string;
            public getFilePath(): string;
            public getMinDaysBetweenServerAndLocalTilesVersion(): number;
            public hashCode(): number;
            public getTileStore(): com.mapbox.common.TileStore;
            public getTilesBaseUri(): java.net.URI;
            public toString(): string;
          }
          export module RoutingTilesOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.RoutingTilesOptions.Builder>;
              public constructor();
              public tileStore($this$tileStore_u24lambda_u2d7: com.mapbox.common.TileStore): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesDataset($this$tilesDataset_u24lambda_u2d3: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesVersion($this$tilesVersion_u24lambda_u2d5: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesProfile($this$tilesProfile_u24lambda_u2d4: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public minDaysBetweenServerAndLocalTilesVersion(param0: number): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public build(): com.mapbox.navigation.base.options.RoutingTilesOptions;
              public filePath($this$filePath_u24lambda_u2d6: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesBaseUri(it: java.net.URI): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
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
      export module base {
        export module road {
          export module model {
            export class Road {
              public static class: java.lang.Class<com.mapbox.navigation.base.road.model.Road>;
              /** @deprecated */
              public getName(): string;
              public constructor(components: java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>, name: string, shieldUrl: string, shieldName: string);
              public hashCode(): number;
              /** @deprecated */
              public getShieldUrl(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public getComponents(): java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>;
              /** @deprecated */
              public getShieldName(): string;
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
      export module base {
        export module road {
          export module model {
            export class RoadComponent {
              public static class: java.lang.Class<com.mapbox.navigation.base.road.model.RoadComponent>;
              public getText(): string;
              public getImageBaseUrl(): string;
              public getLanguage(): string;
              public getShield(): com.mapbox.api.directions.v5.models.MapboxShield;
              public hashCode(): number;
              public equals(other: any): boolean;
              public constructor(text: string, language: string, shield: com.mapbox.api.directions.v5.models.MapboxShield, imageBaseUrl: string);
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
      export module base {
        export module route {
          export class ByteBufferBackedInputStream {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.ByteBufferBackedInputStream>;
            public constructor(buffer: java.nio.ByteBuffer);
            public read(): number;
            public read(this_: androidNative.Array<number>, bytes: number, off: number): number;
            public available(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class DirectionsResponseParsingException {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.DirectionsResponseParsingException>;
            public getOriginal(): java.lang.Throwable;
            public constructor(original: java.lang.Throwable);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class ExclusionViolation {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.ExclusionViolation>;
            public equals(other: any): boolean;
            public constructor(type: string, route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, leg: com.mapbox.api.directions.v5.models.RouteLeg, stepIndex: number, step: com.mapbox.api.directions.v5.models.LegStep, intersectionIndex: number, intersection: com.mapbox.api.directions.v5.models.StepIntersection);
            public getType(): string;
            public copy(type: string, route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, leg: com.mapbox.api.directions.v5.models.RouteLeg, stepIndex: number, step: com.mapbox.api.directions.v5.models.LegStep, intersectionIndex: number, intersection: com.mapbox.api.directions.v5.models.StepIntersection): com.mapbox.navigation.base.route.ExclusionViolation;
            public getLeg(): com.mapbox.api.directions.v5.models.RouteLeg;
            public component1(): string;
            public hashCode(): number;
            public getIntersectionIndex(): number;
            public getStep(): com.mapbox.api.directions.v5.models.LegStep;
            public component6(): com.mapbox.api.directions.v5.models.LegStep;
            public getStepIndex(): number;
            public toString(): string;
            public component8(): com.mapbox.api.directions.v5.models.StepIntersection;
            public component4(): com.mapbox.api.directions.v5.models.RouteLeg;
            public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public getLegIndex(): number;
            public component2(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public component7(): number;
            public getIntersection(): com.mapbox.api.directions.v5.models.StepIntersection;
            public component3(): number;
            public component5(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class LegWaypoint {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint>;
            public static REGULAR: string = 'REGULAR';
            public static EV_CHARGING_ADDED: string = 'EV_CHARGING_ADDED';
            public static EV_CHARGING_USER_PROVIDED: string = 'EV_CHARGING_USER_PROVIDED';
            public equals(other: any): boolean;
            public getLocation(): com.mapbox.geojson.Point;
            public getType(): string;
            public hashCode(): number;
            public getTarget(): com.mapbox.geojson.Point;
            public getMetadata(): java.util.Map<string, com.google.gson.JsonElement>;
            public constructor(location: com.mapbox.geojson.Point, name: string, target: com.mapbox.geojson.Point, type: string, metadata: java.util.Map<string, any>);
            public getName(): string;
            public toString(): string;
          }
          export module LegWaypoint {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint.Companion>;
            }
            export class Type {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint.Type>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.route.LegWaypoint$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module base {
        export module route {
          export class NavigationRoute {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRoute>;
            public getWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
            public equals(other: any): boolean;
            public copy$libnavigation_base_release(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, directionsRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, routeIndex: number, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, nativeRoute: com.mapbox.navigator.RouteInterface, expirationTimeElapsedSeconds: java.lang.Long): com.mapbox.navigation.base.route.NavigationRoute;
            public getUpcomingRoadObjects(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
            public getNativeWaypoints$libnavigation_base_release(): java.util.List<com.mapbox.navigation.base.internal.route.Waypoint>;
            public setExpirationTimeElapsedSeconds$libnavigation_base_release(param0: java.lang.Long): void;
            public hashCode(): number;
            public getOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getDirectionsRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public getNativeRoute$libnavigation_base_release(): com.mapbox.navigator.RouteInterface;
            public toString(): string;
            public static create(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getDirectionsResponse(): com.mapbox.api.directions.v5.models.DirectionsResponse;
            /** @deprecated */
            public static create(directionsResponseJson: string, routeRequestUrl: string): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
            public getUnavoidableClosures$libnavigation_base_release(): java.util.List<java.util.List<com.mapbox.api.directions.v5.models.Closure>>;
            /** @deprecated */
            public static create(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRouteIndex(): number;
            public static create(directionsResponseJson: string, routeRequestUrl: string, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public constructor(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeIndex: number, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, directionsRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, nativeRoute: com.mapbox.navigator.RouteInterface, unavoidableClosures: java.util.List<any>, expirationTimeElapsedSeconds: java.lang.Long);
            public getId(): string;
            public getExpirationTimeElapsedSeconds$libnavigation_base_release(): java.lang.Long;
            public constructor(leg: com.mapbox.api.directions.v5.models.DirectionsResponse, item$iv$iv: number, $this$mapTo$iv$iv: com.mapbox.api.directions.v5.models.RouteOptions, destination$iv$iv: com.mapbox.api.directions.v5.models.DirectionsRoute, $i$f$mapTo: com.mapbox.navigator.RouteInterface, $this$map$iv: java.lang.Long);
          }
          export module NavigationRoute {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRoute.Companion>;
              public createAsync$libnavigation_base_release(directionsResponseJson: com.mapbox.bindgen.DataRef, routeRequestUrl: string, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, responseTimeElapsedSeconds: java.lang.Long, routeParser: com.mapbox.navigation.base.internal.SDKRouteParser, optimiseMemory: boolean, $completion: any): any;
              /** @deprecated */
              public create(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              /** @deprecated */
              public create(directionsResponseJson: string, routeRequestUrl: string): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public create$libnavigation_base_release(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routeParser: com.mapbox.navigation.base.internal.SDKRouteParser, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, responseTimeElapsedSeconds: java.lang.Long): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public create(directionsResponse: com.mapbox.api.directions.v5.models.DirectionsResponse, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public create($i$f$logE: string, category$iv: string, ex: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
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
      export module base {
        export module route {
          export class NavigationRouteEx {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouteEx>;
            public static toDirectionsRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
            public static toNavigationRoute(refreshTtl: com.mapbox.navigator.RouteInterface, routeOptions: number, response: com.mapbox.api.directions.v5.models.DirectionsResponse, $this$toNavigationRoute: boolean): com.mapbox.navigation.base.route.NavigationRoute;
            /** @deprecated */
            public static toNavigationRoutes(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public static toNavigationRoutes(param0: java.util.List<any>, it: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            /** @deprecated */
            public static toNavigationRoute($this$toNavigationRoute: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.base.route.NavigationRoute;
            public static toNavigationRoute($this$toNavigationRoute: com.mapbox.api.directions.v5.models.DirectionsRoute, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.navigation.base.route.NavigationRoute;
            public static toDirectionsResponse(param0: com.mapbox.bindgen.DataRef): com.mapbox.api.directions.v5.models.DirectionsResponse;
            public static toNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, it: com.mapbox.navigation.base.internal.SDKRouteParser, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: boolean): com.mapbox.navigation.base.route.NavigationRoute;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouter extends com.mapbox.navigation.base.route.Router {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number; getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number; getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number; cancelRouteRequest(param0: number): void; cancelAll(): void; getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void; shutdown(): void });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesReady(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void; onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void; onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void;
            public onRoutesReady(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterRefreshCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterRefreshCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouterRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRefreshReady(param0: com.mapbox.navigation.base.route.NavigationRoute): void; onFailure(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError): void });
            public constructor();
            public onFailure(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError): void;
            public onRefreshReady(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterRefreshError {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterRefreshError>;
            public getMessage(): string;
            public constructor(message: string, throwable: java.lang.Throwable, routerFailure: com.mapbox.navigation.base.route.RouterFailure, refreshTtl: java.lang.Integer);
            public equals(other: any): boolean;
            public constructor();
            public getRouterFailure(): com.mapbox.navigation.base.route.RouterFailure;
            public getRefreshTtl(): java.lang.Integer;
            public hashCode(): number;
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
      export module base {
        export module route {
          export class RouteAlternativesOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions>;
            public getIntervalMillis(): number;
            public getAvoidManeuverSeconds(): number;
            public equals(other: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
            public toString(): string;
          }
          export module RouteAlternativesOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder>;
              public constructor();
              public avoidManeuverSeconds(param0: number): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
              public build(): com.mapbox.navigation.base.route.RouteAlternativesOptions;
              public intervalMillis(param0: number): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
            }
            export module Builder {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder.Companion>;
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
      export module base {
        export module route {
          export class RouteExclusions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteExclusions>;
            public static exclusionViolations(exclusionViolation: com.mapbox.navigation.base.route.NavigationRoute): java.util.List<com.mapbox.navigation.base.route.ExclusionViolation>;
            public static exclusionViolations($this$exclusionViolations: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.base.route.ExclusionViolation>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteRefreshCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.RouteRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void; onError(param0: com.mapbox.navigation.base.route.RouteRefreshError): void });
            public constructor();
            public onRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
            public onError(param0: com.mapbox.navigation.base.route.RouteRefreshError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteRefreshError {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshError>;
            public getMessage(): string;
            public equals(other: any): boolean;
            public constructor();
            public constructor(message: string, throwable: java.lang.Throwable);
            public component2(): java.lang.Throwable;
            public copy(message: string, throwable: java.lang.Throwable): com.mapbox.navigation.base.route.RouteRefreshError;
            public component1(): string;
            public hashCode(): number;
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
      export module base {
        export module route {
          export class RouteRefreshOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions>;
            public getIntervalMillis(): number;
            public equals(other: any): boolean;
            public toBuilder(): com.mapbox.navigation.base.route.RouteRefreshOptions.Builder;
            public hashCode(): number;
            public toString(): string;
          }
          export module RouteRefreshOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.route.RouteRefreshOptions;
              public intervalMillis(intervalMillis: number): com.mapbox.navigation.base.route.RouteRefreshOptions.Builder;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions.Companion>;
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
      export module base {
        export module route {
          export class Router {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.Router>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.Router interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number; cancelRouteRequest(param0: number): void; cancelAll(): void; getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void; shutdown(): void });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.RouterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesReady(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin): void; onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void; onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void;
            public onRoutesReady(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterFactory {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterFactory>;
            public static INSTANCE: com.mapbox.navigation.base.route.RouterFactory;
            public buildNavigationRouterRefreshError(message: string, throwable: java.lang.Throwable): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(message: string, throwable: java.lang.Throwable, routerFailure: com.mapbox.navigation.base.route.RouterFailure): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(message: string, throwable: java.lang.Throwable, routerFailure: com.mapbox.navigation.base.route.RouterFailure, refreshTtl: java.lang.Integer): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(message: string): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterFailure {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterFailure>;
            public getMessage(): string;
            public isRetryable(): boolean;
            public component3(): string;
            public equals(other: any): boolean;
            public constructor(url: java.net.URL, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, message: string, code: java.lang.Integer);
            public hashCode(): number;
            public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getThrowable(): java.lang.Throwable;
            public component5(): java.lang.Throwable;
            public component1(): java.net.URL;
            public copy(url: java.net.URL, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, message: string, code: java.lang.Integer, throwable: java.lang.Throwable): com.mapbox.navigation.base.route.RouterFailure;
            public toString(): string;
            public component2(): com.mapbox.navigation.base.route.RouterOrigin;
            public constructor(url: java.net.URL, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, message: string);
            public constructor(url: java.net.URL, routerOrigin: com.mapbox.navigation.base.route.RouterOrigin, message: string, code: java.lang.Integer, throwable: java.lang.Throwable);
            public component4(): java.lang.Integer;
            public getCode(): java.lang.Integer;
            public getUrl(): java.net.URL;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export abstract class RouterOrigin {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin>;
          }
          export module RouterOrigin {
            export class Custom extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Custom>;
              public constructor();
              /** @deprecated */
              public constructor(obj: any);
              public hashCode(): number;
              public component1(): any;
              public equals(other: any): boolean;
              /** @deprecated */
              public getObj(): any;
              public copy(obj: any): com.mapbox.navigation.base.route.RouterOrigin.Custom;
              public toString(): string;
            }
            export class Offboard extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Offboard>;
              public static INSTANCE: com.mapbox.navigation.base.route.RouterOrigin.Offboard;
            }
            export class Onboard extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Onboard>;
              public static INSTANCE: com.mapbox.navigation.base.route.RouterOrigin.Onboard;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimit>;
              public constructor(speedKmph: java.lang.Integer, speedLimitUnit: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, speedLimitSign: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public hashCode(): number;
              public equals(other: any): boolean;
              public getSpeedLimitSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public copy(speedKmph: java.lang.Integer, speedLimitUnit: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, speedLimitSign: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public getSpeedLimitUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public toString(): string;
              public component1(): java.lang.Integer;
              public getSpeedKmph(): java.lang.Integer;
              public component3(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public component2(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitInfo>;
              public constructor(speed: java.lang.Integer, unit: com.mapbox.navigation.base.speed.model.SpeedUnit, sign: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public hashCode(): number;
              public equals(other: any): boolean;
              public getUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public toString(): string;
              public getSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getSpeed(): java.lang.Integer;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitSign {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitSign>;
              public static MUTCD: com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public static VIENNA: com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedLimitSign>;
              public static valueOf(value: string): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitUnit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitUnit>;
              public static KILOMETRES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static MILES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static valueOf(value: string): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedLimitUnit>;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedUnit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedUnit>;
              public static MILES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static KILOMETERS_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static METERS_PER_SECOND: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedUnit>;
              public static valueOf(value: string): com.mapbox.navigation.base.speed.model.SpeedUnit;
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
      export module base {
        export module time {
          export class NoneSpecifiedTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.NoneSpecifiedTimeFormat>;
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(isDeviceTwentyFourHourFormat: boolean);
            public obtainTimeFormatted(type: number, time: java.util.Calendar): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TimeFormatResolver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.time.TimeFormatResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { obtainTimeFormatted(param0: number, param1: java.util.Calendar): string });
            public constructor();
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TimeFormattingChain {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TimeFormattingChain>;
            public setup(twentyFourHours: boolean): com.mapbox.navigation.base.time.TimeFormatResolver;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TwelveHoursTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TwelveHoursTimeFormat>;
            public static TWELVE_HOURS_FORMAT: string = '%tl:%tM %tp';
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(chain: com.mapbox.navigation.base.time.TimeFormatResolver);
            public obtainTimeFormatted(type: number, time: java.util.Calendar): string;
          }
          export module TwelveHoursTimeFormat {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.TwelveHoursTimeFormat.Companion>;
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
      export module base {
        export module time {
          export class TwentyFourHoursTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TwentyFourHoursTimeFormat>;
            public static TWENTY_FOUR_HOURS_FORMAT: string = '%tk:%tM';
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(chain: com.mapbox.navigation.base.time.TimeFormatResolver);
            public obtainTimeFormatted(type: number, time: java.util.Calendar): string;
          }
          export module TwentyFourHoursTimeFormat {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.TwentyFourHoursTimeFormat.Companion>;
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
      export module base {
        export module time {
          export module span {
            export class SpanItem {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.span.SpanItem>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.time.span.SpanItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSpan(): any });
              public constructor();
              public getSpan(): any;
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
      export module base {
        export module time {
          export module span {
            export class TextSpanItem extends com.mapbox.navigation.base.time.span.SpanItem {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.span.TextSpanItem>;
              public getSpan(): any;
              public getSpanText(): string;
              public constructor(span: any, spanText: string);
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
      export module base {
        export module trip {
          export module model {
            export class RouteLegProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteLegProgress>;
              public getLegDestination(): com.mapbox.navigation.base.route.LegWaypoint;
              public getCurrentStepProgress(): com.mapbox.navigation.base.trip.model.RouteStepProgress;
              public hashCode(): number;
              public getDurationRemaining(): number;
              public getUpcomingStep(): com.mapbox.api.directions.v5.models.LegStep;
              public getDistanceTraveled(): number;
              public toString(): string;
              public constructor(legIndex: number, routeLeg: com.mapbox.api.directions.v5.models.RouteLeg, distanceTraveled: number, distanceRemaining: number, durationRemaining: number, fractionTraveled: number, currentStepProgress: com.mapbox.navigation.base.trip.model.RouteStepProgress, upcomingStep: com.mapbox.api.directions.v5.models.LegStep, geometryIndex: number, legDestination: com.mapbox.navigation.base.route.LegWaypoint);
              public getLegIndex(): number;
              public equals(other: any): boolean;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public getRouteLeg(): com.mapbox.api.directions.v5.models.RouteLeg;
              public getGeometryIndex(): number;
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
      export module base {
        export module trip {
          export module model {
            export class RouteProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public getRemainingWaypoints(): number;
              public hashCode(): number;
              public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public getDurationRemaining(): number;
              public getUpcomingStepPoints(): java.util.List<com.mapbox.geojson.Point>;
              public getAlternativeRoutesIndices$libnavigation_base_release(): java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>;
              public getDistanceTraveled(): number;
              public getCurrentState(): com.mapbox.navigation.base.trip.model.RouteProgressState;
              public toString(): string;
              public getInParkingAisle(): boolean;
              public getInTunnel(): boolean;
              public getUpcomingRoadObjects(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
              public constructor(
                navigationRoute: com.mapbox.navigation.base.route.NavigationRoute,
                bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions,
                voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions,
                currentState: com.mapbox.navigation.base.trip.model.RouteProgressState,
                currentLegProgress: com.mapbox.navigation.base.trip.model.RouteLegProgress,
                upcomingStepPoints: java.util.List<com.mapbox.geojson.Point>,
                inTunnel: boolean,
                distanceRemaining: number,
                distanceTraveled: number,
                durationRemaining: number,
                fractionTraveled: number,
                remainingWaypoints: number,
                upcomingRoadObjects: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>,
                stale: boolean,
                routeAlternativeId: string,
                currentRouteGeometryIndex: number,
                inParkingAisle: boolean,
                alternativeRoutesIndices: java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>
              );
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public getCurrentLegProgress(): com.mapbox.navigation.base.trip.model.RouteLegProgress;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public equals(other: any): boolean;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public getRouteAlternativeId(): string;
              public getCurrentRouteGeometryIndex(): number;
              public getStale(): boolean;
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
      export module base {
        export module trip {
          export module model {
            export class RouteProgressState {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteProgressState>;
              public static INITIALIZED: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static TRACKING: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static COMPLETE: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static OFF_ROUTE: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static UNCERTAIN: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static valueOf(value: string): com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static values(): androidNative.Array<com.mapbox.navigation.base.trip.model.RouteProgressState>;
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
      export module base {
        export module trip {
          export module model {
            export class RouteStepProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteStepProgress>;
              public constructor(stepIndex: number, intersectionIndex: number, instructionIndex: java.lang.Integer, step: com.mapbox.api.directions.v5.models.LegStep, stepPoints: java.util.List<com.mapbox.geojson.Point>, distanceRemaining: number, distanceTraveled: number, fractionTraveled: number, durationRemaining: number);
              public hashCode(): number;
              public getDurationRemaining(): number;
              public getDistanceTraveled(): number;
              public toString(): string;
              public getInstructionIndex(): java.lang.Integer;
              public getStep(): com.mapbox.api.directions.v5.models.LegStep;
              public getStepPoints(): java.util.List<com.mapbox.geojson.Point>;
              public equals(other: any): boolean;
              public getIntersectionIndex(): number;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public getStepIndex(): number;
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
      export module base {
        export module trip {
          export module model {
            export abstract class TripNotificationState {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState>;
            }
            export module TripNotificationState {
              export class TripNotificationData extends com.mapbox.navigation.base.trip.model.TripNotificationState {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationData>;
                public toString(): string;
                public component3(): java.lang.Double;
                public component4(): string;
                public getDistanceRemaining(): java.lang.Double;
                public getDurationRemaining(): java.lang.Double;
                public getDrivingSide(): string;
                public constructor(bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions, distanceRemaining: java.lang.Double, durationRemaining: java.lang.Double, drivingSide: string);
                public equals(other: any): boolean;
                public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public component1(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public copy(bannerInstructions: com.mapbox.api.directions.v5.models.BannerInstructions, distanceRemaining: java.lang.Double, durationRemaining: java.lang.Double, drivingSide: string): com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationData;
                public component2(): java.lang.Double;
                public hashCode(): number;
              }
              export class TripNotificationFreeState extends com.mapbox.navigation.base.trip.model.TripNotificationState {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationFreeState>;
                public constructor();
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizon {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizon>;
                public current(it: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition): com.mapbox.navigation.base.trip.model.eh.EHorizonEdge;
                public mpp(position: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition): java.util.List<java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>>;
                public toString(): string;
                public mpp(): java.util.List<java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>>;
                public constructor(start: com.mapbox.navigation.base.trip.model.eh.EHorizonEdge);
                public getStart(): com.mapbox.navigation.base.trip.model.eh.EHorizonEdge;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonEdge {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>;
                public getId(): number;
                public toString(): string;
                public isMpp(): boolean;
                public getLevel(): number;
                public constructor(id: number, level: number, probability: number, out: java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>);
                public getProbability(): number;
                public hashCode(): number;
                public equals(other: any): boolean;
                public getOut(): java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonEdgeMetadata {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata>;
                public toString(): string;
                public isRightHandTraffic(): boolean;
                public getTunnel(): boolean;
                public getNames(): java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>;
                public getMeanElevation(): java.lang.Double;
                public getSpeedLimit(): java.lang.Double;
                public getSpeed(): number;
                public equals(other: any): boolean;
                public getCountryCodeIso3(): string;
                public getToll(): boolean;
                public getRoadSurface(): string;
                public isUrban(): boolean;
                public constructor(heading: number, length: number, functionRoadClass: string, speedLimit: java.lang.Double, speed: number, ramp: boolean, motorway: boolean, bridge: boolean, tunnel: boolean, toll: boolean, names: java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>, laneCount: java.lang.Byte, meanElevation: java.lang.Double, curvature: number, countryCodeIso3: string, countryCodeIso2: string, stateCode: string, isRightHandTraffic: boolean, isOneWay: boolean, roadSurface: string, isUrban: boolean);
                public getRamp(): boolean;
                public getBridge(): boolean;
                public getCountryCodeIso2(): string;
                public getHeading(): number;
                public getCurvature(): number;
                public getLength(): number;
                public isOneWay(): boolean;
                public getMotorway(): boolean;
                public getFunctionRoadClass(): string;
                public hashCode(): number;
                public getLaneCount(): java.lang.Byte;
                public getStateCode(): string;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonGraphPath {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath>;
                public toString(): string;
                public getLength(): number;
                public getEdges(): java.util.List<java.lang.Long>;
                public getPercentAlongBegin(): number;
                public hashCode(): number;
                public constructor(edges: java.util.List<java.lang.Long>, percentAlongBegin: number, percentAlongEnd: number, length: number);
                public equals(other: any): boolean;
                public getPercentAlongEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonGraphPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition>;
                public toString(): string;
                public getEdgeId(): number;
                public constructor(edgeId: number, percentAlong: number);
                public getPercentAlong(): number;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export module EHorizonMapperKt {
                export module EHorizonMapperKt {
                  export class WhenMappings {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonMapperKt.WhenMappings>;
                  }
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonPosition>;
                public toString(): string;
                public constructor(eHorizonGraphPosition: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, eHorizon: com.mapbox.navigation.base.trip.model.eh.EHorizon, eHorizonResultType: string);
                public getEHorizon(): com.mapbox.navigation.base.trip.model.eh.EHorizon;
                public getEHorizonResultType(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
                public getEHorizonGraphPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonResultType {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonResultType>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.EHorizonResultType;
                public static INITIAL: string = 'INITIAL';
                public static UPDATE: string = 'UPDATE';
              }
              export module EHorizonResultType {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonResultType.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.EHorizonResultType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchableGeometry {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>;
                public component1(): string;
                public toString(): string;
                public getCoordinates(): java.util.List<com.mapbox.geojson.Point>;
                public getRoadObjectId(): string;
                public constructor(roadObjectId: string, coordinates: java.util.List<com.mapbox.geojson.Point>);
                public hashCode(): number;
                public equals(other: any): boolean;
                public component2(): java.util.List<com.mapbox.geojson.Point>;
                public copy(roadObjectId: string, coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.navigation.base.trip.model.eh.MatchableGeometry;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchableOpenLr {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>;
                public component1(): string;
                public getOpenLRLocation(): string;
                public toString(): string;
                public constructor(roadObjectId: string, openLRLocation: string, openLRStandard: string);
                public copy(roadObjectId: string, openLRLocation: string, openLRStandard: string): com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr;
                public getRoadObjectId(): string;
                public component2(): string;
                public component3(): string;
                public hashCode(): number;
                public getOpenLRStandard(): string;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchablePoint {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>;
                public component1(): string;
                public copy(roadObjectId: string, point: com.mapbox.geojson.Point, bearing: java.lang.Double): com.mapbox.navigation.base.trip.model.eh.MatchablePoint;
                public getBearing(): java.lang.Double;
                public toString(): string;
                public component2(): com.mapbox.geojson.Point;
                public component3(): java.lang.Double;
                public getRoadObjectId(): string;
                public constructor(roadObjectId: string, point: com.mapbox.geojson.Point, bearing: java.lang.Double);
                public hashCode(): number;
                public getPoint(): com.mapbox.geojson.Point;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class OpenLRStandard {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.OpenLRStandard>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.OpenLRStandard;
                public static TOM_TOM: string = 'TOM_TOM';
                public static TPEG: string = 'TPEG';
              }
              export module OpenLRStandard {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.OpenLRStandard.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.OpenLRStandard$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class RoadClass {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadClass>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.RoadClass;
                public static MOTORWAY: string = 'MOTORWAY';
                public static TRUNK: string = 'TRUNK';
                public static PRIMARY: string = 'PRIMARY';
                public static SECONDARY: string = 'SECONDARY';
                public static TERTIARY: string = 'TERTIARY';
                public static UNCLASSIFIED: string = 'UNCLASSIFIED';
                public static RESIDENTIAL: string = 'RESIDENTIAL';
                public static SERVICE_OTHER: string = 'SERVICE_OTHER';
              }
              export module RoadClass {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadClass.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.RoadClass$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class RoadSurface {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadSurface>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.RoadSurface;
                public static PAVED_SMOOTH: string = 'PAVED_SMOOTH';
                public static PAVED: string = 'PAVED';
                public static PAVED_ROUGH: string = 'PAVED_ROUGH';
                public static COMPACTED: string = 'COMPACTED';
                public static DIRT: string = 'DIRT';
                public static GRAVEL: string = 'GRAVEL';
                public static PATH: string = 'PATH';
                public static IMPASSABLE: string = 'IMPASSABLE';
              }
              export module RoadSurface {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadSurface.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.RoadSurface$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class LocalizedString {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                public toString(): string;
                public constructor(language: string, value: string);
                public getLanguage(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
                public getValue(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export abstract class RoadObject {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObject>;
                public toString(): string;
                public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                public getLocation(): com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation;
                public getProvider(): string;
                public getObjectType(): number;
                public isUrban(): java.lang.Boolean;
                public getId(): string;
                public hashCode(): number;
                public getNativeRoadObject$libnavigation_base_release(): com.mapbox.navigator.RoadObject;
                public equals(other: any): boolean;
                public getLength(): java.lang.Double;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectEdgeLocation {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation>;
                public toString(): string;
                public constructor(percentAlongBegin: number, percentAlongEnd: number);
                public getPercentAlongBegin(): number;
                public hashCode(): number;
                public equals(other: any): boolean;
                public getPercentAlongEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectEnterExitInfo {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo>;
                public toString(): string;
                public getType(): number;
                public getEnterFromStartOrExitFromEnd(): boolean;
                public getRoadObjectId(): string;
                public constructor(roadObjectId: string, enterFromStartOrExitFromEnd: boolean, type: number);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module RoadObjectMapperKt {
                export module RoadObjectMapperKt {
                  export class WhenMappings {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMapperKt.WhenMappings>;
                  }
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectMatcherError {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError>;
                public toString(): string;
                public getRoadObjectId(): string;
                public constructor(roadObjectId: string, error: string);
                public getError(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectPassInfo {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo>;
                public toString(): string;
                public getType(): number;
                public getRoadObjectId(): string;
                public constructor(roadObjectId: string, type: number);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                public toString(): string;
                public constructor(eHorizonGraphPosition: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, coordinate: com.mapbox.geojson.Point);
                public hashCode(): number;
                public equals(other: any): boolean;
                public getEHorizonGraphPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
                public getCoordinate(): com.mapbox.geojson.Point;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectProvider {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider;
                public static MAPBOX: string = 'MAPBOX';
                public static CUSTOM: string = 'CUSTOM';
              }
              export module RoadObjectProvider {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectType {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType;
                public static TUNNEL: number = 0;
                public static COUNTRY_BORDER_CROSSING: number = 1;
                public static TOLL_COLLECTION: number = 2;
                public static REST_STOP: number = 3;
                public static RESTRICTED_AREA: number = 4;
                public static BRIDGE: number = 5;
                public static INCIDENT: number = 6;
                public static CUSTOM: number = 7;
                public static RAILWAY_CROSSING: number = 8;
                public static IC: number = 9;
                public static JCT: number = 10;
                public static NOTIFICATION: number = 11;
                public static MERGING_AREA: number = 12;
              }
              export module RoadObjectType {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class UpcomingRoadObject {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
                public toString(): string;
                public getDistanceInfo(): com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo;
                public getDistanceToStart(): java.lang.Double;
                public getRoadObject(): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
                public hashCode(): number;
                public equals(other: any): boolean;
                public constructor(roadObject: com.mapbox.navigation.base.trip.model.roadobject.RoadObject, distanceToStart: java.lang.Double, distanceInfo: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossing extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossing>;
                  public constructor(id: string, countryBorderCrossingInfo: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public getCountryBorderCrossingInfo(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossingAdminInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getCodeAlpha3(): string;
                  public toString(): string;
                  public constructor(code: string, codeAlpha3: string);
                  public getCode(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossingInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getTo(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo;
                  public getFrom(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo;
                  public toString(): string;
                  public constructor(from: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo, to: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module bridge {
                export class Bridge extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.bridge.Bridge>;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(id: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module custom {
                export class Custom extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.custom.Custom>;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(id: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class GantryDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.GantryDistanceInfo>;
                  public hashCode(): number;
                  public constructor(roadObjectId: string, roadObjectType: number, distance: number);
                  public equals(other: any): boolean;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getDistanceToStart(): java.lang.Double;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class Gate {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public constructor(id: number, position: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition, probability: number, distance: number);
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getProbability(): number;
                  public getPosition(): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition;
                  public toString(): string;
                  public getId(): number;
                  public getDistance(): number;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class LineDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.LineDistanceInfo>;
                  public getEntryFromStart(): boolean;
                  public getDistanceToExit(): number;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceToEntry: number, distanceToExit: number, distanceToEnd: number, entryFromStart: boolean, length: number);
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getDistanceToStart(): java.lang.Double;
                  public getDistanceToEntry(): number;
                  public getLength(): number;
                  public toString(): string;
                  public getDistanceToEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class PointDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.PointDistanceInfo>;
                  public hashCode(): number;
                  public constructor(roadObjectId: string, roadObjectType: number, distance: number);
                  public equals(other: any): boolean;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getDistanceToStart(): java.lang.Double;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class PolygonDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.PolygonDistanceInfo>;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public getInside(): boolean;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getEntrances(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getDistanceToStart(): java.lang.Double;
                  public constructor(roadObjectId: string, roadObjectType: number, entrances: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, exits: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, inside: boolean);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export abstract class RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo>;
                  public getRoadObjectId(): string;
                  public getDistanceInfoType(): number;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getRoadObjectType(): number;
                  public getDistanceToStart(): java.lang.Double;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class RoadObjectDistanceInfoType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType;
                  public static GANTRY: number = 0;
                  public static LINE: number = 1;
                  public static POINT: number = 2;
                  public static POLYGON: number = 3;
                  public static SUB_GRAPH: number = 4;
                }
                export module RoadObjectDistanceInfoType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class SubGraphDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.SubGraphDistanceInfo>;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public getInside(): boolean;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getEntrances(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public constructor(roadObjectId: string, roadObjectType: number, distanceInfoType: number);
                  public getDistanceToStart(): java.lang.Double;
                  public constructor(roadObjectId: string, roadObjectType: number, entrances: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, exits: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, inside: boolean);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module ic {
                export class Interchange extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.ic.Interchange>;
                  public constructor(id: string, name: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public getName(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class Incident extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.Incident>;
                  public hashCode(): number;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo;
                  public equals(other: any): boolean;
                  public constructor(id: string, info: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentCongestion {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(value: java.lang.Integer);
                  public getValue(): java.lang.Integer;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentImpact {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact;
                  public static UNKNOWN: string = 'unknown';
                  public static CRITICAL: string = 'critical';
                  public static MAJOR: string = 'major';
                  public static MINOR: string = 'minor';
                  public static LOW: string = 'low';
                }
                export module IncidentImpact {
                  export class Impact {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact.Impact>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact$Impact interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo>;
                  public getCongestion(): com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion;
                  public getCountryCodeAlpha2(): string;
                  public getLanesClearDesc(): string;
                  public getId(): string;
                  public constructor(id: string, type: number, impact: string, congestion: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion, isClosed: boolean, creationTime: java.util.Date, startTime: java.util.Date, endTime: java.util.Date, description: string, subType: string, subTypeDescription: string, alertcCodes: java.util.List<java.lang.Integer>, trafficCodes: java.util.Map<string, java.lang.Integer>, countryCodeAlpha2: string, countryCodeAlpha3: string, lanesBlocked: java.util.List<string>, longDescription: string, lanesClearDesc: string, numLanesBlocked: java.lang.Long, affectedRoadNames: java.util.List<string>, multilingualAffectedRoadNames: java.util.Map<string, any>, length: java.lang.Integer);
                  public getAlertcCodes(): java.util.List<java.lang.Integer>;
                  public getNumLanesBlocked(): java.lang.Long;
                  public getSubTypeDescription(): string;
                  public getMultilingualAffectedRoadNames(): java.util.Map<string, java.util.List<string>>;
                  public equals(other: any): boolean;
                  public getLongDescription(): string;
                  public getAffectedRoadNames(): java.util.List<string>;
                  public getType(): number;
                  public getStartTime(): java.util.Date;
                  public getSubType(): string;
                  public getImpact(): string;
                  public getDescription(): string;
                  public hashCode(): number;
                  public getEndTime(): java.util.Date;
                  public getCreationTime(): java.util.Date;
                  public toString(): string;
                  public getLength(): java.lang.Integer;
                  public isClosed(): boolean;
                  public getCountryCodeAlpha3(): string;
                  public getLanesBlocked(): java.util.List<string>;
                  public getTrafficCodes(): java.util.Map<string, java.lang.Integer>;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType;
                  public static UNKNOWN: number = 40;
                  public static ACCIDENT: number = 41;
                  public static CONGESTION: number = 42;
                  public static CONSTRUCTION: number = 43;
                  public static DISABLED_VEHICLE: number = 44;
                  public static LANE_RESTRICTION: number = 45;
                  public static MASS_TRANSIT: number = 46;
                  public static MISCELLANEOUS: number = 47;
                  public static OTHER_NEWS: number = 48;
                  public static PLANNED_EVENT: number = 49;
                  public static ROAD_CLOSURE: number = 50;
                  public static ROAD_HAZARD: number = 51;
                  public static WEATHER: number = 52;
                }
                export module IncidentType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module jct {
                export class Junction extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.jct.Junction>;
                  public constructor(id: string, name: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public getName(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class GantryLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.GantryLocation>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getPositions(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public constructor(positions: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, shape: com.mapbox.geojson.Geometry);
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRLineLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRLineLocation>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(graphPath: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath, shape: com.mapbox.geojson.Geometry);
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
                  public getGraphPath(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLROrientation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation;
                  public static NO_ORIENTATION_OR_UNKNOWN: number = 0;
                  public static WITH_LINE_DIRECTION: number = 1;
                  public static AGAINST_LINE_DIRECTION: number = 2;
                  public static BOTH: number = 3;
                }
                export module OpenLROrientation {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRPointLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRPointLocation>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public toString(): string;
                  public getOpenLRSideOfRoad(): number;
                  public getOpenLROrientation(): number;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
                  public constructor(position: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, shape: com.mapbox.geojson.Geometry, openLRSideOfRoad: number, openLROrientation: number);
                  public getPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRSideOfRoad {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad;
                  public static ON_ROAD_OR_UNKNOWN: number = 0;
                  public static RIGHT: number = 1;
                  public static LEFT: number = 2;
                  public static BOTH: number = 3;
                }
                export module OpenLRSideOfRoad {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PointLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PointLocation>;
                  public constructor(position: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition, shape: com.mapbox.geojson.Geometry);
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getPosition(): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition;
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PolygonLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PolygonLocation>;
                  public getEntries(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
                  public constructor(entries: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, exits: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PolylineLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PolylineLocation>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(path: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath, shape: com.mapbox.geojson.Geometry);
                  public getPath(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath;
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export abstract class RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation>;
                  public hashCode(): number;
                  public getShape(): com.mapbox.geojson.Geometry;
                  public equals(other: any): boolean;
                  public getLocationType(): number;
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class RoadObjectLocationType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType;
                  public static GANTRY: number = 0;
                  public static OPEN_LR_LINE: number = 1;
                  public static OPEN_LR_POINT: number = 2;
                  public static POINT: number = 3;
                  public static POLYGON: number = 4;
                  public static POLYLINE: number = 5;
                  public static ROUTE_ALERT: number = 6;
                  public static SUBGRAPH: number = 7;
                }
                export module RoadObjectLocationType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class RouteAlertLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RouteAlertLocation>;
                  public hashCode(): number;
                  public constructor(shape: com.mapbox.geojson.Geometry);
                  public equals(other: any): boolean;
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class SubgraphEdge {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>;
                  public hashCode(): number;
                  public getShape(): com.mapbox.geojson.Geometry;
                  public equals(other: any): boolean;
                  public constructor(id: number, innerEdgeIds: java.util.List<java.lang.Long>, outerEdgeIds: java.util.List<java.lang.Long>, shape: com.mapbox.geojson.Geometry, length: number);
                  public getLength(): number;
                  public toString(): string;
                  public getId(): number;
                  public getInnerEdgeIds(): java.util.List<java.lang.Long>;
                  public getOuterEdgeIds(): java.util.List<java.lang.Long>;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class SubgraphLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphLocation>;
                  public getEntries(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public hashCode(): number;
                  public getEdges(): java.util.Map<java.lang.Long, com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>;
                  public equals(other: any): boolean;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public constructor(entries: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, exits: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, edges: java.util.Map<java.lang.Long, com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>, shape: com.mapbox.geojson.Geometry);
                  public toString(): string;
                  public constructor(locationType: number, shape: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingArea extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingArea>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public constructor(id: string, info: com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingAreaInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getType(): string;
                  public constructor(type: string);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingAreaType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType;
                  public static FROM_LEFT: string = 'from_left';
                  public static FROM_RIGHT: string = 'from_right';
                  public static FROM_BOTH_SIDES: string = 'from_both_sides';
                }
                export module MergingAreaType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module notification {
                export class Notification extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.notification.Notification>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(id: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module railwaycrossing {
                export class RailwayCrossing extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossing>;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public constructor(id: string, info: com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module railwaycrossing {
                export class RailwayCrossingInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo>;
                  public constructor();
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module restrictedarea {
                export class RestrictedArea extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.restrictedarea.RestrictedArea>;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(id: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class Amenity {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getType(): string;
                  public toString(): string;
                  public getName(): string;
                  public constructor(type: string, name: string, brand: string);
                  public getBrand(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class AmenityType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType;
                  public static UNDEFINED: string = 'undefined';
                  public static GAS_STATION: string = 'gas_station';
                  public static ELECTRIC_CHARGING_STATION: string = 'electric_charging_station';
                  public static TOILET: string = 'toilet';
                  public static COFFEE: string = 'coffee';
                  public static RESTAURANT: string = 'restaurant';
                  public static SNACK: string = 'snack';
                  public static ATM: string = 'atm';
                  public static INFO: string = 'info';
                  public static BABY_CARE: string = 'baby_care';
                  public static FACILITIES_FOR_DISABLED: string = 'facilities_for_disabled';
                  public static SHOP: string = 'shop';
                  public static TELEPHONE: string = 'telephone';
                  public static HOTEL: string = 'hotel';
                  public static HOTSPRING: string = 'hotspring';
                  public static SHOWER: string = 'shower';
                  public static PICNIC_SHELTER: string = 'picnic_shelter';
                  public static POST: string = 'post';
                  public static FAX: string = 'fax';
                }
                export module AmenityType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class RestStop extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStop>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, restStopType: number, name: string, amenities: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>, guideMapUri: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public getRestStopType(): number;
                  public toString(): string;
                  public getName(): string;
                  public getAmenities(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>;
                  public getGuideMapUri(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class RestStopType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType;
                  public static UNKNOWN: number = -1;
                  public static REST_AREA: number = 1;
                  public static SERVICE_AREA: number = 2;
                }
                export module RestStopType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tollcollection {
                export class TollCollection extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollection>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public constructor(id: string, tollCollectionType: number, name: string, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public getTollCollectionType(): number;
                  public toString(): string;
                  public getName(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tollcollection {
                export class TollCollectionType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType;
                  public static UNKNOWN: number = -1;
                  public static TOLL_BOOTH: number = 1;
                  public static TOLL_GANTRY: number = 2;
                }
                export module TollCollectionType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tunnel {
                export class Tunnel extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tunnel.Tunnel>;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo;
                  public hashCode(): number;
                  public constructor(id: string, info: com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public equals(other: any): boolean;
                  public constructor(id: string, objectType: number, length: java.lang.Double, provider: string, isUrban: java.lang.Boolean, nativeRoadObject: com.mapbox.navigator.RoadObject);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tunnel {
                export class TunnelInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public toString(): string;
                  public constructor(name: string);
                  public getName(): string;
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
      export module base {
        export module trip {
          export module notification {
            export class NotificationAction {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.NotificationAction>;
              public static END_NAVIGATION: com.mapbox.navigation.base.trip.notification.NotificationAction;
              public static values(): androidNative.Array<com.mapbox.navigation.base.trip.notification.NotificationAction>;
              public static valueOf(value: string): com.mapbox.navigation.base.trip.notification.NotificationAction;
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
      export module base {
        export module trip {
          export module notification {
            export class TripNotification {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.TripNotification>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.trip.notification.TripNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getNotification(): globalAndroid.app.Notification; getNotificationId(): number; updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void; onTripSessionStarted(): void; onTripSessionStopped(): void });
              public constructor();
              public getNotificationId(): number;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public getNotification(): globalAndroid.app.Notification;
              public onTripSessionStopped(): void;
              public onTripSessionStarted(): void;
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
      export module base {
        export module trip {
          export module notification {
            export class TripNotificationInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { intercept(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder });
              public constructor();
              public intercept(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
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
      export module base {
        export module utils {
          export class DecodeUtils {
            public static class: java.lang.Class<com.mapbox.navigation.base.utils.DecodeUtils>;
            public static INSTANCE: com.mapbox.navigation.base.utils.DecodeUtils;
            public static completeGeometryToLineString($this$completeGeometryToLineString: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.geojson.LineString;
            public static stepGeometryToLineString($this$stepGeometryToLineString: com.mapbox.api.directions.v5.models.DirectionsRoute, legStep: com.mapbox.api.directions.v5.models.LegStep): com.mapbox.geojson.LineString;
            public static stepGeometryToPoints(precision: com.mapbox.api.directions.v5.models.DirectionsRoute, $this$stepGeometryToPoints: com.mapbox.api.directions.v5.models.LegStep): java.util.List<com.mapbox.geojson.Point>;
            public static stepsGeometryToLineString(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<java.util.List<com.mapbox.geojson.LineString>>;
            public static clearCacheInternal$libnavigation_base_release(): void;
            public static stepsGeometryToPoints(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
            public static clearCacheInternalExceptFor$libnavigation_base_release(routes: java.util.List<any>): void;
            public static completeGeometryToPoints($this$completeGeometryToPoints: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.geojson.Point>;
          }
          export module DecodeUtils {
            export class CachedRouteInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.DecodeUtils.CachedRouteInfo>;
              public getStepCount(): number;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public getPrecision(): number;
              public constructor(route: com.mapbox.api.directions.v5.models.DirectionsRoute, precision: number, stepCount: number);
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
      export module base {
        export module utils {
          export module route {
            export class LegSilentWaypoints {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.LegSilentWaypoints>;
              public constructor(geometryIndex: number);
              public getGeometryIndex(): number;
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
      export module base {
        export module utils {
          export module route {
            export class NavigationRouteUtils {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.NavigationRouteUtils>;
              public static hasUnexpectedUpcomingClosures($this$hasUnexpectedUpcomingClosures: com.mapbox.navigation.base.trip.model.RouteProgress, $completion: any): any;
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
      export module base {
        export module utils {
          export module route {
            export class RouteProgressData {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.RouteProgressData>;
              public getCurrentLegIndex(): number;
              public constructor(currentLegIndex: number, currentGeometryLegIndex: number);
              public getCurrentGeometryLegIndex(): number;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.base.internal.utils.AlternativesParsingResult:1
//com.mapbox.navigation.base.internal.utils.AlternativesParsingResult.Parsed:1
