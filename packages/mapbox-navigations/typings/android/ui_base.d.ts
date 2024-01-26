declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module base {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.base.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.base';
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
        export module base {
          export module databinding {
            export class MapboxExtendableButtonLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.databinding.MapboxExtendableButtonLayoutBinding>;
              public buttonText: androidx.appcompat.widget.AppCompatTextView;
              public container: androidx.constraintlayout.widget.ConstraintLayout;
              public iconImage: androidx.appcompat.widget.AppCompatImageView;
              public static bind(buttonText: globalAndroid.view.View): com.mapbox.navigation.ui.base.databinding.MapboxExtendableButtonLayoutBinding;
              public getRoot(): globalAndroid.view.View;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.base.databinding.MapboxExtendableButtonLayoutBinding;
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
        export module base {
          export module formatter {
            export class ValueFormatter<T, R> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.formatter.ValueFormatter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { format(param0: T): R });
              public constructor();
              public format(param0: T): R;
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
        export module base {
          export module installer {
            export class ComponentInstaller {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.installer.ComponentInstaller>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.installer.ComponentInstaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { component(param0: com.mapbox.navigation.ui.base.lifecycle.UIComponent): com.mapbox.navigation.ui.base.installer.Installation; components(param0: androidNative.Array<com.mapbox.navigation.ui.base.lifecycle.UIComponent>): com.mapbox.navigation.ui.base.installer.Installation; findComponent(param0: any): any });
              public constructor();
              public component(param0: com.mapbox.navigation.ui.base.lifecycle.UIComponent): com.mapbox.navigation.ui.base.installer.Installation;
              public findComponent(param0: any): any;
              public components(param0: androidNative.Array<com.mapbox.navigation.ui.base.lifecycle.UIComponent>): com.mapbox.navigation.ui.base.installer.Installation;
            }
            export module ComponentInstaller {
              export class DefaultImpls {
                public static class: java.lang.Class<com.mapbox.navigation.ui.base.installer.ComponentInstaller.DefaultImpls>;
                public static component(this_: com.mapbox.navigation.ui.base.installer.ComponentInstaller, component: com.mapbox.navigation.ui.base.lifecycle.UIComponent): com.mapbox.navigation.ui.base.installer.Installation;
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
        export module base {
          export module installer {
            export class Installation {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.installer.Installation>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.installer.Installation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { uninstall(): void });
              public constructor();
              public uninstall(): void;
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
        export module base {
          export module installer {
            export class NavigationComponents extends com.mapbox.navigation.ui.base.installer.ComponentInstaller {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.installer.NavigationComponents>;
              public constructor();
              public component(param0: com.mapbox.navigation.ui.base.lifecycle.UIComponent): com.mapbox.navigation.ui.base.installer.Installation;
              public findComponent(param0: any): any;
              public component(component: com.mapbox.navigation.ui.base.lifecycle.UIComponent): com.mapbox.navigation.ui.base.installer.Installation;
              public components(param0: androidNative.Array<com.mapbox.navigation.ui.base.lifecycle.UIComponent>): com.mapbox.navigation.ui.base.installer.Installation;
              public findComponent($this$firstOrNull$iv: any): any;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(componentsChain: com.mapbox.navigation.core.internal.extensions.MapboxNavigationObserverChain);
              public components(components: androidNative.Array<com.mapbox.navigation.ui.base.lifecycle.UIComponent>): com.mapbox.navigation.ui.base.installer.Installation;
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
        export module base {
          export module lifecycle {
            export class Binder<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.Binder<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.lifecycle.Binder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bind(param0: T): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver });
              public constructor();
              public bind(param0: T): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
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
        export module base {
          export module lifecycle {
            export class NoOpMapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.NoOpMapboxNavigationObserver>;
              public static INSTANCE: com.mapbox.navigation.ui.base.lifecycle.NoOpMapboxNavigationObserver;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
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
        export module base {
          export module lifecycle {
            export class UIBinder extends com.mapbox.navigation.ui.base.lifecycle.Binder<globalAndroid.view.ViewGroup> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.UIBinder>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.lifecycle.UIBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { '<clinit>'(): void; bind(param0: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver });
              public constructor();
              public bind(param0: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            }
            export module UIBinder {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.UIBinder.Companion>;
                public getUSE_DEFAULT(): com.mapbox.navigation.ui.base.lifecycle.UIBinder;
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
        export module base {
          export module lifecycle {
            export class UIComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.UIComponent>;
              public coroutineScope: kotlinx.coroutines.CoroutineScope;
              public constructor();
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public getCoroutineScope(): kotlinx.coroutines.CoroutineScope;
              public observe(this_: kotlinx.coroutines.flow.Flow, $this$observe: any, context: any): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public setCoroutineScope(param0: kotlinx.coroutines.CoroutineScope): void;
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
        export module base {
          export module lifecycle {
            export abstract class UICoordinator<T> extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.lifecycle.UICoordinator<any>>;
              public coroutineScope: kotlinx.coroutines.CoroutineScope;
              public flowViewBinders(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.base.lifecycle.Binder<any>>;
              public constructor(viewGroup: any);
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public getCoroutineScope(): kotlinx.coroutines.CoroutineScope;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public setCoroutineScope(param0: kotlinx.coroutines.CoroutineScope): void;
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
        export module base {
          export module util {
            export class MapboxNavigationConsumer<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { accept(param0: T): void });
              public constructor();
              public accept(param0: T): void;
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
        export module base {
          export module view {
            export class MapboxExtendableButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.base.view.MapboxExtendableButton>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public setState(state: com.mapbox.navigation.ui.base.view.MapboxExtendableButton.State): void;
              public getTextView(): androidx.appcompat.widget.AppCompatTextView;
              public getIconImage(): androidx.appcompat.widget.AppCompatImageView;
              public constructor($this$_init__u24lambda_u2d0: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet, context: number, attrs: number);
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public getContainerView(): androidx.constraintlayout.widget.ConstraintLayout;
              public constructor(context: globalAndroid.content.Context);
            }
            export module MapboxExtendableButton {
              export class State {
                public static class: java.lang.Class<com.mapbox.navigation.ui.base.view.MapboxExtendableButton.State>;
                public constructor(icon: number, text: string, duration: number);
                public toString(): string;
                public getDuration(): number;
                public component1(): number;
                public getText(): string;
                public copy(icon: number, text: string, duration: number): com.mapbox.navigation.ui.base.view.MapboxExtendableButton.State;
                public component3(): number;
                public getIcon(): number;
                public component2(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.base.formatter.ValueFormatter:2
//com.mapbox.navigation.ui.base.lifecycle.Binder:1
//com.mapbox.navigation.ui.base.lifecycle.UICoordinator:1
//com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer:1
