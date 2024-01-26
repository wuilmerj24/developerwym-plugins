declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export class AutoValueGson_DirectionsAdapterFactory extends com.mapbox.api.directions.v5.DirectionsAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.AutoValueGson_DirectionsAdapterFactory>;
            public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
            public static create(): com.google.gson.TypeAdapterFactory;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export abstract class DirectionsAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsAdapterFactory>;
            public constructor();
            public static create(): com.google.gson.TypeAdapterFactory;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export class DirectionsCriteria {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria>;
            public static PROFILE_DEFAULT_USER: string = 'mapbox';
            public static BASE_API_URL: string = 'https://api.mapbox.com';
            public static PROFILE_DRIVING_TRAFFIC: string = 'driving-traffic';
            public static PROFILE_DRIVING: string = 'driving';
            public static PROFILE_WALKING: string = 'walking';
            public static PROFILE_CYCLING: string = 'cycling';
            public static GEOMETRY_POLYLINE: string = 'polyline';
            public static GEOMETRY_POLYLINE6: string = 'polyline6';
            public static OVERVIEW_SIMPLIFIED: string = 'simplified';
            public static OVERVIEW_FULL: string = 'full';
            public static OVERVIEW_FALSE: string = 'false';
            public static ANNOTATION_DURATION: string = 'duration';
            public static ANNOTATION_DISTANCE: string = 'distance';
            public static ANNOTATION_SPEED: string = 'speed';
            public static ANNOTATION_CONGESTION: string = 'congestion';
            public static ANNOTATION_CONGESTION_NUMERIC: string = 'congestion_numeric';
            public static ANNOTATION_MAXSPEED: string = 'maxspeed';
            public static ANNOTATION_CLOSURE: string = 'closure';
            public static ANNOTATION_TRAFFIC_TENDENCY: string = 'traffic_tendency';
            public static ANNOTATION_FREEFLOW_SPEED: string = 'freeflow_speed';
            public static ANNOTATION_CURRENT_SPEED: string = 'current_speed';
            public static EXCLUDE_TOLL: string = 'toll';
            public static EXCLUDE_MOTORWAY: string = 'motorway';
            public static EXCLUDE_FERRY: string = 'ferry';
            public static EXCLUDE_TUNNEL: string = 'tunnel';
            public static EXCLUDE_RESTRICTED: string = 'restricted';
            public static EXCLUDE_CASH_ONLY_TOLLS: string = 'cash_only_tolls';
            public static EXCLUDE_UNPAVED: string = 'unpaved';
            public static INCLUDE_HOV2: string = 'hov2';
            public static INCLUDE_HOV3: string = 'hov3';
            public static INCLUDE_HOT: string = 'hot';
            public static IMPERIAL: string = 'imperial';
            public static METRIC: string = 'metric';
            public static SOURCE_FIRST: string = 'first';
            public static SOURCE_ANY: string = 'any';
            public static DESTINATION_ANY: string = 'any';
            public static DESTINATION_LAST: string = 'last';
            public static APPROACH_UNRESTRICTED: string = 'unrestricted';
            public static APPROACH_CURB: string = 'curb';
            public static TRAFFIC_TENDENCY_UNKNOWN: number = 0;
            public static TRAFFIC_TENDENCY_CONSTANT_CONGESTION: number = 1;
            public static TRAFFIC_TENDENCY_INCREASING_CONGESTION: number = 2;
            public static TRAFFIC_TENDENCY_DECREASING_CONGESTION: number = 3;
            public static TRAFFIC_TENDENCY_RAPIDLY_INCREASING_CONGESTION: number = 4;
            public static TRAFFIC_TENDENCY_RAPIDLY_DECREASING_CONGESTION: number = 5;
            public static PAYMENT_METHOD_GENERAL: string = 'general';
            public static PAYMENT_METHOD_ETC: string = 'etc';
            public static PAYMENT_METHOD_ETC2: string = 'etc2';
            public static PAYMENT_METHOD_ETCX: string = 'etcx';
            public static PAYMENT_METHOD_CASH: string = 'cash';
            public static PAYMENT_METHOD_EXACT_CASH: string = 'exact_cash';
            public static PAYMENT_METHOD_COINS: string = 'coins';
            public static PAYMENT_METHOD_NOTES: string = 'notes';
            public static PAYMENT_METHOD_DEBIT_CARDS: string = 'debit_cards';
            public static PAYMENT_METHOD_PASS_CARD: string = 'pass_card';
            public static PAYMENT_METHOD_CREDIT_CARDS: string = 'credit_cards';
            public static PAYMENT_METHOD_VIDEO: string = 'video';
            public static PAYMENT_METHOD_CRYPTOCURRENCIES: string = 'cryptocurrencies';
            public static PAYMENT_METHOD_APP: string = 'app';
            public static AMENITY_TYPE_GAS_STATION: string = 'gas_station';
            public static AMENITY_TYPE_ELECTRIC_CHARGING_STATION: string = 'electric_charging_station';
            public static AMENITY_TYPE_TOILET: string = 'toilet';
            public static AMENITY_TYPE_COFFEE: string = 'coffee';
            public static AMENITY_TYPE_RESTAURANT: string = 'restaurant';
            public static AMENITY_TYPE_SNACK: string = 'snack';
            public static AMENITY_TYPE_ATM: string = 'ATM';
            public static AMENITY_TYPE_INFO: string = 'info';
            public static AMENITY_TYPE_BABY_CARE: string = 'baby_care';
            public static AMENITY_TYPE_FACILITIES_FOR_DISABLED: string = 'facilities_for_disabled';
            public static AMENITY_TYPE_SHOP: string = 'shop';
            public static AMENITY_TYPE_TELEPHONE: string = 'telephone';
            public static AMENITY_TYPE_HOTEL: string = 'hotel';
            public static AMENITY_TYPE_HOTSPRING: string = 'hotspring';
            public static AMENITY_TYPE_SHOWER: string = 'shower';
            public static AMENITY_TYPE_PICNIC_SHELTER: string = 'picnic_shelter';
            public static AMENITY_TYPE_POST: string = 'post';
            public static AMENITY_TYPE_FAX: string = 'FAX';
          }
          export module DirectionsCriteria {
            export class AmenityTypeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.AmenityTypeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$AmenityTypeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class AnnotationCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.AnnotationCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$AnnotationCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ApproachesCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ApproachesCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ApproachesCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class DestinationCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.DestinationCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$DestinationCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ExcludeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ExcludeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ExcludeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class GeometriesCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.GeometriesCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$GeometriesCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class IncludeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.IncludeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$IncludeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class OverviewCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.OverviewCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$OverviewCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class PaymentMethodsCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.PaymentMethodsCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$PaymentMethodsCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ProfileCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ProfileCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ProfileCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class SourceCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.SourceCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$SourceCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class TrafficTendencyCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.TrafficTendencyCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$TrafficTendencyCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class VoiceUnitCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.VoiceUnitCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$VoiceUnitCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export module models {
              export module models {
                export module VoiceUnitCriteria {
                  export abstract class AutoValue_Admin extends com.mapbox.api.directions.v5.models.Admin {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin>;
                    public countryCode(): string;
                    public toString(): string;
                    public countryCodeAlpha3(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Admin.Builder;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Admin {
                    export class Builder extends com.mapbox.api.directions.v5.models.Admin.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin.Builder>;
                      public countryCode(countryCode: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Admin;
                      public countryCodeAlpha3(countryCodeAlpha3: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                    }
                  }
                  export abstract class AutoValue_Amenity extends com.mapbox.api.directions.v5.models.Amenity {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity>;
                    public toString(): string;
                    public name(): string;
                    public brand(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
                    public type(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Amenity {
                    export class Builder extends com.mapbox.api.directions.v5.models.Amenity.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity.Builder>;
                      public name(name: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                      public brand(brand: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                      public type(type: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Amenity;
                    }
                  }
                  export abstract class AutoValue_BannerComponents extends com.mapbox.api.directions.v5.models.BannerComponents {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents>;
                    public imageUrl(): string;
                    public toString(): string;
                    public subType(): string;
                    public directions(): java.util.List<string>;
                    public type(): string;
                    public abbreviationPriority(): java.lang.Integer;
                    public mapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                    public equals(this_: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public active(): java.lang.Boolean;
                    public abbreviation(): string;
                    public text(): string;
                    public activeDirection(): string;
                    public imageBaseUrl(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_BannerComponents {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerComponents.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents.Builder>;
                      public abbreviationPriority(abbreviationPriority: java.lang.Integer): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public type(type: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public imageUrl(imageUrl: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerComponents;
                      public mapboxShield(mapboxShield: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public active(active: java.lang.Boolean): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public activeDirection(activeDirection: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public subType(subType: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public imageBaseUrl(imageBaseUrl: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public abbreviation(abbreviation: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public text(text: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public directions(directions: java.util.List<string>): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerInstructions extends com.mapbox.api.directions.v5.models.BannerInstructions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions>;
                    public distanceAlongGeometry(): number;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public primary(): com.mapbox.api.directions.v5.models.BannerText;
                    public secondary(): com.mapbox.api.directions.v5.models.BannerText;
                    public sub(): com.mapbox.api.directions.v5.models.BannerText;
                    public view(): com.mapbox.api.directions.v5.models.BannerView;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_BannerInstructions {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerInstructions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions.Builder>;
                      public distanceAlongGeometry(distanceAlongGeometry: number): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerInstructions;
                      public sub(sub: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public view(view: com.mapbox.api.directions.v5.models.BannerView): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public secondary(secondary: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public primary(primary: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerText extends com.mapbox.api.directions.v5.models.BannerText {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText>;
                    public toString(): string;
                    public text(): string;
                    public drivingSide(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public degrees(): java.lang.Double;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_BannerText {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerText.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText.Builder>;
                      public text(text: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public type(type: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public drivingSide(drivingSide: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public components(components: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public modifier(modifier: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public degrees(degrees: java.lang.Double): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerText;
                    }
                  }
                  export abstract class AutoValue_BannerView extends com.mapbox.api.directions.v5.models.BannerView {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView>;
                    public toString(): string;
                    public text(): string;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_BannerView {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerView.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView.Builder>;
                      public modifier(modifier: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public text(text: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerView;
                      public type(type: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public components(components: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    }
                  }
                  export abstract class AutoValue_Closure extends com.mapbox.api.directions.v5.models.Closure {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure>;
                    public geometryIndexEnd(): java.lang.Integer;
                    public toString(): string;
                    public geometryIndexStart(): java.lang.Integer;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Closure.Builder;
                  }
                  export module AutoValue_Closure {
                    export class Builder extends com.mapbox.api.directions.v5.models.Closure.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure.Builder>;
                      public geometryIndexEnd(geometryIndexEnd: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Closure;
                      public geometryIndexStart(geometryIndexStart: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                    }
                  }
                  export abstract class AutoValue_Congestion extends com.mapbox.api.directions.v5.models.Congestion {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion>;
                    public toString(): string;
                    public value(): number;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Congestion {
                    export class Builder extends com.mapbox.api.directions.v5.models.Congestion.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion.Builder>;
                      public value(value: number): com.mapbox.api.directions.v5.models.Congestion.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Congestion;
                    }
                  }
                  export abstract class AutoValue_CostPerVehicleSize extends com.mapbox.api.directions.v5.models.CostPerVehicleSize {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize>;
                    public small(): java.lang.Double;
                    public middle(): java.lang.Double;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public standard(): java.lang.Double;
                    public jumbo(): java.lang.Double;
                    public large(): java.lang.Double;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_CostPerVehicleSize {
                    export class Builder extends com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize.Builder>;
                      public middle(middle: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public small(small: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public large(large: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public jumbo(jumbo: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public build(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                      public standard(standard: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsError extends com.mapbox.api.directions.v5.models.DirectionsError {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError>;
                    public code(): string;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                    public message(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_DirectionsError {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsError.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError.Builder>;
                      public code(code: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                      public message(message: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsError;
                    }
                  }
                  export abstract class AutoValue_DirectionsResponse extends com.mapbox.api.directions.v5.models.DirectionsResponse {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse>;
                    public code(): string;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public metadata(): com.mapbox.api.directions.v5.models.Metadata;
                    public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public routes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                    public message(): string;
                    public uuid(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_DirectionsResponse {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsResponse.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse.Builder>;
                      public code(code: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public waypoints(waypoints: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public routes(routes: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public metadata(metadata: com.mapbox.api.directions.v5.models.Metadata): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public uuid(uuid: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public message(message: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsRoute extends com.mapbox.api.directions.v5.models.DirectionsRoute {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute>;
                    public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                    public toString(): string;
                    public weightName(): string;
                    public durationTypical(): java.lang.Double;
                    public routeIndex(): string;
                    public requestUuid(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public distance(): java.lang.Double;
                    public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public equals(this_: any): boolean;
                    public geometry(): string;
                    public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
                    public voiceLanguage(): string;
                    public tollCosts(): java.util.List<com.mapbox.api.directions.v5.models.TollCost>;
                    public hashCode(): number;
                    public duration(): java.lang.Double;
                    public weight(): java.lang.Double;
                  }
                  export module AutoValue_DirectionsRoute {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsRoute.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute.Builder>;
                      public distance(distance: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public geometry(geometry: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public legs(legs: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public weightName(weightName: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public voiceLanguage(voiceLanguage: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public durationTypical(durationTypical: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public duration(duration: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public weight(weight: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                      public tollCosts(tollCosts: java.util.List<com.mapbox.api.directions.v5.models.TollCost>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public waypoints(waypoints: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public routeIndex(routeIndex: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public requestUuid(requestUuid: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public routeOptions(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsWaypoint extends com.mapbox.api.directions.v5.models.DirectionsWaypoint {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint>;
                    public toString(): string;
                    public name(): string;
                    public distance(): java.lang.Double;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                  }
                  export module AutoValue_DirectionsWaypoint {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                      public rawLocation(rawLocation: androidNative.Array<number>): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                      public distance(distance: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                      public name(name: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                    }
                  }
                  export abstract class AutoValue_Incident extends com.mapbox.api.directions.v5.models.Incident {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident>;
                    public toString(): string;
                    public description(): string;
                    public subType(): string;
                    public countryCodeAlpha3(): string;
                    public subTypeDescription(): string;
                    public geometryIndexStart(): java.lang.Integer;
                    public type(): string;
                    public lanesBlocked(): java.util.List<string>;
                    public id(): string;
                    public alertcCodes(): java.util.List<java.lang.Integer>;
                    public equals(this_: any): boolean;
                    public trafficCodes(): com.mapbox.api.directions.v5.models.TrafficCodes;
                    public impact(): string;
                    public affectedRoadNames(): java.util.List<string>;
                    public numLanesBlocked(): java.lang.Integer;
                    public congestion(): com.mapbox.api.directions.v5.models.Congestion;
                    public creationTime(): string;
                    public closed(): java.lang.Boolean;
                    public startTime(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public longDescription(): string;
                    public geometryIndexEnd(): java.lang.Integer;
                    public endTime(): string;
                    public countryCodeAlpha2(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_Incident {
                    export class Builder extends com.mapbox.api.directions.v5.models.Incident.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident.Builder>;
                      public subTypeDescription(subTypeDescription: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public congestion(congestion: com.mapbox.api.directions.v5.models.Congestion): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Incident;
                      public geometryIndexEnd(geometryIndexEnd: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public lanesBlocked(lanesBlocked: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public countryCodeAlpha3(countryCodeAlpha3: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public affectedRoadNames(affectedRoadNames: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public countryCodeAlpha2(countryCodeAlpha2: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public id(id: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public creationTime(creationTime: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public alertcCodes(alertcCodes: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public impact(impact: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public endTime(endTime: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public longDescription(longDescription: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public geometryIndexStart(geometryIndexStart: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public subType(subType: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public description(description: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public closed(closed: java.lang.Boolean): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public trafficCodes(trafficCodes: com.mapbox.api.directions.v5.models.TrafficCodes): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public numLanesBlocked(numLanesBlocked: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public type(type: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public startTime(startTime: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    }
                  }
                  export abstract class AutoValue_Interchange extends com.mapbox.api.directions.v5.models.Interchange {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange>;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Interchange {
                    export class Builder extends com.mapbox.api.directions.v5.models.Interchange.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.Interchange;
                      public name(name: string): com.mapbox.api.directions.v5.models.Interchange.Builder;
                    }
                  }
                  export abstract class AutoValue_IntersectionLanes extends com.mapbox.api.directions.v5.models.IntersectionLanes {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes>;
                    public indications(): java.util.List<string>;
                    public active(): java.lang.Boolean;
                    public toString(): string;
                    public valid(): java.lang.Boolean;
                    public validIndication(): string;
                    public paymentMethods(): java.util.List<string>;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_IntersectionLanes {
                    export class Builder extends com.mapbox.api.directions.v5.models.IntersectionLanes.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes.Builder>;
                      public active(active: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public build(): com.mapbox.api.directions.v5.models.IntersectionLanes;
                      public valid(valid: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public indications(indications: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public paymentMethods(paymentMethods: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public validIndication(validIndication: string): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    }
                  }
                  export abstract class AutoValue_Junction extends com.mapbox.api.directions.v5.models.Junction {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction>;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Junction.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Junction {
                    export class Builder extends com.mapbox.api.directions.v5.models.Junction.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.Junction;
                      public name(name: string): com.mapbox.api.directions.v5.models.Junction.Builder;
                    }
                  }
                  export abstract class AutoValue_LegAnnotation extends com.mapbox.api.directions.v5.models.LegAnnotation {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation>;
                    public toString(): string;
                    public speed(): java.util.List<java.lang.Double>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public duration(): java.util.List<java.lang.Double>;
                    public currentSpeed(): java.util.List<java.lang.Integer>;
                    public equals(this_: any): boolean;
                    public freeflowSpeed(): java.util.List<java.lang.Integer>;
                    public maxspeed(): java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>;
                    public congestionNumeric(): java.util.List<java.lang.Integer>;
                    public congestion(): java.util.List<string>;
                    public trafficTendency(): java.util.List<java.lang.Integer>;
                    public distance(): java.util.List<java.lang.Double>;
                    public hashCode(): number;
                  }
                  export module AutoValue_LegAnnotation {
                    export class Builder extends com.mapbox.api.directions.v5.models.LegAnnotation.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.LegAnnotation;
                      public duration(duration: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public maxspeed(maxspeed: java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public freeflowSpeed(freeflowSpeed: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public congestion(congestion: java.util.List<string>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public trafficTendency(trafficTendency: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public speed(speed: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public currentSpeed(currentSpeed: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public congestionNumeric(congestionNumeric: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public distance(distance: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    }
                  }
                  export abstract class AutoValue_LegStep extends com.mapbox.api.directions.v5.models.LegStep {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep>;
                    public intersections(): java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>;
                    public toString(): string;
                    public weight(): number;
                    public durationTypical(): java.lang.Double;
                    public toBuilder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public name(): string;
                    public drivingSide(): string;
                    public duration(): number;
                    public maneuver(): com.mapbox.api.directions.v5.models.StepManeuver;
                    public bannerInstructions(): java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>;
                    public distance(): number;
                    public equals(this_: any): boolean;
                    public destinations(): string;
                    public geometry(): string;
                    public pronunciation(): string;
                    public rotaryName(): string;
                    public speedLimitUnit(): string;
                    public voiceInstructions(): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
                    public mode(): string;
                    public exits(): string;
                    public ref(): string;
                    public hashCode(): number;
                    public speedLimitSign(): string;
                    public rotaryPronunciation(): string;
                  }
                  export module AutoValue_LegStep {
                    export class Builder extends com.mapbox.api.directions.v5.models.LegStep.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep.Builder>;
                      public drivingSide(drivingSide: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public name(name: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public weight(weight: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public durationTypical(durationTypical: java.lang.Double): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public rotaryName(rotaryName: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public bannerInstructions(bannerInstructions: java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public voiceInstructions(voiceInstructions: java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public pronunciation(pronunciation: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public speedLimitSign(speedLimitSign: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public geometry(geometry: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public duration(duration: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public mode(mode: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public distance(distance: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public ref(ref: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public rotaryPronunciation(rotaryPronunciation: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public intersections(intersections: java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public build(): com.mapbox.api.directions.v5.models.LegStep;
                      public exits(exits: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public maneuver(maneuver: com.mapbox.api.directions.v5.models.StepManeuver): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public speedLimitUnit(speedLimitUnit: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public destinations(destinations: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    }
                  }
                  export abstract class AutoValue_MapboxShield extends com.mapbox.api.directions.v5.models.MapboxShield {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield>;
                    public displayRef(): string;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    public baseUrl(): string;
                    public textColor(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MapboxShield {
                    export class Builder extends com.mapbox.api.directions.v5.models.MapboxShield.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield.Builder>;
                      public baseUrl(baseUrl: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public textColor(textColor: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public displayRef(displayRef: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MapboxShield;
                      public name(name: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    }
                  }
                  export abstract class AutoValue_MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.MapboxStreetsV8 {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8>;
                    public toString(): string;
                    public roadClass(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MapboxStreetsV8 {
                    export class Builder extends com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8.Builder>;
                      public roadClass(roadClass: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    }
                  }
                  export abstract class AutoValue_MaxSpeed extends com.mapbox.api.directions.v5.models.MaxSpeed {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    public toString(): string;
                    public speed(): java.lang.Integer;
                    public unknown(): java.lang.Boolean;
                    public none(): java.lang.Boolean;
                    public unit(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MaxSpeed {
                    export class Builder extends com.mapbox.api.directions.v5.models.MaxSpeed.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed.Builder>;
                      public none(none: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public speed(speed: java.lang.Integer): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MaxSpeed;
                      public unknown(unknown: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public unit(unit: string): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    }
                  }
                  export abstract class AutoValue_MergingArea extends com.mapbox.api.directions.v5.models.MergingArea {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MergingArea>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MergingArea.Builder;
                    public type(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MergingArea {
                    export class Builder extends com.mapbox.api.directions.v5.models.MergingArea.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MergingArea.Builder>;
                      public type(type: string): com.mapbox.api.directions.v5.models.MergingArea.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MergingArea;
                    }
                  }
                  export abstract class AutoValue_Metadata extends com.mapbox.api.directions.v5.models.Metadata {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
                    public infoMap(): java.util.Map<string, string>;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_Metadata {
                    export class Builder extends com.mapbox.api.directions.v5.models.Metadata.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata.Builder>;
                      public infoMap(infoMap: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.Metadata.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Metadata;
                    }
                  }
                  export abstract class AutoValue_PaymentMethods extends com.mapbox.api.directions.v5.models.PaymentMethods {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods>;
                    public toString(): string;
                    public etc(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                    public toBuilder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                    public hashCode(): number;
                    public cash(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_PaymentMethods {
                    export class Builder extends com.mapbox.api.directions.v5.models.PaymentMethods.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods.Builder>;
                      public cash(cash: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                      public build(): com.mapbox.api.directions.v5.models.PaymentMethods;
                      public etc(etc: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                    }
                  }
                  export abstract class AutoValue_RestStop extends com.mapbox.api.directions.v5.models.RestStop {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop>;
                    public amenities(): java.util.List<com.mapbox.api.directions.v5.models.Amenity>;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    public type(): string;
                    public hashCode(): number;
                    public guideMap(): string;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_RestStop {
                    export class Builder extends com.mapbox.api.directions.v5.models.RestStop.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop.Builder>;
                      public name(name: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public amenities(amenities: java.util.List<com.mapbox.api.directions.v5.models.Amenity>): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RestStop;
                      public type(type: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public guideMap(guideMap: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    }
                  }
                  export abstract class AutoValue_RouteLeg extends com.mapbox.api.directions.v5.models.RouteLeg {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg>;
                    public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
                    public summary(): string;
                    public toString(): string;
                    public durationTypical(): java.lang.Double;
                    public viaWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>;
                    public distance(): java.lang.Double;
                    public equals(this_: any): boolean;
                    public admins(): java.util.List<com.mapbox.api.directions.v5.models.Admin>;
                    public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
                    public hashCode(): number;
                    public duration(): java.lang.Double;
                    public steps(): java.util.List<com.mapbox.api.directions.v5.models.LegStep>;
                  }
                  export module AutoValue_RouteLeg {
                    export class Builder extends com.mapbox.api.directions.v5.models.RouteLeg.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg.Builder>;
                      public distance(distance: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public steps(steps: java.util.List<com.mapbox.api.directions.v5.models.LegStep>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public viaWaypoints(viaWaypoints: java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public annotation(annotation: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public durationTypical(durationTypical: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public incidents(incidents: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public duration(duration: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public admins(admins: java.util.List<com.mapbox.api.directions.v5.models.Admin>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public summary(summary: string): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public closures(closures: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RouteLeg;
                    }
                  }
                  export abstract class AutoValue_RouteOptions extends com.mapbox.api.directions.v5.models.RouteOptions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions>;
                    public coordinates(): string;
                    public toString(): string;
                    public bannerInstructions(): java.lang.Boolean;
                    public radiuses(): string;
                    public voiceInstructions(): java.lang.Boolean;
                    public walkwayBias(): java.lang.Double;
                    public snappingIncludeStaticClosures(): string;
                    public maxHeight(): java.lang.Double;
                    public user(): string;
                    public include(): string;
                    public waypointTargets(): string;
                    public equals(this_: any): boolean;
                    public profile(): string;
                    public bearings(): string;
                    public arriveBy(): string;
                    public metadata(): java.lang.Boolean;
                    public waypointIndices(): string;
                    public exclude(): string;
                    public walkingSpeed(): java.lang.Double;
                    public alternatives(): java.lang.Boolean;
                    public departAt(): string;
                    public enableRefresh(): java.lang.Boolean;
                    public snappingIncludeClosures(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public annotations(): string;
                    public layers(): string;
                    public geometries(): string;
                    public steps(): java.lang.Boolean;
                    public maxWidth(): java.lang.Double;
                    public voiceUnits(): string;
                    public paymentMethods(): string;
                    public suppressVoiceInstructionLocalNames(): java.lang.Boolean;
                    public alleyBias(): java.lang.Double;
                    public language(): string;
                    public overview(): string;
                    public maxWeight(): java.lang.Double;
                    public baseUrl(): string;
                    public continueStraight(): java.lang.Boolean;
                    public waypointNames(): string;
                    public hashCode(): number;
                    public roundaboutExits(): java.lang.Boolean;
                    public approaches(): string;
                    public avoidManeuverRadius(): java.lang.Double;
                    public waypointsPerRoute(): java.lang.Boolean;
                    public computeTollCost(): java.lang.Boolean;
                  }
                  export module AutoValue_RouteOptions {
                    export class Builder extends com.mapbox.api.directions.v5.models.RouteOptions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions.Builder>;
                      public computeTollCost(computeTollCost: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public geometries(geometries: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public coordinates(coordinates: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointTargets(waypointTargets: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public departAt(departAt: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public voiceUnits(voiceUnits: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public paymentMethods(paymentMethods: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public continueStraight(continueStraight: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointNames(waypointNames: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public voiceInstructions(voiceInstructions: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public bannerInstructions(bannerInstructions: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public roundaboutExits(roundaboutExits: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public user(user: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public profile(profile: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public exclude(exclude: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public metadata(metadata: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxHeight(maxHeight: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxWidth(maxWidth: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public baseUrl(baseUrl: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxWeight(maxWeight: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RouteOptions;
                      public avoidManeuverRadius(avoidManeuverRadius: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public language(language: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public steps(steps: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public suppressVoiceInstructionLocalNames(suppressVoiceInstructionLocalNames: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointIndices(waypointIndices: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public walkingSpeed(walkingSpeed: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public include(include: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public alleyBias(alleyBias: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public approaches(approaches: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public enableRefresh(enableRefresh: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public snappingIncludeClosures(snappingIncludeClosures: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public arriveBy(arriveBy: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointsPerRoute(waypointsPerRoute: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public walkwayBias(walkwayBias: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public overview(overview: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public radiuses(radiuses: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public layers(layers: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public alternatives(alternatives: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public bearings(bearings: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public annotations(annotations: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public snappingIncludeStaticClosures(snappingIncludeStaticClosures: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSprite extends com.mapbox.api.directions.v5.models.ShieldSprite {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                    public spriteName(): string;
                    public hashCode(): number;
                    public spriteAttributes(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_ShieldSprite {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSprite.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite.Builder>;
                      public spriteAttributes(spriteAttributes: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                      public spriteName(spriteName: string): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSprite;
                    }
                  }
                  export abstract class AutoValue_ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.ShieldSpriteAttribute {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute>;
                    public height(): java.lang.Integer;
                    public pixelRatio(): java.lang.Integer;
                    public visible(): java.lang.Boolean;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public width(): java.lang.Integer;
                    public placeholder(): java.util.List<java.lang.Double>;
                    public x(): java.lang.Integer;
                    public y(): java.lang.Integer;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_ShieldSpriteAttribute {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute.Builder>;
                      public y(y: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public visible(visible: java.lang.Boolean): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                      public width(width: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public pixelRatio(pixelRatio: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public x(x: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public placeholder(placeholder: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public height(height: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSprites extends com.mapbox.api.directions.v5.models.ShieldSprites {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                    public sprites(): java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_ShieldSprites {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSprites.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSprites;
                      public sprites(sprites: java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSvg extends com.mapbox.api.directions.v5.models.ShieldSvg {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                    public svg(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_ShieldSvg {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSvg.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg.Builder>;
                      public svg(svg: string): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSvg;
                    }
                  }
                  export abstract class AutoValue_SilentWaypoint extends com.mapbox.api.directions.v5.models.SilentWaypoint {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint>;
                    public toString(): string;
                    public distanceFromStart(): number;
                    public geometryIndex(): number;
                    public waypointIndex(): number;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_SilentWaypoint {
                    export class Builder extends com.mapbox.api.directions.v5.models.SilentWaypoint.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint.Builder>;
                      public distanceFromStart(distanceFromStart: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public geometryIndex(geometryIndex: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public waypointIndex(waypointIndex: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public build(): com.mapbox.api.directions.v5.models.SilentWaypoint;
                    }
                  }
                  export abstract class AutoValue_StepIntersection extends com.mapbox.api.directions.v5.models.StepIntersection {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection>;
                    public junction(): com.mapbox.api.directions.v5.models.Junction;
                    public entry(): java.util.List<java.lang.Boolean>;
                    public toString(): string;
                    public lanes(): java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>;
                    public rawLocation(): androidNative.Array<number>;
                    public out(): java.lang.Integer;
                    public equals(this_: any): boolean;
                    public railwayCrossing(): java.lang.Boolean;
                    public mergingArea(): com.mapbox.api.directions.v5.models.MergingArea;
                    public interchange(): com.mapbox.api.directions.v5.models.Interchange;
                    public yieldSign(): java.lang.Boolean;
                    public geometryIndex(): java.lang.Integer;
                    public restStop(): com.mapbox.api.directions.v5.models.RestStop;
                    public toBuilder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public trafficSignal(): java.lang.Boolean;
                    public tollCollection(): com.mapbox.api.directions.v5.models.TollCollection;
                    public isUrban(): java.lang.Boolean;
                    public stopSign(): java.lang.Boolean;
                    public classes(): java.util.List<string>;
                    public in(): java.lang.Integer;
                    public mapboxStreetsV8(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    public bearings(): java.util.List<java.lang.Integer>;
                    public tunnelName(): string;
                    public adminIndex(): java.lang.Integer;
                    public hashCode(): number;
                  }
                  export module AutoValue_StepIntersection {
                    export class Builder extends com.mapbox.api.directions.v5.models.StepIntersection.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection.Builder>;
                      public junction(junction: com.mapbox.api.directions.v5.models.Junction): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public rawLocation(rawLocation: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public bearings(bearings: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public tunnelName(tunnelName: string): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public stopSign(stopSign: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public build(): com.mapbox.api.directions.v5.models.StepIntersection;
                      public out(out: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public interchange(interchange: com.mapbox.api.directions.v5.models.Interchange): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public restStop(restStop: com.mapbox.api.directions.v5.models.RestStop): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public geometryIndex(geometryIndex: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public mergingArea(mergingArea: com.mapbox.api.directions.v5.models.MergingArea): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public mapboxStreetsV8(mapboxStreetsV8: com.mapbox.api.directions.v5.models.MapboxStreetsV8): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public adminIndex(adminIndex: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public yieldSign(yieldSign: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public isUrban(isUrban: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public tollCollection(tollCollection: com.mapbox.api.directions.v5.models.TollCollection): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public entry(entry: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public lanes(lanes: java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public classes(classes: java.util.List<string>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public trafficSignal(trafficSignal: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public in(in_: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public railwayCrossing(railwayCrossing: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    }
                  }
                  export abstract class AutoValue_StepManeuver extends com.mapbox.api.directions.v5.models.StepManeuver {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver>;
                    public exit(): java.lang.Integer;
                    public toString(): string;
                    public bearingAfter(): java.lang.Double;
                    public instruction(): string;
                    public bearingBefore(): java.lang.Double;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public rawLocation(): androidNative.Array<number>;
                    public equals(this_: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                  }
                  export module AutoValue_StepManeuver {
                    export class Builder extends com.mapbox.api.directions.v5.models.StepManeuver.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver.Builder>;
                      public instruction(instruction: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public bearingAfter(bearingAfter: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public rawLocation(rawLocation: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public build(): com.mapbox.api.directions.v5.models.StepManeuver;
                      public bearingBefore(bearingBefore: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public modifier(modifier: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public exit(exit: java.lang.Integer): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public type(type: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    }
                  }
                  export abstract class AutoValue_TollCollection extends com.mapbox.api.directions.v5.models.TollCollection {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection>;
                    public toString(): string;
                    public name(): string;
                    public type(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_TollCollection {
                    export class Builder extends com.mapbox.api.directions.v5.models.TollCollection.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.TollCollection;
                      public type(type: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                      public name(name: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    }
                  }
                  export abstract class AutoValue_TollCost extends com.mapbox.api.directions.v5.models.TollCost {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost>;
                    public toString(): string;
                    public paymentMethods(): com.mapbox.api.directions.v5.models.PaymentMethods;
                    public currency(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_TollCost {
                    export class Builder extends com.mapbox.api.directions.v5.models.TollCost.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost.Builder>;
                      public currency(currency: string): com.mapbox.api.directions.v5.models.TollCost.Builder;
                      public paymentMethods(paymentMethods: com.mapbox.api.directions.v5.models.PaymentMethods): com.mapbox.api.directions.v5.models.TollCost.Builder;
                      public build(): com.mapbox.api.directions.v5.models.TollCost;
                    }
                  }
                  export abstract class AutoValue_TrafficCodes extends com.mapbox.api.directions.v5.models.TrafficCodes {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TrafficCodes>;
                    public toString(): string;
                    public jarticCauseCode(): java.lang.Integer;
                    public toBuilder(): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                    public hashCode(): number;
                    public jarticRegulationCode(): java.lang.Integer;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_TrafficCodes {
                    export class Builder extends com.mapbox.api.directions.v5.models.TrafficCodes.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TrafficCodes.Builder>;
                      public jarticRegulationCode(jarticRegulationCode: java.lang.Integer): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                      public jarticCauseCode(jarticCauseCode: java.lang.Integer): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                      public build(): com.mapbox.api.directions.v5.models.TrafficCodes;
                    }
                  }
                  export abstract class AutoValue_VoiceInstructions extends com.mapbox.api.directions.v5.models.VoiceInstructions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions>;
                    public distanceAlongGeometry(): java.lang.Double;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                    public hashCode(): number;
                    public ssmlAnnouncement(): string;
                    public announcement(): string;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_VoiceInstructions {
                    export class Builder extends com.mapbox.api.directions.v5.models.VoiceInstructions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions.Builder>;
                      public distanceAlongGeometry(distanceAlongGeometry: java.lang.Double): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public announcement(announcement: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public ssmlAnnouncement(ssmlAnnouncement: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.VoiceInstructions;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Admin extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Admin>;
                  public constructor();
                  public countryCode(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Admin>;
                  public countryCodeAlpha3(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Admin.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Admin;
                  public static builder(): com.mapbox.api.directions.v5.models.Admin.Builder;
                }
                export module Admin {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Admin.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Admin.Builder>;
                    public countryCode(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Admin;
                    public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Amenity extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Amenity>;
                  public constructor();
                  public brand(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
                  public static builder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Amenity;
                  public type(): string;
                  public name(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Amenity>;
                }
                export module Amenity {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Amenity.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Amenity.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.Amenity;
                    public brand(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                    public type(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                    public constructor();
                    public name(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Admin extends com.mapbox.api.directions.v5.models.AutoValue_Admin {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin>;
                }
                export module AutoValue_Admin {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Admin> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Admin;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Admin): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Amenity extends com.mapbox.api.directions.v5.models.AutoValue_Amenity {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity>;
                }
                export module AutoValue_Amenity {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Amenity> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Amenity;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Amenity): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_BannerComponents extends com.mapbox.api.directions.v5.models.AutoValue_BannerComponents {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents>;
                }
                export module AutoValue_BannerComponents {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerComponents> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents.GsonTypeAdapter>;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.BannerComponents): void;
                    public toString(): string;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerComponents;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_BannerInstructions extends com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions>;
                }
                export module AutoValue_BannerInstructions {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerInstructions> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.BannerInstructions): void;
                    public read(bannerText_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerInstructions;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_BannerText extends com.mapbox.api.directions.v5.models.AutoValue_BannerText {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText>;
                }
                export module AutoValue_BannerText {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerText> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.BannerText): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerText;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_BannerView extends com.mapbox.api.directions.v5.models.AutoValue_BannerView {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView>;
                }
                export module AutoValue_BannerView {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerView> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView.GsonTypeAdapter>;
                    public toString(): string;
                    public read(list__bannerComponents_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerView;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.BannerView): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Bearing extends com.mapbox.api.directions.v5.models.Bearing {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Bearing>;
                  public angle(): number;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                  public degrees(): number;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
                  public toString(): string;
                }
                export module AutoValue_Bearing {
                  export class Builder extends com.mapbox.api.directions.v5.models.Bearing.Builder {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Bearing.Builder>;
                    public degrees(degrees: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
                    public angle(angle: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Bearing;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Closure extends com.mapbox.api.directions.v5.models.AutoValue_Closure {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure>;
                }
                export module AutoValue_Closure {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Closure> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure.GsonTypeAdapter>;
                    public toString(): string;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Closure;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Closure): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Congestion extends com.mapbox.api.directions.v5.models.AutoValue_Congestion {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion>;
                }
                export module AutoValue_Congestion {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Congestion> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion.GsonTypeAdapter>;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Congestion;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Congestion): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_CostPerVehicleSize extends com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize>;
                }
                export module AutoValue_CostPerVehicleSize {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.CostPerVehicleSize> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.CostPerVehicleSize): void;
                    public read(double__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_DirectionsError extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsError {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError>;
                }
                export module AutoValue_DirectionsError {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsError> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError.GsonTypeAdapter>;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsError;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.DirectionsError): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_DirectionsResponse extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse>;
                }
                export module AutoValue_DirectionsResponse {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsResponse> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.DirectionsResponse): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsResponse;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_DirectionsRoute extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute>;
                }
                export module AutoValue_DirectionsRoute {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsRoute> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsRoute;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_DirectionsWaypoint extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint>;
                }
                export module AutoValue_DirectionsWaypoint {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsWaypoint> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.DirectionsWaypoint): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Exclude extends com.mapbox.api.directions.v5.models.Exclude {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Exclude>;
                  public criteria(): java.util.List<string>;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                  public points(): java.util.List<com.mapbox.geojson.Point>;
                  public toString(): string;
                }
                export module AutoValue_Exclude {
                  export class Builder extends com.mapbox.api.directions.v5.models.Exclude.Builder {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Exclude.Builder>;
                    public criteria(criteria: java.util.List<string>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                    public points(points: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Exclude;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Incident extends com.mapbox.api.directions.v5.models.AutoValue_Incident {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident>;
                }
                export module AutoValue_Incident {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Incident> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Incident): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Incident;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Interchange extends com.mapbox.api.directions.v5.models.AutoValue_Interchange {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange>;
                }
                export module AutoValue_Interchange {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Interchange> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange.GsonTypeAdapter>;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Interchange): void;
                    public toString(): string;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Interchange;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_IntersectionLanes extends com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes>;
                }
                export module AutoValue_IntersectionLanes {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.IntersectionLanes> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes.GsonTypeAdapter>;
                    public toString(): string;
                    public read(list__string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.IntersectionLanes;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.IntersectionLanes): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Junction extends com.mapbox.api.directions.v5.models.AutoValue_Junction {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction>;
                }
                export module AutoValue_Junction {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Junction> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction.GsonTypeAdapter>;
                    public toString(): string;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Junction;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Junction): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_LegAnnotation extends com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation>;
                }
                export module AutoValue_LegAnnotation {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegAnnotation> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.LegAnnotation): void;
                    public read(list__integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.LegAnnotation;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_LegStep extends com.mapbox.api.directions.v5.models.AutoValue_LegStep {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep>;
                }
                export module AutoValue_LegStep {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegStep> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep.GsonTypeAdapter>;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.LegStep): void;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.LegStep;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_MapboxShield extends com.mapbox.api.directions.v5.models.AutoValue_MapboxShield {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield>;
                }
                export module AutoValue_MapboxShield {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxShield> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield.GsonTypeAdapter>;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.MapboxShield): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MapboxShield;
                    public toString(): string;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8 {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8>;
                }
                export module AutoValue_MapboxStreetsV8 {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxStreetsV8> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8.GsonTypeAdapter>;
                    public toString(): string;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.MapboxStreetsV8): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_MaxSpeed extends com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed>;
                }
                export module AutoValue_MaxSpeed {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MaxSpeed> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MaxSpeed;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.MaxSpeed): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_MergingArea extends com.mapbox.api.directions.v5.models.AutoValue_MergingArea {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MergingArea>;
                }
                export module AutoValue_MergingArea {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MergingArea> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MergingArea.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.MergingArea): void;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MergingArea;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_Metadata extends com.mapbox.api.directions.v5.models.AutoValue_Metadata {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata>;
                }
                export module AutoValue_Metadata {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Metadata> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata.GsonTypeAdapter>;
                    public toString(): string;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Metadata;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.Metadata): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_PaymentMethods extends com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods>;
                }
                export module AutoValue_PaymentMethods {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.PaymentMethods> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods.GsonTypeAdapter>;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.PaymentMethods): void;
                    public toString(): string;
                    public read(costPerVehicleSize_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.PaymentMethods;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_RestStop extends com.mapbox.api.directions.v5.models.AutoValue_RestStop {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop>;
                }
                export module AutoValue_RestStop {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RestStop> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.RestStop): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RestStop;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_RouteLeg extends com.mapbox.api.directions.v5.models.AutoValue_RouteLeg {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg>;
                }
                export module AutoValue_RouteLeg {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteLeg> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.RouteLeg): void;
                    public read(double__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RouteLeg;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_RouteOptions extends com.mapbox.api.directions.v5.models.AutoValue_RouteOptions {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions>;
                }
                export module AutoValue_RouteOptions {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteOptions> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions.GsonTypeAdapter>;
                    public toString(): string;
                    public read(boolean__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RouteOptions;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.RouteOptions): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_ShieldSprite extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite>;
                }
                export module AutoValue_ShieldSprite {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprite> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.ShieldSprite): void;
                    public read(shieldSpriteAttribute_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSprite;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute>;
                }
                export module AutoValue_ShieldSpriteAttribute {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): void;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_ShieldSprites extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites>;
                }
                export module AutoValue_ShieldSprites {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprites> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites.GsonTypeAdapter>;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSprites;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.ShieldSprites): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_ShieldSvg extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg>;
                }
                export module AutoValue_ShieldSvg {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSvg> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.ShieldSvg): void;
                    public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSvg;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_SilentWaypoint extends com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint>;
                }
                export module AutoValue_SilentWaypoint {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.SilentWaypoint> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.SilentWaypoint): void;
                    public read(double__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.SilentWaypoint;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_StepIntersection extends com.mapbox.api.directions.v5.models.AutoValue_StepIntersection {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection>;
                }
                export module AutoValue_StepIntersection {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepIntersection> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection.GsonTypeAdapter>;
                    public toString(): string;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.StepIntersection;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.StepIntersection): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_StepManeuver extends com.mapbox.api.directions.v5.models.AutoValue_StepManeuver {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver>;
                }
                export module AutoValue_StepManeuver {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepManeuver> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver.GsonTypeAdapter>;
                    public toString(): string;
                    public read(double__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.StepManeuver;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.StepManeuver): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_TollCollection extends com.mapbox.api.directions.v5.models.AutoValue_TollCollection {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection>;
                }
                export module AutoValue_TollCollection {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCollection> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.TollCollection;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.TollCollection): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_TollCost extends com.mapbox.api.directions.v5.models.AutoValue_TollCost {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost>;
                }
                export module AutoValue_TollCost {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCost> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.TollCost): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.TollCost;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_TrafficCodes extends com.mapbox.api.directions.v5.models.AutoValue_TrafficCodes {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TrafficCodes>;
                }
                export module AutoValue_TrafficCodes {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TrafficCodes> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TrafficCodes.GsonTypeAdapter>;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.TrafficCodes;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.TrafficCodes): void;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class AutoValue_VoiceInstructions extends com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions>;
                }
                export module AutoValue_VoiceInstructions {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.VoiceInstructions> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions.GsonTypeAdapter>;
                    public toString(): string;
                    public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.VoiceInstructions;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class BannerComponents extends com.mapbox.api.directions.v5.models.DirectionsJsonObject implements java.lang.Comparable<com.mapbox.api.directions.v5.models.BannerComponents> {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents>;
                  public static TEXT: string = 'text';
                  public static ICON: string = 'icon';
                  public static DELIMITER: string = 'delimiter';
                  public static EXIT_NUMBER: string = 'exit-number';
                  public static EXIT: string = 'exit';
                  public static LANE: string = 'lane';
                  public static GUIDANCE_VIEW: string = 'guidance-view';
                  public static AFTERTOLL: string = 'aftertoll';
                  public static CITYREAL: string = 'cityreal';
                  public static EXPRESSWAY_ENTRANCE: string = 'entrance';
                  public static EXPRESSWAY_EXIT: string = 'exit';
                  public static JCT: string = 'jct';
                  public static SAPA: string = 'sapa';
                  public static SAPAGUIDEMAP: string = 'sapaguidemap';
                  public static SIGNBOARD: string = 'signboard';
                  public static TOLLBRANCH: string = 'tollbranch';
                  public constructor();
                  public abbreviationPriority(): java.lang.Integer;
                  public abbreviation(): string;
                  public subType(): string;
                  public activeDirection(): string;
                  public active(): java.lang.Boolean;
                  public compareTo(bannerComponents: com.mapbox.api.directions.v5.models.BannerComponents): number;
                  public text(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerComponents>;
                  public type(): string;
                  public mapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                  public directions(): java.util.List<string>;
                  public imageBaseUrl(): string;
                  public imageUrl(): string;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.BannerComponents;
                  public toBuilder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                  public static builder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                }
                export module BannerComponents {
                  export class BannerComponentsSubType {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.BannerComponentsSubType>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.BannerComponents$BannerComponentsSubType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                  }
                  export class BannerComponentsType {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.BannerComponentsType>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.BannerComponents$BannerComponentsType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                  }
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerComponents.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.Builder>;
                    public type(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public mapboxShield(param0: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public subType(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public activeDirection(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public text(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.BannerComponents;
                    public imageBaseUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public imageUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public abbreviation(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public abbreviationPriority(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public directions(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class BannerInstructions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerInstructions>;
                  public constructor();
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public distanceAlongGeometry(): number;
                  public sub(): com.mapbox.api.directions.v5.models.BannerText;
                  public static builder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                  public view(): com.mapbox.api.directions.v5.models.BannerView;
                  public primary(): com.mapbox.api.directions.v5.models.BannerText;
                  public toBuilder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                  public secondary(): com.mapbox.api.directions.v5.models.BannerText;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerInstructions>;
                }
                export module BannerInstructions {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerInstructions.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerInstructions.Builder>;
                    public primary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public view(param0: com.mapbox.api.directions.v5.models.BannerView): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.BannerInstructions;
                    public distanceAlongGeometry(param0: number): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public sub(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public secondary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class BannerText extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerText>;
                  public constructor();
                  public drivingSide(): string;
                  public text(): string;
                  public modifier(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
                  public type(): string;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.BannerText;
                  public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                  public degrees(): java.lang.Double;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerText>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
                }
                export module BannerText {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerText.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerText.Builder>;
                    public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public drivingSide(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public build(): com.mapbox.api.directions.v5.models.BannerText;
                    public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public type(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public constructor();
                    public text(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public degrees(param0: java.lang.Double): com.mapbox.api.directions.v5.models.BannerText.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class BannerView extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerView>;
                  public constructor();
                  public text(): string;
                  public modifier(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
                  public type(): string;
                  public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerView>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.BannerView;
                  public static builder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
                }
                export module BannerView {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerView.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerView.Builder>;
                    public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    public type(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    public text(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    public build(): com.mapbox.api.directions.v5.models.BannerView;
                    public constructor();
                    public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Bearing extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Bearing>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
                  public angle(): number;
                  public degrees(): number;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
                }
                export module Bearing {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Bearing.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Bearing.Builder>;
                    public constructor();
                    public angle(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Bearing;
                    public degrees(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Closure extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Closure>;
                  public constructor();
                  public toBuilder(): com.mapbox.api.directions.v5.models.Closure.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Closure>;
                  public static builder(): com.mapbox.api.directions.v5.models.Closure.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Closure;
                  public geometryIndexStart(): java.lang.Integer;
                  public geometryIndexEnd(): java.lang.Integer;
                }
                export module Closure {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Closure.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Closure.Builder>;
                    public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Closure;
                    public constructor();
                    public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Congestion extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Congestion>;
                  public constructor();
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Congestion>;
                  public static builder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Congestion;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
                  public value(): number;
                }
                export module Congestion {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Congestion.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Congestion.Builder>;
                    public value(param0: number): com.mapbox.api.directions.v5.models.Congestion.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.Congestion;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class CostPerVehicleSize extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.CostPerVehicleSize>;
                  public constructor();
                  public large(): java.lang.Double;
                  public jumbo(): java.lang.Double;
                  public toBuilder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                  public middle(): java.lang.Double;
                  public small(): java.lang.Double;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.CostPerVehicleSize>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                  public static builder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                  public standard(): java.lang.Double;
                }
                export module CostPerVehicleSize {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder>;
                    public middle(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public constructor();
                    public standard(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public large(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public small(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public build(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                    public jumbo(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class DirectionsError extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsError>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                  public code(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsError>;
                  public message(): string;
                }
                export module DirectionsError {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsError.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsError.Builder>;
                    public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                    public build(): com.mapbox.api.directions.v5.models.DirectionsError;
                    public constructor();
                    public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsJsonObject>;
                  public constructor();
                  public getUnrecognizedProperty(this_: string): com.google.gson.JsonElement;
                  public getUnrecognizedJsonProperties(): java.util.Map<string, com.google.gson.JsonElement>;
                  public toJson(): string;
                  public getUnrecognizedPropertiesNames(): java.util.Set<string>;
                }
                export module DirectionsJsonObject {
                  export abstract class Builder<T> extends java.lang.Object {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<any>>;
                    public unrecognizedJsonProperties(unrecognizedProperties: java.util.Map<string, com.google.gson.JsonElement>): T;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class DirectionsResponse extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsResponse>;
                  public constructor();
                  public static fromJson(json: string, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public code(): string;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public static fromJson(json: java.io.Reader, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public static fromJson(json: java.io.Reader): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public message(): string;
                  public updateWithRequestData(this_: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public static builder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                  /** @deprecated */
                  public static fromJson(json: string, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, requestUuid: string): com.mapbox.api.directions.v5.models.DirectionsResponse;
                  public uuid(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsResponse>;
                  public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                  public routes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                  public metadata(): com.mapbox.api.directions.v5.models.Metadata;
                }
                export module DirectionsResponse {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsResponse.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsResponse.Builder>;
                    public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public uuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public metadata(param0: com.mapbox.api.directions.v5.models.Metadata): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public constructor();
                    public routes(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public build(): com.mapbox.api.directions.v5.models.DirectionsResponse;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class DirectionsRoute extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                  public constructor();
                  public weightName(): string;
                  public routeIndex(): string;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  public durationTypical(): java.lang.Double;
                  public weight(): java.lang.Double;
                  public duration(): java.lang.Double;
                  public requestUuid(): string;
                  public static fromJson(json: string, routeOptions: com.mapbox.api.directions.v5.models.RouteOptions, requestUuid: string): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  public geometry(): string;
                  public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                  public tollCosts(): java.util.List<com.mapbox.api.directions.v5.models.TollCost>;
                  public distance(): java.lang.Double;
                  public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                  public voiceLanguage(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                  public static builder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                  public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                }
                export module DirectionsRoute {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsRoute.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsRoute.Builder>;
                    public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public legs(param0: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public requestUuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public constructor();
                    public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public weightName(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public build(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                    public voiceLanguage(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public routeOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public tollCosts(param0: java.util.List<com.mapbox.api.directions.v5.models.TollCost>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public geometry(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public weight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public routeIndex(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class DirectionsWaypoint extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                  public constructor();
                  public distance(): java.lang.Double;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                  public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                  public name(): string;
                  public location(): com.mapbox.geojson.Point;
                  public static builder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                }
                export module DirectionsWaypoint {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder>;
                    public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                    public name(param0: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                    public build(): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                    public constructor();
                    public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Exclude extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Exclude>;
                  public constructor();
                  public criteria(): java.util.List<string>;
                  public static builder(): com.mapbox.api.directions.v5.models.Exclude.Builder;
                  public points(): java.util.List<com.mapbox.geojson.Point>;
                }
                export module Exclude {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Exclude.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Exclude.Builder>;
                    public points(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                    public constructor();
                    public criteria(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Exclude;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Incident extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident>;
                  public static INCIDENT_ACCIDENT: string = 'accident';
                  public static INCIDENT_CONGESTION: string = 'congestion';
                  public static INCIDENT_CONSTRUCTION: string = 'construction';
                  public static INCIDENT_DISABLED_VEHICLE: string = 'disabled_vehicle';
                  public static INCIDENT_LANE_RESTRICTION: string = 'lane_restriction';
                  public static INCIDENT_MASS_TRANSIT: string = 'mass_transit';
                  public static INCIDENT_MISCELLANEOUS: string = 'miscellaneous';
                  public static INCIDENT_OTHER_NEWS: string = 'other_news';
                  public static INCIDENT_PLANNED_EVENT: string = 'planned_event';
                  public static INCIDENT_ROAD_CLOSURE: string = 'road_closure';
                  public static INCIDENT_ROAD_HAZARD: string = 'road_hazard';
                  public static INCIDENT_WEATHER: string = 'weather';
                  public static IMPACT_UNKNOWN: string = 'unknown';
                  public static IMPACT_CRITICAL: string = 'critical';
                  public static IMPACT_MAJOR: string = 'major';
                  public static IMPACT_MINOR: string = 'minor';
                  public static IMPACT_LOW: string = 'low';
                  public subTypeDescription(): string;
                  public subType(): string;
                  public countryCodeAlpha3(): string;
                  public affectedRoadNames(): java.util.List<string>;
                  public closed(): java.lang.Boolean;
                  public startTime(): string;
                  public numLanesBlocked(): java.lang.Integer;
                  public static builder(): com.mapbox.api.directions.v5.models.Incident.Builder;
                  public impact(): string;
                  public countryCodeAlpha2(): string;
                  public longDescription(): string;
                  public endTime(): string;
                  public creationTime(): string;
                  public constructor();
                  public description(): string;
                  public lanesBlocked(): java.util.List<string>;
                  public congestion(): com.mapbox.api.directions.v5.models.Congestion;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Incident.Builder;
                  public trafficCodes(): com.mapbox.api.directions.v5.models.TrafficCodes;
                  public geometryIndexStart(): java.lang.Integer;
                  public geometryIndexEnd(): java.lang.Integer;
                  public alertcCodes(): java.util.List<java.lang.Integer>;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Incident>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Incident;
                  public type(): string;
                  public id(): string;
                }
                export module Incident {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Incident.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.Builder>;
                    public subTypeDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public longDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public id(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public endTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public description(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public lanesBlocked(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public numLanesBlocked(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public constructor();
                    public trafficCodes(param0: com.mapbox.api.directions.v5.models.TrafficCodes): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public countryCodeAlpha2(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public affectedRoadNames(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public congestion(param0: com.mapbox.api.directions.v5.models.Congestion): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public subType(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public type(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public creationTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public impact(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public alertcCodes(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public build(): com.mapbox.api.directions.v5.models.Incident;
                    public startTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public closed(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.Incident.Builder;
                  }
                  export class ImpactType {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.ImpactType>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.Incident$ImpactType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                  }
                  export class IncidentType {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.IncidentType>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.Incident$IncidentType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Interchange extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Interchange>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
                  public name(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Interchange>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Interchange;
                }
                export module Interchange {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Interchange.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Interchange.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.Interchange;
                    public name(param0: string): com.mapbox.api.directions.v5.models.Interchange.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class IntersectionLanes extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.IntersectionLanes>;
                  public constructor();
                  public validIndication(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.IntersectionLanes>;
                  public valid(): java.lang.Boolean;
                  public indications(): java.util.List<string>;
                  public static builder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                  public paymentMethods(): java.util.List<string>;
                  public active(): java.lang.Boolean;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.IntersectionLanes;
                }
                export module IntersectionLanes {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.IntersectionLanes.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.IntersectionLanes.Builder>;
                    public valid(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    public paymentMethods(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    public indications(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.IntersectionLanes;
                    public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    public validIndication(param0: string): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Junction extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Junction>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.Junction.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Junction>;
                  public name(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Junction.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Junction;
                }
                export module Junction {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Junction.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Junction.Builder>;
                    public name(param0: string): com.mapbox.api.directions.v5.models.Junction.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.Junction;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class LegAnnotation extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegAnnotation>;
                  public constructor();
                  public congestion(): java.util.List<string>;
                  public static builder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                  public freeflowSpeed(): java.util.List<java.lang.Integer>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                  public trafficTendency(): java.util.List<java.lang.Integer>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.LegAnnotation;
                  public congestionNumeric(): java.util.List<java.lang.Integer>;
                  public maxspeed(): java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>;
                  public currentSpeed(): java.util.List<java.lang.Integer>;
                  public duration(): java.util.List<java.lang.Double>;
                  public distance(): java.util.List<java.lang.Double>;
                  public speed(): java.util.List<java.lang.Double>;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegAnnotation>;
                }
                export module LegAnnotation {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.LegAnnotation.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegAnnotation.Builder>;
                    public duration(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public congestionNumeric(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public freeflowSpeed(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public congestion(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public trafficTendency(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.LegAnnotation;
                    public distance(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public speed(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public currentSpeed(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public maxspeed(param0: java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class LegStep extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep>;
                  public static MUTCD: string = 'mutcd';
                  public static VIENNA: string = 'vienna';
                  public static builder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
                  public durationTypical(): java.lang.Double;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegStep>;
                  public weight(): number;
                  public toBuilder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
                  public mode(): string;
                  public intersections(): java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>;
                  public speedLimitUnit(): string;
                  public rotaryPronunciation(): string;
                  public bannerInstructions(): java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>;
                  public rotaryName(): string;
                  public name(): string;
                  public speedLimitSign(): string;
                  public constructor();
                  public destinations(): string;
                  public drivingSide(): string;
                  public duration(): number;
                  public geometry(): string;
                  public voiceInstructions(): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.LegStep;
                  public distance(): number;
                  public exits(): string;
                  public ref(): string;
                  public pronunciation(): string;
                  public maneuver(): com.mapbox.api.directions.v5.models.StepManeuver;
                }
                export module LegStep {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.LegStep.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.LegStep;
                    public pronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public maneuver(param0: com.mapbox.api.directions.v5.models.StepManeuver): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public speedLimitSign(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public rotaryPronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public constructor();
                    public destinations(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public distance(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public intersections(param0: java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public drivingSide(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public exits(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public duration(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public geometry(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public voiceInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public mode(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public bannerInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public speedLimitUnit(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public name(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public ref(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public weight(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public rotaryName(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                  }
                  export class SpeedLimitSign {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep.SpeedLimitSign>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.LegStep$SpeedLimitSign interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class ManeuverModifier {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ManeuverModifier>;
                  public static UTURN: string = 'uturn';
                  public static SHARP_RIGHT: string = 'sharp right';
                  public static RIGHT: string = 'right';
                  public static SLIGHT_RIGHT: string = 'slight right';
                  public static STRAIGHT: string = 'straight';
                  public static SLIGHT_LEFT: string = 'slight left';
                  public static LEFT: string = 'left';
                  public static SHARP_LEFT: string = 'sharp left';
                  public constructor();
                }
                export module ManeuverModifier {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ManeuverModifier.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.ManeuverModifier$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class MapboxShield extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxShield>;
                  public constructor();
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.MapboxShield;
                  public textColor(): string;
                  public displayRef(): string;
                  public name(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxShield>;
                  public baseUrl(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                }
                export module MapboxShield {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MapboxShield.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxShield.Builder>;
                    public name(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    public textColor(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    public build(): com.mapbox.api.directions.v5.models.MapboxShield;
                    public baseUrl(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    public constructor();
                    public displayRef(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxStreetsV8>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                  public roadClass(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxStreetsV8>;
                }
                export module MapboxStreetsV8 {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    public constructor();
                    public roadClass(param0: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class MaxSpeed extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MaxSpeed>;
                  public constructor();
                  public none(): java.lang.Boolean;
                  public unit(): string;
                  public unknown(): java.lang.Boolean;
                  public static builder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MaxSpeed>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.MaxSpeed;
                  public speed(): java.lang.Integer;
                }
                export module MaxSpeed {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MaxSpeed.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MaxSpeed.Builder>;
                    public speed(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    public none(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    public build(): com.mapbox.api.directions.v5.models.MaxSpeed;
                    public constructor();
                    public unknown(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    public unit(param0: string): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class MergingArea extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MergingArea>;
                  public static TYPE_FROM_LEFT: string = 'from_left';
                  public static TYPE_FROM_RIGHT: string = 'from_right';
                  public static TYPE_FROM_BOTH_SIDES: string = 'from_both_sides';
                  public constructor();
                  public type(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.MergingArea.Builder;
                  public static builder(): com.mapbox.api.directions.v5.models.MergingArea.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MergingArea>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.MergingArea;
                }
                export module MergingArea {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MergingArea.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MergingArea.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.MergingArea;
                    public constructor();
                    public type(param0: string): com.mapbox.api.directions.v5.models.MergingArea.Builder;
                  }
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MergingArea.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.MergingArea$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class Metadata extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Metadata>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Metadata>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.Metadata;
                  public infoMap(): java.util.Map<string, string>;
                }
                export module Metadata {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Metadata.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Metadata.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.Metadata;
                    public infoMap(param0: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.Metadata.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class PaymentMethods extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.PaymentMethods>;
                  public constructor();
                  public toBuilder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                  public static builder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.PaymentMethods;
                  public cash(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.PaymentMethods>;
                  public etc(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                }
                export module PaymentMethods {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.PaymentMethods.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.PaymentMethods.Builder>;
                    public etc(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.PaymentMethods;
                    public cash(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class RestStop extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RestStop>;
                  public constructor();
                  public toBuilder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RestStop>;
                  public guideMap(): string;
                  public type(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
                  public name(): string;
                  public amenities(): java.util.List<com.mapbox.api.directions.v5.models.Amenity>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.RestStop;
                }
                export module RestStop {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RestStop.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RestStop.Builder>;
                    public guideMap(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    public amenities(param0: java.util.List<com.mapbox.api.directions.v5.models.Amenity>): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    public constructor();
                    public name(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    public build(): com.mapbox.api.directions.v5.models.RestStop;
                    public type(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class RouteLeg extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteLeg>;
                  public constructor();
                  public static builder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                  public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteLeg>;
                  public durationTypical(): java.lang.Double;
                  public admins(): java.util.List<com.mapbox.api.directions.v5.models.Admin>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                  public viaWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>;
                  public duration(): java.lang.Double;
                  public steps(): java.util.List<com.mapbox.api.directions.v5.models.LegStep>;
                  public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
                  public distance(): java.lang.Double;
                  public summary(): string;
                  public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.RouteLeg;
                }
                export module RouteLeg {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RouteLeg.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteLeg.Builder>;
                    public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public incidents(param0: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public viaWaypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public steps(param0: java.util.List<com.mapbox.api.directions.v5.models.LegStep>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public build(): com.mapbox.api.directions.v5.models.RouteLeg;
                    public constructor();
                    public admins(param0: java.util.List<com.mapbox.api.directions.v5.models.Admin>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public annotation(param0: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public closures(param0: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public summary(param0: string): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class RouteOptions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteOptions>;
                  public approachesList(): java.util.List<string>;
                  public toUrl(entry: string): java.net.URL;
                  public annotations(): string;
                  public radiusesList(): java.util.List<java.lang.Double>;
                  public alleyBias(): java.lang.Double;
                  public walkwayBias(): java.lang.Double;
                  public maxWeight(): java.lang.Double;
                  public include(): string;
                  public waypointNamesList(): java.util.List<string>;
                  public paymentMethods(): string;
                  public coordinatesList(): java.util.List<com.mapbox.geojson.Point>;
                  public paymentMethodsList(): java.util.List<string>;
                  public snappingIncludeClosuresList(): java.util.List<java.lang.Boolean>;
                  public departAt(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                  public maxWidth(): java.lang.Double;
                  public waypointTargetsList(): java.util.List<com.mapbox.geojson.Point>;
                  public layersList(): java.util.List<java.lang.Integer>;
                  public profile(): string;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.RouteOptions;
                  public voiceInstructions(): java.lang.Boolean;
                  public waypointNames(): string;
                  public excludeList(): java.util.List<string>;
                  public snappingIncludeStaticClosures(): string;
                  public arriveBy(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                  public voiceUnits(): string;
                  public language(): string;
                  public snappingIncludeStaticClosuresList(): java.util.List<java.lang.Boolean>;
                  public static fromUrl(idx: java.net.URL): com.mapbox.api.directions.v5.models.RouteOptions;
                  public annotationsList(): java.util.List<string>;
                  public toJson(): string;
                  public layers(): string;
                  public bearings(): string;
                  public exclude(): string;
                  public waypointsPerRoute(): java.lang.Boolean;
                  public walkingSpeed(): java.lang.Double;
                  public approaches(): string;
                  public continueStraight(): java.lang.Boolean;
                  public suppressVoiceInstructionLocalNames(): java.lang.Boolean;
                  public user(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteOptions>;
                  public metadata(): java.lang.Boolean;
                  public bannerInstructions(): java.lang.Boolean;
                  public waypointIndicesList(): java.util.List<java.lang.Integer>;
                  public radiuses(): string;
                  public bearingsList(): java.util.List<com.mapbox.api.directions.v5.models.Bearing>;
                  public baseUrl(): string;
                  public constructor();
                  public roundaboutExits(): java.lang.Boolean;
                  public steps(): java.lang.Boolean;
                  public enableRefresh(): java.lang.Boolean;
                  public waypointTargets(): string;
                  public includeList(): java.util.List<string>;
                  public excludeObject(): com.mapbox.api.directions.v5.models.Exclude;
                  public coordinates(): string;
                  public waypointIndices(): string;
                  public geometries(): string;
                  public computeTollCost(): java.lang.Boolean;
                  public alternatives(): java.lang.Boolean;
                  public maxHeight(): java.lang.Double;
                  public overview(): string;
                  public avoidManeuverRadius(): java.lang.Double;
                  public snappingIncludeClosures(): string;
                }
                export module RouteOptions {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RouteOptions.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteOptions.Builder>;
                    public avoidManeuverRadius(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public geometries(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public annotations(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public build(): com.mapbox.api.directions.v5.models.RouteOptions;
                    public waypointTargetsList(waypointTargets: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointsPerRoute(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public radiusesList(radiuses: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public computeTollCost(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public layers(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public walkingSpeed(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public maxWidth(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public layersList(layers: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public maxHeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public bannerInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public snappingIncludeClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public alternatives(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public walkwayBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public user(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public radiuses(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public bearings(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public excludeObject(exclude: com.mapbox.api.directions.v5.models.Exclude): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public roundaboutExits(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public constructor();
                    public language(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public approachesList(approaches: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public paymentMethodsList(paymentMethods: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public steps(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public voiceUnits(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public arriveBy(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointTargets(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public snappingIncludeClosuresList(snappingClosures: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointIndicesList(indices: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointIndices(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public maxWeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public includeList(include: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointNamesList(waypointNames: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public baseUrl(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public coordinatesList(coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public approaches(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public exclude(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public alleyBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public paymentMethods(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public bearingsList(bearings: java.util.List<com.mapbox.api.directions.v5.models.Bearing>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public profile(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public unrecognizedProperties(mapped: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public enableRefresh(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public annotationsList(annotations: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public continueStraight(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public coordinates(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public include(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public suppressVoiceInstructionLocalNames(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public waypointNames(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public voiceInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public departAt(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public excludeList(exclude: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public snappingIncludeStaticClosuresList(snappingStaticClosures: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public overview(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public snappingIncludeStaticClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public metadata(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class ShieldSprite extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprite>;
                  public constructor();
                  public spriteAttributes(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprite>;
                  public static builder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                  public spriteName(): string;
                }
                export module ShieldSprite {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSprite.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprite.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.ShieldSprite;
                    public spriteAttributes(param0: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                    public constructor();
                    public spriteName(param0: string): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute>;
                  public constructor();
                  public pixelRatio(): java.lang.Integer;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                  public toJson(): string;
                  public height(): java.lang.Integer;
                  public static builder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                  public placeholder(): java.util.List<java.lang.Double>;
                  public visible(): java.lang.Boolean;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute>;
                  public y(): java.lang.Integer;
                  public x(): java.lang.Integer;
                  public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                  public width(): java.lang.Integer;
                }
                export module ShieldSpriteAttribute {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder>;
                    public width(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public height(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public placeholder(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public y(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public pixelRatio(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public x(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public constructor();
                    public visible(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public build(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class ShieldSprites extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprites>;
                  public constructor();
                  public static fromJson(spriteName: string): com.mapbox.api.directions.v5.models.ShieldSprites;
                  public toJson(): string;
                  public sprites(): java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>;
                  public static builder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprites>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                }
                export module ShieldSprites {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSprites.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprites.Builder>;
                    public sprites(param0: java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                    public build(): com.mapbox.api.directions.v5.models.ShieldSprites;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class ShieldSvg extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSvg>;
                  public constructor();
                  public svg(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSvg>;
                  public toJson(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.ShieldSvg;
                }
                export module ShieldSvg {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSvg.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSvg.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.ShieldSvg;
                    public constructor();
                    public svg(param0: string): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class SilentWaypoint extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SilentWaypoint>;
                  public constructor();
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.SilentWaypoint>;
                  public static builder(): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                  public waypointIndex(): number;
                  public distanceFromStart(): number;
                  public geometryIndex(): number;
                }
                export module SilentWaypoint {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.SilentWaypoint.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SilentWaypoint.Builder>;
                    public distanceFromStart(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                    public waypointIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                    public geometryIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.SilentWaypoint;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export class SpeedLimit {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SpeedLimit>;
                  public static KMPH: string = 'km/h';
                  public static MPH: string = 'mph';
                  public constructor();
                }
                export module SpeedLimit {
                  export class Unit {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SpeedLimit.Unit>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.SpeedLimit$Unit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class StepIntersection extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepIntersection>;
                  public entry(): java.util.List<java.lang.Boolean>;
                  public interchange(): com.mapbox.api.directions.v5.models.Interchange;
                  public yieldSign(): java.lang.Boolean;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.StepIntersection;
                  public mergingArea(): com.mapbox.api.directions.v5.models.MergingArea;
                  public restStop(): com.mapbox.api.directions.v5.models.RestStop;
                  public mapboxStreetsV8(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                  public trafficSignal(): java.lang.Boolean;
                  public location(): com.mapbox.geojson.Point;
                  public out(): java.lang.Integer;
                  public static builder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                  public geometryIndex(): java.lang.Integer;
                  public in(): java.lang.Integer;
                  public railwayCrossing(): java.lang.Boolean;
                  public bearings(): java.util.List<java.lang.Integer>;
                  public tollCollection(): com.mapbox.api.directions.v5.models.TollCollection;
                  public junction(): com.mapbox.api.directions.v5.models.Junction;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepIntersection>;
                  public constructor();
                  public adminIndex(): java.lang.Integer;
                  public tunnelName(): string;
                  public toBuilder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                  public classes(): java.util.List<string>;
                  public isUrban(): java.lang.Boolean;
                  public lanes(): java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>;
                  public rawLocation(): androidNative.Array<number>;
                  public stopSign(): java.lang.Boolean;
                }
                export module StepIntersection {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.StepIntersection.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepIntersection.Builder>;
                    public in(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public railwayCrossing(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public adminIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public bearings(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public mergingArea(param0: com.mapbox.api.directions.v5.models.MergingArea): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public classes(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public out(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public constructor();
                    public restStop(param0: com.mapbox.api.directions.v5.models.RestStop): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public yieldSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public build(): com.mapbox.api.directions.v5.models.StepIntersection;
                    public mapboxStreetsV8(param0: com.mapbox.api.directions.v5.models.MapboxStreetsV8): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public tunnelName(param0: string): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public isUrban(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public geometryIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public tollCollection(param0: com.mapbox.api.directions.v5.models.TollCollection): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public junction(param0: com.mapbox.api.directions.v5.models.Junction): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public trafficSignal(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public entry(param0: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public lanes(param0: java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public stopSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public interchange(param0: com.mapbox.api.directions.v5.models.Interchange): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class StepManeuver extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver>;
                  public static TURN: string = 'turn';
                  public static NEW_NAME: string = 'new name';
                  public static DEPART: string = 'depart';
                  public static ARRIVE: string = 'arrive';
                  public static MERGE: string = 'merge';
                  public static ON_RAMP: string = 'on ramp';
                  public static OFF_RAMP: string = 'off ramp';
                  public static FORK: string = 'fork';
                  public static END_OF_ROAD: string = 'end of road';
                  public static CONTINUE: string = 'continue';
                  public static ROUNDABOUT: string = 'roundabout';
                  public static ROTARY: string = 'rotary';
                  public static ROUNDABOUT_TURN: string = 'roundabout turn';
                  public static NOTIFICATION: string = 'notification';
                  public static EXIT_ROUNDABOUT: string = 'exit roundabout';
                  public static EXIT_ROTARY: string = 'exit rotary';
                  public constructor();
                  public modifier(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                  public toBuilder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                  public location(): com.mapbox.geojson.Point;
                  public bearingBefore(): java.lang.Double;
                  public instruction(): string;
                  public bearingAfter(): java.lang.Double;
                  public type(): string;
                  public exit(): java.lang.Integer;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.StepManeuver;
                  public rawLocation(): androidNative.Array<number>;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepManeuver>;
                }
                export module StepManeuver {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.StepManeuver.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver.Builder>;
                    public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public type(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public bearingAfter(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public instruction(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public exit(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public modifier(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public bearingBefore(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    public build(): com.mapbox.api.directions.v5.models.StepManeuver;
                    public constructor();
                  }
                  export class StepManeuverType {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver.StepManeuverType>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.models.StepManeuver$StepManeuverType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class TollCollection extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCollection>;
                  public constructor();
                  public toBuilder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                  public static builder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.TollCollection;
                  public type(): string;
                  public name(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCollection>;
                }
                export module TollCollection {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.TollCollection.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCollection.Builder>;
                    public type(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    public name(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.TollCollection;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class TollCost extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCost>;
                  public constructor();
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCost>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
                  public currency(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
                  public paymentMethods(): com.mapbox.api.directions.v5.models.PaymentMethods;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.TollCost;
                }
                export module TollCost {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.TollCost.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCost.Builder>;
                    public constructor();
                    public currency(param0: string): com.mapbox.api.directions.v5.models.TollCost.Builder;
                    public paymentMethods(param0: com.mapbox.api.directions.v5.models.PaymentMethods): com.mapbox.api.directions.v5.models.TollCost.Builder;
                    public build(): com.mapbox.api.directions.v5.models.TollCost;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class TrafficCodes extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TrafficCodes>;
                  public constructor();
                  public jarticRegulationCode(): java.lang.Integer;
                  public static builder(): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TrafficCodes>;
                  public toBuilder(): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                  public jarticCauseCode(): java.lang.Integer;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.TrafficCodes;
                }
                export module TrafficCodes {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.TrafficCodes.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TrafficCodes.Builder>;
                    public jarticRegulationCode(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                    public jarticCauseCode(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.TrafficCodes.Builder;
                    public constructor();
                    public build(): com.mapbox.api.directions.v5.models.TrafficCodes;
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
        export module api {
          export module directions {
            export module v5 {
              export module models {
                export abstract class VoiceInstructions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.models.VoiceInstructions>;
                  public constructor();
                  public toBuilder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                  public ssmlAnnouncement(): string;
                  public static builder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                  public distanceAlongGeometry(): java.lang.Double;
                  public announcement(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.VoiceInstructions>;
                  public static fromJson(json: string): com.mapbox.api.directions.v5.models.VoiceInstructions;
                }
                export module VoiceInstructions {
                  export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.VoiceInstructions.Builder> {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.VoiceInstructions.Builder>;
                    public build(): com.mapbox.api.directions.v5.models.VoiceInstructions;
                    public distanceAlongGeometry(param0: java.lang.Double): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                    public ssmlAnnouncement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                    public constructor();
                    public announcement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
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
        export module api {
          export module directions {
            export module v5 {
              export module utils {
                export class FormatUtils {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.FormatUtils>;
                  public static ISO_8601_PATTERN: string = "yyyy-MM-dd'T'HH:mm";
                  public constructor();
                  public static formatPointsList(point: java.util.List<com.mapbox.geojson.Point>): string;
                  public static join(token: string, i: java.util.List<any>): string;
                  public static formatIntegers(integer: java.util.List<java.lang.Integer>): string;
                  public static formatDouble(value: number): string;
                  public static formatRadiuses(radius: java.util.List<java.lang.Double>): string;
                  public static formatBearings(angle: java.util.List<com.mapbox.api.directions.v5.models.Bearing>): string;
                  public static formatDistributions(array: java.util.List<androidNative.Array<java.lang.Integer>>): string;
                }
              }
            }
          }
        }
      }
    }

    declare module com {
      export module mapbox {
        export module api {
          export module directions {
            export module v5 {
              export module utils {
                export class ParseUtils {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.ParseUtils>;
                  public constructor();
                  public static parseToStrings(original: string, separator: string): java.util.List<string>;
                  public static parseBearings(original: string): java.util.List<com.mapbox.api.directions.v5.models.Bearing>;
                  public static parseToDoubles(original: string): java.util.List<java.lang.Double>;
                  public static parseToIntegers(original: string): java.util.List<java.lang.Integer>;
                  public static parseToPoints(original: string): java.util.List<com.mapbox.geojson.Point>;
                  public static parseToStrings(original: string): java.util.List<string>;
                  public static parseToBooleans(original: string): java.util.List<java.lang.Boolean>;
                }
                export module ParseUtils {
                  export class ValueParser<T> extends java.lang.Object {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.ParseUtils.ValueParser<any>>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.directions.v5.utils.ParseUtils$ValueParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { parse(param0: string): T });
                    public constructor();
                    public parse(param0: string): T;
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
        export module api {
          export module directions {
            export module v5 {
              export module utils {
                export class UnrecognizedPropertiesUtils {
                  public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.UnrecognizedPropertiesUtils>;
                  public constructor();
                  public static fromSerializableProperties(key: java.util.Map<string, com.mapbox.auto.value.gson.SerializableJsonElement>): java.util.Map<string, com.google.gson.JsonElement>;
                  public static toSerializableProperties(entry: java.util.Map<string, com.google.gson.JsonElement>): java.util.Map<string, com.mapbox.auto.value.gson.SerializableJsonElement>;
                }
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder:1
//com.mapbox.api.directions.v5.utils.ParseUtils.ValueParser:1
