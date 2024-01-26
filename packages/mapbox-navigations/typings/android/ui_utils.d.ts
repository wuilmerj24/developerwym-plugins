declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module utils {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.utils.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.utils';
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
        export module utils {
          export module internal {
            export class CompareUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.CompareUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.utils.internal.CompareUtils;
              public areEqualContentsIgnoreOrder(this_: java.util.Collection<any>, first: java.util.Collection<any>): boolean;
            }
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
        export module utils {
          export module internal {
            export class ExtendableButtonHelper {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.ExtendableButtonHelper>;
              public removeDelayedAnimations(): void;
              public constructor(buttonText: globalAndroid.widget.TextView, measureShrunkWidth: any, measureExtendedWidth: any);
              public isAnimationRunning(): boolean;
              public showTextAndExtend(extendedWidth: string, this_: number): void;
              public constructor(buttonText: globalAndroid.widget.TextView, shrunkWidth: number, minExtendedWidth: number);
            }
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
        export module utils {
          export module internal {
            export class NullUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.NullUtils>;
              public static ifNonNull($i$f$ifNonNull: any, r1: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any, r3: any, r4: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any, r3: any, r4: any, r5: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any, r3: any, r4: any, r5: any, r6: any, r7: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any, r3: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any, r3: any, r4: any, r5: any, r6: any): any;
              public static ifNonNull($i$f$ifNonNull: any, r1: any, r2: any): any;
            }
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
        export module utils {
          export module internal {
            export class Provider<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.Provider<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { get(): T });
              public constructor();
              public get(): T;
            }
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
        export module utils {
          export module internal {
            export class SvgUtil {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.SvgUtil>;
              public static INSTANCE: com.mapbox.navigation.ui.utils.internal.SvgUtil;
              public renderAsBitmapWithHeight(calculatedWidth: java.io.ByteArrayInputStream, svg: number, exception: string): globalAndroid.graphics.Bitmap;
              public renderAsBitmapWithWidth(svgResolver: java.io.ByteArrayInputStream, $i$f$ifNonNull: number, aspectRatio: string, calculatedHeight: com.caverock.androidsvg.SVGExternalFileResolver): globalAndroid.graphics.Bitmap;
              public renderAsBitmapWith(exception: java.io.ByteArrayInputStream, exception: number, this_: number, stream: string): globalAndroid.graphics.Bitmap;
            }
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
        export module utils {
          export module internal {
            export module configuration {
              export class NavigationConfigOwner {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.configuration.NavigationConfigOwner>;
                public language(): kotlinx.coroutines.flow.Flow<string>;
                public config(): kotlinx.coroutines.flow.Flow<globalAndroid.content.res.Configuration>;
                public constructor(context: globalAndroid.content.Context);
                public toLocale(configuration: globalAndroid.content.res.Configuration): java.util.Locale;
              }
            }
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
        export module utils {
          export module internal {
            export module datastore {
              export class NavigationDataStoreKey<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>>;
                public constructor(preferenceKey: androidx.datastore.preferences.core.Preferences.Key<T>, defaultValue: T);
                public getDefaultValue(): T;
                public getPreferenceKey(): androidx.datastore.preferences.core.Preferences.Key<T>;
              }
            }
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
        export module utils {
          export module internal {
            export module datastore {
              export class NavigationDataStoreOwner {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner>;
                public read($i$f$unsafeTransform: com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>): kotlinx.coroutines.flow.Flow;
                public constructor(context: globalAndroid.content.Context);
                public write(key: com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>, value: any, $completion: any): any;
              }
              export module NavigationDataStoreOwner {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner.Companion>;
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
        export module utils {
          export module internal {
            export module extensions {
              export class BitmapEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.BitmapEx>;
                public static drawableWithHeight(drawable: globalAndroid.graphics.Bitmap, right: number, $this$drawableWithHeight: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
              }
            }
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
        export module utils {
          export module internal {
            export module extensions {
              export class TextViewEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.TextViewEx>;
                public static getAsBitmap(measureSpec: globalAndroid.widget.TextView): globalAndroid.graphics.Bitmap;
                public static measureTextWidth(transformedText: globalAndroid.widget.TextView, $this$measureTextWidth: string): number;
              }
            }
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
        export module utils {
          export module internal {
            export module extensions {
              export class ViewEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.ViewEx>;
                public static slideWidth(param0: globalAndroid.view.View, it: number, $this$slideWidth: number, fromWidth: number): globalAndroid.animation.ValueAnimator;
                public static play(set: globalAndroid.animation.ValueAnimator, $this$play: any, doOnStart: any): void;
                public static slideHeight(param0: globalAndroid.view.View, it: number, $this$slideHeight: number, fromHeight: number): globalAndroid.animation.ValueAnimator;
              }
            }
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
        export module utils {
          export module internal {
            export module lifecycle {
              export class ViewLifecycleRegistry {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.lifecycle.ViewLifecycleRegistry>;
                public constructor(view: globalAndroid.view.View, localLifecycleOwner: androidx.lifecycle.LifecycleOwner);
              }
            }
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
        export module utils {
          export module internal {
            export module network {
              export class HttpServiceInterceptorChain {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain>;
                public onRequest(req: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
                public removeIf(predicate: any): void;
                public remove(interceptor: com.mapbox.common.HttpServiceInterceptorInterface): com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain;
                public constructor();
                public onResponse(res: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
                public add(interceptor: com.mapbox.common.HttpServiceInterceptorInterface): com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain;
                public onDownload(opt: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
              }
            }
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
        export module utils {
          export module internal {
            export module network {
              export class LoggingInterceptor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.LoggingInterceptor>;
                public onRequest(request: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
                public constructor();
                public onDownload(download: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
                public onResponse(response: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
              }
              export module LoggingInterceptor {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.LoggingInterceptor.Companion>;
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
        export module utils {
          export module internal {
            export module resource {
              export class DefaultResourceLoader extends com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.DefaultResourceLoader>;
                public load(param0: com.mapbox.common.TileStore, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param2: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public unregisterObserver(observer: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public constructor(tileStore: com.mapbox.common.TileStore, reachability: com.mapbox.common.ReachabilityInterface);
                public cancel(requestId: number): void;
                public registerObserver(observer: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public constructor();
                public load(request: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, callback: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public load(callbackAdapter: com.mapbox.common.TileStore, this_: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, tileStore: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
              }
              export module DefaultResourceLoader {
                export class CallbackAdapter {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.DefaultResourceLoader.CallbackAdapter>;
                  public notifyOnStart(it: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                  public constructor(request: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, callback: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback, observers: java.util.Queue<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver>);
                  public run(it: com.mapbox.common.ResourceLoadProgress): void;
                  public run(it: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
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
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadCallback extends com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void; onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void; onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void });
                public constructor();
                public onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void;
                public onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                public onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
              }
            }
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
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void; onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void; onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void });
                public constructor();
                public onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void;
                public onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                public onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
              }
            }
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
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadRequest {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest>;
                public constructor(url: string);
                public getFlags(): com.mapbox.common.ResourceLoadFlags;
                public getUrl(): string;
                public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
                public setNetworkRestriction(param0: com.mapbox.common.NetworkRestriction): void;
                public setFlags(param0: com.mapbox.common.ResourceLoadFlags): void;
              }
            }
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
        export module utils {
          export module internal {
            export module resource {
              export abstract class ResourceLoader {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader>;
                public load(param0: com.mapbox.common.TileStore, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param2: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public unregisterObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public registerObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public load(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public constructor();
                public cancel(param0: number): void;
              }
            }
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
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoaderFactory {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoaderFactory>;
                public static INSTANCE: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoaderFactory;
                public getInstance(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.utils.internal.Provider:1
//com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey:1
