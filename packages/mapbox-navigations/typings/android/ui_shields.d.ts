declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module shield {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.shield';
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
        export module shield {
          export abstract class ResourceCache<Argument, Value> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ResourceCache<any, any>>;
            public static CANCELED_MESSAGE: string = 'canceled';
            public constructor(cacheSize: number);
            public obtainResource(param0: Argument, param1: any): any;
            public getOrRequest(argument: Argument, argument: any): any;
          }
          export module ResourceCache {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ResourceCache.Companion>;
            }
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
        export module shield {
          export class RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManager>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.ui.shield.RoadShieldContentManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getShields(param0: java.util.List<any>, param1: any): any; cancelAll(): void });
            public constructor();
            public cancelAll(): void;
            public getShields(param0: java.util.List<any>, param1: any): any;
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
        export module shield {
          export class RoadShieldContentManagerContainer extends com.mapbox.navigation.ui.shield.RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerContainer>;
            public static INSTANCE: com.mapbox.navigation.ui.shield.RoadShieldContentManagerContainer;
            public getShields(shieldsToDownload: java.util.List<any>, $completion: any): any;
            public cancelAll(): void;
            public getShields(param0: java.util.List<any>, param1: any): any;
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
        export module shield {
          export class RoadShieldContentManagerImpl extends com.mapbox.navigation.ui.shield.RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerImpl>;
            public static CANCELED_MESSAGE: string = 'canceled';
            public constructor();
            public cancelAll(): void;
            public getShields(this_: java.util.List<any>, this_: any): any;
            public constructor(shieldResultCache: com.mapbox.navigation.ui.shield.ShieldResultCache);
            public getShields(param0: java.util.List<any>, param1: any): any;
          }
          export module RoadShieldContentManagerImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerImpl.Companion>;
            }
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
        export module shield {
          export class RoadShieldDownloader {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldDownloader>;
            public static INSTANCE: com.mapbox.navigation.ui.shield.RoadShieldDownloader;
            public download(url: string, response: any): any;
          }
          export module RoadShieldDownloader {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldDownloader.WhenMappings>;
            }
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
        export module shield {
          export class ShieldByteArrayCache extends com.mapbox.navigation.ui.shield.ResourceCache<string, androidNative.Array<number>> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldByteArrayCache>;
            public constructor(cacheSize: number);
            public constructor();
            public obtainResource(param0: any, param1: any): any;
            public obtainResource(argument: string, $completion: any): any;
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
        export module shield {
          export class ShieldRequest {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldRequest>;
            public equals(other: any): boolean;
            public constructor(toDownload: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload);
            public getId(): java.util.UUID;
            public hashCode(): number;
            public getToDownload(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload;
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
      export module ui {
        export module shield {
          export class ShieldResultCache extends com.mapbox.navigation.ui.shield.ResourceCache<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload, com.mapbox.navigation.ui.shield.model.RouteShield> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldResultCache>;
            public constructor(cacheSize: number);
            public constructor();
            public obtainResource(param0: any, param1: any): any;
            public constructor(shieldSpritesCache: com.mapbox.navigation.ui.shield.ShieldSpritesCache, shieldByteArrayCache: com.mapbox.navigation.ui.shield.ShieldByteArrayCache);
            public obtainResource(argument: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload, $completion: any): any;
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
        export module shield {
          export class ShieldSpritesCache extends com.mapbox.navigation.ui.shield.ResourceCache<string, com.mapbox.api.directions.v5.models.ShieldSprites> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldSpritesCache>;
            public constructor(cacheSize: number);
            public constructor();
            public obtainResource(result: string, exception: any): any;
            public obtainResource(param0: any, param1: any): any;
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
        export module shield {
          export module api {
            export class MapboxRouteShieldApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi>;
              public constructor();
              public cancel(): void;
              public getRouteShields(road: com.mapbox.navigation.base.road.model.Road, callback: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(bannerComponents: java.util.List<any>, callback: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShieldsInternal$libnavui_shield_release(shieldsToDownload: java.util.List<any>, callback: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(this_: java.util.List<any>, bannerComponents: string, userId: string, styleId: string, accessToken: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(this_: com.mapbox.navigation.base.road.model.Road, road: string, userId: string, styleId: string, accessToken: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
            }
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
        export module shield {
          export module internal {
            export module model {
              export abstract class RouteShieldToDownload {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload>;
                public getUrl(): string;
              }
              export module RouteShieldToDownload {
                export class MapboxDesign extends com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxDesign>;
                  public component2(): string;
                  public hashCode(): number;
                  public component4(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
                  public copy(shieldSpriteToDownload: com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload, accessToken: string, mapboxShield: com.mapbox.api.directions.v5.models.MapboxShield, legacyFallback: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxDesign;
                  public component1(): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                  public toString(): string;
                  public constructor(shieldSpriteToDownload: com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload, accessToken: string, mapboxShield: com.mapbox.api.directions.v5.models.MapboxShield, legacyFallback: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy);
                  public getAccessToken(): string;
                  public getUrl(): string;
                  public getLegacyFallback(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
                  public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                  public component3(): com.mapbox.api.directions.v5.models.MapboxShield;
                  public equals(other: any): boolean;
                  public getShieldSpriteToDownload(): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                }
                export class MapboxLegacy extends com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy>;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public copy(initialUrl: string): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
                  public getInitialUrl(): string;
                  public toString(): string;
                  public constructor(initialUrl: string);
                  public getUrl(): string;
                  public component1(): string;
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
      export module ui {
        export module shield {
          export module internal {
            export module model {
              export class ShieldSpriteToDownload {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload>;
                public component1(): string;
                public getStyleId(): string;
                public toString(): string;
                public getUserId(): string;
                public copy(userId: string, styleId: string): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                public component2(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
                public constructor(userId: string, styleId: string);
              }
            }
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
        export module shield {
          export module model {
            export abstract class RouteShield {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield>;
              public getByteArray(): androidNative.Array<number>;
              public getUrl(): string;
              public toBitmap(param0: globalAndroid.content.res.Resources, param1: java.lang.Integer): globalAndroid.graphics.Bitmap;
            }
            export module RouteShield {
              export class MapboxDesignedShield extends com.mapbox.navigation.ui.shield.model.RouteShield {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxDesignedShield>;
                public toString(): string;
                public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                public getShieldSprite(): com.mapbox.api.directions.v5.models.ShieldSprite;
                public hashCode(): number;
                public equals(other: any): boolean;
                public toBitmap(spriteWidth: globalAndroid.content.res.Resources, spriteHeight: java.lang.Integer): globalAndroid.graphics.Bitmap;
                public compareWith(other: com.mapbox.api.directions.v5.models.MapboxShield): boolean;
                public constructor(url: string, byteArray: androidNative.Array<number>, mapboxShield: com.mapbox.api.directions.v5.models.MapboxShield, shieldSprite: com.mapbox.api.directions.v5.models.ShieldSprite);
              }
              export class MapboxLegacyShield extends com.mapbox.navigation.ui.shield.model.RouteShield {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield>;
                public toString(): string;
                public getInitialUrl(): string;
                public constructor(url: string, byteArray: androidNative.Array<number>, initialUrl: string);
                public toBitmap(stream: globalAndroid.content.res.Resources, this_: java.lang.Integer): globalAndroid.graphics.Bitmap;
                public hashCode(): number;
                public compareWith(other: string): boolean;
                public equals(other: any): boolean;
              }
              export module MapboxLegacyShield {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield.Companion>;
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
      export module ui {
        export module shield {
          export module model {
            export class RouteShieldCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.shield.model.RouteShieldCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoadShields(param0: java.util.List<any>): void });
              public constructor();
              public onRoadShields(param0: java.util.List<any>): void;
            }
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
        export module shield {
          export module model {
            export class RouteShieldError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldError>;
              public hashCode(): number;
              public getUrl(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(url: string, errorMessage: string);
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
        export module shield {
          export module model {
            export class RouteShieldFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.shield.model.RouteShieldFactory;
              public static buildRouteShield(downloadUrl: string, byteArray: androidNative.Array<number>, mapboxShield: com.mapbox.api.directions.v5.models.MapboxShield, shieldSprite: com.mapbox.api.directions.v5.models.ShieldSprite): com.mapbox.navigation.ui.shield.model.RouteShield.MapboxDesignedShield;
              public static buildRouteShield(downloadUrl: string, byteArray: androidNative.Array<number>, initialUrl: string): com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield;
            }
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
        export module shield {
          export module model {
            export class RouteShieldOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldOrigin>;
              public getOriginalUrl(): string;
              public hashCode(): number;
              public equals(other: any): boolean;
              public isFallback(): boolean;
              public getOriginalErrorMessage(): string;
              public toString(): string;
              public constructor(isFallback: boolean, originalUrl: string, originalErrorMessage: string);
            }
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
        export module shield {
          export module model {
            export class RouteShieldResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldResult>;
              public getShield(): com.mapbox.navigation.ui.shield.model.RouteShield;
              public getOrigin(): com.mapbox.navigation.ui.shield.model.RouteShieldOrigin;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public constructor(shield: com.mapbox.navigation.ui.shield.model.RouteShield, origin: com.mapbox.navigation.ui.shield.model.RouteShieldOrigin);
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.shield.ResourceCache:2
