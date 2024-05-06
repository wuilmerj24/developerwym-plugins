declare module com {
  export module mapbox {
    export module core {
      export class BuildConfig {
        public static class: java.lang.Class<com.mapbox.core.BuildConfig>;
        public static VERSION: string = '6.15.0';
        public static NAME: string = 'services-core';
        public static GIT_REVISION: string = '15b6ae39';
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export abstract class MapboxService<T, S> extends java.lang.Object {
        public static class: java.lang.Class<com.mapbox.core.MapboxService<any, any>>;
        public static MAX_URL_SIZE: number = 8192;
        public okHttpClient: okhttp3.OkHttpClient;
        public baseUrl(): string;
        public isEnableDebug(): boolean;
        public getOkHttpClient(): okhttp3.OkHttpClient;
        public constructor(serviceType: java.lang.Class<S>);
        public executeCall(): retrofit2.Response<T>;
        public cancelCall(): void;
        public getService(): S;
        public setCallFactory(callFactory: okhttp3.Call.Factory): void;
        public cloneCall(): retrofit2.Call<T>;
        public getCall(): retrofit2.Call<T>;
        public enqueueCall(callback: retrofit2.Callback<T>): void;
        public getRetrofit(): retrofit2.Retrofit;
        public initializeCall(): retrofit2.Call<T>;
        public enableDebug(enableDebug: boolean): void;
        public getGsonBuilder(): com.google.gson.GsonBuilder;
        public getCallFactory(): okhttp3.Call.Factory;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module constants {
        export class Constants {
          public static class: java.lang.Class<com.mapbox.core.constants.Constants>;
          public static HEADER_USER_AGENT: string;
          public static BASE_API_URL: string = 'https://api.mapbox.com';
          public static MAPBOX_USER: string = 'mapbox';
          public static PRECISION_6: number = 6;
          public static PRECISION_5: number = 5;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module exceptions {
        export class ServicesException {
          public static class: java.lang.Class<com.mapbox.core.exceptions.ServicesException>;
          public constructor(message: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module internal {
        export class Preconditions {
          public static class: java.lang.Class<com.mapbox.core.internal.Preconditions>;
          public static checkNotNull(value: any, message: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class ApiCallHelper {
          public static class: java.lang.Class<com.mapbox.core.utils.ApiCallHelper>;
          public static getHeaderUserAgent(clientAppName: string): string;
          public static getHeaderUserAgent(clientAppName: string, osName: string, osVersion: string, osArch: string): string;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class ColorUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.ColorUtils>;
          public static toHexString(red: number, green: number, blue: number): string;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class MapboxUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.MapboxUtils>;
          public static isAccessTokenValid(accessToken: string): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class TextUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.TextUtils>;
          /** @deprecated */
          public static formatWaypointNames(i: androidNative.Array<string>): string;
          /** @deprecated */
          public static formatDistributions(i: java.util.List<androidNative.Array<java.lang.Integer>>): string;
          /** @deprecated */
          public static formatBearing(i: java.util.List<androidNative.Array<java.lang.Double>>): string;
          /** @deprecated */
          public static formatApproaches(i: androidNative.Array<string>): string;
          public static join(token: string, delimiter: androidNative.Array<any>): string;
          public static formatCoordinate(coordinate: number): string;
          /** @deprecated */
          public static formatRadiuses(i: androidNative.Array<number>): string;
          public static isEmpty(str: string): boolean;
          public static formatCoordinate(coordinate: number, precision: number): string;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.core.MapboxService:2
