/// <reference path="../../references.d.ts" />

declare module com {
    export module developerwym {
        export module nsupdatescreenmodule {
            export class BuildConfig {
                public static class: java.lang.Class<com.developerwym.nsupdatescreenmodule.BuildConfig>;
                public static DEBUG: boolean;
                public static LIBRARY_PACKAGE_NAME: string;
                public static BUILD_TYPE: string;
                public constructor();
            }
        }
    }
}

declare module com {
    export module developerwym {
        export module nsupdatescreenmodule {
            export class GooglePlayAppVersion extends globalAndroid.os.AsyncTask<string, java.lang.Void, string> {
                public static class: java.lang.Class<com.developerwym.nsupdatescreenmodule.GooglePlayAppVersion>;
                public onPostExecute(param0: string): void;
                public constructor(param0: string, param1: com.developerwym.nsupdatescreenmodule.GooglePlayAppVersion.Listener);
                public doInBackground(param0: native.Array<string>): string;
            }
            export module GooglePlayAppVersion {
                export class Listener {
                    public static class: java.lang.Class<com.developerwym.nsupdatescreenmodule.GooglePlayAppVersion.Listener>;
                    /**
                     * Constructs a new instance of the com.developerwym.nsupdatescreenmodule.GooglePlayAppVersion$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { result(param0: string): void });
                    public constructor();
                    public result(param0: string): void;
                }
            }
        }
    }
}

declare module com {
    export module developerwym {
        export module nsupdatescreenmodule {
            export class NsUpdateScreenMActiviry {
                public static class: java.lang.Class<com.developerwym.nsupdatescreenmodule.NsUpdateScreenMActiviry>;
                public closePage(): void;
                public onBackPressed(): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module developerwym {
        export module nsupdatescreenmodule {
            export class OpenIntent {
                public static class: java.lang.Class<com.developerwym.nsupdatescreenmodule.OpenIntent>;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.lang.Boolean);
            }
        }
    }
}

declare class NsUpdateScreenModule extends UIView {
    static alloc(): NsUpdateScreenModule; // inherited from NSObject

    static appearance(): NsUpdateScreenModule; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): NsUpdateScreenModule; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NsUpdateScreenModule; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NsUpdateScreenModule; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NsUpdateScreenModule; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NsUpdateScreenModule; // inherited from UIAppearance

    static new(): NsUpdateScreenModule; // inherited from NSObject
}

declare var NsUpdateScreenModuleVersionNumber: number;

declare var NsUpdateScreenModuleVersionString: interop.Reference<number>;