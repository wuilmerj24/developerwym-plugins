declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.speedlimit';
            public static BUILD_TYPE: string = 'release';
            public static MAPBOX_NAVIGATION_VERSION_NAME: string = '2.17.10';
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
        export module speedlimit {
          export class SpeedInfoConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedInfoConfig>;
            public setSpeedInfoOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
            public getSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public setDistanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): void;
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
        export module speedlimit {
          export abstract class SpeedLimitAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction>;
          }
          export module SpeedLimitAction {
            export class CalculateSpeedLimitUpdate extends com.mapbox.navigation.ui.speedlimit.SpeedLimitAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.CalculateSpeedLimitUpdate>;
              public copy(speedLimit: com.mapbox.navigation.base.speed.model.SpeedLimit): com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.CalculateSpeedLimitUpdate;
              public constructor(speedLimit: com.mapbox.navigation.base.speed.model.SpeedLimit);
              public hashCode(): number;
              public equals(other: any): boolean;
              public getSpeedLimit(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public component1(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public toString(): string;
            }
            export class FindPostedAndCurrentSpeed extends com.mapbox.navigation.ui.speedlimit.SpeedLimitAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.FindPostedAndCurrentSpeed>;
              public copy(formatter: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>, locationMatcherResult: com.mapbox.navigation.core.trip.session.LocationMatcherResult, distanceFormatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.FindPostedAndCurrentSpeed;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public getFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer>;
              public component3(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public hashCode(): number;
              public constructor(formatter: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>, locationMatcherResult: com.mapbox.navigation.core.trip.session.LocationMatcherResult, distanceFormatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
              public component2(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public equals(other: any): boolean;
              public toString(): string;
              public component1(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer>;
            }
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
        export module speedlimit {
          export class SpeedLimitConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitConfig>;
            public constructor();
            public setStyle(param0: number): void;
            public getTextAppearance(): number;
            public setTextAppearance(param0: number): void;
            public getStyle(): number;
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
        export module speedlimit {
          export class SpeedLimitProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor>;
            public process(action: com.mapbox.navigation.ui.speedlimit.SpeedLimitAction): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult;
            public constructor();
          }
          export module SpeedLimitProcessor {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor.WhenMappings>;
            }
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
        export module speedlimit {
          export abstract class SpeedLimitResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult>;
          }
          export module SpeedLimitResult {
            export class PostedAndCurrentSpeed extends com.mapbox.navigation.ui.speedlimit.SpeedLimitResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.PostedAndCurrentSpeed>;
              public getPostedSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public hashCode(): number;
              public constructor(postedSpeed: java.lang.Integer, currentSpeed: number, postedSpeedUnit: com.mapbox.navigation.base.speed.model.SpeedUnit, speedSignConvention: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public component2(): number;
              public getPostedSpeed(): java.lang.Integer;
              public copy(postedSpeed: java.lang.Integer, currentSpeed: number, postedSpeedUnit: com.mapbox.navigation.base.speed.model.SpeedUnit, speedSignConvention: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.PostedAndCurrentSpeed;
              public getCurrentSpeed(): number;
              public toString(): string;
              public component1(): java.lang.Integer;
              public component4(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public equals(other: any): boolean;
              public getSpeedSignConvention(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public component3(): com.mapbox.navigation.base.speed.model.SpeedUnit;
            }
            export class SpeedLimitCalculation extends com.mapbox.navigation.ui.speedlimit.SpeedLimitResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.SpeedLimitCalculation>;
              public copy(speedKPH: number, speedUnit: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, signFormat: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.SpeedLimitCalculation;
              public getSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public component1(): number;
              public getSignFormat(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public hashCode(): number;
              public constructor(speedKPH: number, speedUnit: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, signFormat: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public equals(other: any): boolean;
              public getSpeedKPH(): number;
              public toString(): string;
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
      export module ui {
        export module speedlimit {
          export module api {
            export class MapboxSpeedInfoApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedInfoApi>;
              public constructor();
              public constructor(processor: com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor);
              public updatePostedAndCurrentSpeed(result: com.mapbox.navigation.core.trip.session.LocationMatcherResult, this_: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, locationMatcherResult: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue;
            }
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
        export module speedlimit {
          export module api {
            export class MapboxSpeedLimitApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi>;
              public constructor(formatter: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>);
              public constructor(formatter: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>, processor: com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor);
              public setFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>): void;
              public getFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string>;
              public updateSpeedLimit(action: com.mapbox.navigation.base.speed.model.SpeedLimit): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError, com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>;
            }
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
        export module speedlimit {
          export module databinding {
            export class MapboxSpeedInfoViewBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding>;
              public currentSpeedMutcd: androidx.appcompat.widget.AppCompatTextView;
              public currentSpeedVienna: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedLayoutMutcd: androidx.constraintlayout.widget.ConstraintLayout;
              public postedSpeedLayoutVienna: androidx.constraintlayout.widget.ConstraintLayout;
              public postedSpeedLegend: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedMutcd: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedUnit: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedVienna: androidx.appcompat.widget.AppCompatTextView;
              public speedInfoMutcdLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public speedInfoViennaLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public static bind(currentSpeedMutcd: globalAndroid.view.View): com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding;
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
        export module speedlimit {
          export module internal {
            export class MapboxSpeedInfoComponentContract extends com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.MapboxSpeedInfoComponentContract>;
              public constructor();
              public onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
              public onSpeedInfoClicked(speedInfo: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            }
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
        export module speedlimit {
          export module internal {
            export class SpeedInfoComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponent>;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(speedInfoView: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView, speedInfoOptions: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions, distanceFormatterOptions: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, speedInfoApi: com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedInfoApi, contractProvider: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract>);
            }
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
        export module speedlimit {
          export module internal {
            export class SpeedInfoComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void });
              public constructor();
              public onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            }
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
        export module speedlimit {
          export module internal {
            export class SpeedLimitComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedLimitComponent>;
              public getStyle(): number;
              public constructor(style: number, textAppearance: number, speedLimitView: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView, speedLimitApi: com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi);
              public getTextAppearance(): number;
              public getSpeedLimitView(): com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public getSpeedLimitApi(): com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi;
            }
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
        export module speedlimit {
          export module model {
            export class CurrentSpeedDirection {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection>;
              public static TOP: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static END: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static START: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static BOTTOM: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static values(): androidNative.Array<com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection>;
              public static valueOf(value: string): com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
            }
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
        export module speedlimit {
          export module model {
            export class MapboxSpeedInfoOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions>;
              public getShowSpeedWhenUnavailable(): boolean;
              public hashCode(): number;
              public getShowLegend(): boolean;
              public getRenderWithSpeedSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getCurrentSpeedDirection(): com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public equals(other: any): boolean;
              public getSpeedInfoStyle(): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle;
              public toString(): string;
              public getShowUnit(): boolean;
              public toBuilder(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
            }
            export module MapboxSpeedInfoOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder>;
                public speedInfoStyle($this$speedInfoStyle_u24lambda_u2d2: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public currentSpeedDirection($this$currentSpeedDirection_u24lambda_u2d5: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public showSpeedWhenUnavailable($this$showSpeedWhenUnavailable_u24lambda_u2d3: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public constructor();
                public showLegend($this$showLegend_u24lambda_u2d1: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public showUnit($this$showUnit_u24lambda_u2d0: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public renderWithSpeedSign($this$renderWithSpeedSign_u24lambda_u2d4: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public build(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
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
        export module speedlimit {
          export module model {
            export class PostedAndCurrentSpeedFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter>;
              public constructor();
              public format(update: com.mapbox.navigation.ui.speedlimit.model.SpeedData): java.lang.Integer;
            }
            export module PostedAndCurrentSpeedFormatter {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter.WhenMappings>;
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
        export module speedlimit {
          export module model {
            export class SpeedData {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedData>;
              public getSpeed(): number;
              public getFromUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(speed: number, fromUnit: com.mapbox.navigation.base.speed.model.SpeedUnit, toUnit: com.mapbox.navigation.base.formatter.UnitType);
              public getToUnit(): com.mapbox.navigation.base.formatter.UnitType;
            }
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
        export module speedlimit {
          export module model {
            export class SpeedInfoStyle {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle>;
              public constructor();
              public setViennaLayoutBackground(param0: number): void;
              public setCurrentSpeedViennaTextAppearance(param0: number): void;
              public getCurrentSpeedMutcdTextAppearance(): number;
              public getPostedSpeedViennaLayoutBackground(): number;
              public setPostedSpeedViennaTextAppearance(param0: number): void;
              public getPostedSpeedLegendTextAppearance(): number;
              public getMutcdLayoutBackground(): number;
              public setCurrentSpeedMutcdTextAppearance(param0: number): void;
              public getPostedSpeedMutcdTextAppearance(): number;
              public getPostedSpeedViennaTextAppearance(): number;
              public setMutcdLayoutBackground(param0: number): void;
              public getPostedSpeedMutcdLayoutBackground(): number;
              public setPostedSpeedViennaLayoutBackground(param0: number): void;
              public setPostedSpeedLegendTextAppearance(param0: number): void;
              public getViennaLayoutBackground(): number;
              public getPostedSpeedUnitTextAppearance(): number;
              public setPostedSpeedUnitTextAppearance(param0: number): void;
              public setPostedSpeedMutcdLayoutBackground(param0: number): void;
              public getCurrentSpeedViennaTextAppearance(): number;
              public setPostedSpeedMutcdTextAppearance(param0: number): void;
            }
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
        export module speedlimit {
          export module model {
            export class SpeedInfoValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue>;
              public getPostedSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public constructor(postedSpeed: java.lang.Integer, currentSpeed: number, postedSpeedUnit: com.mapbox.navigation.base.speed.model.SpeedUnit, speedSignConvention: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public getPostedSpeed(): java.lang.Integer;
              public getCurrentSpeed(): number;
              public getSpeedSignConvention(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
            }
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
        export module speedlimit {
          export module model {
            export class SpeedLimitFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedLimitFormatter>;
              public format(update: com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue): string;
              public constructor(context: globalAndroid.content.Context);
            }
            export module SpeedLimitFormatter {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedLimitFormatter.Companion>;
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
        export module speedlimit {
          export module model {
            export class UpdateSpeedLimitError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError>;
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
        export module speedlimit {
          export module model {
            export class UpdateSpeedLimitValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>;
              public getSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public getSpeedLimitFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string>;
              public getSignFormat(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getSpeedKPH(): number;
              public constructor(speedKPH: number, speedUnit: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, signFormat: com.mapbox.navigation.base.speed.model.SpeedLimitSign, speedLimitFormatter: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>);
            }
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
        export module speedlimit {
          export module model {
            export class ViewConstraints {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.ViewConstraints>;
              public constructor();
              public getStartSide(): number;
              public getShouldConnect(): boolean;
              public constructor(startId: number, startSide: number, endId: number, endSide: number, viewId: number, anchor: number, shouldConnect: boolean);
              public hashCode(): number;
              public component2(): number;
              public getStartId(): number;
              public component5(): number;
              public component7(): boolean;
              public toString(): string;
              public copy(startId: number, startSide: number, endId: number, endSide: number, viewId: number, anchor: number, shouldConnect: boolean): com.mapbox.navigation.ui.speedlimit.model.ViewConstraints;
              public getEndId(): number;
              public component1(): number;
              public getViewId(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public component6(): number;
              public component3(): number;
              public getEndSide(): number;
              public getAnchor(): number;
            }
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
        export module speedlimit {
          export module view {
            export class MapboxSpeedInfoView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView>;
              public getSpeedInfoUnitTextMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoPostedSpeedMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoCurrentSpeedMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public applyOptions(speedInfoOptions: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
              public getSpeedInfoViennaLayout(): androidx.constraintlayout.widget.ConstraintLayout;
              public setSpeedInfo$libnavui_speedlimit_release(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
              public setSpeedInfoOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
              public render($this$isVisible$iv: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
              public getSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
              public getSpeedInfoPostedSpeedVienna(): androidx.appcompat.widget.AppCompatTextView;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public getSpeedInfoMutcdLayout(): androidx.constraintlayout.widget.ConstraintLayout;
              public getSpeedInfoLegendTextMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoPostedSpeedLayoutVienna(): androidx.constraintlayout.widget.ConstraintLayout;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public getSpeedInfoPostedSpeedLayoutMutcd(): androidx.constraintlayout.widget.ConstraintLayout;
              public constructor(context: globalAndroid.content.Context);
              public getSpeedInfoCurrentSpeedVienna(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfo$libnavui_speedlimit_release(): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue;
            }
            export module MapboxSpeedInfoView {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView.WhenMappings>;
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
        export module speedlimit {
          export module view {
            export class MapboxSpeedLimitView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public getViewDrawable$libnavui_speedlimit_release(it: com.mapbox.navigation.base.speed.model.SpeedLimitSign): globalAndroid.graphics.drawable.LayerDrawable;
              public updateStyle(this_: number): void;
              public render(expected: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError, com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>): void;
              public getSizeSpanStartIndex$libnavui_speedlimit_release(signFormat: com.mapbox.navigation.base.speed.model.SpeedLimitSign, formattedString: string): number;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public constructor(context: globalAndroid.content.Context);
            }
            export module MapboxSpeedLimitView {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView.WhenMappings>;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
