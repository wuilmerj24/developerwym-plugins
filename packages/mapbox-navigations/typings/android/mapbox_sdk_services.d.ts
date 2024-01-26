declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export class AutoValue_MapboxDirections extends com.mapbox.api.directions.v5.MapboxDirections {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.AutoValue_MapboxDirections>;
            public equals(this_: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.api.directions.v5.MapboxDirections.Builder;
            public toString(): string;
          }
          export module AutoValue_MapboxDirections {
            export class Builder extends com.mapbox.api.directions.v5.MapboxDirections.Builder {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.AutoValue_MapboxDirections.Builder>;
              public build(): com.mapbox.api.directions.v5.MapboxDirections;
              public usePostMethod(usePostMethod: java.lang.Boolean): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public networkInterceptor(networkInterceptor: okhttp3.Interceptor): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public eventListener(eventListener: okhttp3.EventListener): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public accessToken(accessToken: string): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public interceptor(interceptor: okhttp3.Interceptor): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public clientAppName(clientAppName: string): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public routeOptions(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.MapboxDirections.Builder;
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
          export class DirectionsResponseFactory {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsResponseFactory>;
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
          export class DirectionsService {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsService>;
            /**
             * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getCall(
                param0: string,
                param1: string,
                param2: string,
                param3: string,
                param4: string,
                param5: java.lang.Boolean,
                param6: string,
                param7: string,
                param8: string,
                param9: java.lang.Boolean,
                param10: string,
                param11: java.lang.Double,
                param12: string,
                param13: java.lang.Boolean,
                param14: string,
                param15: string,
                param16: java.lang.Boolean,
                param17: java.lang.Boolean,
                param18: java.lang.Boolean,
                param19: string,
                param20: string,
                param21: string,
                param22: string,
                param23: string,
                param24: string,
                param25: string,
                param26: java.lang.Boolean,
                param27: java.lang.Double,
                param28: java.lang.Double,
                param29: java.lang.Double,
                param30: string,
                param31: string,
                param32: string,
                param33: string,
                param34: java.lang.Double,
                param35: java.lang.Double,
                param36: java.lang.Double,
                param37: java.lang.Boolean,
                param38: java.lang.Boolean,
                param39: java.lang.Boolean,
                param40: string,
                param41: java.lang.Boolean
              ): retrofit2.Call<com.mapbox.api.directions.v5.models.DirectionsResponse>;
              postCall(
                param0: string,
                param1: string,
                param2: string,
                param3: string,
                param4: string,
                param5: java.lang.Boolean,
                param6: string,
                param7: string,
                param8: string,
                param9: java.lang.Boolean,
                param10: string,
                param11: java.lang.Double,
                param12: string,
                param13: java.lang.Boolean,
                param14: string,
                param15: string,
                param16: java.lang.Boolean,
                param17: java.lang.Boolean,
                param18: java.lang.Boolean,
                param19: string,
                param20: string,
                param21: string,
                param22: string,
                param23: string,
                param24: string,
                param25: string,
                param26: java.lang.Boolean,
                param27: java.lang.Double,
                param28: java.lang.Double,
                param29: java.lang.Double,
                param30: string,
                param31: string,
                param32: string,
                param33: string,
                param34: java.lang.Double,
                param35: java.lang.Double,
                param36: java.lang.Double,
                param37: java.lang.Boolean,
                param38: java.lang.Boolean,
                param39: java.lang.Boolean,
                param40: string,
                param41: java.lang.Boolean
              ): retrofit2.Call<com.mapbox.api.directions.v5.models.DirectionsResponse>;
            });
            public constructor();
            public postCall(
              param0: string,
              param1: string,
              param2: string,
              param3: string,
              param4: string,
              param5: java.lang.Boolean,
              param6: string,
              param7: string,
              param8: string,
              param9: java.lang.Boolean,
              param10: string,
              param11: java.lang.Double,
              param12: string,
              param13: java.lang.Boolean,
              param14: string,
              param15: string,
              param16: java.lang.Boolean,
              param17: java.lang.Boolean,
              param18: java.lang.Boolean,
              param19: string,
              param20: string,
              param21: string,
              param22: string,
              param23: string,
              param24: string,
              param25: string,
              param26: java.lang.Boolean,
              param27: java.lang.Double,
              param28: java.lang.Double,
              param29: java.lang.Double,
              param30: string,
              param31: string,
              param32: string,
              param33: string,
              param34: java.lang.Double,
              param35: java.lang.Double,
              param36: java.lang.Double,
              param37: java.lang.Boolean,
              param38: java.lang.Boolean,
              param39: java.lang.Boolean,
              param40: string,
              param41: java.lang.Boolean
            ): retrofit2.Call<com.mapbox.api.directions.v5.models.DirectionsResponse>;
            public getCall(
              param0: string,
              param1: string,
              param2: string,
              param3: string,
              param4: string,
              param5: java.lang.Boolean,
              param6: string,
              param7: string,
              param8: string,
              param9: java.lang.Boolean,
              param10: string,
              param11: java.lang.Double,
              param12: string,
              param13: java.lang.Boolean,
              param14: string,
              param15: string,
              param16: java.lang.Boolean,
              param17: java.lang.Boolean,
              param18: java.lang.Boolean,
              param19: string,
              param20: string,
              param21: string,
              param22: string,
              param23: string,
              param24: string,
              param25: string,
              param26: java.lang.Boolean,
              param27: java.lang.Double,
              param28: java.lang.Double,
              param29: java.lang.Double,
              param30: string,
              param31: string,
              param32: string,
              param33: string,
              param34: java.lang.Double,
              param35: java.lang.Double,
              param36: java.lang.Double,
              param37: java.lang.Boolean,
              param38: java.lang.Boolean,
              param39: java.lang.Boolean,
              param40: string,
              param41: java.lang.Boolean
            ): retrofit2.Call<com.mapbox.api.directions.v5.models.DirectionsResponse>;
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
          export abstract class MapboxDirections extends com.mapbox.core.MapboxService<com.mapbox.api.directions.v5.models.DirectionsResponse, com.mapbox.api.directions.v5.DirectionsService> {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.MapboxDirections>;
            public baseUrl(): string;
            public getGsonBuilder(): com.google.gson.GsonBuilder;
            public constructor();
            public getOkHttpClient(): okhttp3.OkHttpClient;
            public static builder(): com.mapbox.api.directions.v5.MapboxDirections.Builder;
            public executeCall(): retrofit2.Response<com.mapbox.api.directions.v5.models.DirectionsResponse>;
            public enqueueCall(callback: retrofit2.Callback<com.mapbox.api.directions.v5.models.DirectionsResponse>): void;
            public toBuilder(): com.mapbox.api.directions.v5.MapboxDirections.Builder;
            public initializeCall(): retrofit2.Call<com.mapbox.api.directions.v5.models.DirectionsResponse>;
          }
          export module MapboxDirections {
            export abstract class Builder {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.MapboxDirections.Builder>;
              public constructor();
              public usePostMethod(param0: java.lang.Boolean): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public build(): com.mapbox.api.directions.v5.MapboxDirections;
              public interceptor(param0: okhttp3.Interceptor): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public routeOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public networkInterceptor(param0: okhttp3.Interceptor): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public accessToken(param0: string): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public eventListener(param0: okhttp3.EventListener): com.mapbox.api.directions.v5.MapboxDirections.Builder;
              public clientAppName(param0: string): com.mapbox.api.directions.v5.MapboxDirections.Builder;
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
      export module directionsrefresh {
        export module v1 {
          export class AutoValue_MapboxDirectionsRefresh extends com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh {
            public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.AutoValue_MapboxDirectionsRefresh>;
            public toBuilder(): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
            public baseUrl(): string;
            public equals(this_: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module AutoValue_MapboxDirectionsRefresh {
            export class Builder extends com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder {
              public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.AutoValue_MapboxDirectionsRefresh.Builder>;
              public accessToken(accessToken: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public requestId(requestId: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public baseUrl(baseUrl: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public legIndex(legIndex: number): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public build(): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh;
              public interceptor(interceptor: okhttp3.Interceptor): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public routeIndex(routeIndex: number): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public clientAppName(clientAppName: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
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
      export module directionsrefresh {
        export module v1 {
          export class DirectionsRefreshService {
            public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.DirectionsRefreshService>;
            /**
             * Constructs a new instance of the com.mapbox.api.directionsrefresh.v1.DirectionsRefreshService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getCall(param0: string, param1: string, param2: number, param3: number, param4: string): retrofit2.Call<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse> });
            public constructor();
            public getCall(param0: string, param1: string, param2: number, param3: number, param4: string): retrofit2.Call<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directionsrefresh {
        export module v1 {
          export abstract class MapboxDirectionsRefresh extends com.mapbox.core.MapboxService<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse, com.mapbox.api.directionsrefresh.v1.DirectionsRefreshService> {
            public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh>;
            public toBuilder(): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
            public initializeCall(): retrofit2.Call<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse>;
            public baseUrl(): string;
            public getGsonBuilder(): com.google.gson.GsonBuilder;
            public constructor();
            public getOkHttpClient(): okhttp3.OkHttpClient;
            public static builder(): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
          }
          export module MapboxDirectionsRefresh {
            export abstract class Builder {
              public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder>;
              public constructor();
              public interceptor(param0: okhttp3.Interceptor): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public requestId(param0: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public legIndex(param0: number): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public baseUrl(param0: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public build(): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh;
              public routeIndex(param0: number): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public clientAppName(param0: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
              public accessToken(param0: string): com.mapbox.api.directionsrefresh.v1.MapboxDirectionsRefresh.Builder;
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
      export module geocoding {
        export module v5 {
          export class AutoValue_MapboxGeocoding extends com.mapbox.api.geocoding.v5.MapboxGeocoding {
            public static class: java.lang.Class<com.mapbox.api.geocoding.v5.AutoValue_MapboxGeocoding>;
            public baseUrl(): string;
            public equals(this_: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module AutoValue_MapboxGeocoding {
            export class Builder extends com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder {
              public static class: java.lang.Class<com.mapbox.api.geocoding.v5.AutoValue_MapboxGeocoding.Builder>;
              public mode(mode: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(minX: number, minY: number, maxX: number, maxY: number): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(southwest: com.mapbox.geojson.Point, northeast: com.mapbox.geojson.Point): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public fuzzyMatch(fuzzyMatch: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(bbox: com.mapbox.geojson.BoundingBox): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public reverseMode(reverseMode: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public query(point: com.mapbox.geojson.Point): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public baseUrl(baseUrl: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(country: androidNative.Array<string>): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public languages(this_: androidNative.Array<java.util.Locale>): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public accessToken(accessToken: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(country: java.util.Locale): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public routing(routing: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public clientAppName(clientAppName: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(country: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public autocomplete(autocomplete: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public query(query: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(bbox: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public languages(languages: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
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
      export module geocoding {
        export module v5 {
          export class GeocodingCriteria {
            public static class: java.lang.Class<com.mapbox.api.geocoding.v5.GeocodingCriteria>;
            public static MODE_PLACES: string = 'mapbox.places';
            public static MODE_PLACES_PERMANENT: string = 'mapbox.places-permanent';
            public static TYPE_COUNTRY: string = 'country';
            public static TYPE_REGION: string = 'region';
            public static TYPE_POSTCODE: string = 'postcode';
            public static TYPE_DISTRICT: string = 'district';
            public static TYPE_PLACE: string = 'place';
            public static TYPE_LOCALITY: string = 'locality';
            public static TYPE_NEIGHBORHOOD: string = 'neighborhood';
            public static TYPE_ADDRESS: string = 'address';
            public static TYPE_POI: string = 'poi';
            public static TYPE_POI_LANDMARK: string = 'poi.landmark';
            public static REVERSE_MODE_DISTANCE: string = 'distance';
            public static REVERSE_MODE_SCORE: string = 'score';
          }
          export module GeocodingCriteria {
            export class GeocodingModeCriteria {
              public static class: java.lang.Class<com.mapbox.api.geocoding.v5.GeocodingCriteria.GeocodingModeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.geocoding.v5.GeocodingCriteria$GeocodingModeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class GeocodingReverseModeCriteria {
              public static class: java.lang.Class<com.mapbox.api.geocoding.v5.GeocodingCriteria.GeocodingReverseModeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.geocoding.v5.GeocodingCriteria$GeocodingReverseModeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class GeocodingTypeCriteria {
              public static class: java.lang.Class<com.mapbox.api.geocoding.v5.GeocodingCriteria.GeocodingTypeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.geocoding.v5.GeocodingCriteria$GeocodingTypeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module geocoding {
        export module v5 {
          export class GeocodingService {
            public static class: java.lang.Class<com.mapbox.api.geocoding.v5.GeocodingService>;
            /**
             * Constructs a new instance of the com.mapbox.api.geocoding.v5.GeocodingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean): retrofit2.Call<com.mapbox.api.geocoding.v5.models.GeocodingResponse>; getBatchCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean): retrofit2.Call<java.util.List<com.mapbox.api.geocoding.v5.models.GeocodingResponse>> });
            public constructor();
            public getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean): retrofit2.Call<com.mapbox.api.geocoding.v5.models.GeocodingResponse>;
            public getBatchCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean): retrofit2.Call<java.util.List<com.mapbox.api.geocoding.v5.models.GeocodingResponse>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module geocoding {
        export module v5 {
          export abstract class MapboxGeocoding extends com.mapbox.core.MapboxService<com.mapbox.api.geocoding.v5.models.GeocodingResponse, com.mapbox.api.geocoding.v5.GeocodingService> {
            public static class: java.lang.Class<com.mapbox.api.geocoding.v5.MapboxGeocoding>;
            public enqueueBatchCall(callback: retrofit2.Callback<java.util.List<com.mapbox.api.geocoding.v5.models.GeocodingResponse>>): void;
            public getGsonBuilder(): com.google.gson.GsonBuilder;
            public baseUrl(): string;
            public constructor();
            public static builder(): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
            public cancelBatchCall(): void;
            public initializeCall(): retrofit2.Call<com.mapbox.api.geocoding.v5.models.GeocodingResponse>;
            public cloneBatchCall(): retrofit2.Call<java.util.List<com.mapbox.api.geocoding.v5.models.GeocodingResponse>>;
            public executeBatchCall(): retrofit2.Response<java.util.List<com.mapbox.api.geocoding.v5.models.GeocodingResponse>>;
          }
          export module MapboxGeocoding {
            export abstract class Builder {
              public static class: java.lang.Class<com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder>;
              public bbox(minX: number, minY: number, maxX: number, maxY: number): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(southwest: com.mapbox.geojson.Point, northeast: com.mapbox.geojson.Point): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public routing(param0: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public query(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(country: androidNative.Array<string>): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public build(): com.mapbox.api.geocoding.v5.MapboxGeocoding;
              public languages(this_: androidNative.Array<java.util.Locale>): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public autocomplete(param0: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public reverseMode(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public proximity(proximity: com.mapbox.geojson.Point): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public accessToken(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public mode(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public geocodingTypes(geocodingTypes: androidNative.Array<string>): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public constructor();
              public baseUrl(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public bbox(bbox: com.mapbox.geojson.BoundingBox): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public intersectionStreets(streetOneName: string, streetTwoName: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public query(point: com.mapbox.geojson.Point): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public clientAppName(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public country(country: java.util.Locale): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public limit(limit: number): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public fuzzyMatch(param0: java.lang.Boolean): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
              public languages(param0: string): com.mapbox.api.geocoding.v5.MapboxGeocoding.Builder;
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
      export module geocoding {
        export module v5 {
          export class SingleElementSafeListTypeAdapter<E> extends com.google.gson.TypeAdapter<java.util.List<any>> {
            public static class: java.lang.Class<com.mapbox.api.geocoding.v5.SingleElementSafeListTypeAdapter<any>>;
            public write(this_: com.google.gson.stream.JsonWriter, out: java.util.List<any>): void;
            public read(in_: com.google.gson.stream.JsonReader): java.util.List<any>;
          }
          export module models {
            export module models {
              export module SingleElementSafeListTypeAdapter {
                export abstract class AutoValue_CarmenContext extends com.mapbox.api.geocoding.v5.models.CarmenContext {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenContext>;
                  public category(): string;
                  public maki(): string;
                  public toString(): string;
                  public text(): string;
                  public wikidata(): string;
                  public shortCode(): string;
                  public hashCode(): number;
                  public id(): string;
                  public equals(this_: any): boolean;
                  public toBuilder(): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                }
                export module AutoValue_CarmenContext {
                  export class Builder extends com.mapbox.api.geocoding.v5.models.CarmenContext.Builder {
                    public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenContext.Builder>;
                    public category(category: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                    public build(): com.mapbox.api.geocoding.v5.models.CarmenContext;
                    public shortCode(shortCode: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                    public wikidata(wikidata: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                    public maki(maki: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                    public id(id: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                    public text(text: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  }
                }
                export abstract class AutoValue_CarmenFeature extends com.mapbox.api.geocoding.v5.models.CarmenFeature {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenFeature>;
                  public bbox(): com.mapbox.geojson.BoundingBox;
                  public toString(): string;
                  public address(): string;
                  public routablePoints(): com.mapbox.api.geocoding.v5.models.RoutablePoints;
                  public properties(): com.google.gson.JsonObject;
                  public type(): string;
                  public id(): string;
                  public equals(this_: any): boolean;
                  public relevance(): java.lang.Double;
                  public matchingText(): string;
                  public context(): java.util.List<com.mapbox.api.geocoding.v5.models.CarmenContext>;
                  public text(): string;
                  public language(): string;
                  public placeName(): string;
                  public matchingPlaceName(): string;
                  public toBuilder(): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public geometry(): com.mapbox.geojson.Geometry;
                  public hashCode(): number;
                  public placeType(): java.util.List<string>;
                }
                export module AutoValue_CarmenFeature {
                  export class Builder extends com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder {
                    public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenFeature.Builder>;
                    public rawCenter(rawCenter: androidNative.Array<number>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public address(address: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public routablePoints(routablePoints: com.mapbox.api.geocoding.v5.models.RoutablePoints): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public id(id: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public geometry(geometry: com.mapbox.geojson.Geometry): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public text(text: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public matchingText(matchingText: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public placeType(placeType: java.util.List<string>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public build(): com.mapbox.api.geocoding.v5.models.CarmenFeature;
                    public relevance(relevance: java.lang.Double): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public placeName(placeName: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public matchingPlaceName(matchingPlaceName: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public context(context: java.util.List<com.mapbox.api.geocoding.v5.models.CarmenContext>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public properties(properties: com.google.gson.JsonObject): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public bbox(bbox: com.mapbox.geojson.BoundingBox): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                    public language(language: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  }
                }
                export abstract class AutoValue_GeocodingResponse extends com.mapbox.api.geocoding.v5.models.GeocodingResponse {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_GeocodingResponse>;
                  public query(): java.util.List<string>;
                  public toString(): string;
                  public features(): java.util.List<com.mapbox.api.geocoding.v5.models.CarmenFeature>;
                  public toBuilder(): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                  public attribution(): string;
                  public type(): string;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_GeocodingResponse {
                  export class Builder extends com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder {
                    public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_GeocodingResponse.Builder>;
                    public features(features: java.util.List<com.mapbox.api.geocoding.v5.models.CarmenFeature>): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                    public build(): com.mapbox.api.geocoding.v5.models.GeocodingResponse;
                    public attribution(attribution: string): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                    public query(query: java.util.List<string>): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                  }
                }
                export abstract class AutoValue_RoutablePoint extends com.mapbox.api.geocoding.v5.models.RoutablePoint {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoint>;
                  public toString(): string;
                  public name(): string;
                  public toBuilder(): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_RoutablePoint {
                  export class Builder extends com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder {
                    public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoint.Builder>;
                    public rawCoordinate(rawCoordinate: androidNative.Array<number>): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                    public name(name: string): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                    public build(): com.mapbox.api.geocoding.v5.models.RoutablePoint;
                  }
                }
                export abstract class AutoValue_RoutablePoints extends com.mapbox.api.geocoding.v5.models.RoutablePoints {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoints>;
                  public toString(): string;
                  public toBuilder(): com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder;
                  public points(): java.util.List<com.mapbox.api.geocoding.v5.models.RoutablePoint>;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_RoutablePoints {
                  export class Builder extends com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder {
                    public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoints.Builder>;
                    public build(): com.mapbox.api.geocoding.v5.models.RoutablePoints;
                    public points(points: java.util.List<com.mapbox.api.geocoding.v5.models.RoutablePoint>): com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValueGson_GeocodingAdapterFactory extends com.mapbox.api.geocoding.v5.models.GeocodingAdapterFactory {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValueGson_GeocodingAdapterFactory>;
                public static create(): com.google.gson.TypeAdapterFactory;
                public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValue_CarmenContext extends com.mapbox.api.geocoding.v5.models.AutoValue_CarmenContext {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenContext>;
              }
              export module AutoValue_CarmenContext {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.CarmenContext> {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenContext.GsonTypeAdapter>;
                  public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.geocoding.v5.models.CarmenContext;
                  public toString(): string;
                  public write(string_adapter: com.google.gson.stream.JsonWriter, string_adapter: com.mapbox.api.geocoding.v5.models.CarmenContext): void;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValue_CarmenFeature extends com.mapbox.api.geocoding.v5.models.AutoValue_CarmenFeature {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenFeature>;
              }
              export module AutoValue_CarmenFeature {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.CarmenFeature> {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_CarmenFeature.GsonTypeAdapter>;
                  public toString(): string;
                  public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.geocoding.v5.models.CarmenFeature;
                  public write(boundingBox_adapter: com.google.gson.stream.JsonWriter, string_adapter: com.mapbox.api.geocoding.v5.models.CarmenFeature): void;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValue_GeocodingResponse extends com.mapbox.api.geocoding.v5.models.AutoValue_GeocodingResponse {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_GeocodingResponse>;
              }
              export module AutoValue_GeocodingResponse {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.GeocodingResponse> {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_GeocodingResponse.GsonTypeAdapter>;
                  public toString(): string;
                  public write(list__string_adapter: com.google.gson.stream.JsonWriter, list__carmenFeature_adapter: com.mapbox.api.geocoding.v5.models.GeocodingResponse): void;
                  public read(list__string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.geocoding.v5.models.GeocodingResponse;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValue_RoutablePoint extends com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoint {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoint>;
              }
              export module AutoValue_RoutablePoint {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.RoutablePoint> {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoint.GsonTypeAdapter>;
                  public read(array__double_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.geocoding.v5.models.RoutablePoint;
                  public toString(): string;
                  public write(array__double_adapter: com.google.gson.stream.JsonWriter, this_: com.mapbox.api.geocoding.v5.models.RoutablePoint): void;
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
        export module geocoding {
          export module v5 {
            export module models {
              export class AutoValue_RoutablePoints extends com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoints {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoints>;
              }
              export module AutoValue_RoutablePoints {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.RoutablePoints> {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.AutoValue_RoutablePoints.GsonTypeAdapter>;
                  public write(this_: com.google.gson.stream.JsonWriter, jsonWriter: com.mapbox.api.geocoding.v5.models.RoutablePoints): void;
                  public toString(): string;
                  public read(_name: com.google.gson.stream.JsonReader): com.mapbox.api.geocoding.v5.models.RoutablePoints;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class CarmenContext {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.CarmenContext>;
                public constructor();
                public text(): string;
                public wikidata(): string;
                public shortCode(): string;
                public category(): string;
                public toJson(): string;
                public toBuilder(): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                public static builder(): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                public maki(): string;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.CarmenContext>;
                public static fromJson(json: string): com.mapbox.api.geocoding.v5.models.CarmenContext;
                public id(): string;
              }
              export module CarmenContext {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.CarmenContext.Builder>;
                  public wikidata(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  public maki(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  public build(): com.mapbox.api.geocoding.v5.models.CarmenContext;
                  public id(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  public category(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  public shortCode(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
                  public text(param0: string): com.mapbox.api.geocoding.v5.models.CarmenContext.Builder;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class CarmenFeature {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.CarmenFeature>;
                public constructor();
                public bbox(): com.mapbox.geojson.BoundingBox;
                public static builder(): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.CarmenFeature>;
                public toJson(): string;
                public matchingText(): string;
                public routablePoints(): com.mapbox.api.geocoding.v5.models.RoutablePoints;
                public text(): string;
                public relevance(): java.lang.Double;
                public properties(): com.google.gson.JsonObject;
                public placeType(): java.util.List<string>;
                public address(): string;
                public type(): string;
                public geometry(): com.mapbox.geojson.Geometry;
                public context(): java.util.List<com.mapbox.api.geocoding.v5.models.CarmenContext>;
                public static fromJson(json: string): com.mapbox.api.geocoding.v5.models.CarmenFeature;
                public center(): com.mapbox.geojson.Point;
                public matchingPlaceName(): string;
                public language(): string;
                public toBuilder(): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                public id(): string;
                public placeName(): string;
              }
              export module CarmenFeature {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder>;
                  public placeType(param0: java.util.List<string>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public placeName(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public routablePoints(param0: com.mapbox.api.geocoding.v5.models.RoutablePoints): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public constructor();
                  public properties(param0: com.google.gson.JsonObject): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public context(param0: java.util.List<com.mapbox.api.geocoding.v5.models.CarmenContext>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public language(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public id(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public matchingPlaceName(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public address(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public bbox(param0: com.mapbox.geojson.BoundingBox): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public relevance(param0: java.lang.Double): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public build(): com.mapbox.api.geocoding.v5.models.CarmenFeature;
                  public rawCenter(param0: androidNative.Array<number>): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public text(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
                  public matchingText(param0: string): com.mapbox.api.geocoding.v5.models.CarmenFeature.Builder;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class GeocodingAdapterFactory {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.GeocodingAdapterFactory>;
                public constructor();
                public static create(): com.google.gson.TypeAdapterFactory;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class GeocodingResponse {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.GeocodingResponse>;
                public constructor();
                public query(): java.util.List<string>;
                public toBuilder(): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                public static builder(): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                public features(): java.util.List<com.mapbox.api.geocoding.v5.models.CarmenFeature>;
                public toJson(): string;
                public type(): string;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.GeocodingResponse>;
                public attribution(): string;
                public static fromJson(json: string): com.mapbox.api.geocoding.v5.models.GeocodingResponse;
              }
              export module GeocodingResponse {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder>;
                  public attribution(param0: string): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                  public features(param0: java.util.List<com.mapbox.api.geocoding.v5.models.CarmenFeature>): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                  public query(param0: java.util.List<string>): com.mapbox.api.geocoding.v5.models.GeocodingResponse.Builder;
                  public build(): com.mapbox.api.geocoding.v5.models.GeocodingResponse;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class RoutablePoint {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.RoutablePoint>;
                public constructor();
                public toBuilder(): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.RoutablePoint>;
                public coordinate(): com.mapbox.geojson.Point;
                public name(): string;
              }
              export module RoutablePoint {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder>;
                  public rawCoordinate(param0: androidNative.Array<number>): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                  public name(param0: string): com.mapbox.api.geocoding.v5.models.RoutablePoint.Builder;
                  public constructor();
                  public build(): com.mapbox.api.geocoding.v5.models.RoutablePoint;
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
        export module geocoding {
          export module v5 {
            export module models {
              export abstract class RoutablePoints {
                public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.RoutablePoints>;
                public constructor();
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.geocoding.v5.models.RoutablePoints>;
                public toBuilder(): com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder;
                public points(): java.util.List<com.mapbox.api.geocoding.v5.models.RoutablePoint>;
              }
              export module RoutablePoints {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder>;
                  public build(): com.mapbox.api.geocoding.v5.models.RoutablePoints;
                  public constructor();
                  public points(param0: java.util.List<com.mapbox.api.geocoding.v5.models.RoutablePoint>): com.mapbox.api.geocoding.v5.models.RoutablePoints.Builder;
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
        export module isochrone {
          export class AutoValue_MapboxIsochrone extends com.mapbox.api.isochrone.MapboxIsochrone {
            public static class: java.lang.Class<com.mapbox.api.isochrone.AutoValue_MapboxIsochrone>;
            public toString(): string;
            public equals(this_: any): boolean;
            public hashCode(): number;
            public baseUrl(): string;
          }
          export module AutoValue_MapboxIsochrone {
            export class Builder extends com.mapbox.api.isochrone.MapboxIsochrone.Builder {
              public static class: java.lang.Class<com.mapbox.api.isochrone.AutoValue_MapboxIsochrone.Builder>;
              public baseUrl(baseUrl: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public profile(profile: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public coordinates(coordinates: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public user(user: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public polygons(polygons: java.lang.Boolean): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public generalize(generalize: java.lang.Float): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public accessToken(accessToken: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public coordinates(queryPoint: com.mapbox.geojson.Point): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public denoise(denoise: java.lang.Float): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
            }
          }
        }
      }
    }
  }

  declare module com {
    export module mapbox {
      export module api {
        export module isochrone {
          export class IsochroneCriteria {
            public static class: java.lang.Class<com.mapbox.api.isochrone.IsochroneCriteria>;
            public static PROFILE_DEFAULT_USER: string = 'mapbox';
            public static PROFILE_WALKING: string = 'walking';
            public static PROFILE_DRIVING: string = 'driving';
            public static PROFILE_CYCLING: string = 'cycling';
            public constructor();
          }
          export module IsochroneCriteria {
            export class IsochroneProfile {
              public static class: java.lang.Class<com.mapbox.api.isochrone.IsochroneCriteria.IsochroneProfile>;
              /**
               * Constructs a new instance of the com.mapbox.api.isochrone.IsochroneCriteria$IsochroneProfile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module api {
        export module isochrone {
          export class IsochroneService {
            public static class: java.lang.Class<com.mapbox.api.isochrone.IsochroneService>;
            /**
             * Constructs a new instance of the com.mapbox.api.isochrone.IsochroneService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Boolean, param7: java.lang.Float, param8: java.lang.Float): retrofit2.Call<com.mapbox.geojson.FeatureCollection> });
            public constructor();
            public getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Boolean, param7: java.lang.Float, param8: java.lang.Float): retrofit2.Call<com.mapbox.geojson.FeatureCollection>;
          }
        }
      }
    }
  }

  declare module com {
    export module mapbox {
      export module api {
        export module isochrone {
          export abstract class MapboxIsochrone extends com.mapbox.core.MapboxService<com.mapbox.geojson.FeatureCollection, com.mapbox.api.isochrone.IsochroneService> {
            public static class: java.lang.Class<com.mapbox.api.isochrone.MapboxIsochrone>;
            public initializeCall(): retrofit2.Call<com.mapbox.geojson.FeatureCollection>;
            public constructor();
            public static builder(): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
            public baseUrl(): string;
            public getGsonBuilder(): com.google.gson.GsonBuilder;
          }
          export module MapboxIsochrone {
            export abstract class Builder {
              public static class: java.lang.Class<com.mapbox.api.isochrone.MapboxIsochrone.Builder>;
              public build(): com.mapbox.api.isochrone.MapboxIsochrone;
              public constructor();
              public denoise(param0: java.lang.Float): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public baseUrl(param0: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public generalize(param0: java.lang.Float): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public profile(param0: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public polygons(param0: java.lang.Boolean): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public addContoursColors(contoursColors: androidNative.Array<string>): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public coordinates(param0: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public addContoursMinutes(listOfMinuteValues: androidNative.Array<java.lang.Integer>): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public accessToken(param0: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public coordinates(queryPoint: com.mapbox.geojson.Point): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
              public user(param0: string): com.mapbox.api.isochrone.MapboxIsochrone.Builder;
            }
          }
        }
      }
    }
  }

  declare module com {
    export module mapbox {
      export module api {
        export module matching {
          export module v5 {
            export class AutoValue_MapboxMapMatching extends com.mapbox.api.matching.v5.MapboxMapMatching {
              public static class: java.lang.Class<com.mapbox.api.matching.v5.AutoValue_MapboxMapMatching>;
              public baseUrl(): string;
              public equals(this_: any): boolean;
              public hashCode(): number;
              public toString(): string;
            }
            export module AutoValue_MapboxMapMatching {
              export class Builder extends com.mapbox.api.matching.v5.MapboxMapMatching.Builder {
                public static class: java.lang.Class<com.mapbox.api.matching.v5.AutoValue_MapboxMapMatching.Builder>;
                public voiceUnits(voiceUnits: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public bannerInstructions(bannerInstructions: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public timestamps(timestamps: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public timestamps(timestamps: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public language(language: java.util.Locale): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public steps(steps: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public voiceInstructions(voiceInstructions: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public annotations(annotations: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public autoBuild(): com.mapbox.api.matching.v5.MapboxMapMatching;
                public geometries(geometries: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public roundaboutExits(roundaboutExits: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public clientAppName(clientAppName: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public language(language: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public baseUrl(baseUrl: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public coordinates(coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public overview(overview: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public annotations(annotations: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public accessToken(accessToken: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public user(user: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public profile(profile: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public coordinates(coordinates: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public tidy(tidy: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
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
        export module matching {
          export module v5 {
            export class MapMatchingService {
              public static class: java.lang.Class<com.mapbox.api.matching.v5.MapMatchingService>;
              /**
               * Constructs a new instance of the com.mapbox.api.matching.v5.MapMatchingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean, param14: java.lang.Boolean, param15: java.lang.Boolean, param16: string, param17: string, param18: string, param19: string, param20: string): retrofit2.Call<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
                postCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean, param14: java.lang.Boolean, param15: java.lang.Boolean, param16: string, param17: string, param18: string, param19: string, param20: string): retrofit2.Call<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
              });
              public constructor();
              public postCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean, param14: java.lang.Boolean, param15: java.lang.Boolean, param16: string, param17: string, param18: string, param19: string, param20: string): retrofit2.Call<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
              public getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Boolean, param8: string, param9: string, param10: string, param11: string, param12: java.lang.Boolean, param13: java.lang.Boolean, param14: java.lang.Boolean, param15: java.lang.Boolean, param16: string, param17: string, param18: string, param19: string, param20: string): retrofit2.Call<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
            }
          }
        }
      }
    }
  }

  declare module com {
    export module mapbox {
      export module api {
        export module matching {
          export module v5 {
            export abstract class MapboxMapMatching extends com.mapbox.core.MapboxService<com.mapbox.api.matching.v5.models.MapMatchingResponse, com.mapbox.api.matching.v5.MapMatchingService> {
              public static class: java.lang.Class<com.mapbox.api.matching.v5.MapboxMapMatching>;
              public static IGNORE_ACCESS: string = 'access';
              public static IGNORE_ONEWAYS: string = 'oneways';
              public static IGNORE_RESTRICTIONS: string = 'restrictions';
              public executeCall(): retrofit2.Response<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
              public getGsonBuilder(): com.google.gson.GsonBuilder;
              public baseUrl(): string;
              public static builder(): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
              public constructor();
              public enqueueCall(callback: retrofit2.Callback<com.mapbox.api.matching.v5.models.MapMatchingResponse>): void;
              public initializeCall(): retrofit2.Call<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
            }
            export module MapboxMapMatching {
              export abstract class Builder {
                public static class: java.lang.Class<com.mapbox.api.matching.v5.MapboxMapMatching.Builder>;
                public coordinate(coordinate: com.mapbox.geojson.Point): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public post(): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public get(): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public roundaboutExits(param0: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public waypointIndices(waypointIndices: androidNative.Array<java.lang.Integer>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public voiceUnits(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public clientAppName(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public bannerInstructions(param0: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public annotations(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public addWaypointNames(waypointNames: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public coordinates(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public accessToken(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public timestamps(timestamps: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public language(language: java.util.Locale): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public tidy(param0: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public user(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public coordinates(coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public constructor();
                public baseUrl(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public profile(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public voiceInstructions(param0: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                /** @deprecated */
                public waypoints(waypoints: androidNative.Array<java.lang.Integer>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public build(): com.mapbox.api.matching.v5.MapboxMapMatching;
                public geometries(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public steps(param0: java.lang.Boolean): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public language(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public autoBuild(): com.mapbox.api.matching.v5.MapboxMapMatching;
                public addIgnore(ignore: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public radiuses(radiuses: androidNative.Array<java.lang.Double>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public overview(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public timestamps(param0: string): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public annotations(annotations: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
                public addApproaches(approaches: androidNative.Array<string>): com.mapbox.api.matching.v5.MapboxMapMatching.Builder;
              }
              export class IgnoreScope {
                public static class: java.lang.Class<com.mapbox.api.matching.v5.MapboxMapMatching.IgnoreScope>;
                /**
                 * Constructs a new instance of the com.mapbox.api.matching.v5.MapboxMapMatching$IgnoreScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module api {
        export module matching {
          export module v5 {
            export class MatchingResponseFactory {
              public static class: java.lang.Class<com.mapbox.api.matching.v5.MatchingResponseFactory>;
            }
            export module models {
              export module models {
                export module MatchingResponseFactory {
                  export abstract class AutoValue_MapMatchingError extends com.mapbox.api.matching.v5.models.MapMatchingError {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingError>;
                    public code(): string;
                    public toString(): string;
                    public message(): string;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MapMatchingError {
                    export class Builder extends com.mapbox.api.matching.v5.models.MapMatchingError.Builder {
                      public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingError.Builder>;
                      public build(): com.mapbox.api.matching.v5.models.MapMatchingError;
                      public message(message: string): com.mapbox.api.matching.v5.models.MapMatchingError.Builder;
                      public code(code: string): com.mapbox.api.matching.v5.models.MapMatchingError.Builder;
                    }
                  }
                  export abstract class AutoValue_MapMatchingMatching extends com.mapbox.api.matching.v5.models.MapMatchingMatching {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingMatching>;
                    public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                    public toString(): string;
                    public weight(): number;
                    public weightName(): string;
                    public routeIndex(): string;
                    public requestUuid(): string;
                    public duration(): number;
                    public distance(): number;
                    public confidence(): number;
                    public equals(this_: any): boolean;
                    public geometry(): string;
                    public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
                    public voiceLanguage(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                  }
                  export module AutoValue_MapMatchingMatching {
                    export class Builder extends com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder {
                      public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingMatching.Builder>;
                      public legs(legs: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public requestUuid(requestUuid: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public build(): com.mapbox.api.matching.v5.models.MapMatchingMatching;
                      public geometry(geometry: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public duration(duration: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public confidence(confidence: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public routeIndex(routeIndex: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public distance(distance: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public weight(weight: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public weightName(weightName: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public voiceLanguage(voiceLanguage: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                      public routeOptions(routeOptions: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    }
                  }
                  export abstract class AutoValue_MapMatchingResponse extends com.mapbox.api.matching.v5.models.MapMatchingResponse {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingResponse>;
                    public code(): string;
                    public toString(): string;
                    public tracepoints(): java.util.List<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>;
                    public message(): string;
                    public matchings(): java.util.List<com.mapbox.api.matching.v5.models.MapMatchingMatching>;
                    public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MapMatchingResponse {
                    export class Builder extends com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder {
                      public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingResponse.Builder>;
                      public message(message: string): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                      public tracepoints(tracepoints: java.util.List<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                      public matchings(matchings: java.util.List<com.mapbox.api.matching.v5.models.MapMatchingMatching>): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                      public code(code: string): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                      public build(): com.mapbox.api.matching.v5.models.MapMatchingResponse;
                    }
                  }
                  export abstract class AutoValue_MapMatchingTracepoint extends com.mapbox.api.matching.v5.models.MapMatchingTracepoint {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingTracepoint>;
                    public alternativesCount(): java.lang.Integer;
                    public toString(): string;
                    public matchingsIndex(): java.lang.Integer;
                    public waypointIndex(): java.lang.Integer;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                    public hashCode(): number;
                    public equals(this_: any): boolean;
                  }
                  export module AutoValue_MapMatchingTracepoint {
                    export class Builder extends com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder {
                      public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingTracepoint.Builder>;
                      public matchingsIndex(matchingsIndex: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                      public alternativesCount(alternativesCount: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                      public name(name: string): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                      public rawLocation(rawLocation: androidNative.Array<number>): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                      public build(): com.mapbox.api.matching.v5.models.MapMatchingTracepoint;
                      public waypointIndex(waypointIndex: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
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
          export module matching {
            export module v5 {
              export module models {
                export class AutoValueGson_MapMatchingAdapterFactory extends com.mapbox.api.matching.v5.models.MapMatchingAdapterFactory {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValueGson_MapMatchingAdapterFactory>;
                  public static create(): com.google.gson.TypeAdapterFactory;
                  public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
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
          export module matching {
            export module v5 {
              export module models {
                export class AutoValue_MapMatchingError extends com.mapbox.api.matching.v5.models.AutoValue_MapMatchingError {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingError>;
                }
                export module AutoValue_MapMatchingError {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingError> {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingError.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.matching.v5.models.MapMatchingError;
                    public write(string_adapter: com.google.gson.stream.JsonWriter, this_: com.mapbox.api.matching.v5.models.MapMatchingError): void;
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
          export module matching {
            export module v5 {
              export module models {
                export class AutoValue_MapMatchingMatching extends com.mapbox.api.matching.v5.models.AutoValue_MapMatchingMatching {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingMatching>;
                }
                export module AutoValue_MapMatchingMatching {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingMatching> {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingMatching.GsonTypeAdapter>;
                    public toString(): string;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.matching.v5.models.MapMatchingMatching;
                    public write(double__adapter: com.google.gson.stream.JsonWriter, double__adapter: com.mapbox.api.matching.v5.models.MapMatchingMatching): void;
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
          export module matching {
            export module v5 {
              export module models {
                export class AutoValue_MapMatchingResponse extends com.mapbox.api.matching.v5.models.AutoValue_MapMatchingResponse {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingResponse>;
                }
                export module AutoValue_MapMatchingResponse {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingResponse> {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingResponse.GsonTypeAdapter>;
                    public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.matching.v5.models.MapMatchingResponse;
                    public toString(): string;
                    public write(string_adapter: com.google.gson.stream.JsonWriter, list__mapMatchingMatching_adapter: com.mapbox.api.matching.v5.models.MapMatchingResponse): void;
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
          export module matching {
            export module v5 {
              export module models {
                export class AutoValue_MapMatchingTracepoint extends com.mapbox.api.matching.v5.models.AutoValue_MapMatchingTracepoint {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingTracepoint>;
                }
                export module AutoValue_MapMatchingTracepoint {
                  export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingTracepoint> {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.AutoValue_MapMatchingTracepoint.GsonTypeAdapter>;
                    public write(integer_adapter: com.google.gson.stream.JsonWriter, integer_adapter: com.mapbox.api.matching.v5.models.MapMatchingTracepoint): void;
                    public toString(): string;
                    public read(integer_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.matching.v5.models.MapMatchingTracepoint;
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
          export module matching {
            export module v5 {
              export module models {
                export abstract class MapMatchingAdapterFactory {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingAdapterFactory>;
                  public constructor();
                  public static create(): com.google.gson.TypeAdapterFactory;
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
          export module matching {
            export module v5 {
              export module models {
                export abstract class MapMatchingError {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingError>;
                  public constructor();
                  public static builder(): com.mapbox.api.matching.v5.models.MapMatchingError.Builder;
                  public code(): string;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingError>;
                  public message(): string;
                }
                export module MapMatchingError {
                  export abstract class Builder {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingError.Builder>;
                    public message(param0: string): com.mapbox.api.matching.v5.models.MapMatchingError.Builder;
                    public code(param0: string): com.mapbox.api.matching.v5.models.MapMatchingError.Builder;
                    public constructor();
                    public build(): com.mapbox.api.matching.v5.models.MapMatchingError;
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
          export module matching {
            export module v5 {
              export module models {
                export abstract class MapMatchingMatching {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingMatching>;
                  public constructor();
                  public weightName(): string;
                  public routeIndex(): string;
                  public duration(): number;
                  public toDirectionRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  public requestUuid(): string;
                  public weight(): number;
                  public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                  public geometry(): string;
                  public static builder(): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                  public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                  public distance(): number;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingMatching>;
                  public confidence(): number;
                  public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
                  public voiceLanguage(): string;
                }
                export module MapMatchingMatching {
                  export abstract class Builder {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder>;
                    public weightName(param0: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public weight(param0: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public confidence(param0: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public legs(param0: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public duration(param0: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public constructor();
                    public voiceLanguage(param0: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public geometry(param0: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public requestUuid(param0: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public routeIndex(param0: string): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public distance(param0: number): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public routeOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.matching.v5.models.MapMatchingMatching.Builder;
                    public build(): com.mapbox.api.matching.v5.models.MapMatchingMatching;
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
          export module matching {
            export module v5 {
              export module models {
                export abstract class MapMatchingResponse {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
                  public constructor();
                  public static fromJson(json: string): com.mapbox.api.matching.v5.models.MapMatchingResponse;
                  public matchings(): java.util.List<com.mapbox.api.matching.v5.models.MapMatchingMatching>;
                  public code(): string;
                  public tracepoints(): java.util.List<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>;
                  public static builder(): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingResponse>;
                  public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                  public message(): string;
                }
                export module MapMatchingResponse {
                  export abstract class Builder {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder>;
                    public tracepoints(param0: java.util.List<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                    public message(param0: string): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                    public code(param0: string): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                    public constructor();
                    public matchings(param0: java.util.List<com.mapbox.api.matching.v5.models.MapMatchingMatching>): com.mapbox.api.matching.v5.models.MapMatchingResponse.Builder;
                    public build(): com.mapbox.api.matching.v5.models.MapMatchingResponse;
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
          export module matching {
            export module v5 {
              export module models {
                export abstract class MapMatchingTracepoint {
                  public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>;
                  public constructor();
                  public alternativesCount(): java.lang.Integer;
                  public waypointIndex(): java.lang.Integer;
                  public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.matching.v5.models.MapMatchingTracepoint>;
                  public toBuilder(): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                  public matchingsIndex(): java.lang.Integer;
                  public location(): com.mapbox.geojson.Point;
                  public name(): string;
                  public static builder(): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                }
                export module MapMatchingTracepoint {
                  export abstract class Builder {
                    public static class: java.lang.Class<com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder>;
                    public alternativesCount(param0: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                    public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                    public build(): com.mapbox.api.matching.v5.models.MapMatchingTracepoint;
                    public name(param0: string): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                    public waypointIndex(param0: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
                    public constructor();
                    public matchingsIndex(param0: java.lang.Integer): com.mapbox.api.matching.v5.models.MapMatchingTracepoint.Builder;
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
          export module matrix {
            export module v1 {
              export class AutoValueGson_MatrixAdapterFactory extends com.mapbox.api.matrix.v1.MatrixAdapterFactory {
                public static class: java.lang.Class<com.mapbox.api.matrix.v1.AutoValueGson_MatrixAdapterFactory>;
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
          export module matrix {
            export module v1 {
              export class AutoValue_MapboxMatrix extends com.mapbox.api.matrix.v1.MapboxMatrix {
                public static class: java.lang.Class<com.mapbox.api.matrix.v1.AutoValue_MapboxMatrix>;
                public baseUrl(): string;
                public equals(this_: any): boolean;
                public hashCode(): number;
                public toString(): string;
              }
              export module AutoValue_MapboxMatrix {
                export class Builder extends com.mapbox.api.matrix.v1.MapboxMatrix.Builder {
                  public static class: java.lang.Class<com.mapbox.api.matrix.v1.AutoValue_MapboxMatrix.Builder>;
                  public user(user: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public profile(profile: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public baseUrl(baseUrl: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public clientAppName(clientAppName: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public accessToken(accessToken: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
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
          export module matrix {
            export module v1 {
              export abstract class MapboxMatrix extends com.mapbox.core.MapboxService<com.mapbox.api.matrix.v1.models.MatrixResponse, com.mapbox.api.matrix.v1.MatrixService> {
                public static class: java.lang.Class<com.mapbox.api.matrix.v1.MapboxMatrix>;
                public getGsonBuilder(): com.google.gson.GsonBuilder;
                public baseUrl(): string;
                public static builder(): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                public constructor();
                public initializeCall(): retrofit2.Call<com.mapbox.api.matrix.v1.models.MatrixResponse>;
              }
              export module MapboxMatrix {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.api.matrix.v1.MapboxMatrix.Builder>;
                  public constructor();
                  public accessToken(param0: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public destinations(destinations: androidNative.Array<java.lang.Integer>): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public build(): com.mapbox.api.matrix.v1.MapboxMatrix;
                  public addAnnotations(annotations: androidNative.Array<string>): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public coordinates(coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public coordinateListSizeLimit(coordinateListSizeLimit: java.lang.Integer): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public clientAppName(param0: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public profile(param0: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public addApproaches(approaches: androidNative.Array<string>): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public baseUrl(param0: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public coordinate(coordinate: com.mapbox.geojson.Point): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public sources(sources: androidNative.Array<java.lang.Integer>): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
                  public user(param0: string): com.mapbox.api.matrix.v1.MapboxMatrix.Builder;
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
          export module matrix {
            export module v1 {
              export abstract class MatrixAdapterFactory {
                public static class: java.lang.Class<com.mapbox.api.matrix.v1.MatrixAdapterFactory>;
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
          export module matrix {
            export module v1 {
              export class MatrixService {
                public static class: java.lang.Class<com.mapbox.api.matrix.v1.MatrixService>;
                /**
                 * Constructs a new instance of the com.mapbox.api.matrix.v1.MatrixService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string): retrofit2.Call<com.mapbox.api.matrix.v1.models.MatrixResponse> });
                public constructor();
                public getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string): retrofit2.Call<com.mapbox.api.matrix.v1.models.MatrixResponse>;
              }
              export module models {
                export module models {
                  export module MatrixService {
                    export abstract class AutoValue_MatrixResponse extends com.mapbox.api.matrix.v1.models.MatrixResponse {
                      public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.AutoValue_MatrixResponse>;
                      public code(): string;
                      public toString(): string;
                      public destinations(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                      public sources(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                      public distances(): java.util.List<androidNative.Array<java.lang.Double>>;
                      public toBuilder(): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                      public hashCode(): number;
                      public durations(): java.util.List<androidNative.Array<java.lang.Double>>;
                      public equals(this_: any): boolean;
                    }
                    export module AutoValue_MatrixResponse {
                      export class Builder extends com.mapbox.api.matrix.v1.models.MatrixResponse.Builder {
                        public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.AutoValue_MatrixResponse.Builder>;
                        public code(code: string): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                        public durations(durations: java.util.List<androidNative.Array<java.lang.Double>>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                        public distances(distances: java.util.List<androidNative.Array<java.lang.Double>>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                        public build(): com.mapbox.api.matrix.v1.models.MatrixResponse;
                        public sources(sources: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                        public destinations(destinations: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
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
            export module matrix {
              export module v1 {
                export module models {
                  export class AutoValue_MatrixResponse extends com.mapbox.api.matrix.v1.models.AutoValue_MatrixResponse {
                    public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.AutoValue_MatrixResponse>;
                  }
                  export module AutoValue_MatrixResponse {
                    export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.matrix.v1.models.MatrixResponse> {
                      public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.AutoValue_MatrixResponse.GsonTypeAdapter>;
                      public toString(): string;
                      public read(list__directionsWaypoint_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.matrix.v1.models.MatrixResponse;
                      public write(list__directionsWaypoint_adapter: com.google.gson.stream.JsonWriter, list__directionsWaypoint_adapter: com.mapbox.api.matrix.v1.models.MatrixResponse): void;
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
            export module matrix {
              export module v1 {
                export module models {
                  export abstract class MatrixResponse {
                    public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.MatrixResponse>;
                    public constructor();
                    public destinations(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public sources(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.matrix.v1.models.MatrixResponse>;
                    public durations(): java.util.List<androidNative.Array<java.lang.Double>>;
                    public code(): string;
                    public toBuilder(): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                    public static builder(): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                    public distances(): java.util.List<androidNative.Array<java.lang.Double>>;
                  }
                  export module MatrixResponse {
                    export abstract class Builder {
                      public static class: java.lang.Class<com.mapbox.api.matrix.v1.models.MatrixResponse.Builder>;
                      public build(): com.mapbox.api.matrix.v1.models.MatrixResponse;
                      public distances(param0: java.util.List<androidNative.Array<java.lang.Double>>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                      public constructor();
                      public sources(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                      public durations(param0: java.util.List<androidNative.Array<java.lang.Double>>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                      public code(param0: string): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
                      public destinations(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.matrix.v1.models.MatrixResponse.Builder;
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
            export module optimization {
              export module v1 {
                export class AutoValue_MapboxOptimization extends com.mapbox.api.optimization.v1.MapboxOptimization {
                  public static class: java.lang.Class<com.mapbox.api.optimization.v1.AutoValue_MapboxOptimization>;
                  public baseUrl(): string;
                  public equals(this_: any): boolean;
                  public hashCode(): number;
                  public toString(): string;
                }
                export module AutoValue_MapboxOptimization {
                  export class Builder extends com.mapbox.api.optimization.v1.MapboxOptimization.Builder {
                    public static class: java.lang.Class<com.mapbox.api.optimization.v1.AutoValue_MapboxOptimization.Builder>;
                    public user(user: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public geometries(geometries: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public accessToken(accessToken: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public clientAppName(clientAppName: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public source(source: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public language(language: java.util.Locale): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public destination(destination: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public roundTrip(roundTrip: java.lang.Boolean): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public language(language: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public baseUrl(baseUrl: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public profile(profile: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public overview(overview: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public steps(steps: java.lang.Boolean): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
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
            export module optimization {
              export module v1 {
                export abstract class MapboxOptimization extends com.mapbox.core.MapboxService<com.mapbox.api.optimization.v1.models.OptimizationResponse, com.mapbox.api.optimization.v1.OptimizationService> {
                  public static class: java.lang.Class<com.mapbox.api.optimization.v1.MapboxOptimization>;
                  public getGsonBuilder(): com.google.gson.GsonBuilder;
                  public baseUrl(): string;
                  public constructor();
                  public initializeCall(): retrofit2.Call<com.mapbox.api.optimization.v1.models.OptimizationResponse>;
                  public enqueueCall(callback: retrofit2.Callback<com.mapbox.api.optimization.v1.models.OptimizationResponse>): void;
                  public executeCall(): retrofit2.Response<com.mapbox.api.optimization.v1.models.OptimizationResponse>;
                  public static builder(): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                }
                export module MapboxOptimization {
                  export abstract class Builder {
                    public static class: java.lang.Class<com.mapbox.api.optimization.v1.MapboxOptimization.Builder>;
                    public constructor();
                    public baseUrl(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public annotations(annotations: androidNative.Array<string>): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public user(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public radiuses(radiuses: androidNative.Array<number>): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public bearing(angle: number, tolerance: number): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public source(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public steps(param0: java.lang.Boolean): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public language(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public distribution(pickup: java.lang.Integer, dropOff: java.lang.Integer): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public overview(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public build(): com.mapbox.api.optimization.v1.MapboxOptimization;
                    public coordinate(coordinate: com.mapbox.geojson.Point): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public language(language: java.util.Locale): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public roundTrip(param0: java.lang.Boolean): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public coordinates(coordinates: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public geometries(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public profile(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public destination(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public clientAppName(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
                    public accessToken(param0: string): com.mapbox.api.optimization.v1.MapboxOptimization.Builder;
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
            export module optimization {
              export module v1 {
                export class OptimizationResponseFactory {
                  public static class: java.lang.Class<com.mapbox.api.optimization.v1.OptimizationResponseFactory>;
                }
              }
            }
          }
        }
      }

      declare module com {
        export module mapbox {
          export module api {
            export module optimization {
              export module v1 {
                export class OptimizationService {
                  public static class: java.lang.Class<com.mapbox.api.optimization.v1.OptimizationService>;
                  /**
                   * Constructs a new instance of the com.mapbox.api.optimization.v1.OptimizationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Boolean, param6: string, param7: string, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string): retrofit2.Call<com.mapbox.api.optimization.v1.models.OptimizationResponse> });
                  public constructor();
                  public getCall(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Boolean, param6: string, param7: string, param8: java.lang.Boolean, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string): retrofit2.Call<com.mapbox.api.optimization.v1.models.OptimizationResponse>;
                }
                export module models {
                  export module models {
                    export module OptimizationService {
                      export abstract class AutoValue_OptimizationResponse extends com.mapbox.api.optimization.v1.models.OptimizationResponse {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationResponse>;
                        public code(): string;
                        public waypoints(): java.util.List<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>;
                        public toString(): string;
                        public trips(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                        public hashCode(): number;
                        public toBuilder(): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                        public equals(this_: any): boolean;
                      }
                      export module AutoValue_OptimizationResponse {
                        export class Builder extends com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder {
                          public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationResponse.Builder>;
                          public code(code: string): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                          public waypoints(waypoints: java.util.List<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                          public trips(trips: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                          public build(): com.mapbox.api.optimization.v1.models.OptimizationResponse;
                        }
                      }
                      export abstract class AutoValue_OptimizationWaypoint extends com.mapbox.api.optimization.v1.models.OptimizationWaypoint {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationWaypoint>;
                        public toString(): string;
                        public toBuilder(): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                        public name(): string;
                        public waypointIndex(): number;
                        public hashCode(): number;
                        public tripsIndex(): number;
                        public equals(this_: any): boolean;
                      }
                      export module AutoValue_OptimizationWaypoint {
                        export class Builder extends com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder {
                          public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationWaypoint.Builder>;
                          public tripsIndex(tripsIndex: number): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                          public build(): com.mapbox.api.optimization.v1.models.OptimizationWaypoint;
                          public rawLocation(rawLocation: androidNative.Array<number>): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                          public waypointIndex(waypointIndex: number): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                          public name(name: string): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export class AutoValueGson_OptimizationAdapterFactory extends com.mapbox.api.optimization.v1.models.OptimizationAdapterFactory {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValueGson_OptimizationAdapterFactory>;
                      public static create(): com.google.gson.TypeAdapterFactory;
                      public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export class AutoValue_OptimizationResponse extends com.mapbox.api.optimization.v1.models.AutoValue_OptimizationResponse {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationResponse>;
                    }
                    export module AutoValue_OptimizationResponse {
                      export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.optimization.v1.models.OptimizationResponse> {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationResponse.GsonTypeAdapter>;
                        public toString(): string;
                        public write(list__optimizationWaypoint_adapter: com.google.gson.stream.JsonWriter, list__directionsRoute_adapter: com.mapbox.api.optimization.v1.models.OptimizationResponse): void;
                        public read(list__optimizationWaypoint_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.optimization.v1.models.OptimizationResponse;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export class AutoValue_OptimizationWaypoint extends com.mapbox.api.optimization.v1.models.AutoValue_OptimizationWaypoint {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationWaypoint>;
                    }
                    export module AutoValue_OptimizationWaypoint {
                      export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.optimization.v1.models.OptimizationWaypoint> {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.AutoValue_OptimizationWaypoint.GsonTypeAdapter>;
                        public toString(): string;
                        public read(int__adapter: com.google.gson.stream.JsonReader): com.mapbox.api.optimization.v1.models.OptimizationWaypoint;
                        public write(int__adapter: com.google.gson.stream.JsonWriter, string_adapter: com.mapbox.api.optimization.v1.models.OptimizationWaypoint): void;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export abstract class OptimizationAdapterFactory {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.OptimizationAdapterFactory>;
                      public constructor();
                      public static create(): com.google.gson.TypeAdapterFactory;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export abstract class OptimizationResponse {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.OptimizationResponse>;
                      public constructor();
                      public waypoints(): java.util.List<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>;
                      public code(): string;
                      public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.optimization.v1.models.OptimizationResponse>;
                      public toBuilder(): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                      public trips(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                      public static builder(): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                    }
                    export module OptimizationResponse {
                      export abstract class Builder {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder>;
                        public waypoints(param0: java.util.List<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                        public trips(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
                        public constructor();
                        public build(): com.mapbox.api.optimization.v1.models.OptimizationResponse;
                        public code(param0: string): com.mapbox.api.optimization.v1.models.OptimizationResponse.Builder;
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
              export module optimization {
                export module v1 {
                  export module models {
                    export abstract class OptimizationWaypoint {
                      public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>;
                      public constructor();
                      public static builder(): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                      public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.optimization.v1.models.OptimizationWaypoint>;
                      public toBuilder(): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                      public name(): string;
                      public location(): com.mapbox.geojson.Point;
                      public waypointIndex(): number;
                      public tripsIndex(): number;
                    }
                    export module OptimizationWaypoint {
                      export abstract class Builder {
                        public static class: java.lang.Class<com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder>;
                        public tripsIndex(param0: number): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                        public name(param0: string): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                        public waypointIndex(param0: number): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                        public constructor();
                        public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.optimization.v1.models.OptimizationWaypoint.Builder;
                        public build(): com.mapbox.api.optimization.v1.models.OptimizationWaypoint;
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
              export module routetiles {
                export module v1 {
                  export class AutoValue_MapboxRouteTiles extends com.mapbox.api.routetiles.v1.MapboxRouteTiles {
                    public static class: java.lang.Class<com.mapbox.api.routetiles.v1.AutoValue_MapboxRouteTiles>;
                    public baseUrl(): string;
                    public equals(this_: any): boolean;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                    public toString(): string;
                  }
                  export module AutoValue_MapboxRouteTiles {
                    export class Builder extends com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder {
                      public static class: java.lang.Class<com.mapbox.api.routetiles.v1.AutoValue_MapboxRouteTiles.Builder>;
                      public boundingBox(boundingBox: com.mapbox.geojson.BoundingBox): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public accessToken(accessToken: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public clientAppName(clientAppName: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public interceptor(interceptor: okhttp3.Interceptor): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public baseUrl(baseUrl: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public version(version: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public networkInterceptor(networkInterceptor: okhttp3.Interceptor): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
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
              export module routetiles {
                export module v1 {
                  export abstract class MapboxRouteTiles extends com.mapbox.core.MapboxService<okhttp3.ResponseBody, com.mapbox.api.routetiles.v1.RouteTilesService> {
                    public static class: java.lang.Class<com.mapbox.api.routetiles.v1.MapboxRouteTiles>;
                    public baseUrl(): string;
                    public constructor();
                    public getOkHttpClient(): okhttp3.OkHttpClient;
                    public toBuilder(): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                    public initializeCall(): retrofit2.Call<okhttp3.ResponseBody>;
                    public static builder(): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                  }
                  export module MapboxRouteTiles {
                    export abstract class Builder {
                      public static class: java.lang.Class<com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder>;
                      public constructor();
                      public interceptor(param0: okhttp3.Interceptor): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public clientAppName(param0: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public boundingBox(param0: com.mapbox.geojson.BoundingBox): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public baseUrl(param0: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public build(): com.mapbox.api.routetiles.v1.MapboxRouteTiles;
                      public accessToken(param0: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public version(param0: string): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
                      public networkInterceptor(param0: okhttp3.Interceptor): com.mapbox.api.routetiles.v1.MapboxRouteTiles.Builder;
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
              export module routetiles {
                export module v1 {
                  export class RouteTilesService {
                    public static class: java.lang.Class<com.mapbox.api.routetiles.v1.RouteTilesService>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.routetiles.v1.RouteTilesService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string): retrofit2.Call<okhttp3.ResponseBody> });
                    public constructor();
                    public getCall(param0: string, param1: string, param2: string, param3: string): retrofit2.Call<okhttp3.ResponseBody>;
                  }
                }
              }
            }
          }
        }

        declare module com {
          export module mapbox {
            export module api {
              export module routetiles {
                export module v1 {
                  export module versions {
                    export class AutoValue_MapboxRouteTileVersions extends com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions {
                      public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.AutoValue_MapboxRouteTileVersions>;
                      public hashCode(): number;
                      public equals(this_: any): boolean;
                      public toString(): string;
                      public baseUrl(): string;
                      public toBuilder(): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                    }
                    export module AutoValue_MapboxRouteTileVersions {
                      export class Builder extends com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder {
                        public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.AutoValue_MapboxRouteTileVersions.Builder>;
                        public clientAppName(clientAppName: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                        public accessToken(accessToken: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                        public baseUrl(baseUrl: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
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
              export module routetiles {
                export module v1 {
                  export module versions {
                    export abstract class MapboxRouteTileVersions extends com.mapbox.core.MapboxService<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse, com.mapbox.api.routetiles.v1.versions.RouteTileVersionsService> {
                      public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions>;
                      public constructor();
                      public static builder(): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                      public getGsonBuilder(): com.google.gson.GsonBuilder;
                      public initializeCall(): retrofit2.Call<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse>;
                      public baseUrl(): string;
                      public toBuilder(): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                    }
                    export module MapboxRouteTileVersions {
                      export abstract class Builder {
                        public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder>;
                        public baseUrl(param0: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                        public accessToken(param0: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
                        public build(): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions;
                        public constructor();
                        public clientAppName(param0: string): com.mapbox.api.routetiles.v1.versions.MapboxRouteTileVersions.Builder;
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
              export module routetiles {
                export module v1 {
                  export module versions {
                    export class RouteTileVersionsService {
                      public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.RouteTileVersionsService>;
                      /**
                       * Constructs a new instance of the com.mapbox.api.routetiles.v1.versions.RouteTileVersionsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: { getCall(param0: string, param1: string): retrofit2.Call<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse> });
                      public constructor();
                      public getCall(param0: string, param1: string): retrofit2.Call<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse>;
                    }
                    export module models {
                      export module models {
                        export module RouteTileVersionsService {
                          export abstract class AutoValue_RouteTileVersionsResponse extends com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse {
                            public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.AutoValue_RouteTileVersionsResponse>;
                            public equals(this_: any): boolean;
                            public hashCode(): number;
                            public availableVersions(): java.util.List<string>;
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
              export module api {
                export module routetiles {
                  export module v1 {
                    export module versions {
                      export module models {
                        export class AutoValueGson_RouteTileVersionsAdapterFactory extends com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsAdapterFactory {
                          public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.AutoValueGson_RouteTileVersionsAdapterFactory>;
                          public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
                          public static create(): com.google.gson.TypeAdapterFactory;
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
                export module routetiles {
                  export module v1 {
                    export module versions {
                      export module models {
                        export class AutoValue_RouteTileVersionsResponse extends com.mapbox.api.routetiles.v1.versions.models.AutoValue_RouteTileVersionsResponse {
                          public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.AutoValue_RouteTileVersionsResponse>;
                        }
                        export module AutoValue_RouteTileVersionsResponse {
                          export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse> {
                            public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.AutoValue_RouteTileVersionsResponse.GsonTypeAdapter>;
                            public write(this_: com.google.gson.stream.JsonWriter, jsonWriter: com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse): void;
                            public toString(): string;
                            public read(_name: com.google.gson.stream.JsonReader): com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse;
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
                export module routetiles {
                  export module v1 {
                    export module versions {
                      export module models {
                        export abstract class RouteTileVersionsAdapterFactory {
                          public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsAdapterFactory>;
                          public static create(): com.google.gson.TypeAdapterFactory;
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
                export module routetiles {
                  export module v1 {
                    export module versions {
                      export module models {
                        export abstract class RouteTileVersionsResponse {
                          public static class: java.lang.Class<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse>;
                          public create(versions: java.util.List<string>): com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse;
                          public constructor();
                          public availableVersions(): java.util.List<string>;
                          public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.routetiles.v1.versions.models.RouteTileVersionsResponse>;
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
                export module speech {
                  export module v1 {
                    export class AutoValue_MapboxSpeech extends com.mapbox.api.speech.v1.MapboxSpeech {
                      public static class: java.lang.Class<com.mapbox.api.speech.v1.AutoValue_MapboxSpeech>;
                      public baseUrl(): string;
                      public equals(this_: any): boolean;
                      public hashCode(): number;
                      public toString(): string;
                    }
                    export module AutoValue_MapboxSpeech {
                      export class Builder extends com.mapbox.api.speech.v1.MapboxSpeech.Builder {
                        public static class: java.lang.Class<com.mapbox.api.speech.v1.AutoValue_MapboxSpeech.Builder>;
                        public cache(cache: okhttp3.Cache): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public networkInterceptor(networkInterceptor: okhttp3.Interceptor): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public instruction(instruction: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public interceptor(interceptor: okhttp3.Interceptor): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public accessToken(accessToken: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public baseUrl(baseUrl: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public language(language: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public textType(textType: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public outputType(outputType: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
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
                export module speech {
                  export module v1 {
                    export abstract class MapboxSpeech extends com.mapbox.core.MapboxService<okhttp3.ResponseBody, com.mapbox.api.speech.v1.SpeechService> {
                      public static class: java.lang.Class<com.mapbox.api.speech.v1.MapboxSpeech>;
                      public baseUrl(): string;
                      public constructor();
                      public getOkHttpClient(): okhttp3.OkHttpClient;
                      public static builder(): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                      public initializeCall(): retrofit2.Call<okhttp3.ResponseBody>;
                    }
                    export module MapboxSpeech {
                      export abstract class Builder {
                        public static class: java.lang.Class<com.mapbox.api.speech.v1.MapboxSpeech.Builder>;
                        public constructor();
                        public cache(param0: okhttp3.Cache): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public outputType(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public textType(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public instruction(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public interceptor(param0: okhttp3.Interceptor): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public accessToken(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public build(): com.mapbox.api.speech.v1.MapboxSpeech;
                        public language(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public baseUrl(param0: string): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
                        public networkInterceptor(param0: okhttp3.Interceptor): com.mapbox.api.speech.v1.MapboxSpeech.Builder;
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
                export module speech {
                  export module v1 {
                    export class SpeechService {
                      public static class: java.lang.Class<com.mapbox.api.speech.v1.SpeechService>;
                      /**
                       * Constructs a new instance of the com.mapbox.api.speech.v1.SpeechService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: string, param4: string): retrofit2.Call<okhttp3.ResponseBody> });
                      public constructor();
                      public getCall(param0: string, param1: string, param2: string, param3: string, param4: string): retrofit2.Call<okhttp3.ResponseBody>;
                    }
                  }
                }
              }
            }
          }

          declare module com {
            export module mapbox {
              export module api {
                export module staticmap {
                  export module v1 {
                    export class AutoValue_MapboxStaticMap extends com.mapbox.api.staticmap.v1.MapboxStaticMap {
                      public static class: java.lang.Class<com.mapbox.api.staticmap.v1.AutoValue_MapboxStaticMap>;
                      public equals(this_: any): boolean;
                      public hashCode(): number;
                      public toString(): string;
                    }
                    export module AutoValue_MapboxStaticMap {
                      export class Builder extends com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.AutoValue_MapboxStaticMap.Builder>;
                        public styleId(styleId: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public retina(retina: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public geoJson(geoJson: com.mapbox.geojson.GeoJson): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public accessToken(accessToken: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public attribution(attribution: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public precision(precision: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public staticPolylineAnnotations(staticPolylineAnnotations: java.util.List<com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation>): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraPoint(cameraPoint: com.mapbox.geojson.Point): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public logo(logo: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public user(user: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public staticMarkerAnnotations(staticMarkerAnnotations: java.util.List<com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation>): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public height(height: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public width(width: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraZoom(cameraZoom: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public baseUrl(baseUrl: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraBearing(cameraBearing: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraPitch(cameraPitch: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraAuto(cameraAuto: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public beforeLayer(beforeLayer: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
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
                export module staticmap {
                  export module v1 {
                    export abstract class MapboxStaticMap {
                      public static class: java.lang.Class<com.mapbox.api.staticmap.v1.MapboxStaticMap>;
                      public constructor();
                      public static builder(): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                      public url(): okhttp3.HttpUrl;
                    }
                    export module MapboxStaticMap {
                      export abstract class Builder {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder>;
                        public constructor();
                        public beforeLayer(param0: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraPitch(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraPoint(param0: com.mapbox.geojson.Point): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraBearing(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public styleId(param0: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public retina(param0: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public staticPolylineAnnotations(param0: java.util.List<com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation>): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraAuto(param0: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public geoJson(param0: com.mapbox.geojson.GeoJson): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public width(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public baseUrl(param0: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public accessToken(param0: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public user(param0: string): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public attribution(param0: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public height(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public precision(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public logo(param0: boolean): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public cameraZoom(param0: number): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
                        public build(): com.mapbox.api.staticmap.v1.MapboxStaticMap;
                        public staticMarkerAnnotations(param0: java.util.List<com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation>): com.mapbox.api.staticmap.v1.MapboxStaticMap.Builder;
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
                export module staticmap {
                  export module v1 {
                    export class StaticMapCriteria {
                      public static class: java.lang.Class<com.mapbox.api.staticmap.v1.StaticMapCriteria>;
                      public static SMALL_PIN: string = 'pin-s';
                      public static MEDIUM_PIN: string = 'pin-m';
                      public static LARGE_PIN: string = 'pin-l';
                      public static STREET_STYLE: string = 'streets-v11';
                      public static OUTDOORS_STYLE: string = 'outdoors-v11';
                      public static LIGHT_STYLE: string = 'light-v10';
                      public static DARK_STYLE: string = 'dark-v10';
                      public static SATELLITE_STYLE: string = 'satellite-v9';
                      public static SATELLITE_STREETS_STYLE: string = 'satellite-streets-v11';
                      public static NAVIGATION_PREVIEW_DAY: string = 'navigation-preview-day-v3';
                      public static NAVIGATION_PREVIEW_NIGHT: string = 'navigation-preview-night-v3';
                      public static NAVIGATION_GUIDANCE_DAY: string = 'navigation-guidance-day-v4';
                      public static NAVIGATION_GUIDANCE_NIGHT: string = 'navigation-guidance-night-v4';
                    }
                    export module StaticMapCriteria {
                      export class MarkerCriteria {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.StaticMapCriteria.MarkerCriteria>;
                        /**
                         * Constructs a new instance of the com.mapbox.api.staticmap.v1.StaticMapCriteria$MarkerCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
              export module api {
                export module staticmap {
                  export module v1 {
                    export module models {
                      export class AutoValue_StaticMarkerAnnotation extends com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.AutoValue_StaticMarkerAnnotation>;
                        public hashCode(): number;
                        public equals(this_: any): boolean;
                        public toBuilder(): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                        public toString(): string;
                      }
                      export module AutoValue_StaticMarkerAnnotation {
                        export class Builder extends com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder {
                          public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.AutoValue_StaticMarkerAnnotation.Builder>;
                          public label(label: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public lnglat(lnglat: com.mapbox.geojson.Point): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public iconUrl(iconUrl: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public name(name: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public color(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public color(color: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
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
                export module staticmap {
                  export module v1 {
                    export module models {
                      export class AutoValue_StaticPolylineAnnotation extends com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.AutoValue_StaticPolylineAnnotation>;
                        public hashCode(): number;
                        public equals(this_: any): boolean;
                        public toString(): string;
                        public toBuilder(): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                      }
                      export module AutoValue_StaticPolylineAnnotation {
                        export class Builder extends com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder {
                          public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.AutoValue_StaticPolylineAnnotation.Builder>;
                          public strokeColor(strokeColor: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public fillColor(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeWidth(strokeWidth: java.lang.Double): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeColor(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public fillColor(fillColor: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeOpacity(strokeOpacity: java.lang.Float): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public build(): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation;
                          public polyline(polyline: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public fillOpacity(fillOpacity: java.lang.Float): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
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
                export module staticmap {
                  export module v1 {
                    export module models {
                      export abstract class StaticMarkerAnnotation {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation>;
                        public constructor();
                        public static builder(): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                        public url(): string;
                        public toBuilder(): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                      }
                      export module StaticMarkerAnnotation {
                        export abstract class Builder {
                          public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder>;
                          public color(param0: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public iconUrl(param0: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public build(): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation;
                          public name(param0: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public color(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public constructor();
                          public label(param0: string): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
                          public lnglat(param0: com.mapbox.geojson.Point): com.mapbox.api.staticmap.v1.models.StaticMarkerAnnotation.Builder;
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
                export module staticmap {
                  export module v1 {
                    export module models {
                      export abstract class StaticPolylineAnnotation {
                        public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation>;
                        public constructor();
                        public static builder(): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                        public url(): string;
                        public toBuilder(): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                      }
                      export module StaticPolylineAnnotation {
                        export abstract class Builder {
                          public static class: java.lang.Class<com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder>;
                          public strokeColor(param0: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public fillColor(param0: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public fillColor(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeColor(red: number, green: number, blue: number): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public build(): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation;
                          public fillOpacity(param0: java.lang.Float): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public constructor();
                          public polyline(param0: string): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeWidth(param0: java.lang.Double): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
                          public strokeOpacity(param0: java.lang.Float): com.mapbox.api.staticmap.v1.models.StaticPolylineAnnotation.Builder;
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
                export module tilequery {
                  export class AutoValue_MapboxTilequery extends com.mapbox.api.tilequery.MapboxTilequery {
                    public static class: java.lang.Class<com.mapbox.api.tilequery.AutoValue_MapboxTilequery>;
                    public toString(): string;
                    public equals(this_: any): boolean;
                    public hashCode(): number;
                    public baseUrl(): string;
                  }
                  export module AutoValue_MapboxTilequery {
                    export class Builder extends com.mapbox.api.tilequery.MapboxTilequery.Builder {
                      public static class: java.lang.Class<com.mapbox.api.tilequery.AutoValue_MapboxTilequery.Builder>;
                      public radius(radius: java.lang.Integer): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public geometry(geometry: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public accessToken(accessToken: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public query(query: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public baseUrl(baseUrl: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public query(point: com.mapbox.geojson.Point): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public layers(layers: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public tilesetIds(tilesetIds: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public limit(limit: java.lang.Integer): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public dedupe(dedupe: java.lang.Boolean): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                    }
                  }
                }
              }
            }
          }

          declare module com {
            export module mapbox {
              export module api {
                export module tilequery {
                  export abstract class MapboxTilequery extends com.mapbox.core.MapboxService<com.mapbox.geojson.FeatureCollection, com.mapbox.api.tilequery.TilequeryService> {
                    public static class: java.lang.Class<com.mapbox.api.tilequery.MapboxTilequery>;
                    public static builder(): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                    public initializeCall(): retrofit2.Call<com.mapbox.geojson.FeatureCollection>;
                    public constructor();
                    public cancelBatchCall(): void;
                    public cloneBatchCall(): retrofit2.Call<java.util.List<com.mapbox.geojson.FeatureCollection>>;
                    public executeBatchCall(): retrofit2.Response<java.util.List<com.mapbox.geojson.FeatureCollection>>;
                    public baseUrl(): string;
                    public getGsonBuilder(): com.google.gson.GsonBuilder;
                    public enqueueBatchCall(callback: retrofit2.Callback<java.util.List<com.mapbox.geojson.FeatureCollection>>): void;
                  }
                  export module MapboxTilequery {
                    export abstract class Builder {
                      public static class: java.lang.Class<com.mapbox.api.tilequery.MapboxTilequery.Builder>;
                      public limit(param0: java.lang.Integer): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public dedupe(param0: java.lang.Boolean): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public constructor();
                      public geometry(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public layers(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public accessToken(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public query(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public baseUrl(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public radius(param0: java.lang.Integer): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public query(point: com.mapbox.geojson.Point): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                      public build(): com.mapbox.api.tilequery.MapboxTilequery;
                      public tilesetIds(param0: string): com.mapbox.api.tilequery.MapboxTilequery.Builder;
                    }
                  }
                }
              }
            }
          }

          declare module com {
            export module mapbox {
              export module api {
                export module tilequery {
                  export class TilequeryCriteria {
                    public static class: java.lang.Class<com.mapbox.api.tilequery.TilequeryCriteria>;
                    public static TILEQUERY_GEOMETRY_POLYGON: string = 'polygon';
                    public static TILEQUERY_GEOMETRY_LINESTRING: string = 'linestring';
                    public static TILEQUERY_GEOMETRY_POINT: string = 'point';
                    public constructor();
                  }
                  export module TilequeryCriteria {
                    export class TilequeryGeometry {
                      public static class: java.lang.Class<com.mapbox.api.tilequery.TilequeryCriteria.TilequeryGeometry>;
                      /**
                       * Constructs a new instance of the com.mapbox.api.tilequery.TilequeryCriteria$TilequeryGeometry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
              export module api {
                export module tilequery {
                  export class TilequeryService {
                    public static class: java.lang.Class<com.mapbox.api.tilequery.TilequeryService>;
                    /**
                     * Constructs a new instance of the com.mapbox.api.tilequery.TilequeryService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getCall(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Boolean, param6: string, param7: string): retrofit2.Call<com.mapbox.geojson.FeatureCollection>; getBatchCall(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Boolean, param6: string, param7: string): retrofit2.Call<java.util.List<com.mapbox.geojson.FeatureCollection>> });
                    public constructor();
                    public getBatchCall(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Boolean, param6: string, param7: string): retrofit2.Call<java.util.List<com.mapbox.geojson.FeatureCollection>>;
                    public getCall(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Boolean, param6: string, param7: string): retrofit2.Call<com.mapbox.geojson.FeatureCollection>;
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
//Generics information:
//com.mapbox.api.geocoding.v5.SingleElementSafeListTypeAdapter:1
