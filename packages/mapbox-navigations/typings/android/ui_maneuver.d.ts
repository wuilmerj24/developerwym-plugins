declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.maneuver';
            public static BUILD_TYPE: string = 'release';
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
      export module ui {
        export module maneuver {
          export class LaneIconProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.LaneIconProcessor>;
            public rearrange$libnavui_maneuver_release(this_: java.util.List<any>, $this$rearrange: any, item: number): void;
            public getLaneIcon(name: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): com.mapbox.navigation.ui.maneuver.model.LaneIcon;
            public constructor(laneIconResources: com.mapbox.navigation.ui.maneuver.model.LaneIconResources);
            public getLaneIconResources(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources;
          }
          export module LaneIconProcessor {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.LaneIconProcessor.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export abstract class ManeuverAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction>;
          }
          export module ManeuverAction {
            export class GetManeuverList extends com.mapbox.navigation.ui.maneuver.ManeuverAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverList>;
              public component3(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public component4(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public hashCode(): number;
              public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public getManeuverOption(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public component2(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public toString(): string;
              public constructor(routeProgress: com.mapbox.navigation.base.trip.model.RouteProgress, maneuverState: com.mapbox.navigation.ui.maneuver.ManeuverState, maneuverOption: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter);
              public copy(routeProgress: com.mapbox.navigation.base.trip.model.RouteProgress, maneuverState: com.mapbox.navigation.ui.maneuver.ManeuverState, maneuverOption: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter): com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverList;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getManeuverState(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public equals(other: any): boolean;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
            }
            export class GetManeuverListWithRoute extends com.mapbox.navigation.ui.maneuver.ManeuverAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverListWithRoute>;
              public component3(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public hashCode(): number;
              public component5(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getManeuverOption(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public toString(): string;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public copy(route: com.mapbox.api.directions.v5.models.DirectionsRoute, routeLegIndex: java.lang.Integer, maneuverState: com.mapbox.navigation.ui.maneuver.ManeuverState, maneuverOption: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter): com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverListWithRoute;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public component4(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public getRouteLegIndex(): java.lang.Integer;
              public getManeuverState(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public equals(other: any): boolean;
              public component2(): java.lang.Integer;
              public constructor(route: com.mapbox.api.directions.v5.models.DirectionsRoute, routeLegIndex: java.lang.Integer, maneuverState: com.mapbox.navigation.ui.maneuver.ManeuverState, maneuverOption: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export class ManeuverConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverConfig>;
            public getUserId(): string;
            public getStyleId(): string;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public setUserId(param0: string): void;
            public setStyleId(param0: string): void;
            public setDistanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): void;
            public getOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
            public setOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
            public constructor(context: globalAndroid.content.Context);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export class ManeuverProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverProcessor>;
            public static INSTANCE: com.mapbox.navigation.ui.maneuver.ManeuverProcessor;
            public process(action: com.mapbox.navigation.ui.maneuver.ManeuverAction): com.mapbox.navigation.ui.maneuver.ManeuverResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export abstract class ManeuverResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult>;
          }
          export module ManeuverResult {
            export abstract class GetManeuverList extends com.mapbox.navigation.ui.maneuver.ManeuverResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList>;
            }
            export module GetManeuverList {
              export class Failure extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Failure>;
                public component1(): string;
                public constructor(error: string);
                public toString(): string;
                public copy(error: string): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Failure;
                public getError(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Success extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Success>;
                public getManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public copy(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Success;
                public toString(): string;
                public constructor(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
                public component1(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
            }
            export abstract class GetManeuverListWithProgress extends com.mapbox.navigation.ui.maneuver.ManeuverResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress>;
            }
            export module GetManeuverListWithProgress {
              export class Failure extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Failure>;
                public component1(): string;
                public constructor(error: string);
                public toString(): string;
                public copy(error: string): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Failure;
                public getError(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class Success extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Success>;
                public getManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public toString(): string;
                public constructor(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
                public copy(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Success;
                public component1(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
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
      export module ui {
        export module maneuver {
          export class ManeuverState {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverState>;
            public component3(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
            public equals(other: any): boolean;
            public constructor();
            public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public hashCode(): number;
            public toString(): string;
            public getRoadShields(): java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>;
            public getAllManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
            public component2(): java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>;
            public copy(route: com.mapbox.api.directions.v5.models.DirectionsRoute, roadShields: java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, allManeuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>): com.mapbox.navigation.ui.maneuver.ManeuverState;
            public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public setRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
            public constructor(route: com.mapbox.api.directions.v5.models.DirectionsRoute, roadShields: java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, allManeuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module api {
            export class MapboxLaneIconsApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxLaneIconsApi>;
              public constructor();
              public getTurnLane(laneIndicator: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): com.mapbox.navigation.ui.maneuver.model.LaneIcon;
              public constructor(laneIconResources: com.mapbox.navigation.ui.maneuver.model.LaneIconResources);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module api {
            export class MapboxManeuverApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi>;
              public constructor(formatter: com.mapbox.navigation.base.formatter.DistanceFormatter, maneuverOptions: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, routeShieldApi: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi);
              public cancel(): void;
              public getManeuvers(result: com.mapbox.navigation.base.route.NavigationRoute, action: java.lang.Integer): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getManeuvers(route: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getManeuvers(result: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public constructor(distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter, maneuverOptions: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, processor: com.mapbox.navigation.ui.maneuver.ManeuverProcessor, routeShieldApi: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi);
              /** @deprecated */
              public getManeuvers(route: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              /** @deprecated */
              public getManeuvers(route: com.mapbox.api.directions.v5.models.DirectionsRoute, routeLegIndex: java.lang.Integer): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getRoadShields(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, shieldCallback: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRoadShields(userId: string, styleId: string, accessToken: string, maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, shieldCallback: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public constructor(formatter: com.mapbox.navigation.base.formatter.DistanceFormatter, maneuverOptions: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions);
              public getRoadShields$libnavui_maneuver_release(userId: string, styleId: string, accessToken: string, maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, callback: com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback): void;
              /** @deprecated */
              public getRoadShields(maneuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, callback: com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback): void;
              public constructor(formatter: com.mapbox.navigation.base.formatter.DistanceFormatter);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module api {
            export class MapboxTurnIconsApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxTurnIconsApi>;
              public getTurnIconResources(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
              public constructor(turnIconResources: com.mapbox.navigation.ui.maneuver.model.TurnIconResources);
              public setTurnIconResources(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              public generateTurnIcon(icon: string, $i$f$ifNonNull: java.lang.Float, r1$iv: string, this_: string): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.TurnIconError, com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon>;
              public updateResources(resources: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module api {
            export class RoadShieldCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShieldError>): void });
              public constructor();
              /** @deprecated */
              public onRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShieldError>): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module databinding {
            export class MapboxItemLaneGuidanceLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding>;
              public itemLaneGuidance: com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidance;
              public getRoot(): globalAndroid.widget.LinearLayout;
              public static bind(itemLaneGuidance: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, attachToParent: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module databinding {
            export class MapboxItemUpcomingManeuversLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding>;
              public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
              public static bind(rootView: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, attachToParent: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module databinding {
            export class MapboxMainManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding>;
              public mainManeuverGuideline: androidx.constraintlayout.widget.Guideline;
              public maneuverIcon: com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver;
              public primaryManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxPrimaryManeuver;
              public secondaryManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxSecondaryManeuver;
              public stepDistance: com.mapbox.navigation.ui.maneuver.view.MapboxStepDistance;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
              public static bind(mainManeuverGuideline: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
              public getRoot(): globalAndroid.view.View;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module databinding {
            export class MapboxManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding>;
              public laneGuidanceRecycler: androidx.recyclerview.widget.RecyclerView;
              public mainManeuverLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public maneuver: androidx.cardview.widget.CardView;
              public subManeuverLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public upcomingManeuverRecycler: com.mapbox.navigation.ui.maneuver.view.MapboxManeuversList;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, attachToParent: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
              public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
              public static bind(laneGuidanceRecycler: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module databinding {
            export class MapboxSubManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding>;
              public subManeuverGuideline: androidx.constraintlayout.widget.Guideline;
              public subManeuverIcon: com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver;
              public subManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxSubManeuver;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding;
              public static bind(subManeuverGuideline: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding;
              public getRoot(): globalAndroid.view.View;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module internal {
            export class ManeuverComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponent>;
              public getStyleId(): string;
              public getManeuverApi(): com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi;
              public getOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
              public getUserId(): string;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public getContract(): com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>;
              public constructor(maneuverView: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView, userId: string, styleId: string, options: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions, formatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, contract: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>, maneuverApi: com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi);
              public getManeuverView(): com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView;
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
      export module ui {
        export module maneuver {
          export module internal {
            export class ManeuverComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onManeuverViewStateChanged(param0: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void; onManeuverViewVisibilityChanged(param0: boolean): void });
              public constructor();
              public onManeuverViewVisibilityChanged(param0: boolean): void;
              public onManeuverViewStateChanged(param0: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class Component {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Component>;
              public component2(): com.mapbox.navigation.ui.maneuver.model.ComponentNode;
              public hashCode(): number;
              public copy(type: string, node: com.mapbox.navigation.ui.maneuver.model.ComponentNode): com.mapbox.navigation.ui.maneuver.model.Component;
              public equals(other: any): boolean;
              public getNode(): com.mapbox.navigation.ui.maneuver.model.ComponentNode;
              public toString(): string;
              public getType(): string;
              public component1(): string;
              public constructor(type: string, node: com.mapbox.navigation.ui.maneuver.model.ComponentNode);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ComponentNode>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.model.ComponentNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module ui {
        export module maneuver {
          export module model {
            export class DelimiterComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder;
            }
            export module DelimiterComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode;
                public constructor();
                public text($this$text_u24lambda_u2d0: string): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ExitComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitComponentNode>;
              public getText(): string;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
            }
            export module ExitComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode;
                public text($this$text_u24lambda_u2d0: string): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ExitNumberComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder;
              public toString(): string;
            }
            export module ExitNumberComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder>;
                public text($this$text_u24lambda_u2d0: string): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ExitStyleGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitStyleGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ExitStyleGenerator;
              public styleAndGetExit(exitBitmap: string, exitDrawable: globalAndroid.widget.TextView, this_: number, exitText: globalAndroid.content.res.Resources): globalAndroid.text.SpannableStringBuilder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class Lane {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Lane>;
              public constructor();
              public getAllLanes(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>;
              public hashCode(): number;
              public constructor(allLanes: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>);
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
      export module ui {
        export module maneuver {
          export module model {
            export class LaneFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.LaneFactory;
              public static buildLane(allLanes: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>): com.mapbox.navigation.ui.maneuver.model.Lane;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class LaneIcon {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIcon>;
              public getDrawableResId(): number;
              public hashCode(): number;
              public constructor(drawableResId: number, shouldFlip: boolean);
              public equals(other: any): boolean;
              public toString(): string;
              public getShouldFlip(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class LaneIconError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconError>;
              public constructor(errorMessage: string, laneIndicator: com.mapbox.navigation.ui.maneuver.model.LaneIndicator, activeDirection: string);
              public getActiveDirection(): string;
              public getLaneIndicator(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator;
              public getErrorMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class LaneIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconResources>;
              public getLaneOppositeSlightTurnOrSlightTurn(): number;
              public getLaneOppositeSlightTurnOrSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurnUsingTurn(): number;
              public getLaneStraightOrSharpTurnUsingSharpTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneStraightOrUturn(): number;
              public getLaneOppositeTurnOrSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurnUsingStraight(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneSlightTurnOrTurnUsingTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurn(): number;
              public getLaneOppositeSlightTurnOrTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurn(): number;
              public getLaneSlightTurn(): number;
              public getLaneOppositeTurnOrSlightTurn(): number;
              public getLaneSharpTurnUsingSharpTurn(): number;
              public getLaneTurnOrSharpTurn(): number;
              public equals(other: any): boolean;
              public getLaneSharpTurn(): number;
              public getLaneSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurn(): number;
              public getLaneStraight(): number;
              public getLaneStraightOrUturnUsingUturn(): number;
              public getLaneTurnOrUturnUsingTurn(): number;
              public getLaneStraightOrTurnUsingTurn(): number;
              public getLaneTurnOrSharpTurnUsingSharpTurn(): number;
              public getLaneStraightOrUturnUsingStraight(): number;
              public getLaneSlightTurnOrUturnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurnUsingStraight(): number;
              public getLaneStraightOrSlightTurnUsingStraight(): number;
              public getLaneStraightOrTurn(): number;
              public getLaneOppositeTurnOrTurn(): number;
              public getLaneStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingUturn(): number;
              public getLaneTurnOrUturn(): number;
              public getLaneSlightTurnOrUturn(): number;
              public getLaneTurnUsingTurn(): number;
              public getLaneStraightUsingStraight(): number;
              public hashCode(): number;
              public getLaneSlightTurnOrTurn(): number;
              public getLaneTurnOrSharpTurnUsingTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingStraight(): number;
              public toString(): string;
              public getLaneUturnUsingUturn(): number;
              public getLaneStraightOrSharpTurnUsingStraight(): number;
              public getLaneTurn(): number;
              public getLaneStraightOrSharpTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingSlightTurn(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
              public getLaneSlightTurnOrUturnUsingUturn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurnUsingTurn(): number;
              public getLaneTurnOrUturnUsingUturn(): number;
              public getLaneStraightOrSlightTurnOrTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingTurn(): number;
              public getLaneOppositeTurnOrTurnUsingTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurn(): number;
              public getLaneStraightOrTurnUsingStraight(): number;
              public getLaneSlightTurnOrSharpTurn(): number;
              public getLaneUturn(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurnUsingStraight(): number;
              public getLaneOppositeSlightTurnOrTurnUsingTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingStraight(): number;
              public getLaneStraightOrSlightTurn(): number;
              public getLaneSlightTurnOrTurnUsingSlightTurn(): number;
              public getLaneStraightOrTurnOrUturn(): number;
              public getLaneSlightTurnOrSharpTurnUsingSlightTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurnUsingStraight(): number;
              public getLaneSlightTurnOrSharpTurnUsingSharpTurn(): number;
            }
            export module LaneIconResources {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder>;
                public laneStraightOrSlightTurnOrTurn($this$laneStraightOrSlightTurnOrTurn_u24lambda_u2d38: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneUturnUsingUturn($this$laneUturnUsingUturn_u24lambda_u2d64: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnUsingSlightTurn($this$laneStraightOrSlightTurnUsingSlightTurn_u24lambda_u2d42: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurn($this$laneOppositeTurnOrStraightOrTurn_u24lambda_u2d15: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturn($this$laneStraightOrUturn_u24lambda_u2d51: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurnUsingTurn($this$laneTurnOrSharpTurnUsingTurn_u24lambda_u2d58: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSharpTurnUsingSharpTurn($this$laneSharpTurnUsingSharpTurn_u24lambda_u2d21: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurn($this$laneSlightTurnOrSharpTurn_u24lambda_u2d23: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturnUsingStraight($this$laneStraightOrUturnUsingStraight_u24lambda_u2d52: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurn($this$laneSlightTurn_u24lambda_u2d22: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingUturn($this$laneStraightOrTurnOrUturnUsingUturn_u24lambda_u2d48: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnUsingStraight($this$laneStraightOrTurnUsingStraight_u24lambda_u2d49: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrTurn($this$laneOppositeTurnOrTurn_u24lambda_u2d18: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrSlightTurnUsingSlightTurn($this$laneOppositeSlightTurnOrStraightOrSlightTurnUsingSlightTurn_u24lambda_u2d3: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnUsingTurn($this$laneStraightOrTurnUsingTurn_u24lambda_u2d50: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrTurnUsingTurn($this$laneOppositeTurnOrTurnUsingTurn_u24lambda_u2d19: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurnUsingSharpTurn($this$laneStraightOrSharpTurnUsingSharpTurn_u24lambda_u2d35: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingStraight($this$laneStraightOrSlightTurnOrTurnUsingStraight_u24lambda_u2d40: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurnUsingStraight($this$laneStraightOrSharpTurnUsingStraight_u24lambda_u2d36: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurnUsingSharpTurn($this$laneTurnOrSharpTurnUsingSharpTurn_u24lambda_u2d57: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public constructor();
                public laneOppositeSlightTurnOrStraightOrSlightTurnUsingStraight($this$laneOppositeSlightTurnOrStraightOrSlightTurnUsingStraight_u24lambda_u2d4: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurnUsingStraight($this$laneOppositeTurnOrStraightOrSlightTurnUsingStraight_u24lambda_u2d14: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturnUsingUturn($this$laneStraightOrUturnUsingUturn_u24lambda_u2d53: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurnUsingSlightTurn($this$laneSlightTurnOrTurnUsingSlightTurn_u24lambda_u2d27: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrUturnUsingUturn($this$laneSlightTurnOrUturnUsingUturn_u24lambda_u2d31: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingTurn($this$laneStraightOrTurnOrUturnUsingTurn_u24lambda_u2d47: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnUsingTurn($this$laneTurnUsingTurn_u24lambda_u2d62: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneUturn($this$laneUturn_u24lambda_u2d63: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrTurnUsingTurn($this$laneOppositeSlightTurnOrTurnUsingTurn_u24lambda_u2d9: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurnUsingTurn($this$laneOppositeSlightTurnOrStraightOrTurnUsingTurn_u24lambda_u2d7: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurn($this$laneStraightOrSlightTurn_u24lambda_u2d37: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources;
                public laneStraight($this$laneStraight_u24lambda_u2d33: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurn($this$laneOppositeTurnOrStraightOrSlightTurn_u24lambda_u2d12: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturnUsingUturn($this$laneTurnOrUturnUsingUturn_u24lambda_u2d61: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurnUsingTurn($this$laneSlightTurnOrTurnUsingTurn_u24lambda_u2d28: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrUturnUsingSlightTurn($this$laneSlightTurnOrUturnUsingSlightTurn_u24lambda_u2d30: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingStraight($this$laneStraightOrTurnOrUturnUsingStraight_u24lambda_u2d46: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrSlightTurn($this$laneOppositeTurnOrSlightTurn_u24lambda_u2d10: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSharpTurn($this$laneSharpTurn_u24lambda_u2d20: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurn($this$laneTurn_u24lambda_u2d55: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrSlightTurn($this$laneOppositeSlightTurnOrStraightOrSlightTurn_u24lambda_u2d2: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingTurn($this$laneStraightOrSlightTurnOrTurnUsingTurn_u24lambda_u2d41: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturnUsingTurn($this$laneTurnOrUturnUsingTurn_u24lambda_u2d60: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrSlightTurnUsingSlightTurn($this$laneOppositeTurnOrSlightTurnUsingSlightTurn_u24lambda_u2d11: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrSlightTurnUsingSlightTurn($this$laneOppositeSlightTurnOrSlightTurnUsingSlightTurn_u24lambda_u2d1: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurnUsingSlightTurn($this$laneSlightTurnOrSharpTurnUsingSlightTurn_u24lambda_u2d25: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurn($this$laneStraightOrTurn_u24lambda_u2d44: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrUturn($this$laneSlightTurnOrUturn_u24lambda_u2d29: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurnUsingSlightTurn($this$laneOppositeTurnOrStraightOrSlightTurnUsingSlightTurn_u24lambda_u2d13: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurn($this$laneStraightOrSharpTurn_u24lambda_u2d34: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurn($this$laneOppositeSlightTurnOrStraightOrTurn_u24lambda_u2d5: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrTurn($this$laneOppositeSlightTurnOrTurn_u24lambda_u2d8: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturn($this$laneStraightOrTurnOrUturn_u24lambda_u2d45: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurnUsingStraight($this$laneOppositeSlightTurnOrStraightOrTurnUsingStraight_u24lambda_u2d6: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurnUsingSharpTurn($this$laneSlightTurnOrSharpTurnUsingSharpTurn_u24lambda_u2d24: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrSlightTurn($this$laneOppositeSlightTurnOrSlightTurn_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurnUsingTurn($this$laneOppositeTurnOrStraightOrTurnUsingTurn_u24lambda_u2d17: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnUsingSlightTurn($this$laneSlightTurnUsingSlightTurn_u24lambda_u2d32: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurn($this$laneSlightTurnOrTurn_u24lambda_u2d26: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingSlightTurn($this$laneStraightOrSlightTurnOrTurnUsingSlightTurn_u24lambda_u2d39: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightUsingStraight($this$laneStraightUsingStraight_u24lambda_u2d54: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurn($this$laneTurnOrSharpTurn_u24lambda_u2d56: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturn($this$laneTurnOrUturn_u24lambda_u2d59: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnUsingStraight($this$laneStraightOrSlightTurnUsingStraight_u24lambda_u2d43: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurnUsingStraight($this$laneOppositeTurnOrStraightOrTurnUsingStraight_u24lambda_u2d16: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class LaneIndicator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
              public getActiveDirection(): string;
              public isActive(): boolean;
              public hashCode(): number;
              public getDirections(): java.util.List<string>;
              public equals(other: any): boolean;
              public toString(): string;
              public getDrivingSide(): string;
            }
            export module LaneIndicator {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator;
                public directions($this$directions_u24lambda_u2d1: java.util.List<string>): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public drivingSide($this$drivingSide_u24lambda_u2d2: string): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public constructor();
                public isActive($this$isActive_u24lambda_u2d0: boolean): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public activeDirection($this$activeDirection_u24lambda_u2d3: string): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class LegIndexToManeuvers {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
              public copy(legIndex: number, stepIndexToManeuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>): com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers;
              public component1(): number;
              public hashCode(): number;
              public getLegIndex(): number;
              public equals(other: any): boolean;
              public component2(): java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public getStepIndexToManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public toString(): string;
              public constructor(legIndex: number, stepIndexToManeuvers: java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class Maneuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public getLaneGuidance(): com.mapbox.navigation.ui.maneuver.model.Lane;
              public copy$libnavui_maneuver_release(primary: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, stepDistance: com.mapbox.navigation.ui.maneuver.model.StepDistance, secondary: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, sub: com.mapbox.navigation.ui.maneuver.model.SubManeuver, laneGuidance: com.mapbox.navigation.ui.maneuver.model.Lane, maneuverPoint: com.mapbox.geojson.Point): com.mapbox.navigation.ui.maneuver.model.Maneuver;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getSecondary(): com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver;
              public getManeuverPoint(): com.mapbox.geojson.Point;
              public constructor(primary: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, stepDistance: com.mapbox.navigation.ui.maneuver.model.StepDistance, secondary: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, sub: com.mapbox.navigation.ui.maneuver.model.SubManeuver, laneGuidance: com.mapbox.navigation.ui.maneuver.model.Lane, maneuverPoint: com.mapbox.geojson.Point);
              public getStepDistance(): com.mapbox.navigation.ui.maneuver.model.StepDistance;
              public getSub(): com.mapbox.navigation.ui.maneuver.model.SubManeuver;
              public getPrimary(): com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverError>;
              public constructor(errorMessage: string, throwable: java.lang.Throwable);
              public getThrowable(): java.lang.Throwable;
              public getErrorMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverErrorFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverErrorFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverErrorFactory;
              public static buildManeuverError(errorMessage: string, throwable: java.lang.Throwable): com.mapbox.navigation.ui.maneuver.model.ManeuverError;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverExitOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getTextAppearance(): number;
              public getMutcdExitProperties(): com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
              public getViennaExitProperties(): com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna;
            }
            export module ManeuverExitOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder>;
                public mutcdExitProperties($this$mutcdExitProperties_u24lambda_u2d1: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
                public viennaExitProperties($this$viennaExitProperties_u24lambda_u2d2: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
                public constructor();
                public textAppearance($this$textAppearance_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverFactory;
              public static buildManeuver(primary: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, stepDistance: com.mapbox.navigation.ui.maneuver.model.StepDistance, secondary: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, sub: com.mapbox.navigation.ui.maneuver.model.SubManeuver, lane: com.mapbox.navigation.ui.maneuver.model.Lane, point: com.mapbox.geojson.Point): com.mapbox.navigation.ui.maneuver.model.Maneuver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverInstructionGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverInstructionGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverInstructionGenerator;
              public generateSub(param0: globalAndroid.content.Context, component: number, element$iv: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, $this$forEach$iv: com.mapbox.navigation.ui.maneuver.model.SubManeuver, $i$f$forEach: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
              public generatePrimary(param0: globalAndroid.content.Context, component: number, element$iv: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, $this$forEach$iv: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, $i$f$forEach: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
              public generateSecondary(param0: globalAndroid.content.Context, component: number, element$iv: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, $this$forEach$iv: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, $i$f$forEach: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverOptions>;
              public getFilterDuplicateManeuvers(): boolean;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder;
            }
            export module ManeuverOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
                public filterDuplicateManeuvers($this$filterDuplicateManeuvers_u24lambda_u2d0: boolean): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverPrimaryOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions>;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
              public equals(other: any): boolean;
              public getTextAppearance(): number;
              public toString(): string;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverPrimaryOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
                public exitOptions($this$exitOptions_u24lambda_u2d1: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
                public textAppearance($this$textAppearance_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverSecondaryOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
              public getTextAppearance(): number;
              public toString(): string;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverSecondaryOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
                public constructor();
                public textAppearance($this$textAppearance_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
                public exitOptions($this$exitOptions_u24lambda_u2d1: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverSubOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
              public getTextAppearance(): number;
              public toString(): string;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverSubOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder>;
                public constructor();
                public textAppearance($this$textAppearance_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions;
                public exitOptions($this$exitOptions_u24lambda_u2d1: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverViewOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
              public getStepDistanceTextAppearance(): number;
              public getManeuverBackgroundColor(): number;
              public hashCode(): number;
              public getSubManeuverBackgroundColor(): number;
              public getPrimaryManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
              public toString(): string;
              public getLaneGuidanceTurnIconManeuver(): number;
              public equals(other: any): boolean;
              public getSecondaryManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
              public getSubManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions;
              public getTurnIconManeuver(): number;
              public getUpcomingManeuverBackgroundColor(): number;
            }
            export module ManeuverViewOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder>;
                public upcomingManeuverBackgroundColor($this$upcomingManeuverBackgroundColor_u24lambda_u2d2: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public stepDistanceTextAppearance($this$stepDistanceTextAppearance_u24lambda_u2d4: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
                public laneGuidanceTurnIconManeuver($this$laneGuidanceTurnIconManeuver_u24lambda_u2d5: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public subManeuverOptions($this$subManeuverOptions_u24lambda_u2d8: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public subManeuverBackgroundColor($this$subManeuverBackgroundColor_u24lambda_u2d1: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public secondaryManeuverOptions($this$secondaryManeuverOptions_u24lambda_u2d7: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public constructor();
                public primaryManeuverOptions($this$primaryManeuverOptions_u24lambda_u2d6: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public maneuverBackgroundColor($this$maneuverBackgroundColor_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public turnIconManeuver($this$turnIconManeuver_u24lambda_u2d3: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export abstract class MapboxExitProperties {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties>;
              public getFallbackDrawable(): number;
              public getExitLeftDrawable(): number;
              public getShouldFallbackWithDrawable(): boolean;
              public getExitRightDrawable(): number;
              public getShouldFallbackWithText(): boolean;
              public getExitBackground(): number;
            }
            export module MapboxExitProperties {
              export class PropertiesMutcd extends com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd>;
                public constructor();
                public constructor(shouldFallbackWithText: boolean, shouldFallbackWithDrawable: boolean, exitBackground: number, fallbackDrawable: number, exitLeftDrawable: number, exitRightDrawable: number);
              }
              export class PropertiesVienna extends com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna>;
                public constructor();
                public constructor(shouldFallbackWithText: boolean, shouldFallbackWithDrawable: boolean, exitBackground: number, fallbackDrawable: number, exitLeftDrawable: number, exitRightDrawable: number);
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
      export module ui {
        export module maneuver {
          export module model {
            export class PrimaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver>;
              public constructor();
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public equals(other: any): boolean;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public constructor(id: string, text: string, type: string, degrees: java.lang.Double, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
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
      export module ui {
        export module maneuver {
          export module model {
            export class PrimaryManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.PrimaryManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuverFactory;
              public static buildPrimaryManeuver(id: string, text: string, type: string, degrees: number, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class RoadShield {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShield>;
              public constructor(shieldUrl: string, shieldIcon: androidNative.Array<number>);
              public setShieldIcon(param0: androidNative.Array<number>): void;
              public getShieldUrl(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public component2(): androidNative.Array<number>;
              public getShieldIcon(): androidNative.Array<number>;
              public component1(): string;
              public copy(shieldUrl: string, shieldIcon: androidNative.Array<number>): com.mapbox.navigation.ui.maneuver.model.RoadShield;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class RoadShieldComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
              public getText(): string;
              public getShieldUrl(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
            }
            export module RoadShieldComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder>;
                public mapboxShield($this$mapboxShield_u24lambda_u2d2: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
                public constructor();
                public shieldUrl($this$shieldUrl_u24lambda_u2d1: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode;
                public text($this$text_u24lambda_u2d0: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class RoadShieldError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldError>;
              public component2(): string;
              public hashCode(): number;
              public getUrl(): string;
              public equals(other: any): boolean;
              public copy(url: string, message: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldError;
              public toString(): string;
              public constructor(url: string, message: string);
              public getMessage(): string;
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
      export module ui {
        export module maneuver {
          export module model {
            export class RoadShieldGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.RoadShieldGenerator;
              public styleAndGetRoadShield(drawable: string, b: number, stream: globalAndroid.content.res.Resources, svgBitmap: com.mapbox.navigation.ui.shield.model.RouteShield): globalAndroid.text.SpannableStringBuilder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class SecondaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver>;
              public constructor();
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public equals(other: any): boolean;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public constructor(id: string, text: string, type: string, degrees: java.lang.Double, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
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
      export module ui {
        export module maneuver {
          export module model {
            export class SecondaryManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SecondaryManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuverFactory;
              public static buildSecondaryManeuver(id: string, text: string, type: string, degrees: number, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class StepDistance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.StepDistance>;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public hashCode(): number;
              public constructor(distanceFormatter: com.mapbox.navigation.base.formatter.DistanceFormatter, totalDistance: number, distanceRemaining: java.lang.Double);
              public equals(other: any): boolean;
              public getDistanceRemaining(): java.lang.Double;
              public setDistanceRemaining(param0: java.lang.Double): void;
              public getTotalDistance(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class StepIndexToManeuvers {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public getManeuverList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public component1(): number;
              public constructor(stepIndex: number, maneuverList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
              public hashCode(): number;
              public equals(other: any): boolean;
              public component2(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public copy(stepIndex: number, maneuverList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers;
              public toString(): string;
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
      export module ui {
        export module maneuver {
          export module model {
            export class SubManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SubManeuver>;
              public constructor();
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public equals(other: any): boolean;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public constructor(id: string, text: string, type: string, degrees: java.lang.Double, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
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
      export module ui {
        export module maneuver {
          export module model {
            export class SubManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SubManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.SubManeuverFactory;
              public static buildSubManeuver(id: string, text: string, type: string, degrees: number, modifier: string, drivingSide: string, componentList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.SubManeuver;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class TextComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TextComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
              public toString(): string;
              public getAbbrPriority(): java.lang.Integer;
              public getAbbr(): string;
            }
            export module TextComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.TextComponentNode;
                public abbr($this$abbr_u24lambda_u2d1: string): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
                public abbrPriority($this$abbrPriority_u24lambda_u2d2: java.lang.Integer): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
                public constructor();
                public text($this$text_u24lambda_u2d0: string): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
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
      export module ui {
        export module maneuver {
          export module model {
            export class TurnIconError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconError>;
              public getDegrees(): java.lang.Float;
              public constructor(errorMessage: string, type: string, degrees: java.lang.Float, modifier: string, drivingSide: string);
              public getModifier(): string;
              public getDrivingSide(): string;
              public getType(): string;
              public getErrorMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class TurnIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources>;
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
              public equals(other: any): boolean;
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
              public hashCode(): number;
              public getTurnIconDepartStraight(): number;
              public getTurnIconOffRamp(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
              public getTurnIconOnRampSlightLeft(): number;
              public getTurnIconOnRampStraight(): number;
              public toString(): string;
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
              public static defaultIconSet(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
              public getTurnIconInvalidSlightRight(): number;
              public getTurnIconOffRampSlightLeft(): number;
              public getTurnIconContinue(): number;
              public getTurnIconRoundaboutSlightLeft(): number;
              public getTurnIconContinueRight(): number;
              public getTurnIconOnRampSharpRight(): number;
              public getTurnIconOffRampLeft(): number;
              public getTurnIconDepartLeft(): number;
            }
            export module TurnIconResources {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder>;
                public turnIconNewNameSlightLeft($this$turnIconNewNameSlightLeft_u24lambda_u2d38: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSharpRight($this$turnIconOnRampSharpRight_u24lambda_u2d61: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkStraight($this$turnIconForkStraight_u24lambda_u2d20: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeSlightRight($this$turnIconMergeSlightRight_u24lambda_u2d34: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueSlightRight($this$turnIconContinueSlightRight_u24lambda_u2d10: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampRight($this$turnIconOffRampRight_u24lambda_u2d51: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeLeft($this$turnIconMergeLeft_u24lambda_u2d30: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotaryLeft($this$turnIconRotaryLeft_u24lambda_u2d64: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinue($this$turnIconContinue_u24lambda_u2d4: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRamp($this$turnIconRamp_u24lambda_u2d62: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutLeft($this$turnIconRoundaboutLeft_u24lambda_u2d72: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySlightRight($this$turnIconRotarySlightRight_u24lambda_u2d68: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotary($this$turnIconRotary_u24lambda_u2d63: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSlightRight($this$turnIconTurnSlightRight_u24lambda_u2d83: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueLeft($this$turnIconContinueLeft_u24lambda_u2d5: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySharpLeft($this$turnIconRotarySharpLeft_u24lambda_u2d69: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampLeft($this$turnIconOnRampLeft_u24lambda_u2d55: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutStraight($this$turnIconRoundaboutStraight_u24lambda_u2d74: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconUturn($this$turnIconUturn_u24lambda_u2d86: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkSlightRight($this$turnIconForkSlightRight_u24lambda_u2d22: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSlightRight($this$turnIconNewNameSlightRight_u24lambda_u2d39: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSlightRight($this$turnIconRoundaboutSlightRight_u24lambda_u2d76: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampStraight($this$turnIconOnRampStraight_u24lambda_u2d57: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSharpLeft($this$turnIconNewNameSharpLeft_u24lambda_u2d40: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveRight($this$turnIconArriveRight_u24lambda_u2d2: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameRight($this$turnIconNewNameRight_u24lambda_u2d36: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public constructor();
                public turnIconNotificationRight($this$turnIconNotificationRight_u24lambda_u2d43: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArrive($this$turnIconArrive_u24lambda_u2d0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSlightRight($this$turnIconOnRampSlightRight_u24lambda_u2d59: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidLeft($this$turnIconInvalidLeft_u24lambda_u2d24: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSharpLeft($this$turnIconNotificationSharpLeft_u24lambda_u2d47: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutRight($this$turnIconRoundaboutRight_u24lambda_u2d73: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartStraight($this$turnIconDepartStraight_u24lambda_u2d14: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkRight($this$turnIconForkRight_u24lambda_u2d19: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartLeft($this$turnIconDepartLeft_u24lambda_u2d12: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotaryStraight($this$turnIconRotaryStraight_u24lambda_u2d66: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeRight($this$turnIconMergeRight_u24lambda_u2d31: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampRight($this$turnIconOnRampRight_u24lambda_u2d56: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidSlightLeft($this$turnIconInvalidSlightLeft_u24lambda_u2d28: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotaryRight($this$turnIconRotaryRight_u24lambda_u2d65: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueRight($this$turnIconContinueRight_u24lambda_u2d6: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueUturn($this$turnIconContinueUturn_u24lambda_u2d8: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartRight($this$turnIconDepartRight_u24lambda_u2d13: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveLeft($this$turnIconArriveLeft_u24lambda_u2d1: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveStraight($this$turnIconArriveStraight_u24lambda_u2d3: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundabout($this$turnIconRoundabout_u24lambda_u2d71: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSharpLeft($this$turnIconRoundaboutSharpLeft_u24lambda_u2d77: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidUturn($this$turnIconInvalidUturn_u24lambda_u2d27: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRamp($this$turnIconOffRamp_u24lambda_u2d49: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSharpRight($this$turnIconNewNameSharpRight_u24lambda_u2d41: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnRight($this$turnIconTurnRight_u24lambda_u2d80: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconEndRoadLeft($this$turnIconEndRoadLeft_u24lambda_u2d15: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkLeft($this$turnIconForkLeft_u24lambda_u2d18: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkSlightLeft($this$turnIconForkSlightLeft_u24lambda_u2d21: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSlightLeft($this$turnIconOnRampSlightLeft_u24lambda_u2d58: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnStraight($this$turnIconTurnStraight_u24lambda_u2d81: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconEndRoadRight($this$turnIconEndRoadRight_u24lambda_u2d16: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSharpRight($this$turnIconNotificationSharpRight_u24lambda_u2d48: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
                public turnIconNewNameStraight($this$turnIconNewNameStraight_u24lambda_u2d37: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidStraight($this$turnIconInvalidStraight_u24lambda_u2d26: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSlightLeft($this$turnIconNotificationSlightLeft_u24lambda_u2d45: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSharpRight($this$turnIconRoundaboutSharpRight_u24lambda_u2d78: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepart($this$turnIconDepart_u24lambda_u2d11: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSharpRight($this$turnIconTurnSharpRight_u24lambda_u2d85: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSlightLeft($this$turnIconTurnSlightLeft_u24lambda_u2d82: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeSlightLeft($this$turnIconMergeSlightLeft_u24lambda_u2d33: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationLeft($this$turnIconNotificationLeft_u24lambda_u2d42: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameLeft($this$turnIconNewNameLeft_u24lambda_u2d35: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySlightLeft($this$turnIconRotarySlightLeft_u24lambda_u2d67: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampSlightRight($this$turnIconOffRampSlightRight_u24lambda_u2d53: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueStraight($this$turnIconContinueStraight_u24lambda_u2d7: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueSlightLeft($this$turnIconContinueSlightLeft_u24lambda_u2d9: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationStraight($this$turnIconNotificationStraight_u24lambda_u2d44: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSharpLeft($this$turnIconTurnSharpLeft_u24lambda_u2d84: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeStraight($this$turnIconMergeStraight_u24lambda_u2d32: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnLeft($this$turnIconTurnLeft_u24lambda_u2d79: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconFork($this$turnIconFork_u24lambda_u2d17: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSharpLeft($this$turnIconOnRampSharpLeft_u24lambda_u2d60: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySharpRight($this$turnIconRotarySharpRight_u24lambda_u2d70: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidRight($this$turnIconInvalidRight_u24lambda_u2d25: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSlightRight($this$turnIconNotificationSlightRight_u24lambda_u2d46: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampSlightLeft($this$turnIconOffRampSlightLeft_u24lambda_u2d52: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRamp($this$turnIconOnRamp_u24lambda_u2d54: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSlightLeft($this$turnIconRoundaboutSlightLeft_u24lambda_u2d75: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidSlightRight($this$turnIconInvalidSlightRight_u24lambda_u2d29: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampLeft($this$turnIconOffRampLeft_u24lambda_u2d50: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalid($this$turnIconInvalid_u24lambda_u2d23: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Companion>;
                public defaultIconSet(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxExitText {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxExitText>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public getViewAsBitmap(): globalAndroid.graphics.Bitmap;
              /** @deprecated */
              public setExitStyle(background: globalAndroid.graphics.drawable.Drawable, leftDrawable: globalAndroid.graphics.drawable.Drawable, rightDrawable: globalAndroid.graphics.drawable.Drawable): void;
              public setExit(leftDrawable: string, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public updateTextAppearance(style: number): void;
              public updateExitProperties(properties: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties): void;
              public constructor(context: globalAndroid.content.Context);
              public styleExitWith(right: globalAndroid.graphics.Bitmap, this_: number): globalAndroid.graphics.drawable.Drawable;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxLaneGuidance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidance>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public renderLane(this_: com.mapbox.navigation.ui.maneuver.model.LaneIcon, laneIcon: androidx.appcompat.view.ContextThemeWrapper): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxLaneGuidanceAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter>;
              public updateStyle(style: number): void;
              public getItemCount(): number;
              public removeLanes(): void;
              public onCreateViewHolder(this_: globalAndroid.view.ViewGroup, parent: number): com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder;
              public addLanes(laneIndicatorList: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>): void;
              public constructor(context: globalAndroid.content.Context);
              public onBindViewHolder(this_: com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder, holder: number): void;
            }
            export module MapboxLaneGuidanceAdapter {
              export class MapboxLaneGuidanceViewHolder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder>;
                public constructor(this$0: com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding);
                public bindLaneIndicator(this_: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): void;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxManeuverDiffCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverDiffCallback>;
              public getNewListSize(): number;
              public areItemsTheSame(oldItemPosition: number, newItemPosition: number): boolean;
              public getOldListSize(): number;
              public constructor(oldList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, newList: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
              public areContentsTheSame(oldItemPosition: number, newItemPosition: number): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxManeuverView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView>;
              public renderSecondary(secondary: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, routeShields: java.util.Set<any>): void;
              public renderRemoveLanes(): void;
              public getUpcomingManeuverRenderingEnabled(): boolean;
              public setUpcomingManeuverRenderingEnabled(value: boolean): void;
              /** @deprecated */
              public renderPrimaryManeuver(it: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public updateSecondaryManeuverVisibility(visibility: number): void;
              /** @deprecated */
              public updateTurnIconStyle(style: number): void;
              /** @deprecated */
              public updateStyle(this_: number): void;
              /** @deprecated */
              public updateLaneGuidanceIconStyle(style: number): void;
              /** @deprecated */
              public renderSubManeuver(it: com.mapbox.navigation.ui.maneuver.model.SubManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public getManeuverViewState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState>;
              /** @deprecated */
              public renderPrimaryManeuver(primary: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              /** @deprecated */
              public renderSecondaryManeuver(it: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public updateUpcomingManeuversVisibility(visibility: number): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public updateManeuverViewOptions(options: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
              public renderManeuvers(maneuvers: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>): void;
              /** @deprecated */
              public updateSubManeuverTextAppearance(style: number): void;
              /** @deprecated */
              public updateStepDistanceTextAppearance(style: number): void;
              public renderDistanceRemaining(stepDistance: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
              /** @deprecated */
              public renderManeuverShields(p0: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>): void;
              /** @deprecated */
              public updateUpcomingSecondaryManeuverTextAppearance(style: number): void;
              public renderAddLanes(lane: com.mapbox.navigation.ui.maneuver.model.Lane): void;
              public getUpcomingManeuverAdapter$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter;
              public renderSub(sub: com.mapbox.navigation.ui.maneuver.model.SubManeuver, routeShields: java.util.Set<any>): void;
              /** @deprecated */
              public updateSecondaryManeuverTextAppearance(style: number): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              /** @deprecated */
              public updatePrimaryManeuverTextAppearance(style: number): void;
              /** @deprecated */
              public updateUpcomingPrimaryManeuverTextAppearance(style: number): void;
              public updateSubManeuverViewVisibility(visibility: number): void;
              public updatePrimaryManeuverTextVisibility(visibility: number): void;
              /** @deprecated */
              public renderSecondaryManeuver(secondary: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver): void;
              public renderPrimary(primary: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, routeShields: java.util.Set<any>): void;
              public constructor($this$_init__u24lambda_u2d0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, $this$_init__u24lambda_u2d1: number, this_: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions);
              /** @deprecated */
              public renderSubManeuver(sub: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
              public constructor(context: globalAndroid.content.Context);
              public renderManeuverWith(it: java.util.List<any>): void;
              public updateTurnIconResources(turnIconResources: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              /** @deprecated */
              public updateUpcomingManeuverStepDistanceTextAppearance(style: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export abstract class MapboxManeuverViewState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState>;
            }
            export module MapboxManeuverViewState {
              export class COLLAPSED extends com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.COLLAPSED>;
                public static INSTANCE: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.COLLAPSED;
              }
              export class EXPANDED extends com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.EXPANDED>;
                public static INSTANCE: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.EXPANDED;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxManeuversList {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuversList>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public requestLayout(): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxPrimaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxPrimaryManeuver>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, options: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions);
              public renderManeuver(instruction: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, this_: java.util.Set<any>): void;
              /** @deprecated */
              public render(maneuver: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              public getOptions$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
              /** @deprecated */
              public render(it: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public constructor(context: globalAndroid.content.Context);
              public updateOptions(options: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxSecondaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxSecondaryManeuver>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public getOptions$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, options: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions);
              /** @deprecated */
              public render(maneuver: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver): void;
              public renderManeuver(instruction: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, this_: java.util.Set<any>): void;
              public constructor(context: globalAndroid.content.Context);
              /** @deprecated */
              public render(it: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public updateOptions(options: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxStepDistance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxStepDistance>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public renderTotalStepDistance(stepDistance: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public renderDistanceRemaining(distance: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxSubManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxSubManeuver>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              /** @deprecated */
              public render(it: com.mapbox.navigation.ui.maneuver.model.SubManeuver, $i$f$ifNonNull: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, options: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions);
              /** @deprecated */
              public render(maneuver: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
              public renderManeuver(instruction: com.mapbox.navigation.ui.maneuver.model.SubManeuver, this_: java.util.Set<any>): void;
              public updateOptions(options: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions): void;
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxTurnIconManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public updateTurnIconStyle(wrapper: androidx.appcompat.view.ContextThemeWrapper): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public getTurnIconTheme$libnavui_maneuver_release(): androidx.appcompat.view.ContextThemeWrapper;
              public renderPrimaryTurnIcon(maneuver: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              public updateTurnIconResources(turnIcon: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              public renderSubTurnIcon(m: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
              public constructor(context: globalAndroid.content.Context);
            }
            export module MapboxTurnIconManeuver {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver.Companion>;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxUpcomingManeuverAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter>;
              public onCreateViewHolder(mainLayoutBinding: globalAndroid.view.ViewGroup, this_: number): com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder;
              public onBindViewHolder(this_: com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder, holder: number): void;
              /** @deprecated */
              public updateUpcomingSecondaryManeuverTextAppearance(this_: number): void;
              /** @deprecated */
              public updateUpcomingPrimaryManeuverTextAppearance(style: number): void;
              public updateManeuverViewOptions(maneuverViewOptions: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
              public updateUpcomingManeuverIconStyle(contextThemeWrapper: androidx.appcompat.view.ContextThemeWrapper): void;
              public getItemCount(): number;
              public updateShields(shields: java.util.Set<any>): void;
              /** @deprecated */
              public updateRoadShields(value: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>): void;
              public addUpcomingManeuvers(diffResult: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): void;
              public constructor(context: globalAndroid.content.Context);
              /** @deprecated */
              public updateUpcomingManeuverStepDistanceTextAppearance(style: number): void;
            }
            export module MapboxUpcomingManeuverAdapter {
              export class MapboxUpcomingManeuverViewHolder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder>;
                public getViewBinding(): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
                public constructor(this$0: com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding);
                public bindUpcomingManeuver(secondary: com.mapbox.navigation.ui.maneuver.model.Maneuver): void;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
