declare module com {
  export module mapbox {
    export module api {
      export module directionsrefresh {
        export module v1 {
          export class AutoValueGson_DirectionsRefreshAdapterFactory extends com.mapbox.api.directionsrefresh.v1.DirectionsRefreshAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.AutoValueGson_DirectionsRefreshAdapterFactory>;
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
      export module directionsrefresh {
        export module v1 {
          export abstract class DirectionsRefreshAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.DirectionsRefreshAdapterFactory>;
            public constructor();
            public static create(): com.google.gson.TypeAdapterFactory;
          }
          export module models {
            export module models {
              export module DirectionsRefreshAdapterFactory {
                export abstract class AutoValue_DirectionsRefreshResponse extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRefreshResponse>;
                  public code(): string;
                  public toString(): string;
                  public message(): string;
                  public route(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_DirectionsRefreshResponse {
                  export class Builder extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder {
                    public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRefreshResponse.Builder>;
                    public route(route: com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                    public message(message: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                    public build(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse;
                    public code(code: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                  }
                }
                export abstract class AutoValue_DirectionsRouteRefresh extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRouteRefresh>;
                  public toString(): string;
                  public toBuilder(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder;
                  public legs(): java.util.List<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_DirectionsRouteRefresh {
                  export class Builder extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder {
                    public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRouteRefresh.Builder>;
                    public build(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
                    public legs(legs: java.util.List<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder;
                  }
                }
                export abstract class AutoValue_RouteLegRefresh extends com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_RouteLegRefresh>;
                  public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
                  public toString(): string;
                  public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
                  public toBuilder(): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                  public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
                  public hashCode(): number;
                  public equals(this_: any): boolean;
                }
                export module AutoValue_RouteLegRefresh {
                  export class Builder extends com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder {
                    public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_RouteLegRefresh.Builder>;
                    public incidents(incidents: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                    public annotation(annotation: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                    public build(): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh;
                    public closures(closures: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
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
        export module directionsrefresh {
          export module v1 {
            export module models {
              export class AutoValue_DirectionsRefreshResponse extends com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRefreshResponse {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRefreshResponse>;
              }
              export module AutoValue_DirectionsRefreshResponse {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRefreshResponse.GsonTypeAdapter>;
                  public toString(): string;
                  public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse): void;
                  public read(string_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse;
                }
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
            export module models {
              export class AutoValue_DirectionsRouteRefresh extends com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRouteRefresh {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRouteRefresh>;
              }
              export module AutoValue_DirectionsRouteRefresh {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_DirectionsRouteRefresh.GsonTypeAdapter>;
                  public toString(): string;
                  public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh): void;
                  public read(element: com.google.gson.stream.JsonReader): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
                }
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
            export module models {
              export class AutoValue_RouteLegRefresh extends com.mapbox.api.directionsrefresh.v1.models.AutoValue_RouteLegRefresh {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_RouteLegRefresh>;
              }
              export module AutoValue_RouteLegRefresh {
                export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.AutoValue_RouteLegRefresh.GsonTypeAdapter>;
                  public toString(): string;
                  public write(adapter: com.google.gson.stream.JsonWriter, entry: com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh): void;
                  public read(legAnnotation_adapter: com.google.gson.stream.JsonReader): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh;
                }
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
            export module models {
              export abstract class DirectionsRefreshJsonObject {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject>;
                public constructor();
                public getUnrecognizedJsonProperties(): java.util.Map<string, com.google.gson.JsonElement>;
                public toJson(): string;
              }
              export module DirectionsRefreshJsonObject {
                export abstract class Builder<T> extends java.lang.Object {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject.Builder<any>>;
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
        export module directionsrefresh {
          export module v1 {
            export module models {
              export abstract class DirectionsRefreshResponse extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse>;
                public constructor();
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse>;
                public code(): string;
                public static builder(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                public static fromJson(json: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse;
                public route(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
                public message(): string;
              }
              export module DirectionsRefreshResponse {
                export abstract class Builder extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject.Builder<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder>;
                  public route(param0: com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                  public code(param0: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                  public message(param0: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse.Builder;
                  public constructor();
                  public build(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshResponse;
                }
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
            export module models {
              export abstract class DirectionsRouteRefresh extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh>;
                public constructor();
                public toBuilder(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder;
                public static fromJson(json: string): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
                public legs(): java.util.List<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>;
                public static builder(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh>;
              }
              export module DirectionsRouteRefresh {
                export abstract class Builder extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject.Builder<com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder>;
                  public legs(param0: java.util.List<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh.Builder;
                  public build(): com.mapbox.api.directionsrefresh.v1.models.DirectionsRouteRefresh;
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
        export module directionsrefresh {
          export module v1 {
            export module models {
              export abstract class RouteLegRefresh extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject {
                public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>;
                public constructor();
                public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
                public static builder(): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                public static fromJson(json: string): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh;
                public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
                public static typeAdapter(gson: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh>;
                public toBuilder(): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
              }
              export module RouteLegRefresh {
                export abstract class Builder extends com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject.Builder<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder> {
                  public static class: java.lang.Class<com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder>;
                  public incidents(param0: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                  public annotation(param0: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                  public closures(param0: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh.Builder;
                  public constructor();
                  public build(): com.mapbox.api.directionsrefresh.v1.models.RouteLegRefresh;
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
//com.mapbox.api.directionsrefresh.v1.models.DirectionsRefreshJsonObject.Builder:1
