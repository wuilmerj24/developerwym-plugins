declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngine {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngine>;
            /**
             * Constructs a new instance of the com.mapbox.android.core.location.LocationEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getLastLocation(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void; requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, param2: globalAndroid.os.Looper): void; requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void; removeLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void; removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void });
            public constructor();
            public removeLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
            public getLastLocation(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngineCallback<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineCallback<any>>;
            /**
             * Constructs a new instance of the com.mapbox.android.core.location.LocationEngineCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: T): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
            public onSuccess(param0: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngineCommonCompat extends com.mapbox.android.core.location.LocationEngine {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineCommonCompat>;
            public requestLocationUpdates(request: com.mapbox.android.core.location.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
            public equals(other: any): boolean;
            public removeLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public requestLocationUpdates(answer$iv: com.mapbox.android.core.location.LocationEngineRequest, value$iv: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, $this$getOrPut$iv: globalAndroid.os.Looper): void;
            public removeLocationUpdates(it: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public getLastLocation(callback: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
            public hashCode(): number;
            public constructor(compatEngine: com.mapbox.common.location.compat.LocationEngine);
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
            public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
            public toString(): string;
            public getLastLocation(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngineProvider {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineProvider>;
            public static getBestLocationEngine(context: globalAndroid.content.Context): com.mapbox.android.core.location.LocationEngine;
            /** @deprecated */
            public static getBestLocationEngine(context: globalAndroid.content.Context, background: boolean): com.mapbox.android.core.location.LocationEngine;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngineRequest {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineRequest>;
            public static PRIORITY_HIGH_ACCURACY: number = 0;
            public static PRIORITY_BALANCED_POWER_ACCURACY: number = 1;
            public static PRIORITY_LOW_POWER: number = 2;
            public static PRIORITY_NO_POWER: number = 3;
            public getDisplacement(): number;
            public getPriority(): number;
            public hashCode(): number;
            public getInterval(): number;
            public equals(o: any): boolean;
            public getMaxWaitTime(): number;
            public getFastestInterval(): number;
          }
          export module LocationEngineRequest {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineRequest.Builder>;
              public build(): com.mapbox.android.core.location.LocationEngineRequest;
              public setDisplacement(displacement: number): com.mapbox.android.core.location.LocationEngineRequest.Builder;
              public setFastestInterval(interval: number): com.mapbox.android.core.location.LocationEngineRequest.Builder;
              public setPriority(priority: number): com.mapbox.android.core.location.LocationEngineRequest.Builder;
              public setMaxWaitTime(maxWaitTime: number): com.mapbox.android.core.location.LocationEngineRequest.Builder;
              public constructor(interval: number);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module location {
          export class LocationEngineResult {
            public static class: java.lang.Class<com.mapbox.android.core.location.LocationEngineResult>;
            public static create(locations: java.util.List<globalAndroid.location.Location>): com.mapbox.android.core.location.LocationEngineResult;
            public static extractResult(intent: globalAndroid.content.Intent): com.mapbox.android.core.location.LocationEngineResult;
            public static create(location: globalAndroid.location.Location): com.mapbox.android.core.location.LocationEngineResult;
            public hashCode(): number;
            public equals(o: any): boolean;
            public getLocations(): java.util.List<globalAndroid.location.Location>;
            public getLastLocation(): globalAndroid.location.Location;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module permissions {
          export class CommonCompatPermissionsManagerProvider {
            public static class: java.lang.Class<com.mapbox.android.core.permissions.CommonCompatPermissionsManagerProvider>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module permissions {
          export class ConversionUtils {
            public static class: java.lang.Class<com.mapbox.android.core.permissions.ConversionUtils>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module permissions {
          export class PermissionsListener {
            public static class: java.lang.Class<com.mapbox.android.core.permissions.PermissionsListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.core.permissions.PermissionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onExplanationNeeded(param0: java.util.List<string>): void; onPermissionResult(param0: boolean): void });
            public constructor();
            public onExplanationNeeded(param0: java.util.List<string>): void;
            public onPermissionResult(param0: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module core {
        export module permissions {
          export class PermissionsManager {
            public static class: java.lang.Class<com.mapbox.android.core.permissions.PermissionsManager>;
            public static isBackgroundLocationPermissionGranted(context: globalAndroid.content.Context): boolean;
            public getListener(): com.mapbox.android.core.permissions.PermissionsListener;
            public static areLocationPermissionsGranted(context: globalAndroid.content.Context): boolean;
            public onRequestPermissionsResult(requestCode: number, permissions: androidNative.Array<string>, grantResults: androidNative.Array<number>): void;
            public requestLocationPermissions(activity: globalAndroid.app.Activity): void;
            public constructor(listener: com.mapbox.android.core.permissions.PermissionsListener);
            public setListener(listener: com.mapbox.android.core.permissions.PermissionsListener): void;
            public static areRuntimePermissionsRequired(): boolean;
            public static accuracyAuthorization(context: globalAndroid.content.Context): com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization;
          }
          export module PermissionsManager {
            export class AccuracyAuthorization {
              public static class: java.lang.Class<com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization>;
              public static NONE: com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization;
              public static PRECISE: com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization;
              public static APPROXIMATE: com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization;
              public static valueOf(name: string): com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization;
              public static values(): androidNative.Array<com.mapbox.android.core.permissions.PermissionsManager.AccuracyAuthorization>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class ArrayUtils {
        public static class: java.lang.Class<com.mapbox.bindgen.ArrayUtils>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Short>;
        public static convert(arr: androidNative.Array<any>): java.util.List<any>;
        public static convert(i: androidNative.Array<boolean>): java.util.List<java.lang.Boolean>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Long>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Double>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Byte>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Integer>;
        public static convert(i: androidNative.Array<number>): java.util.List<java.lang.Float>;
        public static convertListToArray(ls: java.util.List<any>): androidNative.Array<any>;
        public static convert(i: androidNative.Array<string>): java.util.List<java.lang.Character>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class Cleaner {
        public static class: java.lang.Class<com.mapbox.bindgen.Cleaner>;
        public static create(): com.mapbox.bindgen.Cleaner;
        public register(obj: any, action: java.lang.Runnable): void;
      }
      export module Cleaner {
        export class CleanerImpl {
          public static class: java.lang.Class<com.mapbox.bindgen.Cleaner.CleanerImpl>;
          public constructor();
          public run(): void;
          public register(obj: any, cleanAction: java.lang.Runnable): void;
          public start(): void;
        }
        export class Finalizer extends java.lang.ref.PhantomReference<any> {
          public static class: java.lang.Class<com.mapbox.bindgen.Cleaner.Finalizer>;
          public finalizeResources(): void;
          public constructor(referent: any, queue: java.lang.ref.ReferenceQueue<any>, cleanable: java.lang.Runnable);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class CleanerService {
        public static class: java.lang.Class<com.mapbox.bindgen.CleanerService>;
        public static register(obj: any, nativeCleaner: java.lang.Runnable): void;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class DataRef {
        public static class: java.lang.Class<com.mapbox.bindgen.DataRef>;
        public static allocateNative(size: number): com.mapbox.bindgen.DataRef;
        public constructor(buffer: java.nio.ByteBuffer);
        public getBuffer(): java.nio.ByteBuffer;
      }
      export module DataRef {
        export class DataRefPeerCleaner {
          public static class: java.lang.Class<com.mapbox.bindgen.DataRef.DataRefPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class Expected<E, V> extends java.lang.Object {
        public static class: java.lang.Class<com.mapbox.bindgen.Expected<any, any>>;
        public mapError(errorFun: com.mapbox.bindgen.Expected.Transformer<any, any>): com.mapbox.bindgen.Expected<any, any>;
        public onValue(action: com.mapbox.bindgen.Expected.Action<V>): com.mapbox.bindgen.Expected<E, V>;
        public fold(errorFun: com.mapbox.bindgen.Expected.Transformer<any, any>, valueFun: com.mapbox.bindgen.Expected.Transformer<any, any>): any;
        public onError(action: com.mapbox.bindgen.Expected.Action<E>): com.mapbox.bindgen.Expected<E, V>;
        public isError(): boolean;
        public getValue(): V;
        public mapValue(valueFun: com.mapbox.bindgen.Expected.Transformer<any, any>): com.mapbox.bindgen.Expected<any, any>;
        public getError(): E;
        public isValue(): boolean;
        public map(errorFun: com.mapbox.bindgen.Expected.Transformer<any, any>, valueFun: com.mapbox.bindgen.Expected.Transformer<any, any>): com.mapbox.bindgen.Expected<any, any>;
        public getValueOrElse(defaultFun: com.mapbox.bindgen.Expected.Transformer<E, V>): V;
      }
      export module Expected {
        export class Action<T> extends java.lang.Object {
          public static class: java.lang.Class<com.mapbox.bindgen.Expected.Action<any>>;
          /**
           * Constructs a new instance of the com.mapbox.bindgen.Expected$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { run(param0: T): void });
          public constructor();
          public run(param0: T): void;
        }
        export class Transformer<T, R> extends java.lang.Object {
          public static class: java.lang.Class<com.mapbox.bindgen.Expected.Transformer<any, any>>;
          /**
           * Constructs a new instance of the com.mapbox.bindgen.Expected$Transformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { invoke(param0: T): R });
          public constructor();
          public invoke(param0: T): R;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class ExpectedFactory {
        public static class: java.lang.Class<com.mapbox.bindgen.ExpectedFactory>;
        public static createValue(value: any): com.mapbox.bindgen.Expected<any, any>;
        public static createNone(): com.mapbox.bindgen.Expected<any, any>;
        public static createError(error: any): com.mapbox.bindgen.Expected<any, any>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class HashMapKeyValueExtractor {
        public static class: java.lang.Class<com.mapbox.bindgen.HashMapKeyValueExtractor>;
        public getKeys(): androidNative.Array<any>;
        public getValues(): androidNative.Array<any>;
        public constructor(this_: java.util.HashMap<any, any>);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class None {
        public static class: java.lang.Class<com.mapbox.bindgen.None>;
        public static getInstance(): com.mapbox.bindgen.None;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class RecordUtils {
        public static class: java.lang.Class<com.mapbox.bindgen.RecordUtils>;
        public static fieldToString(bytes: any): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class Size {
        public static class: java.lang.Class<com.mapbox.bindgen.Size>;
        public getWidth(): number;
        public getHeight(): number;
        public equals(this_: any): boolean;
        public hashCode(): number;
        public constructor(width: number, height: number);
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class Value {
        public static class: java.lang.Class<com.mapbox.bindgen.Value>;
        public static valueOf(str: string): com.mapbox.bindgen.Value;
        public constructor(str: string);
        public static valueOf(map: java.util.HashMap<string, com.mapbox.bindgen.Value>): com.mapbox.bindgen.Value;
        public constructor(map: java.util.HashMap<string, com.mapbox.bindgen.Value>);
        public getContents(): any;
        public toString(): string;
        public equals(otherClass: any): boolean;
        public toJson(): string;
        public static valueOf(array: java.util.List<com.mapbox.bindgen.Value>): com.mapbox.bindgen.Value;
        public static fromJson(e: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public constructor(l: number);
        public static valueOf(l: number): com.mapbox.bindgen.Value;
        public constructor(d: number);
        public static nullValue(): com.mapbox.bindgen.Value;
        public constructor(b: boolean);
        public constructor(array: java.util.List<com.mapbox.bindgen.Value>);
        public static valueOf(b: boolean): com.mapbox.bindgen.Value;
        public hashCode(): number;
        public static valueOf(d: number): com.mapbox.bindgen.Value;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module bindgen {
      export class VariantOptionalTypeWrapper {
        public static class: java.lang.Class<com.mapbox.bindgen.VariantOptionalTypeWrapper>;
        public constructor(value: any);
        public getValue(): any;
        public static valueOf(value: any): com.mapbox.bindgen.VariantOptionalTypeWrapper;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BaseLogger {
        public static class: java.lang.Class<com.mapbox.common.BaseLogger>;
        public static INSTANCE: com.mapbox.common.BaseLogger;
        public static debug(tag: string, message: string): void;
        public static warning(tag: string, message: string): void;
        public static info(tag: string, message: string): void;
        public static error(tag: string, message: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryChargingStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.BatteryChargingStatusCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.BatteryChargingStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, java.lang.Boolean>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, java.lang.Boolean>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryChargingStatusCallbackNative extends com.mapbox.common.BatteryChargingStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.BatteryChargingStatusCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, java.lang.Boolean>): void;
      }
      export module BatteryChargingStatusCallbackNative {
        export class BatteryChargingStatusCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BatteryChargingStatusCallbackNative.BatteryChargingStatusCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryMonitorFactory {
        public static class: java.lang.Class<com.mapbox.common.BatteryMonitorFactory>;
        public peer: number;
        public static setUserDefined(param0: com.mapbox.common.BatteryMonitorInterface): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static reset(): void;
        public static getOrCreate(): com.mapbox.common.BatteryMonitorInterface;
      }
      export module BatteryMonitorFactory {
        export class BatteryMonitorFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BatteryMonitorFactory.BatteryMonitorFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.BatteryMonitorInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.BatteryMonitorInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getBatteryChargingStatus(param0: com.mapbox.common.BatteryChargingStatusCallback): void; registerObserver(param0: com.mapbox.common.BatteryMonitorObserver): void; unregisterObserver(param0: com.mapbox.common.BatteryMonitorObserver): void });
        public constructor();
        public registerObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
        public unregisterObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
        public getBatteryChargingStatus(param0: com.mapbox.common.BatteryChargingStatusCallback): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryMonitorInterfaceNative extends com.mapbox.common.BatteryMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.BatteryMonitorInterfaceNative>;
        public peer: number;
        public registerObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
        public static cleanNativePeer(param0: number): void;
        public unregisterObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
        public getBatteryChargingStatus(param0: com.mapbox.common.BatteryChargingStatusCallback): void;
        public constructor(peer: number);
      }
      export module BatteryMonitorInterfaceNative {
        export class BatteryMonitorInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BatteryMonitorInterfaceNative.BatteryMonitorInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryMonitorObserver {
        public static class: java.lang.Class<com.mapbox.common.BatteryMonitorObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.BatteryMonitorObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBatteryChargingStatusChanged(param0: boolean): void; onBatteryStatusError(param0: string): void });
        public constructor();
        public onBatteryStatusError(param0: string): void;
        public onBatteryChargingStatusChanged(param0: boolean): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BatteryMonitorObserverNative extends com.mapbox.common.BatteryMonitorObserver {
        public static class: java.lang.Class<com.mapbox.common.BatteryMonitorObserverNative>;
        public peer: number;
        public onBatteryStatusError(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public onBatteryChargingStatusChanged(param0: boolean): void;
        public constructor(peer: number);
      }
      export module BatteryMonitorObserverNative {
        export class BatteryMonitorObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BatteryMonitorObserverNative.BatteryMonitorObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingServiceError {
        public static class: java.lang.Class<com.mapbox.common.BillingServiceError>;
        public constructor(code: com.mapbox.common.BillingServiceErrorCode, message: string);
        public hashCode(): number;
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
        public getCode(): com.mapbox.common.BillingServiceErrorCode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingServiceErrorCode {
        public static class: java.lang.Class<com.mapbox.common.BillingServiceErrorCode>;
        public static TOKEN_VALIDATION_FAILED: com.mapbox.common.BillingServiceErrorCode;
        public static RESUME_FAILED: com.mapbox.common.BillingServiceErrorCode;
        public static valueOf(name: string): com.mapbox.common.BillingServiceErrorCode;
        public static values(): androidNative.Array<com.mapbox.common.BillingServiceErrorCode>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingServiceFactory {
        public static class: java.lang.Class<com.mapbox.common.BillingServiceFactory>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public static getInstance(): com.mapbox.common.BillingServiceInterface;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module BillingServiceFactory {
        export class BillingServiceFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BillingServiceFactory.BillingServiceFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.BillingServiceInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.BillingServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          triggerUserBillingEvent(param0: string, param1: string, param2: com.mapbox.common.UserSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError): void;
          triggerMaploadBillingEvent(param0: string, param1: com.mapbox.common.MaploadSKUIdentifier, param2: com.mapbox.common.OnBillingServiceError): void;
          beginBillingSession(param0: string, param1: string, param2: com.mapbox.common.SessionSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError, param4: number): void;
          pauseBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
          resumeBillingSession(param0: com.mapbox.common.SessionSKUIdentifier, param1: com.mapbox.common.OnBillingServiceError): void;
          stopBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
          getSessionStatus(param0: com.mapbox.common.SessionSKUIdentifier): com.mapbox.common.BillingSessionStatus;
          getSessionSKUTokenIfValid(param0: com.mapbox.common.SessionSKUIdentifier): string;
          getUserSKUToken(param0: com.mapbox.common.UserSKUIdentifier): string;
        });
        public constructor();
        public triggerUserBillingEvent(param0: string, param1: string, param2: com.mapbox.common.UserSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError): void;
        public stopBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
        public getSessionSKUTokenIfValid(param0: com.mapbox.common.SessionSKUIdentifier): string;
        public triggerMaploadBillingEvent(param0: string, param1: com.mapbox.common.MaploadSKUIdentifier, param2: com.mapbox.common.OnBillingServiceError): void;
        public resumeBillingSession(param0: com.mapbox.common.SessionSKUIdentifier, param1: com.mapbox.common.OnBillingServiceError): void;
        public getUserSKUToken(param0: com.mapbox.common.UserSKUIdentifier): string;
        public beginBillingSession(param0: string, param1: string, param2: com.mapbox.common.SessionSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError, param4: number): void;
        public pauseBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
        public getSessionStatus(param0: com.mapbox.common.SessionSKUIdentifier): com.mapbox.common.BillingSessionStatus;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingServiceInterfaceNative extends com.mapbox.common.BillingServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.BillingServiceInterfaceNative>;
        public peer: number;
        public triggerUserBillingEvent(param0: string, param1: string, param2: com.mapbox.common.UserSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError): void;
        public stopBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
        public getSessionSKUTokenIfValid(param0: com.mapbox.common.SessionSKUIdentifier): string;
        public static cleanNativePeer(param0: number): void;
        public triggerMaploadBillingEvent(param0: string, param1: com.mapbox.common.MaploadSKUIdentifier, param2: com.mapbox.common.OnBillingServiceError): void;
        public resumeBillingSession(param0: com.mapbox.common.SessionSKUIdentifier, param1: com.mapbox.common.OnBillingServiceError): void;
        public getUserSKUToken(param0: com.mapbox.common.UserSKUIdentifier): string;
        public beginBillingSession(param0: string, param1: string, param2: com.mapbox.common.SessionSKUIdentifier, param3: com.mapbox.common.OnBillingServiceError, param4: number): void;
        public constructor(peer: number);
        public pauseBillingSession(param0: com.mapbox.common.SessionSKUIdentifier): void;
        public getSessionStatus(param0: com.mapbox.common.SessionSKUIdentifier): com.mapbox.common.BillingSessionStatus;
      }
      export module BillingServiceInterfaceNative {
        export class BillingServiceInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.BillingServiceInterfaceNative.BillingServiceInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class BillingSessionStatus {
        public static class: java.lang.Class<com.mapbox.common.BillingSessionStatus>;
        public static SESSION_ACTIVE: com.mapbox.common.BillingSessionStatus;
        public static SESSION_PAUSED: com.mapbox.common.BillingSessionStatus;
        public static NO_SESSION: com.mapbox.common.BillingSessionStatus;
        public static values(): androidNative.Array<com.mapbox.common.BillingSessionStatus>;
        public static valueOf(name: string): com.mapbox.common.BillingSessionStatus;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Cancelable {
        public static class: java.lang.Class<com.mapbox.common.Cancelable>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public cancel(): void;
        public constructor(peer: number);
      }
      export module Cancelable {
        export class CancelablePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.Cancelable.CancelablePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class CleanupManager {
        public static class: java.lang.Class<com.mapbox.common.CleanupManager>;
        public peer: number;
        public static cleanup(): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module CleanupManager {
        export class CleanupManagerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.CleanupManager.CleanupManagerPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationOptions {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationOptions>;
        public constructor(data: com.mapbox.bindgen.Value, digest: string, source: com.mapbox.common.ConfigurationOptionsSource);
        public getData(): com.mapbox.bindgen.Value;
        public hashCode(): number;
        public getDigest(): string;
        public toString(): string;
        public getSource(): com.mapbox.common.ConfigurationOptionsSource;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationOptionsSource {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationOptionsSource>;
        public static LOCAL: com.mapbox.common.ConfigurationOptionsSource;
        public static SERVER: com.mapbox.common.ConfigurationOptionsSource;
        public static valueOf(name: string): com.mapbox.common.ConfigurationOptionsSource;
        public static values(): androidNative.Array<com.mapbox.common.ConfigurationOptionsSource>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationService {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationService>;
        public peer: number;
        public getConfig(param0: com.mapbox.common.ConfigurationServiceGetConfigCallback): void;
        public registerObserver(param0: com.mapbox.common.ConfigurationServiceObserver): void;
        public static cleanNativePeer(param0: number): void;
        public static getOrCreate(param0: com.mapbox.common.EventsServerOptions): com.mapbox.common.ConfigurationService;
        public unregisterObserver(param0: com.mapbox.common.ConfigurationServiceObserver): void;
        public constructor(peer: number);
      }
      export module ConfigurationService {
        export class ConfigurationServicePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ConfigurationService.ConfigurationServicePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceError {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceError>;
        public constructor(code: com.mapbox.common.ConfigurationServiceErrorCode, message: string);
        public getCode(): com.mapbox.common.ConfigurationServiceErrorCode;
        public hashCode(): number;
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceErrorCode {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceErrorCode>;
        public static NO_TOKEN: com.mapbox.common.ConfigurationServiceErrorCode;
        public static NO_CONFIGURATION: com.mapbox.common.ConfigurationServiceErrorCode;
        public static HTTP_ERROR: com.mapbox.common.ConfigurationServiceErrorCode;
        public static MALFORMED_CONFIGURATION: com.mapbox.common.ConfigurationServiceErrorCode;
        public static IOERROR: com.mapbox.common.ConfigurationServiceErrorCode;
        public static UPDATE_IN_PROGRESS: com.mapbox.common.ConfigurationServiceErrorCode;
        public static UNEXPECTED_HTTPRESPONSE_CODE: com.mapbox.common.ConfigurationServiceErrorCode;
        public static EXPIRED_CONFIGURATION: com.mapbox.common.ConfigurationServiceErrorCode;
        public static values(): androidNative.Array<com.mapbox.common.ConfigurationServiceErrorCode>;
        public static valueOf(name: string): com.mapbox.common.ConfigurationServiceErrorCode;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceGetConfigCallback {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceGetConfigCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.ConfigurationServiceGetConfigCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ConfigurationServiceError, com.mapbox.common.ConfigurationOptions>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ConfigurationServiceError, com.mapbox.common.ConfigurationOptions>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceGetConfigCallbackNative extends com.mapbox.common.ConfigurationServiceGetConfigCallback {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceGetConfigCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ConfigurationServiceError, com.mapbox.common.ConfigurationOptions>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module ConfigurationServiceGetConfigCallbackNative {
        export class ConfigurationServiceGetConfigCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceGetConfigCallbackNative.ConfigurationServiceGetConfigCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceObserver {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.ConfigurationServiceObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { didStartUpdate(): void; didUpdate(param0: com.mapbox.common.ConfigurationOptions): void; didEncounterError(param0: com.mapbox.common.ConfigurationServiceError): void });
        public constructor();
        public didStartUpdate(): void;
        public didEncounterError(param0: com.mapbox.common.ConfigurationServiceError): void;
        public didUpdate(param0: com.mapbox.common.ConfigurationOptions): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConfigurationServiceObserverNative extends com.mapbox.common.ConfigurationServiceObserver {
        public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceObserverNative>;
        public peer: number;
        public didStartUpdate(): void;
        public didEncounterError(param0: com.mapbox.common.ConfigurationServiceError): void;
        public static cleanNativePeer(param0: number): void;
        public didUpdate(param0: com.mapbox.common.ConfigurationOptions): void;
        public constructor(peer: number);
      }
      export module ConfigurationServiceObserverNative {
        export class ConfigurationServiceObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ConfigurationServiceObserverNative.ConfigurationServiceObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ConnectionChangeReceiver {
        public static class: java.lang.Class<com.mapbox.common.ConnectionChangeReceiver>;
        public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
        public constructor(reachability: com.mapbox.common.Reachability);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class CoreInitializer extends androidx.startup.Initializer<com.mapbox.common.MapboxSDKCommon> {
        public static class: java.lang.Class<com.mapbox.common.CoreInitializer>;
        public create(this_: globalAndroid.content.Context): com.mapbox.common.MapboxSDKCommon;
        public dependencies(): java.util.List<java.lang.Class<any>>;
        public constructor();
        public static createSystemInformation(): com.mapbox.common.SystemInformation;
      }
      export module CoreInitializer {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.CoreInitializer.Companion>;
          public createSystemInformation(): com.mapbox.common.SystemInformation;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadError {
        public static class: java.lang.Class<com.mapbox.common.DownloadError>;
        public getCode(): com.mapbox.common.DownloadErrorCode;
        public hashCode(): number;
        public constructor(code: com.mapbox.common.DownloadErrorCode, message: string);
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadErrorCode {
        public static class: java.lang.Class<com.mapbox.common.DownloadErrorCode>;
        public static FILE_SYSTEM_ERROR: com.mapbox.common.DownloadErrorCode;
        public static NETWORK_ERROR: com.mapbox.common.DownloadErrorCode;
        public static values(): androidNative.Array<com.mapbox.common.DownloadErrorCode>;
        public static valueOf(name: string): com.mapbox.common.DownloadErrorCode;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadOptions {
        public static class: java.lang.Class<com.mapbox.common.DownloadOptions>;
        public getLocalPath(): string;
        public hashCode(): number;
        public constructor(request: com.mapbox.common.HttpRequest, localPath: string, resume: boolean);
        public setResume(resume: boolean): void;
        public getRequest(): com.mapbox.common.HttpRequest;
        public getResume(): boolean;
        public setRequest(request: com.mapbox.common.HttpRequest): void;
        public toString(): string;
        public equals(object: any): boolean;
        public constructor(request: com.mapbox.common.HttpRequest, localPath: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadState {
        public static class: java.lang.Class<com.mapbox.common.DownloadState>;
        public static PENDING: com.mapbox.common.DownloadState;
        public static DOWNLOADING: com.mapbox.common.DownloadState;
        public static FAILED: com.mapbox.common.DownloadState;
        public static FINISHED: com.mapbox.common.DownloadState;
        public static values(): androidNative.Array<com.mapbox.common.DownloadState>;
        public static valueOf(name: string): com.mapbox.common.DownloadState;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadStatus {
        public static class: java.lang.Class<com.mapbox.common.DownloadStatus>;
        public setTransferredBytes(transferredBytes: number): void;
        public setDownloadOptions(downloadOptions: com.mapbox.common.DownloadOptions): void;
        public setReceivedBytes(receivedBytes: number): void;
        public setDownloadId(downloadId: number): void;
        public constructor(downloadId: number, state: com.mapbox.common.DownloadState, error: com.mapbox.common.DownloadError, totalBytes: java.lang.Long, receivedBytes: number, transferredBytes: number, downloadOptions: com.mapbox.common.DownloadOptions, httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>);
        public setError(error: com.mapbox.common.DownloadError): void;
        public toString(): string;
        public equals(object: any): boolean;
        public constructor(error: com.mapbox.common.DownloadError, totalBytes: java.lang.Long, downloadOptions: com.mapbox.common.DownloadOptions, httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>);
        public getTransferredBytes(): number;
        public getDownloadOptions(): com.mapbox.common.DownloadOptions;
        public getReceivedBytes(): number;
        public getState(): com.mapbox.common.DownloadState;
        public setTotalBytes(totalBytes: java.lang.Long): void;
        public setState(state: com.mapbox.common.DownloadState): void;
        public getError(): com.mapbox.common.DownloadError;
        public setHttpResult(httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>): void;
        public hashCode(): number;
        public getHttpResult(): com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>;
        public getTotalBytes(): java.lang.Long;
        public getDownloadId(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.DownloadStatusCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.DownloadStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.DownloadStatus): void });
        public constructor();
        public run(param0: com.mapbox.common.DownloadStatus): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class DownloadStatusCallbackNative extends com.mapbox.common.DownloadStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.DownloadStatusCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.DownloadStatus): void;
      }
      export module DownloadStatusCallbackNative {
        export class DownloadStatusCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.DownloadStatusCallbackNative.DownloadStatusCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Event {
        public static class: java.lang.Class<com.mapbox.common.Event>;
        public getPriority(): com.mapbox.common.EventPriority;
        public setPriority(priority: com.mapbox.common.EventPriority): void;
        public constructor(priority: com.mapbox.common.EventPriority, attributes: com.mapbox.bindgen.Value, deferredOptions: com.mapbox.common.experimental.DeferredDeliveryRequestOptions);
        public hashCode(): number;
        public getAttributes(): com.mapbox.bindgen.Value;
        public constructor(attributes: com.mapbox.bindgen.Value, deferredOptions: com.mapbox.common.experimental.DeferredDeliveryRequestOptions);
        public getDeferredOptions(): com.mapbox.common.experimental.DeferredDeliveryRequestOptions;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventPriority {
        public static class: java.lang.Class<com.mapbox.common.EventPriority>;
        public static DEFERRED: com.mapbox.common.EventPriority;
        public static QUEUED: com.mapbox.common.EventPriority;
        public static IMMEDIATE: com.mapbox.common.EventPriority;
        public static values(): androidNative.Array<com.mapbox.common.EventPriority>;
        public static valueOf(name: string): com.mapbox.common.EventPriority;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsBuilder extends com.mapbox.common.EventsBuilderInterface {
        public static class: java.lang.Class<com.mapbox.common.EventsBuilder>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static buildErrorEvent(param0: com.mapbox.common.EventPriority, param1: string, param2: string, param3: boolean, param4: string, param5: string, param6: string, param7: java.util.HashMap<string, string>): com.mapbox.common.Event;
      }
      export module EventsBuilder {
        export class EventsBuilderPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.EventsBuilder.EventsBuilderPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsBuilderInterface {
        public static class: java.lang.Class<com.mapbox.common.EventsBuilderInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.EventsBuilderInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServerOptions {
        public static class: java.lang.Class<com.mapbox.common.EventsServerOptions>;
        public getUserAgentFragment(): string;
        public constructor(token: string, userAgentFragment: string, deferredDeliveryServiceOptions: com.mapbox.common.experimental.DeferredDeliveryServiceOptions);
        public hashCode(): number;
        public getDeferredDeliveryServiceOptions(): com.mapbox.common.experimental.DeferredDeliveryServiceOptions;
        public toString(): string;
        public equals(object: any): boolean;
        public getToken(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsService extends com.mapbox.common.EventsServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.EventsService>;
        public peer: number;
        public unregisterObserver(param0: com.mapbox.common.EventsServiceObserver): void;
        public sendEvent(param0: com.mapbox.common.Event, param1: com.mapbox.common.EventsServiceResponseCallback): void;
        public flush(param0: com.mapbox.common.FlushOperationResultCallback): void;
        public sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent, param1: com.mapbox.common.EventsServiceResponseCallback): void;
        public static cleanNativePeer(param0: number): void;
        public static getOrCreate(param0: com.mapbox.common.EventsServerOptions): com.mapbox.common.EventsService;
        public registerObserver(param0: com.mapbox.common.EventsServiceObserver): void;
        public constructor(peer: number);
      }
      export module EventsService {
        export class EventsServicePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.EventsService.EventsServicePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceError {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceError>;
        public hashCode(): number;
        public getCode(): com.mapbox.common.EventsServiceErrorCode;
        public getMessage(): string;
        public toString(): string;
        public constructor(code: com.mapbox.common.EventsServiceErrorCode, message: string);
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceErrorCode {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceErrorCode>;
        public static NO_TOKEN: com.mapbox.common.EventsServiceErrorCode;
        public static NO_USER_AGENT: com.mapbox.common.EventsServiceErrorCode;
        public static NOT_FOUND: com.mapbox.common.EventsServiceErrorCode;
        public static UNAUTHORIZED: com.mapbox.common.EventsServiceErrorCode;
        public static INVALID_PAYLOAD: com.mapbox.common.EventsServiceErrorCode;
        public static LARGE_PAYLOAD: com.mapbox.common.EventsServiceErrorCode;
        public static MULTI_STATUS: com.mapbox.common.EventsServiceErrorCode;
        public static BAD_REQUEST: com.mapbox.common.EventsServiceErrorCode;
        public static TIMEOUT: com.mapbox.common.EventsServiceErrorCode;
        public static INVALID_ENDPOINT: com.mapbox.common.EventsServiceErrorCode;
        public static MALFORMED_EVENT: com.mapbox.common.EventsServiceErrorCode;
        public static HTTP_ERROR: com.mapbox.common.EventsServiceErrorCode;
        public static EVENTS_DISABLED: com.mapbox.common.EventsServiceErrorCode;
        public static IOERROR: com.mapbox.common.EventsServiceErrorCode;
        public static values(): androidNative.Array<com.mapbox.common.EventsServiceErrorCode>;
        public toString(): string;
        public static valueOf(name: string): com.mapbox.common.EventsServiceErrorCode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.EventsServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { registerObserver(param0: com.mapbox.common.EventsServiceObserver): void; unregisterObserver(param0: com.mapbox.common.EventsServiceObserver): void; sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent, param1: com.mapbox.common.EventsServiceResponseCallback): void; sendEvent(param0: com.mapbox.common.Event, param1: com.mapbox.common.EventsServiceResponseCallback): void; flush(param0: com.mapbox.common.FlushOperationResultCallback): void });
        public constructor();
        public unregisterObserver(param0: com.mapbox.common.EventsServiceObserver): void;
        public sendEvent(param0: com.mapbox.common.Event, param1: com.mapbox.common.EventsServiceResponseCallback): void;
        public flush(param0: com.mapbox.common.FlushOperationResultCallback): void;
        public sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent, param1: com.mapbox.common.EventsServiceResponseCallback): void;
        public registerObserver(param0: com.mapbox.common.EventsServiceObserver): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceObserver {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.EventsServiceObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { didEncounterError(param0: com.mapbox.common.EventsServiceError, param1: com.mapbox.bindgen.Value): void; didSendEvents(param0: com.mapbox.bindgen.Value): void });
        public constructor();
        public didSendEvents(param0: com.mapbox.bindgen.Value): void;
        public didEncounterError(param0: com.mapbox.common.EventsServiceError, param1: com.mapbox.bindgen.Value): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceObserverNative extends com.mapbox.common.EventsServiceObserver {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceObserverNative>;
        public peer: number;
        public didSendEvents(param0: com.mapbox.bindgen.Value): void;
        public static cleanNativePeer(param0: number): void;
        public didEncounterError(param0: com.mapbox.common.EventsServiceError, param1: com.mapbox.bindgen.Value): void;
        public constructor(peer: number);
      }
      export module EventsServiceObserverNative {
        export class EventsServiceObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.EventsServiceObserverNative.EventsServiceObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceResponseCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.EventsServiceResponseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.EventsServiceError): void });
        public constructor();
        public run(param0: com.mapbox.common.EventsServiceError): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class EventsServiceResponseCallbackNative extends com.mapbox.common.EventsServiceResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.EventsServiceResponseCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.EventsServiceError): void;
      }
      export module EventsServiceResponseCallbackNative {
        export class EventsServiceResponseCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.EventsServiceResponseCallbackNative.EventsServiceResponseCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class FeatureTelemetryCountersV2 {
        public static class: java.lang.Class<com.mapbox.common.FeatureTelemetryCountersV2>;
        public peer: number;
        public static increment(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module FeatureTelemetryCountersV2 {
        export class FeatureTelemetryCountersV2PeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.FeatureTelemetryCountersV2.FeatureTelemetryCountersV2PeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class FeatureTelemetryCountersV2Test {
        public static class: java.lang.Class<com.mapbox.common.FeatureTelemetryCountersV2Test>;
        public peer: number;
        public static moveCounters(): java.util.HashMap<string, java.lang.Integer>;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module FeatureTelemetryCountersV2Test {
        export class FeatureTelemetryCountersV2TestPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.FeatureTelemetryCountersV2Test.FeatureTelemetryCountersV2TestPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class FlushOperationResultCallback {
        public static class: java.lang.Class<com.mapbox.common.FlushOperationResultCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.FlushOperationResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class FlushOperationResultCallbackNative extends com.mapbox.common.FlushOperationResultCallback {
        public static class: java.lang.Class<com.mapbox.common.FlushOperationResultCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void;
      }
      export module FlushOperationResultCallbackNative {
        export class FlushOperationResultCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.FlushOperationResultCallbackNative.FlushOperationResultCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class GetLifecycleMonitoringStateCallback {
        public static class: java.lang.Class<com.mapbox.common.GetLifecycleMonitoringStateCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.GetLifecycleMonitoringStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleMonitoringState>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleMonitoringState>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class GetLifecycleMonitoringStateCallbackNative extends com.mapbox.common.GetLifecycleMonitoringStateCallback {
        public static class: java.lang.Class<com.mapbox.common.GetLifecycleMonitoringStateCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleMonitoringState>): void;
      }
      export module GetLifecycleMonitoringStateCallbackNative {
        export class GetLifecycleMonitoringStateCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.GetLifecycleMonitoringStateCallbackNative.GetLifecycleMonitoringStateCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class GetLifecycleStateCallback {
        public static class: java.lang.Class<com.mapbox.common.GetLifecycleStateCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.GetLifecycleStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleState>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleState>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class GetLifecycleStateCallbackNative extends com.mapbox.common.GetLifecycleStateCallback {
        public static class: java.lang.Class<com.mapbox.common.GetLifecycleStateCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.LifecycleState>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module GetLifecycleStateCallbackNative {
        export class GetLifecycleStateCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.GetLifecycleStateCallbackNative.GetLifecycleStateCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpCertificatePinsProvider {
        public static class: java.lang.Class<com.mapbox.common.HttpCertificatePinsProvider>;
        public peer: number;
        /** @deprecated */
        public static getPins(): java.util.HashMap<string, java.util.List<string>>;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module HttpCertificatePinsProvider {
        export class HttpCertificatePinsProviderPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.HttpCertificatePinsProvider.HttpCertificatePinsProviderPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpHeaders {
        public static class: java.lang.Class<com.mapbox.common.HttpHeaders>;
        public static CACHE_CONTROL: string = 'cache-control';
        public static CONTENT_ENCODING: string = 'content-encoding';
        public static CONTENT_LENGTH: string = 'content-length';
        public static CONTENT_TYPE: string = 'content-type';
        public static DIGEST: string = 'digest';
        public static ETAG: string = 'etag';
        public static IF_NONE_MATCH: string = 'if-none-match';
        public static LAST_MODIFIED: string = 'last-modified';
        public static USER_AGENT: string = 'user-agent';
        public static XACCEPT_ENCODING: string = 'x-accept-encoding';
        public static XCONTENT_ENCODING: string = 'x-content-encoding';
        public static XACCEPT_DELTA: string = 'x-accept-delta';
        public static XCANONICAL_ETAG: string = 'x-canonical-etag';
        public static XDELTA_BASE: string = 'x-delta-base';
        public static XRATE_LIMIT_RESET: string = 'x-rate-limit-reset';
        public static XAPP_INFO: string = 'x-mapbox-app-info';
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpMethod {
        public static class: java.lang.Class<com.mapbox.common.HttpMethod>;
        public static GET: com.mapbox.common.HttpMethod;
        public static HEAD: com.mapbox.common.HttpMethod;
        public static POST: com.mapbox.common.HttpMethod;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.common.HttpMethod>;
        public static valueOf(name: string): com.mapbox.common.HttpMethod;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpRequest {
        public static class: java.lang.Class<com.mapbox.common.HttpRequest>;
        public getUaComponents(): com.mapbox.common.UAComponents;
        public getTimeout(): number;
        public getUrl(): string;
        public getBody(): androidNative.Array<number>;
        public setMethod(method: com.mapbox.common.HttpMethod): void;
        public toString(): string;
        public equals(object: any): boolean;
        public toBuilder(): com.mapbox.common.HttpRequest.Builder;
        public setHeaders(headers: java.util.HashMap<string, string>): void;
        public getMethod(): com.mapbox.common.HttpMethod;
        public getHeaders(): java.util.HashMap<string, string>;
        public hashCode(): number;
        public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
        public getKeepCompression(): boolean;
      }
      export module HttpRequest {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.common.HttpRequest.Builder>;
          public body(body: androidNative.Array<number>): com.mapbox.common.HttpRequest.Builder;
          public keepCompression(keepCompression: boolean): com.mapbox.common.HttpRequest.Builder;
          public uaComponents(uaComponents: com.mapbox.common.UAComponents): com.mapbox.common.HttpRequest.Builder;
          public build(): com.mapbox.common.HttpRequest;
          public constructor();
          public url(url: string): com.mapbox.common.HttpRequest.Builder;
          public headers(headers: java.util.HashMap<string, string>): com.mapbox.common.HttpRequest.Builder;
          public method(method: com.mapbox.common.HttpMethod): com.mapbox.common.HttpRequest.Builder;
          public timeout(timeout: number): com.mapbox.common.HttpRequest.Builder;
          public networkRestriction(networkRestriction: com.mapbox.common.NetworkRestriction): com.mapbox.common.HttpRequest.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpRequestError {
        public static class: java.lang.Class<com.mapbox.common.HttpRequestError>;
        public getType(): com.mapbox.common.HttpRequestErrorType;
        public hashCode(): number;
        public constructor(type: com.mapbox.common.HttpRequestErrorType, message: string);
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpRequestErrorType {
        public static class: java.lang.Class<com.mapbox.common.HttpRequestErrorType>;
        public static CONNECTION_ERROR: com.mapbox.common.HttpRequestErrorType;
        public static SSLERROR: com.mapbox.common.HttpRequestErrorType;
        public static REQUEST_CANCELLED: com.mapbox.common.HttpRequestErrorType;
        public static REQUEST_TIMED_OUT: com.mapbox.common.HttpRequestErrorType;
        public static RANGE_ERROR: com.mapbox.common.HttpRequestErrorType;
        public static OTHER_ERROR: com.mapbox.common.HttpRequestErrorType;
        public static valueOf(name: string): com.mapbox.common.HttpRequestErrorType;
        public static values(): androidNative.Array<com.mapbox.common.HttpRequestErrorType>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpResponse {
        public static class: java.lang.Class<com.mapbox.common.HttpResponse>;
        public getResult(): com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>;
        public hashCode(): number;
        public getRequest(): com.mapbox.common.HttpRequest;
        public toString(): string;
        public constructor(request: com.mapbox.common.HttpRequest, result: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>);
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.HttpResponseCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.HttpResponseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.HttpResponse): void });
        public constructor();
        public run(param0: com.mapbox.common.HttpResponse): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpResponseCallbackNative extends com.mapbox.common.HttpResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.HttpResponseCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.HttpResponse): void;
      }
      export module HttpResponseCallbackNative {
        export class HttpResponseCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.HttpResponseCallbackNative.HttpResponseCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpResponseData {
        public static class: java.lang.Class<com.mapbox.common.HttpResponseData>;
        public constructor(headers: java.util.HashMap<string, string>, code: number, data: androidNative.Array<number>);
        public getHeaders(): java.util.HashMap<string, string>;
        public hashCode(): number;
        public getCode(): number;
        public getData(): androidNative.Array<number>;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpServiceFactory {
        public static class: java.lang.Class<com.mapbox.common.HttpServiceFactory>;
        public peer: number;
        public static getInstance(): com.mapbox.common.HttpServiceInterface;
        public static setUserDefined(param0: com.mapbox.common.HttpServiceInterface): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module HttpServiceFactory {
        export class HttpServiceFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.HttpServiceFactory.HttpServiceFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpServiceInterceptorInterface {
        public static class: java.lang.Class<com.mapbox.common.HttpServiceInterceptorInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.HttpServiceInterceptorInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onRequest(param0: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest; onDownload(param0: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions; onResponse(param0: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse });
        public constructor();
        public onDownload(param0: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
        public onResponse(param0: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
        public onRequest(param0: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpServiceInterceptorInterfaceNative extends com.mapbox.common.HttpServiceInterceptorInterface {
        public static class: java.lang.Class<com.mapbox.common.HttpServiceInterceptorInterfaceNative>;
        public peer: number;
        public onDownload(param0: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
        public onResponse(param0: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public onRequest(param0: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
      }
      export module HttpServiceInterceptorInterfaceNative {
        export class HttpServiceInterceptorInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.HttpServiceInterceptorInterfaceNative.HttpServiceInterceptorInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.HttpServiceInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.HttpServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { setInterceptor(param0: com.mapbox.common.HttpServiceInterceptorInterface): void; setMaxRequestsPerHost(param0: number): void; request(param0: com.mapbox.common.HttpRequest, param1: com.mapbox.common.HttpResponseCallback): number; cancelRequest(param0: number, param1: com.mapbox.common.ResultCallback): void; supportsKeepCompression(): boolean; download(param0: com.mapbox.common.DownloadOptions, param1: com.mapbox.common.DownloadStatusCallback): number });
        public constructor();
        public cancelRequest(param0: number, param1: com.mapbox.common.ResultCallback): void;
        public request(param0: com.mapbox.common.HttpRequest, param1: com.mapbox.common.HttpResponseCallback): number;
        public setInterceptor(param0: com.mapbox.common.HttpServiceInterceptorInterface): void;
        public setMaxRequestsPerHost(param0: number): void;
        public supportsKeepCompression(): boolean;
        public download(param0: com.mapbox.common.DownloadOptions, param1: com.mapbox.common.DownloadStatusCallback): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class HttpServiceInterfaceNative extends com.mapbox.common.HttpServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.HttpServiceInterfaceNative>;
        public peer: number;
        public cancelRequest(param0: number, param1: com.mapbox.common.ResultCallback): void;
        public request(param0: com.mapbox.common.HttpRequest, param1: com.mapbox.common.HttpResponseCallback): number;
        public setInterceptor(param0: com.mapbox.common.HttpServiceInterceptorInterface): void;
        public static cleanNativePeer(param0: number): void;
        public setMaxRequestsPerHost(param0: number): void;
        public constructor(peer: number);
        public supportsKeepCompression(): boolean;
        public download(param0: com.mapbox.common.DownloadOptions, param1: com.mapbox.common.DownloadStatusCallback): number;
      }
      export module HttpServiceInterfaceNative {
        export class HttpServiceInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.HttpServiceInterfaceNative.HttpServiceInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class IdGenerator {
        public static class: java.lang.Class<com.mapbox.common.IdGenerator>;
        public static getNewId(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleMonitorAndroid extends com.mapbox.common.LifecycleMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorAndroid>;
        public static TAG: string = 'LifecycleMonitor';
        public registerObserver(this_: com.mapbox.common.LifecycleObserver): void;
        public stop(): void;
        public getLifecycleState(param0: com.mapbox.common.GetLifecycleStateCallback): void;
        public getMonitoringState(param0: com.mapbox.common.GetLifecycleMonitoringStateCallback): void;
        public getLifecycleState(this_: com.mapbox.common.GetLifecycleStateCallback): void;
        public unregisterObserver(observer: com.mapbox.common.LifecycleObserver): void;
        public unregisterObserver(param0: com.mapbox.common.LifecycleObserver): void;
        public start(): void;
        public registerObserver(param0: com.mapbox.common.LifecycleObserver): void;
        public getMonitoringState(this_: com.mapbox.common.GetLifecycleMonitoringStateCallback): void;
        public static getInstance(): com.mapbox.common.LifecycleMonitorInterface;
      }
      export module LifecycleMonitorAndroid {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorAndroid.Companion>;
          public getInstance(): com.mapbox.common.LifecycleMonitorInterface;
        }
        export class MonitorState {
          public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorAndroid.MonitorState>;
          public static STARTING: com.mapbox.common.LifecycleMonitorAndroid.MonitorState;
          public static STARTED: com.mapbox.common.LifecycleMonitorAndroid.MonitorState;
          public static STOPPING: com.mapbox.common.LifecycleMonitorAndroid.MonitorState;
          public static STOPPED: com.mapbox.common.LifecycleMonitorAndroid.MonitorState;
          public static valueOf(value: string): com.mapbox.common.LifecycleMonitorAndroid.MonitorState;
          public static values(): androidNative.Array<com.mapbox.common.LifecycleMonitorAndroid.MonitorState>;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorAndroid.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleMonitorFactory {
        public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorFactory>;
        public peer: number;
        public static getOrCreate(): com.mapbox.common.LifecycleMonitorInterface;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module LifecycleMonitorFactory {
        export class LifecycleMonitorFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorFactory.LifecycleMonitorFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.LifecycleMonitorInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getLifecycleState(param0: com.mapbox.common.GetLifecycleStateCallback): void; getMonitoringState(param0: com.mapbox.common.GetLifecycleMonitoringStateCallback): void; registerObserver(param0: com.mapbox.common.LifecycleObserver): void; unregisterObserver(param0: com.mapbox.common.LifecycleObserver): void });
        public constructor();
        public getLifecycleState(param0: com.mapbox.common.GetLifecycleStateCallback): void;
        public getMonitoringState(param0: com.mapbox.common.GetLifecycleMonitoringStateCallback): void;
        public unregisterObserver(param0: com.mapbox.common.LifecycleObserver): void;
        public registerObserver(param0: com.mapbox.common.LifecycleObserver): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleMonitorInterfaceNative extends com.mapbox.common.LifecycleMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorInterfaceNative>;
        public peer: number;
        public getLifecycleState(param0: com.mapbox.common.GetLifecycleStateCallback): void;
        public getMonitoringState(param0: com.mapbox.common.GetLifecycleMonitoringStateCallback): void;
        public unregisterObserver(param0: com.mapbox.common.LifecycleObserver): void;
        public static cleanNativePeer(param0: number): void;
        public registerObserver(param0: com.mapbox.common.LifecycleObserver): void;
        public constructor(peer: number);
      }
      export module LifecycleMonitorInterfaceNative {
        export class LifecycleMonitorInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.LifecycleMonitorInterfaceNative.LifecycleMonitorInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleMonitoringState {
        public static class: java.lang.Class<com.mapbox.common.LifecycleMonitoringState>;
        public static STOPPED: com.mapbox.common.LifecycleMonitoringState;
        public static STARTED: com.mapbox.common.LifecycleMonitoringState;
        public static valueOf(name: string): com.mapbox.common.LifecycleMonitoringState;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.common.LifecycleMonitoringState>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleObserver {
        public static class: java.lang.Class<com.mapbox.common.LifecycleObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.LifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onMonitoringStateChanged(param0: com.mapbox.common.LifecycleMonitoringState, param1: string): void; onLifecycleStateChanged(param0: com.mapbox.common.LifecycleState): void });
        public constructor();
        public onMonitoringStateChanged(param0: com.mapbox.common.LifecycleMonitoringState, param1: string): void;
        public onLifecycleStateChanged(param0: com.mapbox.common.LifecycleState): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleObserverNative extends com.mapbox.common.LifecycleObserver {
        public static class: java.lang.Class<com.mapbox.common.LifecycleObserverNative>;
        public peer: number;
        public onMonitoringStateChanged(param0: com.mapbox.common.LifecycleMonitoringState, param1: string): void;
        public onLifecycleStateChanged(param0: com.mapbox.common.LifecycleState): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module LifecycleObserverNative {
        export class LifecycleObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.LifecycleObserverNative.LifecycleObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleService {
        public static class: java.lang.Class<com.mapbox.common.LifecycleService>;
        public static TAG: string = 'LifecycleService';
        public getLifecycleState(): com.mapbox.common.LifecycleState;
        public onCreate(): void;
        public setCallback(observer: com.mapbox.common.LifecycleService.Callback): void;
        public onDestroy(): void;
        public constructor();
        public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
      }
      export module LifecycleService {
        export class ActivityState {
          public static class: java.lang.Class<com.mapbox.common.LifecycleService.ActivityState>;
          public static Unknown: com.mapbox.common.LifecycleService.ActivityState;
          public static Created: com.mapbox.common.LifecycleService.ActivityState;
          public static Started: com.mapbox.common.LifecycleService.ActivityState;
          public static Resumed: com.mapbox.common.LifecycleService.ActivityState;
          public static Paused: com.mapbox.common.LifecycleService.ActivityState;
          public static Stopped: com.mapbox.common.LifecycleService.ActivityState;
          public static SaveInstanceState: com.mapbox.common.LifecycleService.ActivityState;
          public static Destroyed: com.mapbox.common.LifecycleService.ActivityState;
          public static values(): androidNative.Array<com.mapbox.common.LifecycleService.ActivityState>;
          public static valueOf(value: string): com.mapbox.common.LifecycleService.ActivityState;
        }
        export class Binder {
          public static class: java.lang.Class<com.mapbox.common.LifecycleService.Binder>;
          public constructor(this$0: com.mapbox.common.LifecycleService);
          public getService(): com.mapbox.common.LifecycleService;
        }
        export class Callback {
          public static class: java.lang.Class<com.mapbox.common.LifecycleService.Callback>;
          /**
           * Constructs a new instance of the com.mapbox.common.LifecycleService$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onLifecycleStateChanged(param0: com.mapbox.common.LifecycleState): void });
          public constructor();
          public onLifecycleStateChanged(param0: com.mapbox.common.LifecycleState): void;
        }
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.LifecycleService.Companion>;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.mapbox.common.LifecycleService.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleState {
        public static class: java.lang.Class<com.mapbox.common.LifecycleState>;
        public static UNKNOWN: com.mapbox.common.LifecycleState;
        public static MOVING_FOREGROUND: com.mapbox.common.LifecycleState;
        public static FOREGROUND: com.mapbox.common.LifecycleState;
        public static MOVING_BACKGROUND: com.mapbox.common.LifecycleState;
        public static BACKGROUND: com.mapbox.common.LifecycleState;
        public static INACTIVE: com.mapbox.common.LifecycleState;
        public static values(): androidNative.Array<com.mapbox.common.LifecycleState>;
        public static valueOf(name: string): com.mapbox.common.LifecycleState;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LifecycleUtils {
        public static class: java.lang.Class<com.mapbox.common.LifecycleUtils>;
        public static INSTANCE: com.mapbox.common.LifecycleUtils;
        public hasServiceRunningInForeground(it: globalAndroid.content.Context): boolean;
        public getAppLifecycleStateFromActivityManager($this$getAppLifecycleStateFromActivityManager_u24lambda_u2d4: globalAndroid.content.Context): com.mapbox.common.LifecycleState;
        public getLifecycleState(context: globalAndroid.content.Context): com.mapbox.common.LifecycleState;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Log {
        public static class: java.lang.Class<com.mapbox.common.Log>;
        public peer: number;
        public static warning(param0: string, param1: string): void;
        public static cleanNativePeer(param0: number): void;
        public static debug(param0: string, param1: string): void;
        public static info(param0: string, param1: string): void;
        public constructor(peer: number);
        public static error(param0: string, param1: string): void;
      }
      export module Log {
        export class LogPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.Log.LogPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LogBackend extends com.mapbox.common.LogWriterBackend {
        public static class: java.lang.Class<com.mapbox.common.LogBackend>;
        public writeLog(param0: com.mapbox.common.LoggingLevel, param1: string): void;
        public constructor();
        public writeLog(level: com.mapbox.common.LoggingLevel, message: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LogConfiguration {
        public static class: java.lang.Class<com.mapbox.common.LogConfiguration>;
        public peer: number;
        public static setLoggingLevel(param0: com.mapbox.common.LoggingLevel): void;
        public static getLoggingLevel(): com.mapbox.common.LoggingLevel;
        public static setLoggingLevel(param0: string, param1: com.mapbox.common.LoggingLevel): void;
        public static resetLoggingLevel(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static registerLogWriterBackend(param0: com.mapbox.common.LogWriterBackend): void;
        public static getLoggingLevel(param0: string): com.mapbox.common.LoggingLevel;
      }
      export module LogConfiguration {
        export class LogConfigurationPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.LogConfiguration.LogConfigurationPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LogWriterBackend {
        public static class: java.lang.Class<com.mapbox.common.LogWriterBackend>;
        /**
         * Constructs a new instance of the com.mapbox.common.LogWriterBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { writeLog(param0: com.mapbox.common.LoggingLevel, param1: string): void });
        public constructor();
        public writeLog(param0: com.mapbox.common.LoggingLevel, param1: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LogWriterBackendNative extends com.mapbox.common.LogWriterBackend {
        public static class: java.lang.Class<com.mapbox.common.LogWriterBackendNative>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public writeLog(param0: com.mapbox.common.LoggingLevel, param1: string): void;
        public constructor(peer: number);
      }
      export module LogWriterBackendNative {
        export class LogWriterBackendPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.LogWriterBackendNative.LogWriterBackendPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Logger {
        public static class: java.lang.Class<com.mapbox.common.Logger>;
        public static w(tag: string, message: string): void;
        public static e(tag: string, message: string): void;
        public static removeCategoryFilter(message: string): void;
        public static d(tag: string, message: string): void;
        public static addCategoryFilter(message: string): void;
        public constructor();
        public static i(tag: string, message: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class LoggingLevel {
        public static class: java.lang.Class<com.mapbox.common.LoggingLevel>;
        public static DEBUG: com.mapbox.common.LoggingLevel;
        public static INFO: com.mapbox.common.LoggingLevel;
        public static WARNING: com.mapbox.common.LoggingLevel;
        public static ERROR: com.mapbox.common.LoggingLevel;
        public static valueOf(name: string): com.mapbox.common.LoggingLevel;
        public static values(): androidNative.Array<com.mapbox.common.LoggingLevel>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MapboxCommonSettings {
        public static class: java.lang.Class<com.mapbox.common.MapboxCommonSettings>;
        public static LANGUAGE: string = 'com.mapbox.common.i18n.language';
        public static WORLDVIEW: string = 'com.mapbox.common.i18n.worldview';
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MapboxSDKCommon {
        public static class: java.lang.Class<com.mapbox.common.MapboxSDKCommon>;
        public static INSTANCE: com.mapbox.common.MapboxSDKCommon;
        public getContext(): globalAndroid.content.Context;
        public invoke(context: globalAndroid.content.Context): com.mapbox.common.MapboxSDKCommon;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MapboxSDKCommonInitializer extends androidx.startup.Initializer<com.mapbox.common.MapboxSDKCommon> {
        public static class: java.lang.Class<com.mapbox.common.MapboxSDKCommonInitializer>;
        public create(this_: globalAndroid.content.Context): com.mapbox.common.MapboxSDKCommon;
        public dependencies(): java.util.List<java.lang.Class<any>>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MaploadSKUIdentifier {
        public static class: java.lang.Class<com.mapbox.common.MaploadSKUIdentifier>;
        public static PREMIUM_SDK: com.mapbox.common.MaploadSKUIdentifier;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.common.MaploadSKUIdentifier>;
        public static valueOf(name: string): com.mapbox.common.MaploadSKUIdentifier;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MmeTelemetryProperties {
        public static class: java.lang.Class<com.mapbox.common.MmeTelemetryProperties>;
        public static migrateLegacyProperties(): void;
        /** @deprecated */
        public static shouldDisableEventsCollection(): boolean;
        public static shouldDisableEventsCollectionPermanently(): boolean;
        public static getUnsupported(): java.util.List<string>;
        public constructor();
      }
      export module MmeTelemetryProperties {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.MmeTelemetryProperties.Companion>;
          public getUnsupported(): java.util.List<string>;
          public migrateLegacyProperties(): void;
          /** @deprecated */
          public shouldDisableEventsCollection(): boolean;
          public shouldDisableEventsCollectionPermanently(): boolean;
        }
        export class State {
          public static class: java.lang.Class<com.mapbox.common.MmeTelemetryProperties.State>;
          public static ENABLED: com.mapbox.common.MmeTelemetryProperties.State;
          public static DISABLED: com.mapbox.common.MmeTelemetryProperties.State;
          public static values(): androidNative.Array<com.mapbox.common.MmeTelemetryProperties.State>;
          public static valueOf(value: string): com.mapbox.common.MmeTelemetryProperties.State;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementInfo {
        public static class: java.lang.Class<com.mapbox.common.MovementInfo>;
        public getMovementMode(): java.util.HashMap<com.mapbox.common.MovementMode, java.lang.Integer>;
        public hashCode(): number;
        public getMovementProvider(): com.mapbox.common.MovementModeProvider;
        public toString(): string;
        public constructor(movementMode: java.util.HashMap<com.mapbox.common.MovementMode, java.lang.Integer>, movementProvider: com.mapbox.common.MovementModeProvider);
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementInfoCallback {
        public static class: java.lang.Class<com.mapbox.common.MovementInfoCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.MovementInfoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.MovementInfo>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.MovementInfo>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementInfoCallbackNative extends com.mapbox.common.MovementInfoCallback {
        public static class: java.lang.Class<com.mapbox.common.MovementInfoCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.common.MovementInfo>): void;
      }
      export module MovementInfoCallbackNative {
        export class MovementInfoCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.MovementInfoCallbackNative.MovementInfoCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementMode {
        public static class: java.lang.Class<com.mapbox.common.MovementMode>;
        public static IN_VEHICLE: com.mapbox.common.MovementMode;
        public static CYCLING: com.mapbox.common.MovementMode;
        public static RUNNING: com.mapbox.common.MovementMode;
        public static WALKING: com.mapbox.common.MovementMode;
        public static ON_FOOT: com.mapbox.common.MovementMode;
        public static STATIONARY: com.mapbox.common.MovementMode;
        public static UNKNOWN: com.mapbox.common.MovementMode;
        public static values(): androidNative.Array<com.mapbox.common.MovementMode>;
        public static valueOf(name: string): com.mapbox.common.MovementMode;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementModeObserver {
        public static class: java.lang.Class<com.mapbox.common.MovementModeObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.MovementModeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onMovementModeChanged(param0: com.mapbox.common.MovementInfo): void; onMovementModeError(param0: string): void });
        public constructor();
        public onMovementModeError(param0: string): void;
        public onMovementModeChanged(param0: com.mapbox.common.MovementInfo): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementModeObserverNative extends com.mapbox.common.MovementModeObserver {
        public static class: java.lang.Class<com.mapbox.common.MovementModeObserverNative>;
        public peer: number;
        public onMovementModeError(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public onMovementModeChanged(param0: com.mapbox.common.MovementInfo): void;
        public constructor(peer: number);
      }
      export module MovementModeObserverNative {
        export class MovementModeObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.MovementModeObserverNative.MovementModeObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementModeProvider {
        public static class: java.lang.Class<com.mapbox.common.MovementModeProvider>;
        public static SYSTEM: com.mapbox.common.MovementModeProvider;
        public static SDK: com.mapbox.common.MovementModeProvider;
        public static UNKNOWN: com.mapbox.common.MovementModeProvider;
        public static values(): androidNative.Array<com.mapbox.common.MovementModeProvider>;
        public static valueOf(name: string): com.mapbox.common.MovementModeProvider;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementMonitorFactory {
        public static class: java.lang.Class<com.mapbox.common.MovementMonitorFactory>;
        public peer: number;
        public static setUserDefined(param0: com.mapbox.common.MovementMonitorInterface): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static getOrCreate(): com.mapbox.common.MovementMonitorInterface;
        public static reset(): void;
      }
      export module MovementMonitorFactory {
        export class MovementMonitorFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.MovementMonitorFactory.MovementMonitorFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.MovementMonitorInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.MovementMonitorInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getMovementInfo(param0: com.mapbox.common.MovementInfoCallback): void; setMovementInfo(param0: com.mapbox.common.MovementInfo): void; registerObserver(param0: com.mapbox.common.MovementModeObserver): void; unregisterObserver(param0: com.mapbox.common.MovementModeObserver): void });
        public constructor();
        public getMovementInfo(param0: com.mapbox.common.MovementInfoCallback): void;
        public registerObserver(param0: com.mapbox.common.MovementModeObserver): void;
        public setMovementInfo(param0: com.mapbox.common.MovementInfo): void;
        public unregisterObserver(param0: com.mapbox.common.MovementModeObserver): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class MovementMonitorInterfaceNative extends com.mapbox.common.MovementMonitorInterface {
        public static class: java.lang.Class<com.mapbox.common.MovementMonitorInterfaceNative>;
        public peer: number;
        public getMovementInfo(param0: com.mapbox.common.MovementInfoCallback): void;
        public registerObserver(param0: com.mapbox.common.MovementModeObserver): void;
        public static cleanNativePeer(param0: number): void;
        public setMovementInfo(param0: com.mapbox.common.MovementInfo): void;
        public unregisterObserver(param0: com.mapbox.common.MovementModeObserver): void;
        public constructor(peer: number);
      }
      export module MovementMonitorInterfaceNative {
        export class MovementMonitorInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.MovementMonitorInterfaceNative.MovementMonitorInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class NetworkRestriction {
        public static class: java.lang.Class<com.mapbox.common.NetworkRestriction>;
        public static NONE: com.mapbox.common.NetworkRestriction;
        public static DISALLOW_EXPENSIVE: com.mapbox.common.NetworkRestriction;
        public static DISALLOW_ALL: com.mapbox.common.NetworkRestriction;
        public value: number;
        public static valueOf(name: string): com.mapbox.common.NetworkRestriction;
        public static values(): androidNative.Array<com.mapbox.common.NetworkRestriction>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class NetworkStatus {
        public static class: java.lang.Class<com.mapbox.common.NetworkStatus>;
        public static NOT_REACHABLE: com.mapbox.common.NetworkStatus;
        public static REACHABLE_VIA_WI_FI: com.mapbox.common.NetworkStatus;
        public static REACHABLE_VIA_ETHERNET: com.mapbox.common.NetworkStatus;
        public static REACHABLE_VIA_WWAN: com.mapbox.common.NetworkStatus;
        public static values(): androidNative.Array<com.mapbox.common.NetworkStatus>;
        public static valueOf(name: string): com.mapbox.common.NetworkStatus;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class NetworkUsageMetricsMeter {
        public static class: java.lang.Class<com.mapbox.common.NetworkUsageMetricsMeter>;
        public peer: number;
        public static onBytesTransferred(param0: string, param1: number, param2: number): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module NetworkUsageMetricsMeter {
        export class NetworkUsageMetricsMeterPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.NetworkUsageMetricsMeter.NetworkUsageMetricsMeterPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OfflineSwitch {
        public static class: java.lang.Class<com.mapbox.common.OfflineSwitch>;
        public peer: number;
        public unregisterObserver(param0: com.mapbox.common.OfflineSwitchObserver): void;
        public static getInstance(): com.mapbox.common.OfflineSwitch;
        public isMapboxStackConnected(): boolean;
        public static cleanNativePeer(param0: number): void;
        public setMapboxStackConnected(param0: boolean): void;
        public constructor(peer: number);
        public registerObserver(param0: com.mapbox.common.OfflineSwitchObserver): void;
        public static reset(): void;
      }
      export module OfflineSwitch {
        export class OfflineSwitchPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.OfflineSwitch.OfflineSwitchPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OfflineSwitchObserver {
        public static class: java.lang.Class<com.mapbox.common.OfflineSwitchObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.OfflineSwitchObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { statusChanged(param0: boolean): void });
        public constructor();
        public statusChanged(param0: boolean): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OfflineSwitchObserverNative extends com.mapbox.common.OfflineSwitchObserver {
        public static class: java.lang.Class<com.mapbox.common.OfflineSwitchObserverNative>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public statusChanged(param0: boolean): void;
        public constructor(peer: number);
      }
      export module OfflineSwitchObserverNative {
        export class OfflineSwitchObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.OfflineSwitchObserverNative.OfflineSwitchObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OnBillingServiceError {
        public static class: java.lang.Class<com.mapbox.common.OnBillingServiceError>;
        /**
         * Constructs a new instance of the com.mapbox.common.OnBillingServiceError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.BillingServiceError): void });
        public constructor();
        public run(param0: com.mapbox.common.BillingServiceError): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OnBillingServiceErrorNative extends com.mapbox.common.OnBillingServiceError {
        public static class: java.lang.Class<com.mapbox.common.OnBillingServiceErrorNative>;
        public run(param0: com.mapbox.common.BillingServiceError): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module OnBillingServiceErrorNative {
        export class OnBillingServiceErrorPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.OnBillingServiceErrorNative.OnBillingServiceErrorPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OnValueChanged {
        public static class: java.lang.Class<com.mapbox.common.OnValueChanged>;
        /**
         * Constructs a new instance of the com.mapbox.common.OnValueChanged interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: string, param1: com.mapbox.bindgen.Value, param2: com.mapbox.bindgen.Value): void });
        public constructor();
        public run(param0: string, param1: com.mapbox.bindgen.Value, param2: com.mapbox.bindgen.Value): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class OnValueChangedNative extends com.mapbox.common.OnValueChanged {
        public static class: java.lang.Class<com.mapbox.common.OnValueChangedNative>;
        public run(param0: string, param1: com.mapbox.bindgen.Value, param2: com.mapbox.bindgen.Value): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module OnValueChangedNative {
        export class OnValueChangedPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.OnValueChangedNative.OnValueChangedPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Platform {
        public static class: java.lang.Class<com.mapbox.common.Platform>;
        public static LINUX: com.mapbox.common.Platform;
        public static IOS: com.mapbox.common.Platform;
        public static ANDROID: com.mapbox.common.Platform;
        public static MAC_OS: com.mapbox.common.Platform;
        public static values(): androidNative.Array<com.mapbox.common.Platform>;
        public static valueOf(name: string): com.mapbox.common.Platform;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class PlatformHttpService {
        public static class: java.lang.Class<com.mapbox.common.PlatformHttpService>;
        public static createPlatformHttpService(): com.mapbox.common.HttpServiceInterface;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class PlatformUploadService {
        public static class: java.lang.Class<com.mapbox.common.PlatformUploadService>;
        public static createPlatformUploadService(): com.mapbox.common.UploadServiceInterface;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Reachability extends com.mapbox.common.ReachabilityInterface {
        public static class: java.lang.Class<com.mapbox.common.Reachability>;
        public TAG: string = 'MapboxReachability';
        public peer: number;
        public timeoutInMs: number;
        /** @deprecated */
        public start(): void;
        public removeListener(this_: number): boolean;
        /** @deprecated */
        public stop(): void;
        public constructor(hostName: string);
        public addListener(listener: com.mapbox.common.ReachabilityChanged): number;
        public static createPlatformReachability(hostname: string): com.mapbox.common.ReachabilityInterface;
        public finalize(): void;
        public currentNetworkStatus(): com.mapbox.common.NetworkStatus;
        public removeListener(param0: number): boolean;
        public onNetworkChanged(): void;
        public addListener(param0: com.mapbox.common.ReachabilityChanged): number;
        public isReachable(): boolean;
      }
      export module Reachability {
        export class ReachabilityOfflineSwitchObserver extends com.mapbox.common.OfflineSwitchObserver {
          public static class: java.lang.Class<com.mapbox.common.Reachability.ReachabilityOfflineSwitchObserver>;
          public statusChanged(connected: boolean): void;
          public statusChanged(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ReachabilityChanged {
        public static class: java.lang.Class<com.mapbox.common.ReachabilityChanged>;
        /**
         * Constructs a new instance of the com.mapbox.common.ReachabilityChanged interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.NetworkStatus): void });
        public constructor();
        public run(param0: com.mapbox.common.NetworkStatus): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ReachabilityChangedNative extends com.mapbox.common.ReachabilityChanged {
        public static class: java.lang.Class<com.mapbox.common.ReachabilityChangedNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.NetworkStatus): void;
      }
      export module ReachabilityChangedNative {
        export class ReachabilityChangedPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ReachabilityChangedNative.ReachabilityChangedPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ReachabilityFactory {
        public static class: java.lang.Class<com.mapbox.common.ReachabilityFactory>;
        public peer: number;
        public static reachability(param0: string): com.mapbox.common.ReachabilityInterface;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module ReachabilityFactory {
        export class ReachabilityFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ReachabilityFactory.ReachabilityFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ReachabilityInterface {
        public static class: java.lang.Class<com.mapbox.common.ReachabilityInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.ReachabilityInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { addListener(param0: com.mapbox.common.ReachabilityChanged): number; removeListener(param0: number): boolean; isReachable(): boolean; currentNetworkStatus(): com.mapbox.common.NetworkStatus; start(): void; stop(): void });
        public constructor();
        /** @deprecated */
        public start(): void;
        /** @deprecated */
        public stop(): void;
        public currentNetworkStatus(): com.mapbox.common.NetworkStatus;
        public removeListener(param0: number): boolean;
        public addListener(param0: com.mapbox.common.ReachabilityChanged): number;
        public isReachable(): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ReachabilityInterfaceNative extends com.mapbox.common.ReachabilityInterface {
        public static class: java.lang.Class<com.mapbox.common.ReachabilityInterfaceNative>;
        public peer: number;
        /** @deprecated */
        public start(): void;
        /** @deprecated */
        public stop(): void;
        public static cleanNativePeer(param0: number): void;
        public currentNetworkStatus(): com.mapbox.common.NetworkStatus;
        public removeListener(param0: number): boolean;
        public constructor(peer: number);
        public addListener(param0: com.mapbox.common.ReachabilityChanged): number;
        public isReachable(): boolean;
      }
      export module ReachabilityInterfaceNative {
        export class ReachabilityInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ReachabilityInterfaceNative.ReachabilityInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceData {
        public static class: java.lang.Class<com.mapbox.common.ResourceData>;
        public peer: number;
        public getData(): androidNative.Array<number>;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module ResourceData {
        export class ResourceDataPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ResourceData.ResourceDataPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceDescription {
        public static class: java.lang.Class<com.mapbox.common.ResourceDescription>;
        public getDomain(): com.mapbox.common.TileDataDomain;
        public constructor(url: string, domain: com.mapbox.common.TileDataDomain);
        public hashCode(): number;
        public getUrl(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadError {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadError>;
        public getTransferredBytes(): number;
        public constructor(type: com.mapbox.common.ResourceLoadErrorType, message: string, transferredBytes: number);
        public getType(): com.mapbox.common.ResourceLoadErrorType;
        public hashCode(): number;
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadErrorType {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadErrorType>;
        public static ERRORED: com.mapbox.common.ResourceLoadErrorType;
        public static UNSATISFIED: com.mapbox.common.ResourceLoadErrorType;
        public static CANCELED: com.mapbox.common.ResourceLoadErrorType;
        public static INVALID_ARGUMENT: com.mapbox.common.ResourceLoadErrorType;
        public static values(): androidNative.Array<com.mapbox.common.ResourceLoadErrorType>;
        public static valueOf(name: string): com.mapbox.common.ResourceLoadErrorType;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadFlags {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadFlags>;
        public static NONE: com.mapbox.common.ResourceLoadFlags;
        public static CRITICAL: com.mapbox.common.ResourceLoadFlags;
        public static ACCEPT_EXPIRED: com.mapbox.common.ResourceLoadFlags;
        public static FORCE_LOAD: com.mapbox.common.ResourceLoadFlags;
        public static SKIP_DATA_LOADING: com.mapbox.common.ResourceLoadFlags;
        public static SKIP_DATA_TRANSFER: com.mapbox.common.ResourceLoadFlags;
        public static FORCE_EXPIRED: com.mapbox.common.ResourceLoadFlags;
        public value: number;
        public static values(): androidNative.Array<com.mapbox.common.ResourceLoadFlags>;
        public static valueOf(name: string): com.mapbox.common.ResourceLoadFlags;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadOptions {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadOptions>;
        public constructor(tag: string, extraOptions: com.mapbox.bindgen.Value);
        public getExtraOptions(): com.mapbox.bindgen.Value;
        public getFlags(): com.mapbox.common.ResourceLoadFlags;
        public hashCode(): number;
        public getTag(): string;
        public constructor(tag: string, flags: com.mapbox.common.ResourceLoadFlags, networkRestriction: com.mapbox.common.NetworkRestriction, extraOptions: com.mapbox.bindgen.Value);
        public toString(): string;
        public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadProgress {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadProgress>;
        public constructor(bytes: number, totalBytes: java.lang.Long);
        public hashCode(): number;
        public getBytes(): number;
        public getTotalBytes(): java.lang.Long;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadProgressCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.ResourceLoadProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.ResourceLoadProgress): void });
        public constructor();
        public run(param0: com.mapbox.common.ResourceLoadProgress): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadProgressCallbackNative extends com.mapbox.common.ResourceLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadProgressCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.ResourceLoadProgress): void;
      }
      export module ResourceLoadProgressCallbackNative {
        export class ResourceLoadProgressCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ResourceLoadProgressCallbackNative.ResourceLoadProgressCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadResult {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadResult>;
        public getImmutable(): boolean;
        public getTransferredBytes(): number;
        public constructor(data: com.mapbox.common.ResourceData, status: com.mapbox.common.ResourceLoadStatus, immutable: boolean, mustRevalidate: boolean, expires: java.util.Date, totalBytes: number, transferredBytes: number, contentType: string);
        public getContentType(): string;
        public hashCode(): number;
        public getTotalBytes(): number;
        public getMustRevalidate(): boolean;
        public toString(): string;
        public getStatus(): com.mapbox.common.ResourceLoadStatus;
        public getExpires(): java.util.Date;
        public getData(): com.mapbox.common.ResourceData;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadResultCallback {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadResultCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.ResourceLoadResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadResultCallbackNative extends com.mapbox.common.ResourceLoadResultCallback {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadResultCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
      }
      export module ResourceLoadResultCallbackNative {
        export class ResourceLoadResultCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ResourceLoadResultCallbackNative.ResourceLoadResultCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResourceLoadStatus {
        public static class: java.lang.Class<com.mapbox.common.ResourceLoadStatus>;
        public static AVAILABLE: com.mapbox.common.ResourceLoadStatus;
        public static NOT_FOUND: com.mapbox.common.ResourceLoadStatus;
        public static UNAUTHORIZED: com.mapbox.common.ResourceLoadStatus;
        public static valueOf(name: string): com.mapbox.common.ResourceLoadStatus;
        public static values(): androidNative.Array<com.mapbox.common.ResourceLoadStatus>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResultCallback {
        public static class: java.lang.Class<com.mapbox.common.ResultCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.ResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: boolean): void });
        public constructor();
        public run(param0: boolean): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ResultCallbackNative extends com.mapbox.common.ResultCallback {
        public static class: java.lang.Class<com.mapbox.common.ResultCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: boolean): void;
      }
      export module ResultCallbackNative {
        export class ResultCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ResultCallbackNative.ResultCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class RunloopErrorHandler {
        public static class: java.lang.Class<com.mapbox.common.RunloopErrorHandler>;
        public static INSTANCE: com.mapbox.common.RunloopErrorHandler;
        public static TAG: string = 'run_loop';
        public static postErrorToMainLooper(error: java.lang.Throwable): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SDKVersions {
        public static class: java.lang.Class<com.mapbox.common.SDKVersions>;
        public static getList(): java.util.List<string>;
        public constructor();
      }
      export module SDKVersions {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.SDKVersions.Companion>;
          public getList(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SdkInfoRegistryFactory extends com.mapbox.common.SdkInfoRegistryFactoryInterface {
        public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryFactory>;
        public peer: number;
        public static getInstance(): com.mapbox.common.SdkInfoRegistryInterface;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module SdkInfoRegistryFactory {
        export class SdkInfoRegistryFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryFactory.SdkInfoRegistryFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SdkInfoRegistryFactoryInterface {
        public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryFactoryInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.SdkInfoRegistryFactoryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SdkInfoRegistryInterface {
        public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.SdkInfoRegistryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { registerSdkInformation(param0: com.mapbox.common.SdkInformation): void; getSdkInformation(): java.util.List<com.mapbox.common.SdkInformation> });
        public constructor();
        public getSdkInformation(): java.util.List<com.mapbox.common.SdkInformation>;
        public registerSdkInformation(param0: com.mapbox.common.SdkInformation): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SdkInfoRegistryInterfaceNative extends com.mapbox.common.SdkInfoRegistryInterface {
        public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryInterfaceNative>;
        public peer: number;
        public getSdkInformation(): java.util.List<com.mapbox.common.SdkInformation>;
        public registerSdkInformation(param0: com.mapbox.common.SdkInformation): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module SdkInfoRegistryInterfaceNative {
        export class SdkInfoRegistryInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.SdkInfoRegistryInterfaceNative.SdkInfoRegistryInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SdkInformation {
        public static class: java.lang.Class<com.mapbox.common.SdkInformation>;
        public constructor(name: string, version: string, packageName: string);
        public getVersion(): string;
        public hashCode(): number;
        public getPackageName(): string;
        public getName(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SessionSKUIdentifier {
        public static class: java.lang.Class<com.mapbox.common.SessionSKUIdentifier>;
        public static NAV2_SES_TRIP: com.mapbox.common.SessionSKUIdentifier;
        public static NAV2_SES_FDTRIP: com.mapbox.common.SessionSKUIdentifier;
        public static valueOf(name: string): com.mapbox.common.SessionSKUIdentifier;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.common.SessionSKUIdentifier>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SettingsServiceFactory {
        public static class: java.lang.Class<com.mapbox.common.SettingsServiceFactory>;
        public peer: number;
        public static getInstance(param0: com.mapbox.common.SettingsServiceStorageType): com.mapbox.common.SettingsServiceInterface;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module SettingsServiceFactory {
        export class SettingsServiceFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.SettingsServiceFactory.SettingsServiceFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SettingsServiceHelper {
        public static class: java.lang.Class<com.mapbox.common.SettingsServiceHelper>;
        public static get(key: string): com.mapbox.bindgen.Expected<string, string>;
        public static erase(key: string): void;
        public static has(key: string): boolean;
        public static set(key: string, value: string): com.mapbox.bindgen.Expected<string, java.util.List<string>>;
        public constructor();
      }
      export module SettingsServiceHelper {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.common.SettingsServiceHelper.Companion>;
          public get(exception: string): com.mapbox.bindgen.Expected<string, string>;
          public set($this$set_u24lambda_u2d1: string, existingValue: string): com.mapbox.bindgen.Expected<string, java.util.List<string>>;
          public has(key: string): boolean;
          public erase($this$erase_u24lambda_u2d3: string): void;
          public clear$common_release(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SettingsServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.SettingsServiceInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.SettingsServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { set(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>; get(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>; get(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>; erase(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>; has(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>; registerObserver(param0: string, param1: com.mapbox.common.OnValueChanged): number; unregisterObserver(param0: number): void });
        public constructor();
        public has(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public registerObserver(param0: string, param1: com.mapbox.common.OnValueChanged): number;
        public get(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public erase(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public get(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public set(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public unregisterObserver(param0: number): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SettingsServiceInterfaceNative extends com.mapbox.common.SettingsServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.SettingsServiceInterfaceNative>;
        public peer: number;
        public has(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public registerObserver(param0: string, param1: com.mapbox.common.OnValueChanged): number;
        public get(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public static cleanNativePeer(param0: number): void;
        public erase(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public get(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public constructor(peer: number);
        public set(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public unregisterObserver(param0: number): void;
      }
      export module SettingsServiceInterfaceNative {
        export class SettingsServiceInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.SettingsServiceInterfaceNative.SettingsServiceInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SettingsServiceStorageType {
        public static class: java.lang.Class<com.mapbox.common.SettingsServiceStorageType>;
        public static PERSISTENT: com.mapbox.common.SettingsServiceStorageType;
        public static NON_PERSISTENT: com.mapbox.common.SettingsServiceStorageType;
        public static valueOf(name: string): com.mapbox.common.SettingsServiceStorageType;
        public static values(): androidNative.Array<com.mapbox.common.SettingsServiceStorageType>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SystemInformation {
        public static class: java.lang.Class<com.mapbox.common.SystemInformation>;
        public getApplicationVersion(): string;
        public getPlatformVersion(): string;
        public getApplicationName(): string;
        public getPlatform(): com.mapbox.common.Platform;
        public getPlatformName(): string;
        public toString(): string;
        public equals(object: any): boolean;
        public getIsPhysicalDevice(): boolean;
        public constructor(platform: com.mapbox.common.Platform, platformName: string, platformVersion: string, applicationName: string, applicationPackage: string, applicationVersion: string, applicationBuildNumber: string, device: string, applicationDataPath: string, isPhysicalDevice: boolean, defaultMapboxAccessToken: string, applicationCachePath: string);
        public getApplicationPackage(): string;
        public getApplicationBuildNumber(): string;
        public getDevice(): string;
        public hashCode(): number;
        public getDefaultMapboxAccessToken(): string;
        public getApplicationCachePath(): string;
        public getApplicationDataPath(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class SystemInformationProvider {
        public static class: java.lang.Class<com.mapbox.common.SystemInformationProvider>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module SystemInformationProvider {
        export class SystemInformationProviderPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.SystemInformationProvider.SystemInformationProviderPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryCollectionState {
        public static class: java.lang.Class<com.mapbox.common.TelemetryCollectionState>;
        public static ENABLED: com.mapbox.common.TelemetryCollectionState;
        public static TURNSTILE_EVENTS_ONLY: com.mapbox.common.TelemetryCollectionState;
        public static UNKNOWN: com.mapbox.common.TelemetryCollectionState;
        public static values(): androidNative.Array<com.mapbox.common.TelemetryCollectionState>;
        public static valueOf(name: string): com.mapbox.common.TelemetryCollectionState;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryCollectionStateObserver {
        public static class: java.lang.Class<com.mapbox.common.TelemetryCollectionStateObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.TelemetryCollectionStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onStateChanged(param0: com.mapbox.common.TelemetryCollectionState): void });
        public constructor();
        public onStateChanged(param0: com.mapbox.common.TelemetryCollectionState): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryCollectionStateObserverNative extends com.mapbox.common.TelemetryCollectionStateObserver {
        public static class: java.lang.Class<com.mapbox.common.TelemetryCollectionStateObserverNative>;
        public peer: number;
        public onStateChanged(param0: com.mapbox.common.TelemetryCollectionState): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module TelemetryCollectionStateObserverNative {
        export class TelemetryCollectionStateObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TelemetryCollectionStateObserverNative.TelemetryCollectionStateObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryService {
        public static class: java.lang.Class<com.mapbox.common.TelemetryService>;
        public peer: number;
        public flush(param0: com.mapbox.common.FlushOperationResultCallback): void;
        public static cleanNativePeer(param0: number): void;
        public static getOrCreate(param0: com.mapbox.common.EventsServerOptions): com.mapbox.common.TelemetryService;
        public constructor(peer: number);
      }
      export module TelemetryService {
        export class TelemetryServicePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TelemetryService.TelemetryServicePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetrySystemUtils {
        public static class: java.lang.Class<com.mapbox.common.TelemetrySystemUtils>;
        public static obtainCellularNetworkType(se: globalAndroid.content.Context): string;
        /** @deprecated */
        public static obtainApplicationState(context: globalAndroid.content.Context): string;
        public static obtainBatteryLevel(context: globalAndroid.content.Context): number;
        public static generateCreateDateFormatted(date: java.util.Date): string;
        public static obtainUniversalUniqueIdentifier(): string;
        public static isPluggedIn(context: globalAndroid.content.Context): boolean;
        public static obtainCurrentDate(): string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryUtils {
        public static class: java.lang.Class<com.mapbox.common.TelemetryUtils>;
        public peer: number;
        public getClientServerEventsCollectionState(): com.mapbox.common.TelemetryCollectionState;
        public registerTelemetryCollectionStateObserver(param0: com.mapbox.common.TelemetryCollectionStateObserver): com.mapbox.bindgen.Expected<com.mapbox.common.EventsServiceError, com.mapbox.bindgen.None>;
        public unregisterTelemetryCollectionStateObserver(param0: com.mapbox.common.TelemetryCollectionStateObserver): void;
        public static getEventsCollectionState(): boolean;
        public static setEventsCollectionState(param0: boolean, param1: com.mapbox.common.TelemetryUtilsResponseCallback): void;
        public static cleanNativePeer(param0: number): void;
        public static getUserID(): string;
        public constructor(peer: number);
        public setToken(param0: string): void;
        public static getClientServerEventsCollectionState(param0: com.mapbox.common.EventsServerOptions): com.mapbox.common.TelemetryCollectionState;
        public constructor();
      }
      export module TelemetryUtils {
        export class TelemetryUtilsPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TelemetryUtils.TelemetryUtilsPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryUtilsResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.TelemetryUtilsResponseCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TelemetryUtilsResponseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.EventsServiceError): void });
        public constructor();
        public run(param0: com.mapbox.common.EventsServiceError): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TelemetryUtilsResponseCallbackNative extends com.mapbox.common.TelemetryUtilsResponseCallback {
        public static class: java.lang.Class<com.mapbox.common.TelemetryUtilsResponseCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.EventsServiceError): void;
      }
      export module TelemetryUtilsResponseCallbackNative {
        export class TelemetryUtilsResponseCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TelemetryUtilsResponseCallbackNative.TelemetryUtilsResponseCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileDataDomain {
        public static class: java.lang.Class<com.mapbox.common.TileDataDomain>;
        public static MAPS: com.mapbox.common.TileDataDomain;
        public static NAVIGATION: com.mapbox.common.TileDataDomain;
        public static SEARCH: com.mapbox.common.TileDataDomain;
        public static ADAS: com.mapbox.common.TileDataDomain;
        public static valueOf(name: string): com.mapbox.common.TileDataDomain;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.common.TileDataDomain>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegion {
        public static class: java.lang.Class<com.mapbox.common.TileRegion>;
        public getId(): string;
        public hashCode(): number;
        public constructor(id: string, requiredResourceCount: number, completedResourceCount: number, completedResourceSize: number, expires: java.util.Date);
        public getCompletedResourceCount(): number;
        public getCompletedResourceSize(): number;
        public toString(): string;
        public getRequiredResourceCount(): number;
        public getExpires(): java.util.Date;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionBooleanCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionBooleanCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionBooleanCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.lang.Boolean>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.lang.Boolean>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionBooleanCallbackNative extends com.mapbox.common.TileRegionBooleanCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionBooleanCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.lang.Boolean>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module TileRegionBooleanCallbackNative {
        export class TileRegionBooleanCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionBooleanCallbackNative.TileRegionBooleanCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionCallbackNative extends com.mapbox.common.TileRegionCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void;
      }
      export module TileRegionCallbackNative {
        export class TileRegionCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionCallbackNative.TileRegionCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionError {
        public static class: java.lang.Class<com.mapbox.common.TileRegionError>;
        public getType(): com.mapbox.common.TileRegionErrorType;
        public hashCode(): number;
        public constructor(type: com.mapbox.common.TileRegionErrorType, message: string);
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionErrorType {
        public static class: java.lang.Class<com.mapbox.common.TileRegionErrorType>;
        public static CANCELED: com.mapbox.common.TileRegionErrorType;
        public static DOES_NOT_EXIST: com.mapbox.common.TileRegionErrorType;
        public static TILESET_DESCRIPTOR: com.mapbox.common.TileRegionErrorType;
        public static DISK_FULL: com.mapbox.common.TileRegionErrorType;
        public static OTHER: com.mapbox.common.TileRegionErrorType;
        public static TILE_COUNT_EXCEEDED: com.mapbox.common.TileRegionErrorType;
        public static values(): androidNative.Array<com.mapbox.common.TileRegionErrorType>;
        public static valueOf(name: string): com.mapbox.common.TileRegionErrorType;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionGeometryCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionGeometryCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionGeometryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.geojson.Geometry>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.geojson.Geometry>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionGeometryCallbackNative extends com.mapbox.common.TileRegionGeometryCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionGeometryCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.geojson.Geometry>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module TileRegionGeometryCallbackNative {
        export class TileRegionGeometryCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionGeometryCallbackNative.TileRegionGeometryCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionLoadOptions {
        public static class: java.lang.Class<com.mapbox.common.TileRegionLoadOptions>;
        public getExtraOptions(): com.mapbox.bindgen.Value;
        public toBuilder(): com.mapbox.common.TileRegionLoadOptions.Builder;
        public getGeometry(): com.mapbox.geojson.Geometry;
        public getAverageBytesPerSecond(): java.lang.Integer;
        public hashCode(): number;
        public getStartLocation(): com.mapbox.geojson.Point;
        public getAcceptExpired(): boolean;
        public getMetadata(): com.mapbox.bindgen.Value;
        public getDescriptors(): java.util.List<com.mapbox.common.TilesetDescriptor>;
        public toString(): string;
        public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
        public equals(object: any): boolean;
      }
      export module TileRegionLoadOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.common.TileRegionLoadOptions.Builder>;
          public metadata(metadata: com.mapbox.bindgen.Value): com.mapbox.common.TileRegionLoadOptions.Builder;
          public extraOptions(extraOptions: com.mapbox.bindgen.Value): com.mapbox.common.TileRegionLoadOptions.Builder;
          public acceptExpired(acceptExpired: boolean): com.mapbox.common.TileRegionLoadOptions.Builder;
          public constructor();
          public build(): com.mapbox.common.TileRegionLoadOptions;
          public geometry(geometry: com.mapbox.geojson.Geometry): com.mapbox.common.TileRegionLoadOptions.Builder;
          public descriptors(descriptors: java.util.List<com.mapbox.common.TilesetDescriptor>): com.mapbox.common.TileRegionLoadOptions.Builder;
          public networkRestriction(networkRestriction: com.mapbox.common.NetworkRestriction): com.mapbox.common.TileRegionLoadOptions.Builder;
          public averageBytesPerSecond(averageBytesPerSecond: java.lang.Integer): com.mapbox.common.TileRegionLoadOptions.Builder;
          public startLocation(startLocation: com.mapbox.geojson.Point): com.mapbox.common.TileRegionLoadOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionLoadProgress {
        public static class: java.lang.Class<com.mapbox.common.TileRegionLoadProgress>;
        public getLoadedResourceCount(): number;
        public getLoadedResourceSize(): number;
        public hashCode(): number;
        public getErroredResourceCount(): number;
        public getCompletedResourceCount(): number;
        public constructor(completedResourceCount: number, completedResourceSize: number, erroredResourceCount: number, requiredResourceCount: number, loadedResourceCount: number, loadedResourceSize: number);
        public getCompletedResourceSize(): number;
        public toString(): string;
        public getRequiredResourceCount(): number;
        public equals(object: any): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionLoadProgressCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionLoadProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.TileRegionLoadProgress): void });
        public constructor();
        public run(param0: com.mapbox.common.TileRegionLoadProgress): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionLoadProgressCallbackNative extends com.mapbox.common.TileRegionLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionLoadProgressCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.TileRegionLoadProgress): void;
      }
      export module TileRegionLoadProgressCallbackNative {
        export class TileRegionLoadProgressCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionLoadProgressCallbackNative.TileRegionLoadProgressCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionMetadataCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionMetadataCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionMetadataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.bindgen.Value>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.bindgen.Value>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionMetadataCallbackNative extends com.mapbox.common.TileRegionMetadataCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionMetadataCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.bindgen.Value>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module TileRegionMetadataCallbackNative {
        export class TileRegionMetadataCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionMetadataCallbackNative.TileRegionMetadataCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionsCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionsCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileRegionsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.util.List<com.mapbox.common.TileRegion>>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.util.List<com.mapbox.common.TileRegion>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileRegionsCallbackNative extends com.mapbox.common.TileRegionsCallback {
        public static class: java.lang.Class<com.mapbox.common.TileRegionsCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, java.util.List<com.mapbox.common.TileRegion>>): void;
      }
      export module TileRegionsCallbackNative {
        export class TileRegionsCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileRegionsCallbackNative.TileRegionsCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileStore {
        public static class: java.lang.Class<com.mapbox.common.TileStore>;
        public peer: number;
        public loadTileRegion(param0: string, param1: com.mapbox.common.TileRegionLoadOptions, param2: com.mapbox.common.TileRegionLoadProgressCallback, param3: com.mapbox.common.TileRegionCallback): com.mapbox.common.Cancelable;
        public loadTileRegion(param0: string, param1: com.mapbox.common.TileRegionLoadOptions, param2: com.mapbox.common.TileRegionCallback): com.mapbox.common.Cancelable;
        public static create(): com.mapbox.common.TileStore;
        public getTileRegion(param0: string, param1: com.mapbox.common.TileRegionCallback): void;
        public getTileRegionGeometry(param0: string, param1: com.mapbox.common.TileRegionGeometryCallback): void;
        public removeObserver(param0: com.mapbox.common.TileStoreObserver): void;
        public loadResource(param0: com.mapbox.common.ResourceDescription, param1: com.mapbox.common.ResourceLoadOptions, param2: com.mapbox.common.ResourceLoadProgressCallback, param3: com.mapbox.common.ResourceLoadResultCallback): com.mapbox.common.Cancelable;
        public constructor(peer: number);
        public addObserver(param0: com.mapbox.common.TileStoreObserver): void;
        public setOption(param0: string, param1: com.mapbox.common.TileDataDomain, param2: com.mapbox.bindgen.Value): void;
        public loadTileRegion(param0: string, param1: com.mapbox.common.TileRegionLoadOptions): com.mapbox.common.Cancelable;
        public getTileRegionMetadata(param0: string, param1: com.mapbox.common.TileRegionMetadataCallback): void;
        public getAllTileRegions(param0: com.mapbox.common.TileRegionsCallback): void;
        public setOption(param0: string, param1: com.mapbox.bindgen.Value): void;
        public tileRegionContainsDescriptors(param0: string, param1: java.util.List<com.mapbox.common.TilesetDescriptor>, param2: com.mapbox.common.TileRegionBooleanCallback): void;
        public removeTileRegion(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public computeCoveredArea(param0: java.util.List<com.mapbox.common.TilesetDescriptor>, param1: com.mapbox.common.TileRegionGeometryCallback): void;
        public removeTileRegion(param0: string, param1: com.mapbox.common.TileRegionCallback): void;
        public static create(param0: string): com.mapbox.common.TileStore;
      }
      export module TileStore {
        export class TileStorePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileStore.TileStorePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileStoreObserver {
        public static class: java.lang.Class<com.mapbox.common.TileStoreObserver>;
        /**
         * Constructs a new instance of the com.mapbox.common.TileStoreObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onRegionLoadProgress(param0: string, param1: com.mapbox.common.TileRegionLoadProgress): void; onRegionLoadFinished(param0: string, param1: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void; onRegionRemoved(param0: string): void; onRegionGeometryChanged(param0: string, param1: com.mapbox.geojson.Geometry): void; onRegionMetadataChanged(param0: string, param1: com.mapbox.bindgen.Value): void });
        public constructor();
        public onRegionLoadFinished(param0: string, param1: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void;
        public onRegionGeometryChanged(param0: string, param1: com.mapbox.geojson.Geometry): void;
        public onRegionMetadataChanged(param0: string, param1: com.mapbox.bindgen.Value): void;
        public onRegionRemoved(param0: string): void;
        public onRegionLoadProgress(param0: string, param1: com.mapbox.common.TileRegionLoadProgress): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileStoreObserverNative extends com.mapbox.common.TileStoreObserver {
        public static class: java.lang.Class<com.mapbox.common.TileStoreObserverNative>;
        public peer: number;
        public onRegionLoadFinished(param0: string, param1: com.mapbox.bindgen.Expected<com.mapbox.common.TileRegionError, com.mapbox.common.TileRegion>): void;
        public onRegionGeometryChanged(param0: string, param1: com.mapbox.geojson.Geometry): void;
        public onRegionMetadataChanged(param0: string, param1: com.mapbox.bindgen.Value): void;
        public onRegionRemoved(param0: string): void;
        public static cleanNativePeer(param0: number): void;
        public onRegionLoadProgress(param0: string, param1: com.mapbox.common.TileRegionLoadProgress): void;
        public constructor(peer: number);
      }
      export module TileStoreObserverNative {
        export class TileStoreObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TileStoreObserverNative.TileStoreObserverPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TileStoreOptions {
        public static class: java.lang.Class<com.mapbox.common.TileStoreOptions>;
        public static DISK_QUOTA: string = 'disk-quota';
        public static MAPBOX_ACCESS_TOKEN: string = 'mapbox-access-token';
        public static MAPBOX_APIURL: string = 'mapbox-api-url';
        public static TILE_URLTEMPLATE: string = 'tile-url-template';
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TilesetDescriptor {
        public static class: java.lang.Class<com.mapbox.common.TilesetDescriptor>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
      }
      export module TilesetDescriptor {
        export class TilesetDescriptorPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.TilesetDescriptor.TilesetDescriptorPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class TurnstileEvent {
        public static class: java.lang.Class<com.mapbox.common.TurnstileEvent>;
        public getSdkVersion(): string;
        public hashCode(): number;
        public getSdkIdentifier(): string;
        public toString(): string;
        public getSkuId(): com.mapbox.common.UserSKUIdentifier;
        public equals(object: any): boolean;
        public constructor(skuId: com.mapbox.common.UserSKUIdentifier, sdkIdentifier: string, sdkVersion: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UAComponents {
        public static class: java.lang.Class<com.mapbox.common.UAComponents>;
        public getAppBuildNumberComponent(): string;
        public getOsNameComponent(): string;
        public getSdkNameComponent(): string;
        public getAppNameComponent(): string;
        public getSdkIdentifierComponent(): string;
        public getSdkBuildNumberComponent(): string;
        public toString(): string;
        public equals(object: any): boolean;
        public getSdkVersionComponent(): string;
        public toBuilder(): com.mapbox.common.UAComponents.Builder;
        public getAppIdentifierComponent(): string;
        public hashCode(): number;
        public getOsVersionComponent(): string;
        public getAppVersionComponent(): string;
      }
      export module UAComponents {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.common.UAComponents.Builder>;
          public osVersionComponent(osVersionComponent: string): com.mapbox.common.UAComponents.Builder;
          public sdkIdentifierComponent(sdkIdentifierComponent: string): com.mapbox.common.UAComponents.Builder;
          public sdkBuildNumberComponent(sdkBuildNumberComponent: string): com.mapbox.common.UAComponents.Builder;
          public appVersionComponent(appVersionComponent: string): com.mapbox.common.UAComponents.Builder;
          public constructor();
          public build(): com.mapbox.common.UAComponents;
          public sdkVersionComponent(sdkVersionComponent: string): com.mapbox.common.UAComponents.Builder;
          public osNameComponent(osNameComponent: string): com.mapbox.common.UAComponents.Builder;
          public appIdentifierComponent(appIdentifierComponent: string): com.mapbox.common.UAComponents.Builder;
          public appNameComponent(appNameComponent: string): com.mapbox.common.UAComponents.Builder;
          public appBuildNumberComponent(appBuildNumberComponent: string): com.mapbox.common.UAComponents.Builder;
          public sdkNameComponent(sdkNameComponent: string): com.mapbox.common.UAComponents.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadError {
        public static class: java.lang.Class<com.mapbox.common.UploadError>;
        public hashCode(): number;
        public getCode(): com.mapbox.common.UploadErrorCode;
        public getMessage(): string;
        public toString(): string;
        public equals(object: any): boolean;
        public constructor(code: com.mapbox.common.UploadErrorCode, message: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadErrorCode {
        public static class: java.lang.Class<com.mapbox.common.UploadErrorCode>;
        public static FILE_SYSTEM_ERROR: com.mapbox.common.UploadErrorCode;
        public static NETWORK_ERROR: com.mapbox.common.UploadErrorCode;
        public static values(): androidNative.Array<com.mapbox.common.UploadErrorCode>;
        public toString(): string;
        public static valueOf(name: string): com.mapbox.common.UploadErrorCode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadOptions {
        public static class: java.lang.Class<com.mapbox.common.UploadOptions>;
        public constructor(filePath: string, url: string, headers: java.util.HashMap<string, string>, metadata: string, mediaType: string, networkRestriction: com.mapbox.common.NetworkRestriction, timeout: number);
        public getTimeout(): number;
        public getUrl(): string;
        public toString(): string;
        public equals(object: any): boolean;
        public setHeaders(headers: java.util.HashMap<string, string>): void;
        public getMediaType(): string;
        public constructor(filePath: string, url: string, headers: java.util.HashMap<string, string>, metadata: string, mediaType: string);
        public getHeaders(): java.util.HashMap<string, string>;
        public hashCode(): number;
        public getFilePath(): string;
        public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
        public getMetadata(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadServiceFactory {
        public static class: java.lang.Class<com.mapbox.common.UploadServiceFactory>;
        public peer: number;
        public static setUserDefined(param0: com.mapbox.common.UploadServiceInterface): void;
        public static cleanNativePeer(param0: number): void;
        public static getInstance(): com.mapbox.common.UploadServiceInterface;
        public constructor(peer: number);
        public static reset(): void;
      }
      export module UploadServiceFactory {
        export class UploadServiceFactoryPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.UploadServiceFactory.UploadServiceFactoryPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.UploadServiceInterface>;
        /**
         * Constructs a new instance of the com.mapbox.common.UploadServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { upload(param0: com.mapbox.common.UploadOptions, param1: com.mapbox.common.UploadStatusCallback): number; cancelUpload(param0: number, param1: com.mapbox.common.ResultCallback): void });
        public constructor();
        public upload(param0: com.mapbox.common.UploadOptions, param1: com.mapbox.common.UploadStatusCallback): number;
        public cancelUpload(param0: number, param1: com.mapbox.common.ResultCallback): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadServiceInterfaceNative extends com.mapbox.common.UploadServiceInterface {
        public static class: java.lang.Class<com.mapbox.common.UploadServiceInterfaceNative>;
        public peer: number;
        public upload(param0: com.mapbox.common.UploadOptions, param1: com.mapbox.common.UploadStatusCallback): number;
        public static cleanNativePeer(param0: number): void;
        public cancelUpload(param0: number, param1: com.mapbox.common.ResultCallback): void;
        public constructor(peer: number);
      }
      export module UploadServiceInterfaceNative {
        export class UploadServiceInterfacePeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.UploadServiceInterfaceNative.UploadServiceInterfacePeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadState {
        public static class: java.lang.Class<com.mapbox.common.UploadState>;
        public static PENDING: com.mapbox.common.UploadState;
        public static UPLOADING: com.mapbox.common.UploadState;
        public static FAILED: com.mapbox.common.UploadState;
        public static FINISHED: com.mapbox.common.UploadState;
        public static valueOf(name: string): com.mapbox.common.UploadState;
        public static values(): androidNative.Array<com.mapbox.common.UploadState>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadStatus {
        public static class: java.lang.Class<com.mapbox.common.UploadStatus>;
        public getUploadId(): number;
        public getSentBytes(): number;
        public setUploadId(uploadId: number): void;
        public setError(error: com.mapbox.common.UploadError): void;
        public toString(): string;
        public setTotalSentBytes(totalSentBytes: number): void;
        public equals(object: any): boolean;
        public setTotalBytes(totalBytes: java.lang.Long): void;
        public getTotalSentBytes(): number;
        public constructor(error: com.mapbox.common.UploadError, totalBytes: java.lang.Long, httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>);
        public setHttpResult(httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>): void;
        public hashCode(): number;
        public constructor(uploadId: number, state: com.mapbox.common.UploadState, error: com.mapbox.common.UploadError, totalBytes: java.lang.Long, sentBytes: number, totalSentBytes: number, httpResult: com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>);
        public getError(): com.mapbox.common.UploadError;
        public getHttpResult(): com.mapbox.bindgen.Expected<com.mapbox.common.HttpRequestError, com.mapbox.common.HttpResponseData>;
        public getTotalBytes(): java.lang.Long;
        public getState(): com.mapbox.common.UploadState;
        public setState(state: com.mapbox.common.UploadState): void;
        public setSentBytes(sentBytes: number): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.UploadStatusCallback>;
        /**
         * Constructs a new instance of the com.mapbox.common.UploadStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.common.UploadStatus): void });
        public constructor();
        public run(param0: com.mapbox.common.UploadStatus): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UploadStatusCallbackNative extends com.mapbox.common.UploadStatusCallback {
        public static class: java.lang.Class<com.mapbox.common.UploadStatusCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.common.UploadStatus): void;
      }
      export module UploadStatusCallbackNative {
        export class UploadStatusCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.UploadStatusCallbackNative.UploadStatusCallbackPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class UserSKUIdentifier {
        public static class: java.lang.Class<com.mapbox.common.UserSKUIdentifier>;
        public static MAPS_MAUS: com.mapbox.common.UserSKUIdentifier;
        public static VISION_MAUS: com.mapbox.common.UserSKUIdentifier;
        public static VISION_FLEET_MAUS: com.mapbox.common.UserSKUIdentifier;
        public static NAV2_SES_MAU: com.mapbox.common.UserSKUIdentifier;
        public static valueOf(name: string): com.mapbox.common.UserSKUIdentifier;
        public static values(): androidNative.Array<com.mapbox.common.UserSKUIdentifier>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class ValueConverter {
        public static class: java.lang.Class<com.mapbox.common.ValueConverter>;
        public peer: number;
        public static toJson(param0: com.mapbox.bindgen.Value): string;
        public static cleanNativePeer(param0: number): void;
        public static toJson(param0: com.mapbox.bindgen.Value, param1: number): string;
        public constructor(peer: number);
        public static fromJson(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
      }
      export module ValueConverter {
        export class ValueConverterPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.ValueConverter.ValueConverterPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export class Version {
        public static class: java.lang.Class<com.mapbox.common.Version>;
        public peer: number;
        public static getCommonSDKRevisionString(): string;
        public static getCommonSDKVersionString(): string;
        public static cleanNativePeer(param0: number): void;
        public constructor(peer: number);
        public static getMinorVersion(): number;
        public static getMajorVersion(): number;
        public static getPatchVersion(): number;
      }
      export module Version {
        export class VersionPeerCleaner {
          public static class: java.lang.Class<com.mapbox.common.Version.VersionPeerCleaner>;
          public constructor(peer: number);
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module battery {
        export class AndroidBatteryMonitor extends com.mapbox.common.BatteryMonitorInterface {
          public static class: java.lang.Class<com.mapbox.common.battery.AndroidBatteryMonitor>;
          public unregisterObserver(observer: com.mapbox.common.BatteryMonitorObserver): void;
          public unregisterObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
          public static create(): com.mapbox.common.BatteryMonitorInterface;
          public constructor(context: globalAndroid.content.Context, intentBatteryActionName: string);
          public getBatteryChargingStatus(this_: com.mapbox.common.BatteryChargingStatusCallback): void;
          public getBatteryChargingStatus(param0: com.mapbox.common.BatteryChargingStatusCallback): void;
          public registerObserver(it: com.mapbox.common.BatteryMonitorObserver): void;
          public registerObserver(param0: com.mapbox.common.BatteryMonitorObserver): void;
        }
        export module AndroidBatteryMonitor {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.battery.AndroidBatteryMonitor.Companion>;
            public create(): com.mapbox.common.BatteryMonitorInterface;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module core {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.common.core.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.common.core';
          public static BUILD_TYPE: string = 'release';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module core {
        export module module {
          export class CommonSingletonModuleProvider {
            public static class: java.lang.Class<com.mapbox.common.core.module.CommonSingletonModuleProvider>;
            public static INSTANCE: com.mapbox.common.core.module.CommonSingletonModuleProvider;
            /** @deprecated */
            public getHttpServiceInstance(): com.mapbox.common.HttpServiceInterface;
            public getLoaderInstance(): com.mapbox.common.module.LibraryLoader;
            public createHttpService(): com.mapbox.common.HttpServiceInterface;
            /** @deprecated */
            public getLoggerInstance(): com.mapbox.base.common.logger.Logger;
            public createUploadService(): com.mapbox.common.UploadServiceInterface;
          }
          export module CommonSingletonModuleProvider {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.common.core.module.CommonSingletonModuleProvider.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module experimental {
        export class DeferredDeliveryOverflowPolicy {
          public static class: java.lang.Class<com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy>;
          public static DISCARD_INCOMING: com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public static RETIRE_OLDEST: com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public static valueOf(name: string): com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public static values(): androidNative.Array<com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module experimental {
        export class DeferredDeliveryRequestOptions {
          public static class: java.lang.Class<com.mapbox.common.experimental.DeferredDeliveryRequestOptions>;
          public equals(object: any): boolean;
          public toString(): string;
          public constructor(ttl: number);
          public constructor();
          public getTtl(): number;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module experimental {
        export class DeferredDeliveryServiceOptions {
          public static class: java.lang.Class<com.mapbox.common.experimental.DeferredDeliveryServiceOptions>;
          public constructor(batchLengthToFlush: number, batchFlushTimeout: number, memoryQueueMaxLength: java.lang.Long, memoryQueueLengthToFlush: number, memoryQueueFlushTimeout: number, memoryQueueOverflowPolicy: com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy, persistentQueueMaxLength: java.lang.Long, persistentQueueLengthToFlush: number, persistentQueueFlushTimeout: number, persistentQueueOverflowPolicy: com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy, dataStoragePath: string, maxStorageUsage: java.lang.Long, storageOverflowPolicy: com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy);
          public getDataStoragePath(): string;
          public getPersistentQueueFlushTimeout(): number;
          public getMemoryQueueOverflowPolicy(): com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public getMemoryQueueFlushTimeout(): number;
          public getMemoryQueueLengthToFlush(): number;
          public getPersistentQueueMaxLength(): java.lang.Long;
          public getPersistentQueueLengthToFlush(): number;
          public getMaxStorageUsage(): java.lang.Long;
          public getStorageOverflowPolicy(): com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public getMemoryQueueMaxLength(): java.lang.Long;
          public equals(object: any): boolean;
          public toString(): string;
          public constructor(memoryQueueMaxLength: java.lang.Long, persistentQueueMaxLength: java.lang.Long, dataStoragePath: string, maxStorageUsage: java.lang.Long);
          public getBatchFlushTimeout(): number;
          public getPersistentQueueOverflowPolicy(): com.mapbox.common.experimental.DeferredDeliveryOverflowPolicy;
          public getBatchLengthToFlush(): number;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class AccuracyAuthorization {
          public static class: java.lang.Class<com.mapbox.common.location.AccuracyAuthorization>;
          public static NONE: com.mapbox.common.location.AccuracyAuthorization;
          public static EXACT: com.mapbox.common.location.AccuracyAuthorization;
          public static INEXACT: com.mapbox.common.location.AccuracyAuthorization;
          public toString(): string;
          public static valueOf(name: string): com.mapbox.common.location.AccuracyAuthorization;
          public static values(): androidNative.Array<com.mapbox.common.location.AccuracyAuthorization>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class AndroidLiveTrackingClient extends com.mapbox.common.location.BaseLiveTrackingClient {
          public static class: java.lang.Class<com.mapbox.common.location.AndroidLiveTrackingClient>;
          public start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getName(): string;
          public doStart(it: com.mapbox.bindgen.Value, conversionResult: com.mapbox.common.location.LocationClientStartStopCallback, criteria: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode): void;
          public constructor(context: globalAndroid.content.Context, lifecycleMode: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode);
          public getState(): com.mapbox.common.location.LiveTrackingState;
          public getActiveSettings(): com.mapbox.bindgen.Value;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public flush(): void;
          public doStop(callback: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public extractResult(androidLocation: globalAndroid.content.Intent): java.util.List<com.mapbox.common.location.Location>;
        }
        export module AndroidLiveTrackingClient {
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.common.location.AndroidLiveTrackingClient.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export abstract class BaseLiveTrackingClient extends com.mapbox.common.location.LiveTrackingClient {
          public static class: java.lang.Class<com.mapbox.common.location.BaseLiveTrackingClient>;
          public static TAG: string = 'LiveTrackingClient';
          public start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public extractResult(param0: globalAndroid.content.Intent): java.util.List<com.mapbox.common.location.Location>;
          public getActiveSettings$common_release(): com.mapbox.bindgen.Value;
          public getLifecycleMode(): com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode;
          public setActiveSettings$common_release(param0: com.mapbox.bindgen.Value): void;
          public getObservers(): java.util.HashMap<com.mapbox.common.location.LiveTrackingClientObserver, globalAndroid.os.Handler>;
          public unregisterObserver(observer: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getLocationUpdatePendingIntent(): globalAndroid.app.PendingIntent;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public constructor(context: globalAndroid.content.Context, lifecycleMode: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode);
          public getContext(): globalAndroid.content.Context;
          public getState(): com.mapbox.common.location.LiveTrackingState;
          public updateStateAndNotify(it: com.mapbox.common.location.LiveTrackingState): void;
          public start(param0: com.mapbox.bindgen.Value, $this$start_u24lambda_u2d0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getActiveSettings(): com.mapbox.bindgen.Value;
          public getSupportedSettings$common_release(): com.mapbox.bindgen.Value;
          public flush(): void;
          public notifyLocationUpdate$common_release(it: java.util.List<any>): void;
          public registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getName(): string;
          public registerObserver(it: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public doStart(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback, param2: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode): void;
          public doStop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public setSupportedSettings$common_release(param0: com.mapbox.bindgen.Value): void;
        }
        export module BaseLiveTrackingClient {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.location.BaseLiveTrackingClient.Companion>;
          }
          export class LifecycleMode {
            public static class: java.lang.Class<com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode>;
            public static Foreground: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode;
            public static Background: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode;
            public static valueOf(value: string): com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode;
            public static values(): androidNative.Array<com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode>;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.common.location.BaseLiveTrackingClient.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class FailedTask<T> extends com.google.android.gms.tasks.Task<any> {
          public static class: java.lang.Class<com.mapbox.common.location.FailedTask<any>>;
          public constructor(exception: java.lang.Exception);
          public addOnSuccessListener(p0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
          public isComplete(): boolean;
          public addOnFailureListener(p0: java.util.concurrent.Executor, p1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
          public addOnFailureListener(p0: globalAndroid.app.Activity, p1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
          public addOnSuccessListener(p0: java.util.concurrent.Executor, p1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
          public isCanceled(): boolean;
          public addOnFailureListener($this$addOnFailureListener_u24lambda_u2d0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
          public isSuccessful(): boolean;
          public addOnCanceledListener(p0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
          public getException(): java.lang.Exception;
          public getResult(): any;
          public getResult(exceptionType: java.lang.Class<any>): any;
          public addOnSuccessListener(p0: globalAndroid.app.Activity, p1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class GetLocationCallback {
          public static class: java.lang.Class<com.mapbox.common.location.GetLocationCallback>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.GetLocationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>): void });
          public constructor();
          public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class GetLocationCallbackNative extends com.mapbox.common.location.GetLocationCallback {
          public static class: java.lang.Class<com.mapbox.common.location.GetLocationCallbackNative>;
          public static cleanNativePeer(param0: number): void;
          public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>): void;
        }
        export module GetLocationCallbackNative {
          export class GetLocationCallbackPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.GetLocationCallbackNative.GetLocationCallbackPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class GoogleLiveTrackingClient extends com.mapbox.common.location.BaseLiveTrackingClient {
          public static class: java.lang.Class<com.mapbox.common.location.GoogleLiveTrackingClient>;
          public static SKIP_IF_INVALID_VERSION_METADATA_KEY: string = 'com.mapbox.maps.location.gms.SKIP_IF_INVALID_VERSION';
          public start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public extractResult(location: globalAndroid.content.Intent): java.util.List<com.mapbox.common.location.Location>;
          public getName(): string;
          public constructor(context: globalAndroid.content.Context, lifecycleMode: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode);
          public doStart(it: com.mapbox.bindgen.Value, conversionResult: com.mapbox.common.location.LocationClientStartStopCallback, locationRequest: com.mapbox.common.location.BaseLiveTrackingClient.LifecycleMode): void;
          public getState(): com.mapbox.common.location.LiveTrackingState;
          public getActiveSettings(): com.mapbox.bindgen.Value;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public flush(): void;
          public doStop(callback: com.mapbox.common.location.LocationClientStartStopCallback): void;
        }
        export module GoogleLiveTrackingClient {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.location.GoogleLiveTrackingClient.Companion>;
            public getSkipIfInvalidVersion$common_release(): boolean;
            public setResolveSkipInvalidVersion$common_release(param0: com.mapbox.common.location.GoogleLiveTrackingClient.Companion.ResolveSkipInvalidVersion): void;
            public isAvailable(): boolean;
            public getResolveSkipInvalidVersion$common_release(): com.mapbox.common.location.GoogleLiveTrackingClient.Companion.ResolveSkipInvalidVersion;
          }
          export module Companion {
            export class ResolveSkipInvalidVersion {
              public static class: java.lang.Class<com.mapbox.common.location.GoogleLiveTrackingClient.Companion.ResolveSkipInvalidVersion>;
              /**
               * Constructs a new instance of the com.mapbox.common.location.GoogleLiveTrackingClient$Companion$ResolveSkipInvalidVersion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { invoke(): boolean });
              public constructor();
              public invoke(): boolean;
            }
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.common.location.GoogleLiveTrackingClient.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class GooglePlayServicesHelper {
          public static class: java.lang.Class<com.mapbox.common.location.GooglePlayServicesHelper>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.GooglePlayServicesHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { isGooglePlayServicesReady(): boolean; isGooglePlayServicesLocationAvailable(): boolean; isGooglePlayActivityRecognitionAvailable(): boolean });
          public constructor();
          public isGooglePlayActivityRecognitionAvailable(): boolean;
          public isGooglePlayServicesReady(): boolean;
          public isGooglePlayServicesLocationAvailable(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class IncompatibleGooglePlayServicesActivityRecognitionVersion {
          public static class: java.lang.Class<com.mapbox.common.location.IncompatibleGooglePlayServicesActivityRecognitionVersion>;
          public constructor(cause: java.lang.Exception);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class IncompatibleGooglePlayServicesLocationVersion {
          public static class: java.lang.Class<com.mapbox.common.location.IncompatibleGooglePlayServicesLocationVersion>;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingActivityType {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingActivityType>;
          public static UNKNOWN: string = 'undefined';
          public static GENERIC_NAVIGATION: string = 'generic_navigation';
          public static AUTOMOTIVE_NAVIGATION: string = 'automotive_navigation';
          public static FITNESS: string = 'fitness';
          public static AIRBORNE: string = 'airborne';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClient {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClient>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.LiveTrackingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void; stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void; registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void; unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void; getName(): string; getState(): com.mapbox.common.location.LiveTrackingState; getActiveSettings(): com.mapbox.bindgen.Value; flush(): void });
          public constructor();
          public start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getName(): string;
          public getState(): com.mapbox.common.location.LiveTrackingState;
          public getActiveSettings(): com.mapbox.bindgen.Value;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public flush(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientAccuracyCategory {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientAccuracyCategory>;
          public static EXTRA_HIGH: string = 'extra_high';
          public static HIGH: string = 'high';
          public static MEDIUM: string = 'medium';
          public static LOW: string = 'low';
          public static PASSIVE: string = 'passive';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientCapabilities {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientCapabilities>;
          public static LIFECYCLE_MODE: string = 'lifecycle_mode';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientLifecycleMode {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientLifecycleMode>;
          public static NONE: string = 'none';
          public static FOREGROUND: string = 'foreground';
          public static BACKGROUND: string = 'background';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientMinimumDisplacementCategory {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientMinimumDisplacementCategory>;
          public static ANY: string = 'any';
          public static SIGNIFICANT: string = 'significant';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientNative extends com.mapbox.common.location.LiveTrackingClient {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientNative>;
          public peer: number;
          public start(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public registerObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public constructor(peer: number);
          public static cleanNativePeer(param0: number): void;
          public unregisterObserver(param0: com.mapbox.common.location.LiveTrackingClientObserver): void;
          public getName(): string;
          public getState(): com.mapbox.common.location.LiveTrackingState;
          public getActiveSettings(): com.mapbox.bindgen.Value;
          public stop(param0: com.mapbox.common.location.LocationClientStartStopCallback): void;
          public flush(): void;
        }
        export module LiveTrackingClientNative {
          export class LiveTrackingClientPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientNative.LiveTrackingClientPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientObserver {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientObserver>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.LiveTrackingClientObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onLiveTrackingStateChanged(param0: com.mapbox.common.location.LiveTrackingState, param1: com.mapbox.common.location.LocationError): void; onLocationUpdateReceived(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, java.util.List<com.mapbox.common.location.Location>>): void });
          public constructor();
          public onLiveTrackingStateChanged(param0: com.mapbox.common.location.LiveTrackingState, param1: com.mapbox.common.location.LocationError): void;
          public onLocationUpdateReceived(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, java.util.List<com.mapbox.common.location.Location>>): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientObserverNative extends com.mapbox.common.location.LiveTrackingClientObserver {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientObserverNative>;
          public peer: number;
          public constructor(peer: number);
          public static cleanNativePeer(param0: number): void;
          public onLiveTrackingStateChanged(param0: com.mapbox.common.location.LiveTrackingState, param1: com.mapbox.common.location.LocationError): void;
          public onLocationUpdateReceived(param0: com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, java.util.List<com.mapbox.common.location.Location>>): void;
        }
        export module LiveTrackingClientObserverNative {
          export class LiveTrackingClientObserverPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientObserverNative.LiveTrackingClientObserverPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClientSettings {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClientSettings>;
          public static ACCURACY_CATEGORY: string = 'accuracy_category';
          public static ACCURACY: string = 'accuracy';
          public static MINIMUM_DISPLACEMENT_CATEGORY: string = 'displacement_category';
          public static MINIMUM_DISPLACEMENT: string = 'minimum_displacement';
          public static INTERVAL: string = 'interval';
          public static MINIMUM_INTERVAL: string = 'minimum_interval';
          public static MAXIMUM_INTERVAL: string = 'maximum_interval';
          public static WAIT_FOR_ACCURATE_LOCATION: string = 'wait_for_accurate_location';
          public static ACTIVITY_TYPE: string = 'activity_type';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingClients {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingClients>;
          public static ANDROID: string = 'android';
          public static PLAY_SERVICES_LOCATION: string = 'google_play_services';
          public static APPLE_CORE_LOCATION: string = 'apple_core_location';
          public static GPSD: string = 'gpsd';
          public static GEO_CLUE: string = 'geoclue';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LiveTrackingState {
          public static class: java.lang.Class<com.mapbox.common.location.LiveTrackingState>;
          public static STOPPED: com.mapbox.common.location.LiveTrackingState;
          public static STARTING: com.mapbox.common.location.LiveTrackingState;
          public static STARTED: com.mapbox.common.location.LiveTrackingState;
          public static STOPPING: com.mapbox.common.location.LiveTrackingState;
          public toString(): string;
          public static values(): androidNative.Array<com.mapbox.common.location.LiveTrackingState>;
          public static valueOf(name: string): com.mapbox.common.location.LiveTrackingState;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class Location {
          public static class: java.lang.Class<com.mapbox.common.location.Location>;
          public setAltitude(altitude: java.lang.Double): void;
          public getLatitude(): number;
          public getLongitude(): number;
          public getSource(): string;
          public setSpeedAccuracy(speedAccuracy: java.lang.Double): void;
          public setSpeed(speed: java.lang.Double): void;
          public setMonotonicTimestamp(monotonicTimestamp: java.lang.Long): void;
          public equals(object: any): boolean;
          public toString(): string;
          public setFloor(floor: java.lang.Long): void;
          public setSource(source: string): void;
          public getVerticalAccuracy(): java.lang.Double;
          public getBearingAccuracy(): java.lang.Double;
          public getExtra(): com.mapbox.bindgen.Value;
          public getHorizontalAccuracy(): java.lang.Double;
          public hashCode(): number;
          public getFloor(): java.lang.Long;
          public getSpeedAccuracy(): java.lang.Double;
          public getBearing(): java.lang.Double;
          public getSpeed(): java.lang.Double;
          public setHorizontalAccuracy(horizontalAccuracy: java.lang.Double): void;
          public setVerticalAccuracy(verticalAccuracy: java.lang.Double): void;
          public getMonotonicTimestamp(): java.lang.Long;
          public getTimestamp(): number;
          public setBearingAccuracy(bearingAccuracy: java.lang.Double): void;
          public setBearing(bearing: java.lang.Double): void;
          public getAltitude(): java.lang.Double;
          public toBuilder(): com.mapbox.common.location.Location.Builder;
        }
        export module Location {
          export class Builder {
            public static class: java.lang.Class<com.mapbox.common.location.Location.Builder>;
            public longitude(longitude: number): com.mapbox.common.location.Location.Builder;
            public constructor();
            public timestamp(timestamp: number): com.mapbox.common.location.Location.Builder;
            public horizontalAccuracy(horizontalAccuracy: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public bearingAccuracy(bearingAccuracy: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public floor(floor: java.lang.Long): com.mapbox.common.location.Location.Builder;
            public altitude(altitude: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public speed(speed: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public speedAccuracy(speedAccuracy: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public source(source: string): com.mapbox.common.location.Location.Builder;
            public extra(extra: com.mapbox.bindgen.Value): com.mapbox.common.location.Location.Builder;
            public build(): com.mapbox.common.location.Location;
            public monotonicTimestamp(monotonicTimestamp: java.lang.Long): com.mapbox.common.location.Location.Builder;
            public verticalAccuracy(verticalAccuracy: java.lang.Double): com.mapbox.common.location.Location.Builder;
            public latitude(latitude: number): com.mapbox.common.location.Location.Builder;
            public bearing(bearing: java.lang.Double): com.mapbox.common.location.Location.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationClientStartStopCallback {
          public static class: java.lang.Class<com.mapbox.common.location.LocationClientStartStopCallback>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.LocationClientStartStopCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { run(param0: com.mapbox.common.location.LocationError): void });
          public constructor();
          public run(param0: com.mapbox.common.location.LocationError): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationClientStartStopCallbackNative extends com.mapbox.common.location.LocationClientStartStopCallback {
          public static class: java.lang.Class<com.mapbox.common.location.LocationClientStartStopCallbackNative>;
          public static cleanNativePeer(param0: number): void;
          public run(param0: com.mapbox.common.location.LocationError): void;
        }
        export module LocationClientStartStopCallbackNative {
          export class LocationClientStartStopCallbackPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LocationClientStartStopCallbackNative.LocationClientStartStopCallbackPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationError {
          public static class: java.lang.Class<com.mapbox.common.location.LocationError>;
          public equals(object: any): boolean;
          public toString(): string;
          public getCode(): com.mapbox.common.location.LocationErrorCode;
          public getMessage(): string;
          public constructor(code: com.mapbox.common.location.LocationErrorCode, message: string);
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationErrorCode {
          public static class: java.lang.Class<com.mapbox.common.location.LocationErrorCode>;
          public static NONE: com.mapbox.common.location.LocationErrorCode;
          public static NOT_READY: com.mapbox.common.location.LocationErrorCode;
          public static NOT_AVAILABLE: com.mapbox.common.location.LocationErrorCode;
          public static ACCESS_DENIED: com.mapbox.common.location.LocationErrorCode;
          public static INVALID_ARGUMENT: com.mapbox.common.location.LocationErrorCode;
          public static FAILED_TO_DETECT_LOCATION: com.mapbox.common.location.LocationErrorCode;
          public static COMMUNICATION_FAILURE: com.mapbox.common.location.LocationErrorCode;
          public static CANCELLED: com.mapbox.common.location.LocationErrorCode;
          public static NOT_SUPPORTED: com.mapbox.common.location.LocationErrorCode;
          public static UNKNOWN: com.mapbox.common.location.LocationErrorCode;
          public static valueOf(name: string): com.mapbox.common.location.LocationErrorCode;
          public toString(): string;
          public static values(): androidNative.Array<com.mapbox.common.location.LocationErrorCode>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationExtraKeys {
          public static class: java.lang.Class<com.mapbox.common.location.LocationExtraKeys>;
          public static IS_MOCK: string = 'is_mock';
          public static IS_EXTERNAL: string = 'is_external';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationService {
          public static class: java.lang.Class<com.mapbox.common.location.LocationService>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.LocationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            isAvailable(): boolean;
            getLastLocation(): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>;
            getCurrentLocation(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.GetLocationCallback): number;
            cancelGetCurrentLocation(param0: number): void;
            getPermissionStatus(): com.mapbox.common.location.PermissionStatus;
            getAccuracyAuthorization(): com.mapbox.common.location.AccuracyAuthorization;
            registerObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
            unregisterObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
            getLiveTrackingClients(): java.util.List<string>;
            getLiveTrackingClientCapabilities(param0: string): com.mapbox.bindgen.Value;
            getLiveTrackingClientSettings(param0: string): com.mapbox.bindgen.Value;
            getLiveTrackingClient(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.LiveTrackingClient>;
          });
          public constructor();
          public getCurrentLocation(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.GetLocationCallback): number;
          public cancelGetCurrentLocation(param0: number): void;
          public getLiveTrackingClientSettings(param0: string): com.mapbox.bindgen.Value;
          public unregisterObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public getPermissionStatus(): com.mapbox.common.location.PermissionStatus;
          public isAvailable(): boolean;
          public getLastLocation(): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>;
          public getLiveTrackingClientCapabilities(param0: string): com.mapbox.bindgen.Value;
          public registerObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public getLiveTrackingClients(): java.util.List<string>;
          public getLiveTrackingClient(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.LiveTrackingClient>;
          public getAccuracyAuthorization(): com.mapbox.common.location.AccuracyAuthorization;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationServiceFactory {
          public static class: java.lang.Class<com.mapbox.common.location.LocationServiceFactory>;
          public peer: number;
          public static reset(): void;
          public constructor(peer: number);
          public static cleanNativePeer(param0: number): void;
          public static setUserDefined(param0: com.mapbox.common.location.LocationService): void;
          public static locationService(): com.mapbox.common.location.LocationService;
        }
        export module LocationServiceFactory {
          export class LocationServiceFactoryPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LocationServiceFactory.LocationServiceFactoryPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationServiceImpl extends com.mapbox.common.location.LocationService {
          public static class: java.lang.Class<com.mapbox.common.location.LocationServiceImpl>;
          public static TAG: string = 'LocationService';
          public static ERROR_MESSAGE_GOOGLE_PLAY_NOT_AVAILABLE: string = 'Google Play Location Services are not available on this device';
          public static ERROR_MESSAGE_FAILED_TO_GET_LAST_LOCATION: string = 'failed to get last known location';
          public static ERROR_MESSAGE_LAST_LOCATION_NOT_AVAILABLE: string = 'no last known location available';
          public getLiveTrackingClient(provider: string, capabilities: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.LiveTrackingClient>;
          public static createPlatformLocationService(): com.mapbox.common.location.LocationService;
          public getLiveTrackingClientSettings(param0: string): com.mapbox.bindgen.Value;
          public unregisterObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public registerObserver(observer: com.mapbox.common.location.LocationServiceObserver): void;
          public getPermissionStatus(): com.mapbox.common.location.PermissionStatus;
          public getLastLocation(): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>;
          public getLiveTrackingClientCapabilities(param0: string): com.mapbox.bindgen.Value;
          public getBackgroundLiveTrackingClients$common_release(): java.util.concurrent.CopyOnWriteArraySet<java.lang.ref.WeakReference<com.mapbox.common.location.BaseLiveTrackingClient>>;
          public cancelGetCurrentLocation(requestId: number): void;
          public registerObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public getLiveTrackingClient(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.LiveTrackingClient>;
          public getAccuracyAuthorization(): com.mapbox.common.location.AccuracyAuthorization;
          public getCurrentLocation(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.GetLocationCallback): number;
          public cancelGetCurrentLocation(param0: number): void;
          public getLiveTrackingClientCapabilities(name: string): com.mapbox.bindgen.Value;
          public getCurrentLocation(this_: com.mapbox.bindgen.Value, settings: com.mapbox.common.location.GetLocationCallback): number;
          public unregisterObserver(observer: com.mapbox.common.location.LocationServiceObserver): void;
          public isAvailable(): boolean;
          public getLiveTrackingClientSettings(name: string): com.mapbox.bindgen.Value;
          public getLiveTrackingClients(): java.util.List<string>;
        }
        export module LocationServiceImpl {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.location.LocationServiceImpl.Companion>;
            public createPlatformLocationService(): com.mapbox.common.location.LocationService;
          }
          export class LocationModeChangedBroadcastReceiver {
            public static class: java.lang.Class<com.mapbox.common.location.LocationServiceImpl.LocationModeChangedBroadcastReceiver>;
            public constructor(this$0: com.mapbox.common.location.LocationServiceImpl);
            public onReceive(reference: globalAndroid.content.Context, element$iv: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationServiceNative extends com.mapbox.common.location.LocationService {
          public static class: java.lang.Class<com.mapbox.common.location.LocationServiceNative>;
          public peer: number;
          public getLiveTrackingClientSettings(param0: string): com.mapbox.bindgen.Value;
          public unregisterObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public getPermissionStatus(): com.mapbox.common.location.PermissionStatus;
          public getLastLocation(): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.Location>;
          public getLiveTrackingClientCapabilities(param0: string): com.mapbox.bindgen.Value;
          public registerObserver(param0: com.mapbox.common.location.LocationServiceObserver): void;
          public getLiveTrackingClient(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<com.mapbox.common.location.LocationError, com.mapbox.common.location.LiveTrackingClient>;
          public getAccuracyAuthorization(): com.mapbox.common.location.AccuracyAuthorization;
          public getCurrentLocation(param0: com.mapbox.bindgen.Value, param1: com.mapbox.common.location.GetLocationCallback): number;
          public cancelGetCurrentLocation(param0: number): void;
          public constructor(peer: number);
          public static cleanNativePeer(param0: number): void;
          public isAvailable(): boolean;
          public getLiveTrackingClients(): java.util.List<string>;
        }
        export module LocationServiceNative {
          export class LocationServicePeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LocationServiceNative.LocationServicePeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationServiceObserver {
          public static class: java.lang.Class<com.mapbox.common.location.LocationServiceObserver>;
          /**
           * Constructs a new instance of the com.mapbox.common.location.LocationServiceObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAvailabilityChanged(param0: boolean): void; onPermissionStatusChanged(param0: com.mapbox.common.location.PermissionStatus): void; onAccuracyAuthorizationChanged(param0: com.mapbox.common.location.AccuracyAuthorization): void });
          public constructor();
          public onAccuracyAuthorizationChanged(param0: com.mapbox.common.location.AccuracyAuthorization): void;
          public onPermissionStatusChanged(param0: com.mapbox.common.location.PermissionStatus): void;
          public onAvailabilityChanged(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationServiceObserverNative extends com.mapbox.common.location.LocationServiceObserver {
          public static class: java.lang.Class<com.mapbox.common.location.LocationServiceObserverNative>;
          public peer: number;
          public onAccuracyAuthorizationChanged(param0: com.mapbox.common.location.AccuracyAuthorization): void;
          public constructor(peer: number);
          public static cleanNativePeer(param0: number): void;
          public onPermissionStatusChanged(param0: com.mapbox.common.location.PermissionStatus): void;
          public onAvailabilityChanged(param0: boolean): void;
        }
        export module LocationServiceObserverNative {
          export class LocationServiceObserverPeerCleaner {
            public static class: java.lang.Class<com.mapbox.common.location.LocationServiceObserverNative.LocationServiceObserverPeerCleaner>;
            public run(): void;
            public constructor(peer: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module LocationServiceUtilsKt {
          export module LocationServiceUtilsKt {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.common.location.LocationServiceUtilsKt.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class LocationUpdatesReceiver {
          public static class: java.lang.Class<com.mapbox.common.location.LocationUpdatesReceiver>;
          public static ACTION_PROCESS_LOCATION_UPDATES: string = 'com.mapbox.common.location.action.PROCESS_LOCATION_UPDATES';
          public static TAG: string = 'LUReceiver';
          public constructor();
          public onReceive(param0: globalAndroid.content.Context, client: globalAndroid.content.Intent): void;
        }
        export module LocationUpdatesReceiver {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.location.LocationUpdatesReceiver.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class PermissionStatus {
          public static class: java.lang.Class<com.mapbox.common.location.PermissionStatus>;
          public static DENIED: com.mapbox.common.location.PermissionStatus;
          public static GRANTED: com.mapbox.common.location.PermissionStatus;
          public static FOREGROUND: com.mapbox.common.location.PermissionStatus;
          public static BACKGROUND: com.mapbox.common.location.PermissionStatus;
          public toString(): string;
          public static valueOf(name: string): com.mapbox.common.location.PermissionStatus;
          public static values(): androidNative.Array<com.mapbox.common.location.PermissionStatus>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export class ProxyGoogleFusedLocationProviderClient {
          public static class: java.lang.Class<com.mapbox.common.location.ProxyGoogleFusedLocationProviderClient>;
          public getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
          public removeLocationUpdates(this_: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
          public requestLocationUpdates(this_: com.google.android.gms.location.LocationRequest, request: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
          public requestLocationUpdates(this_: com.google.android.gms.location.LocationRequest, request: com.google.android.gms.location.LocationCallback, callback: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
          public constructor(context: globalAndroid.content.Context);
          public removeLocationUpdates(this_: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
        }
        export module ProxyGoogleFusedLocationProviderClient {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.location.ProxyGoogleFusedLocationProviderClient.Companion>;
            public verifyAndCacheMethods$common_release(): boolean;
            public getAvailable$common_release(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngine {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngine>;
            /**
             * Constructs a new instance of the com.mapbox.common.location.compat.LocationEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
              requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
              removeLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
            });
            public constructor();
            public getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
            public removeLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
            public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineCallback<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineCallback<any>>;
            /**
             * Constructs a new instance of the com.mapbox.common.location.compat.LocationEngineCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: T): void; onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
            public onSuccess(param0: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineException {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineException>;
            public getError(): com.mapbox.common.location.LocationError;
            public constructor(error: com.mapbox.common.location.LocationError);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineImpl extends com.mapbox.common.location.compat.LocationEngine {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineImpl>;
            public static TAG: string = 'LocationEngineCompat';
            public getLastLocation(callback: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public removeLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public constructor(appContext: globalAndroid.content.Context);
            public getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
            public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, wasEmpty: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>, looperToUse: globalAndroid.os.Looper): void;
            public removeLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
            public requestLocationUpdates(it: com.mapbox.common.location.compat.LocationEngineRequest, this_: globalAndroid.app.PendingIntent): void;
            public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
            public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
            public removeLocationUpdates(it: globalAndroid.app.PendingIntent): void;
          }
          export module LocationEngineImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineImpl.Companion>;
            }
            export class GoogleFusedLocationClient extends com.mapbox.common.location.compat.LocationEngineImpl.LocationClient {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineImpl.GoogleFusedLocationClient>;
              public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
              public getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              public requestLocationUpdates(request: com.mapbox.common.location.compat.LocationEngineRequest, pendingIntent: globalAndroid.app.PendingIntent): void;
              public getLastLocation(listener: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
              public constructor(context: globalAndroid.content.Context);
              public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
            }
            export class LocationClient {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineImpl.LocationClient>;
              /**
               * Constructs a new instance of the com.mapbox.common.location.compat.LocationEngineImpl$LocationClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void; removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void; getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void });
              public constructor();
              public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
              public getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
            }
            export class SystemLocationClient extends com.mapbox.common.location.compat.LocationEngineImpl.LocationClient {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineImpl.SystemLocationClient>;
              public requestLocationUpdates(displacement: com.mapbox.common.location.compat.LocationEngineRequest, criteria: globalAndroid.app.PendingIntent): void;
              public requestLocationUpdates(param0: com.mapbox.common.location.compat.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
              public getLastLocation(param0: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              public getLastLocation(it: com.mapbox.common.location.compat.LocationEngineCallback<com.mapbox.common.location.compat.LocationEngineResult>): void;
              public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
              public constructor(context: globalAndroid.content.Context);
              public removeLocationUpdates(pendingIntent: globalAndroid.app.PendingIntent): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineProvider {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineProvider>;
            public static INSTANCE: com.mapbox.common.location.compat.LocationEngineProvider;
            public static getBestLocationEngine(context: globalAndroid.content.Context): com.mapbox.common.location.compat.LocationEngine;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineRequest {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineRequest>;
            public static PRIORITY_HIGH_ACCURACY: number = 0;
            public static PRIORITY_BALANCED_POWER_ACCURACY: number = 1;
            public static PRIORITY_LOW_POWER: number = 2;
            public static PRIORITY_NO_POWER: number = 3;
            public equals(other: any): boolean;
            public getDisplacement(): number;
            public getPriority(): number;
            public hashCode(): number;
            public getInterval(): number;
            public getMaxWaitTime(): number;
            public getFastestInterval(): number;
          }
          export module LocationEngineRequest {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineRequest.Builder>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public setMaxWaitTime($this$setMaxWaitTime_u24lambda_u2d2: number): com.mapbox.common.location.compat.LocationEngineRequest.Builder;
              public copy(interval: number): com.mapbox.common.location.compat.LocationEngineRequest.Builder;
              public setFastestInterval($this$setFastestInterval_u24lambda_u2d3: number): com.mapbox.common.location.compat.LocationEngineRequest.Builder;
              public toString(): string;
              public build(): com.mapbox.common.location.compat.LocationEngineRequest;
              public setPriority($this$setPriority_u24lambda_u2d0: number): com.mapbox.common.location.compat.LocationEngineRequest.Builder;
              public setDisplacement($this$setDisplacement_u24lambda_u2d1: number): com.mapbox.common.location.compat.LocationEngineRequest.Builder;
              public constructor(interval: number);
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineRequest.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export class LocationEngineResult {
            public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineResult>;
            public equals(other: any): boolean;
            public constructor(locations: java.util.List<any>);
            public hashCode(): number;
            public static create(locations: java.util.List<any>): com.mapbox.common.location.compat.LocationEngineResult;
            public getLocations(): java.util.List<globalAndroid.location.Location>;
            public setLocations(param0: java.util.List<any>): void;
            public getLastLocation(): globalAndroid.location.Location;
            public toString(): string;
            public static create(location: globalAndroid.location.Location): com.mapbox.common.location.compat.LocationEngineResult;
          }
          export module LocationEngineResult {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.common.location.compat.LocationEngineResult.Companion>;
              public create(this_: java.util.List<any>): com.mapbox.common.location.compat.LocationEngineResult;
              public create(this_: globalAndroid.location.Location): com.mapbox.common.location.compat.LocationEngineResult;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export module permissions {
            export class PermissionsListener {
              public static class: java.lang.Class<com.mapbox.common.location.compat.permissions.PermissionsListener>;
              /**
               * Constructs a new instance of the com.mapbox.common.location.compat.permissions.PermissionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onExplanationNeeded(param0: java.util.List<string>): void; onPermissionResult(param0: boolean): void });
              public constructor();
              public onExplanationNeeded(param0: java.util.List<string>): void;
              public onPermissionResult(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module location {
        export module compat {
          export module permissions {
            export class PermissionsManager {
              public static class: java.lang.Class<com.mapbox.common.location.compat.permissions.PermissionsManager>;
              public static areRuntimePermissionsRequired(): boolean;
              public static accuracyAuthorization(context: globalAndroid.content.Context): com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization;
              public setListener(listener: com.mapbox.common.location.compat.permissions.PermissionsListener): void;
              public static isBackgroundLocationPermissionGranted(context: globalAndroid.content.Context): boolean;
              public getListener(): com.mapbox.common.location.compat.permissions.PermissionsListener;
              public constructor(listener: com.mapbox.common.location.compat.permissions.PermissionsListener);
              public static areLocationPermissionsGranted(context: globalAndroid.content.Context): boolean;
              public requestLocationPermissions(fineLocPermission: globalAndroid.app.Activity): void;
              public onRequestPermissionsResult(this_: number, requestCode: androidNative.Array<string>, permissions: androidNative.Array<number>): void;
            }
            export module PermissionsManager {
              export class AccuracyAuthorization {
                public static class: java.lang.Class<com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization>;
                public static NONE: com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization;
                public static PRECISE: com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization;
                public static APPROXIMATE: com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization;
                public static valueOf(name: string): com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization;
                public static values(): androidNative.Array<com.mapbox.common.location.compat.permissions.PermissionsManager.AccuracyAuthorization>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module movement {
        export class ActivityRecognitionClient {
          public static class: java.lang.Class<com.mapbox.common.movement.ActivityRecognitionClient>;
          /**
           * Constructs a new instance of the com.mapbox.common.movement.ActivityRecognitionClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { isPlatformActivityRecognitionAvailable(): boolean; start(): void; stop(): void; addObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void; removeObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void });
          public constructor();
          public isPlatformActivityRecognitionAvailable(): boolean;
          public stop(): void;
          public addObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public start(): void;
          public removeObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
        }
        export module ActivityRecognitionClient {
          export class Observer {
            public static class: java.lang.Class<com.mapbox.common.movement.ActivityRecognitionClient.Observer>;
            /**
             * Constructs a new instance of the com.mapbox.common.movement.ActivityRecognitionClient$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMovementInfo(param0: com.mapbox.common.MovementInfo): void });
            public constructor();
            public onMovementInfo(param0: com.mapbox.common.MovementInfo): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module movement {
        export class AndroidMovementMonitor extends com.mapbox.common.MovementMonitorInterface {
          public static class: java.lang.Class<com.mapbox.common.movement.AndroidMovementMonitor>;
          public setMovementInfo(movementInfo: com.mapbox.common.MovementInfo): void;
          public unregisterObserver(observer: com.mapbox.common.MovementModeObserver): void;
          public registerObserver(param0: com.mapbox.common.MovementModeObserver): void;
          public unregisterObserver(param0: com.mapbox.common.MovementModeObserver): void;
          public getMovementInfo(result: com.mapbox.common.MovementInfoCallback): void;
          public static create(): com.mapbox.common.MovementMonitorInterface;
          public getMovementInfo(param0: com.mapbox.common.MovementInfoCallback): void;
          public registerObserver(it: com.mapbox.common.MovementModeObserver): void;
          public setMovementInfo(param0: com.mapbox.common.MovementInfo): void;
          public constructor(activityRecognition: com.mapbox.common.movement.ActivityRecognitionClient);
        }
        export module AndroidMovementMonitor {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.movement.AndroidMovementMonitor.Companion>;
            public create(): com.mapbox.common.MovementMonitorInterface;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module movement {
        export class GoogleActivityRecognition extends com.mapbox.common.movement.ActivityRecognitionClient {
          public static class: java.lang.Class<com.mapbox.common.movement.GoogleActivityRecognition>;
          public static TAG: string = 'ActivityRecognitionObserver';
          public static ACTIVITY_UPDATES_ACTION: string = 'com.mapbox.common.movement.action.ACTIVITY_RECOGNITION_UPDATES';
          public static GOOGLE_ACTIVITY_RECOGNITION_CLIENT: string = 'com.google.android.gms.location.ActivityRecognitionClient';
          public isPlatformActivityRecognitionAvailable(): boolean;
          public removeObserver(observer: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public addObserver(observer: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public stop(): void;
          public addObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public start(): void;
          public removeObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public constructor(context: globalAndroid.content.Context, mode: com.mapbox.common.movement.GoogleActivityRecognition.Mode);
        }
        export module GoogleActivityRecognition {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.movement.GoogleActivityRecognition.Companion>;
            public isAvailable$common_release(): boolean;
            public setGooglePlayActivityRecognitionBundled$common_release(param0: boolean): void;
            public getGooglePlayActivityRecognitionBundled$common_release(): boolean;
          }
          export class Mode {
            public static class: java.lang.Class<com.mapbox.common.movement.GoogleActivityRecognition.Mode>;
            public static TRANSITION_API: com.mapbox.common.movement.GoogleActivityRecognition.Mode;
            public static SAMPLING_API: com.mapbox.common.movement.GoogleActivityRecognition.Mode;
            public static valueOf(value: string): com.mapbox.common.movement.GoogleActivityRecognition.Mode;
            public static values(): androidNative.Array<com.mapbox.common.movement.GoogleActivityRecognition.Mode>;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.common.movement.GoogleActivityRecognition.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module movement {
        export class ProxyGoogleActivityRecognitionClient {
          public static class: java.lang.Class<com.mapbox.common.movement.ProxyGoogleActivityRecognitionClient>;
          public removeActivityTransitionUpdates(this_: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
          public constructor(context: globalAndroid.content.Context);
          public removeActivityUpdates(this_: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
          public requestActivityUpdates(this_: number, detectionIntervalMillis: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
          public requestActivityTransitionUpdates(this_: com.google.android.gms.location.ActivityTransitionRequest, activityTransitionRequest: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
        }
        export module ProxyGoogleActivityRecognitionClient {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.common.movement.ProxyGoogleActivityRecognitionClient.Companion>;
            public getAvailable$common_release(): boolean;
            public verifyAndCacheMethods$common_release(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module movement {
        export class StubActivityRecognition extends com.mapbox.common.movement.ActivityRecognitionClient {
          public static class: java.lang.Class<com.mapbox.common.movement.StubActivityRecognition>;
          public static INSTANCE: com.mapbox.common.movement.StubActivityRecognition;
          public isPlatformActivityRecognitionAvailable(): boolean;
          public removeObserver(observer: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public addObserver(observer: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public stop(): void;
          public addObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
          public start(): void;
          public removeObserver(param0: com.mapbox.common.movement.ActivityRecognitionClient.Observer): void;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.android.core.location.LocationEngineCallback:1
//com.mapbox.bindgen.Expected:2
//com.mapbox.bindgen.Expected.Action:1
//com.mapbox.bindgen.Expected.Transformer:2
//com.mapbox.common.location.FailedTask:1
//com.mapbox.common.location.compat.LocationEngineCallback:1
