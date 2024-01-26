declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module tripprogress {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.tripprogress';
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
        export module tripprogress {
          export abstract class TripProgressAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction>;
          }
          export module TripProgressAction {
            export class CalculateTripDetails extends com.mapbox.navigation.ui.tripprogress.TripProgressAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripDetails>;
              public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public hashCode(): number;
              public copy(route: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripDetails;
              public equals(other: any): boolean;
              public constructor(route: com.mapbox.navigation.base.route.NavigationRoute);
              public toString(): string;
              public component1(): com.mapbox.navigation.base.route.NavigationRoute;
            }
            export class CalculateTripProgress extends com.mapbox.navigation.ui.tripprogress.TripProgressAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripProgress>;
              public copy(routeProgress: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripProgress;
              public hashCode(): number;
              public constructor(routeProgress: com.mapbox.navigation.base.trip.model.RouteProgress);
              public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public equals(other: any): boolean;
              public toString(): string;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
            }
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
        export module tripprogress {
          export class TripProgressConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressConfig>;
            public getTripProgressFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
            public setTripProgressFormatter(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter): void;
            public getTripOverviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
            public setTripOverviewRoutes(param0: kotlinx.coroutines.flow.Flow<any>): void;
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
        export module tripprogress {
          export class TripProgressProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressProcessor>;
            public constructor();
            public process(action: com.mapbox.navigation.ui.tripprogress.TripProgressAction): com.mapbox.navigation.ui.tripprogress.TripProgressResult;
          }
          export module TripProgressProcessor {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressProcessor.WhenMappings>;
            }
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
        export module tripprogress {
          export abstract class TripProgressResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult>;
          }
          export module TripProgressResult {
            export class RouteProgressCalculation extends com.mapbox.navigation.ui.tripprogress.TripProgressResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.RouteProgressCalculation>;
              public getEstimatedTimeToArrival(): number;
              public hashCode(): number;
              public component2(): number;
              public component5(): number;
              public constructor(estimatedTimeToArrival: number, distanceRemaining: number, currentLegTimeRemaining: number, totalTimeRemaining: number, percentRouteTraveled: number);
              public toString(): string;
              public getTotalTimeRemaining(): number;
              public getCurrentLegTimeRemaining(): number;
              public getPercentRouteTraveled(): number;
              public component1(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public getDistanceRemaining(): number;
              public component3(): number;
              public copy(estimatedTimeToArrival: number, distanceRemaining: number, currentLegTimeRemaining: number, totalTimeRemaining: number, percentRouteTraveled: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.RouteProgressCalculation;
            }
            export abstract class TripOverview extends com.mapbox.navigation.ui.tripprogress.TripProgressResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview>;
            }
            export module TripOverview {
              export class Failure extends com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Failure>;
                public component1(): string;
                public getErrorMessage(): string;
                public toString(): string;
                public copy(errorMessage: string, throwable: java.lang.Throwable): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Failure;
                public constructor(errorMessage: string, throwable: java.lang.Throwable);
                public hashCode(): number;
                public getThrowable(): java.lang.Throwable;
                public equals(other: any): boolean;
                public component2(): java.lang.Throwable;
              }
              export class RouteLegTripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public toString(): string;
                public getLegDistance(): number;
                public constructor(legIndex: number, legTime: number, legDistance: number, estimatedTimeToArrival: number);
                public getLegIndex(): number;
                public getEstimatedTimeToArrival(): number;
                public component3(): number;
                public getLegTime(): number;
                public copy(legIndex: number, legTime: number, legDistance: number, estimatedTimeToArrival: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview;
                public equals(other: any): boolean;
                public component1(): number;
                public component4(): number;
                public component2(): number;
                public hashCode(): number;
              }
              export class Success extends com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Success>;
                public toString(): string;
                public component3(): number;
                public getRouteLegTripDetail(): java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public component1(): java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public getTotalEstimatedTimeToArrival(): number;
                public equals(other: any): boolean;
                public constructor(routeLegTripDetail: java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>, totalTime: number, totalDistance: number, totalEstimatedTimeToArrival: number);
                public getTotalDistance(): number;
                public component4(): number;
                public component2(): number;
                public copy(routeLegTripDetail: java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>, totalTime: number, totalDistance: number, totalEstimatedTimeToArrival: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Success;
                public getTotalTime(): number;
                public hashCode(): number;
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
        export module tripprogress {
          export module api {
            export class MapboxTripProgressApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.api.MapboxTripProgressApi>;
              public constructor(formatter: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public setFormatter(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter): void;
              public getTripProgress(result: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue;
              public constructor(formatter: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter, processor: com.mapbox.navigation.ui.tripprogress.TripProgressProcessor);
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              public getTripDetails(it: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>;
            }
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
        export module tripprogress {
          export module databinding {
            export class MapboxTripProgressLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding>;
              public distanceRemainingIcon: globalAndroid.widget.ImageView;
              public distanceRemainingLayout: androidx.appcompat.widget.LinearLayoutCompat;
              public distanceRemainingText: com.mapbox.navigation.ui.tripprogress.view.DistanceRemainingView;
              public estimatedArrivalTimeLayout: androidx.appcompat.widget.LinearLayoutCompat;
              public estimatedTimeToArriveIcon: globalAndroid.widget.ImageView;
              public estimatedTimeToArriveText: com.mapbox.navigation.ui.tripprogress.view.EstimatedArrivalTimeView;
              public timeRemainingText: com.mapbox.navigation.ui.tripprogress.view.TimeRemainingView;
              public tripProgressContainer: androidx.constraintlayout.widget.ConstraintLayout;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding;
              public getRoot(): globalAndroid.view.View;
              public static bind(distanceRemainingIcon: globalAndroid.view.View): com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding;
            }
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class MapboxTripProgressComponentContract extends com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.MapboxTripProgressComponentContract>;
                public constructor();
                public getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
                public constructor(previewRoutes: kotlinx.coroutines.flow.Flow<any>);
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class TripProgressComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponent>;
                public constructor(tripProgressView: com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView, contactProvider: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract>, tripProgressFormatter: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter, tripProgressApi: com.mapbox.navigation.ui.tripprogress.api.MapboxTripProgressApi);
                public onAttached($i$f$unsafeTransform: com.mapbox.navigation.core.MapboxNavigation): void;
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class TripProgressComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>> });
                public constructor();
                public getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
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
        export module tripprogress {
          export module model {
            export class DistanceRemainingFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.DistanceRemainingFormatter>;
              public constructor(distanceFormatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
              public format(update: number): globalAndroid.text.SpannableString;
            }
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
        export module tripprogress {
          export module model {
            export class EstimatedTimeToArrivalFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Long, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.EstimatedTimeToArrivalFormatter>;
              public constructor(context: globalAndroid.content.Context, timeFormatType: number);
              public format(it: number): globalAndroid.text.SpannableString;
            }
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
        export module tripprogress {
          export module model {
            export class PercentDistanceTraveledFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.PercentDistanceTraveledFormatter>;
              public constructor();
              public format(update: number): globalAndroid.text.SpannableString;
            }
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
        export module tripprogress {
          export module model {
            export class RouteLegTripOverview {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>;
              public getEstimatedTimeToArrival(): number;
              public getLegTime(): number;
              public getLegIndex(): number;
              public getLegDistance(): number;
              public constructor(legIndex: number, legTime: number, legDistance: number, estimatedTimeToArrival: number);
            }
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
        export module tripprogress {
          export module model {
            export class TimeRemainingFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TimeRemainingFormatter>;
              public setLocale(param0: java.util.Locale): void;
              public getLocale(): java.util.Locale;
              public format(it: number): globalAndroid.text.SpannableString;
              public constructor(context: globalAndroid.content.Context, locale: java.util.Locale);
            }
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
        export module tripprogress {
          export module model {
            export class TripOverviewError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError>;
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
        export module tripprogress {
          export module model {
            export class TripOverviewValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>;
              public constructor(routeLegTripDetail: java.util.List<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>, totalTime: number, totalDistance: number, totalEstimatedTimeToArrival: number, formatter: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public getTotalEstimatedTimeToArrival(): number;
              public getRouteLegTripDetail(): java.util.List<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>;
              public getTotalDistance(): number;
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              public getTotalTime(): number;
            }
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
        export module tripprogress {
          export module model {
            export class TripProgressUpdateFormatter {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter>;
              public getEstimatedTimeToArrival(value: number): globalAndroid.text.SpannableString;
              public hashCode(): number;
              public getDistanceRemaining(value: number): globalAndroid.text.SpannableString;
              public toBuilder(context: globalAndroid.content.Context): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
              public equals(other: any): boolean;
              public toString(): string;
              public getTimeRemaining(value: number): globalAndroid.text.SpannableString;
              public getPercentRouteTraveled(value: number): globalAndroid.text.SpannableString;
            }
            export module TripProgressUpdateFormatter {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder>;
                public estimatedTimeToArrivalFormatter($this$estimatedTimeToArrivalFormatter_u24lambda_u2d0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public timeRemainingFormatter($this$timeRemainingFormatter_u24lambda_u2d2: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public constructor(context: globalAndroid.content.Context);
                public percentRouteTraveledFormatter($this$percentRouteTraveledFormatter_u24lambda_u2d3: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public distanceRemainingFormatter($this$distanceRemainingFormatter_u24lambda_u2d1: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public build(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              }
              export module Builder {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder.WhenMappings>;
                }
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Companion>;
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
        export module tripprogress {
          export module model {
            export class TripProgressUpdateValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue>;
              public getCurrentLegTimeRemaining(): number;
              public getPercentRouteTraveled(): number;
              public getEstimatedTimeToArrival(): number;
              public constructor(estimatedTimeToArrival: number, distanceRemaining: number, currentLegTimeRemaining: number, totalTimeRemaining: number, percentRouteTraveled: number, trafficCongestionColor: number, formatter: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public getTrafficCongestionColor(): number;
              public getDistanceRemaining(): number;
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              public getTotalTimeRemaining(): number;
            }
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
        export module tripprogress {
          export module model {
            export class TripProgressViewOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions>;
              public getEstimatedArrivalTimeIcon(): number;
              public getDistanceRemainingTextAppearance(): number;
              public getEstimatedArrivalTimeTextAppearance(): number;
              public hashCode(): number;
              public getDistanceRemainingIconTint(): globalAndroid.content.res.ColorStateList;
              public toBuilder(): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
              public equals(other: any): boolean;
              public getEstimatedArrivalTimeIconTint(): globalAndroid.content.res.ColorStateList;
              public toString(): string;
              public getBackgroundColor(): number;
              public getTimeRemainingTextAppearance(): number;
              public getDistanceRemainingIcon(): number;
            }
            export module TripProgressViewOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder>;
                public build(): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions;
                public estimatedArrivalTimeTextAppearance($this$estimatedArrivalTimeTextAppearance_u24lambda_u2d5: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public distanceRemainingIconTint($this$distanceRemainingIconTint_u24lambda_u2d6: globalAndroid.content.res.ColorStateList): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public distanceRemainingIcon($this$distanceRemainingIcon_u24lambda_u2d1: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public estimatedArrivalTimeIcon($this$estimatedArrivalTimeIcon_u24lambda_u2d2: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public constructor();
                public timeRemainingTextAppearance($this$timeRemainingTextAppearance_u24lambda_u2d3: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public distanceRemainingTextAppearance($this$distanceRemainingTextAppearance_u24lambda_u2d4: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public backgroundColor($this$backgroundColor_u24lambda_u2d0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public estimatedArrivalTimeIconTint($this$estimatedArrivalTimeIconTint_u24lambda_u2d7: globalAndroid.content.res.ColorStateList): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
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
        export module tripprogress {
          export module view {
            export class DistanceRemainingView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.DistanceRemainingView>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public renderDistanceRemaining(distanceRemaining: globalAndroid.text.SpannableString, bufferType: globalAndroid.widget.TextView.BufferType): void;
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
        export module tripprogress {
          export module view {
            export class EstimatedArrivalTimeView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.EstimatedArrivalTimeView>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public renderEstimatedArrivalTime(estimatedArrivalTime: globalAndroid.text.SpannableString, bufferType: globalAndroid.widget.TextView.BufferType): void;
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
        export module tripprogress {
          export module view {
            export class MapboxTripProgressView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public renderTripOverview(result: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public renderLegOverview(legIndex: number, result: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>): void;
              public render(result: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue): void;
              public constructor(context: globalAndroid.content.Context, options: com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions);
              /** @deprecated */
              public updateStyle(it: number): void;
              public updateOptions(tint: com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions): void;
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
        export module tripprogress {
          export module view {
            export class TimeRemainingView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.TimeRemainingView>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public renderTimeRemaining(timeRemaining: globalAndroid.text.SpannableString, bufferType: globalAndroid.widget.TextView.BufferType): void;
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
