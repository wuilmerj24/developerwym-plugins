declare module com {
  export module mapbox {
    export module base {
      export module common {
        export module logger {
          export class Logger {
            public static class: java.lang.Class<com.mapbox.base.common.logger.Logger>;
            /**
             * Constructs a new instance of the com.mapbox.base.common.logger.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { v(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void; d(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void; i(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void; w(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void; e(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void });
            public constructor();
            public v(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void;
            public i(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void;
            public e(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void;
            public w(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void;
            public d(param0: com.mapbox.base.common.logger.model.Tag, param1: com.mapbox.base.common.logger.model.Message, param2: java.lang.Throwable): void;
          }
          export module Logger {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.base.common.logger.Logger.DefaultImpls>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module base {
      export module common {
        export module logger {
          export module model {
            export class Message {
              public static class: java.lang.Class<com.mapbox.base.common.logger.model.Message>;
              public constructor(message: string);
              public hashCode(): number;
              public toString(): string;
              public copy(message: string): com.mapbox.base.common.logger.model.Message;
              public equals(param0: any): boolean;
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
    export module base {
      export module common {
        export module logger {
          export module model {
            export class Tag {
              public static class: java.lang.Class<com.mapbox.base.common.logger.model.Tag>;
              public hashCode(): number;
              public copy(tag: string): com.mapbox.base.common.logger.model.Tag;
              public toString(): string;
              public constructor(tag: string);
              public equals(param0: any): boolean;
              public getTag(): string;
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
    export module common {
      export class BuildConfig {
        public static class: java.lang.Class<com.mapbox.common.BuildConfig>;
        public static DEBUG: boolean = 0;
        public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.common';
        public static BUILD_TYPE: string = 'release';
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export class LibraryLoader {
          public static class: java.lang.Class<com.mapbox.common.module.LibraryLoader>;
          /**
           * Constructs a new instance of the com.mapbox.common.module.LibraryLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { load(param0: string): void });
          public constructor();
          public load(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module provider {
          export class MapboxInvalidModuleException {
            public static class: java.lang.Class<com.mapbox.common.module.provider.MapboxInvalidModuleException>;
            public constructor(type: com.mapbox.annotation.module.MapboxModuleType);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public copy(type: com.mapbox.annotation.module.MapboxModuleType): com.mapbox.common.module.provider.MapboxInvalidModuleException;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module provider {
          export class MapboxModuleProvider {
            public static class: java.lang.Class<com.mapbox.common.module.provider.MapboxModuleProvider>;
            public static INSTANCE: com.mapbox.common.module.provider.MapboxModuleProvider;
            public createModule(providerClass: com.mapbox.annotation.module.MapboxModuleType, provider: any): any;
          }
          export module MapboxModuleProvider {
            export class ModuleInstanceProvider {
              public static class: java.lang.Class<com.mapbox.common.module.provider.MapboxModuleProvider.ModuleInstanceProvider>;
              /**
               * Constructs a new instance of the com.mapbox.common.module.provider.MapboxModuleProvider$ModuleInstanceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                // getInstance(param0: java.lang.Class<any>, param1: com.mapbox.annotation.module.MapboxModuleType, param2: any<any, androidNative.Array<com.mapbox.common.module.provider.ModuleProviderArgument>>): any;
                getInstance(param0: java.lang.Class<any>, param1: com.mapbox.annotation.module.MapboxModuleType, param2: any): any;
              });
              public constructor();
              public getInstance(param0: java.lang.Class<any>, param1: com.mapbox.annotation.module.MapboxModuleType, param2: any): any;
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
      export module module {
        export module provider {
          export class ModuleProviderArgument {
            public static class: java.lang.Class<com.mapbox.common.module.provider.ModuleProviderArgument>;
            public constructor(expectedArgumentClass: java.lang.Class<any>, argumentInstance: any);
            public component2(): any;
            public copy(expectedArgumentClass: java.lang.Class<any>, argumentInstance: any): com.mapbox.common.module.provider.ModuleProviderArgument;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component1(): java.lang.Class<any>;
            public getExpectedArgumentClass(): java.lang.Class<any>;
            public getArgumentInstance(): any;
            public toString(): string;
          }
        }
      }
    }
  }
}

//Generics information:
