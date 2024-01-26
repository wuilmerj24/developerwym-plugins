declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module voice {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.voice.BuildConfig>;
            public static DEBUG: boolean = 0;
            public static LIBRARY_PACKAGE_NAME: string = 'com.mapbox.navigation.ui.voice';
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
        export module voice {
          export module api {
            export class AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void; abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void });
              public constructor();
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
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
        export module voice {
          export module api {
            export class AudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusDelegate>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AudioFocusDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestFocus(): boolean; abandonFocus(): boolean });
              public constructor();
              public requestFocus(): boolean;
              public abandonFocus(): boolean;
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
        export module voice {
          export module api {
            export class AudioFocusDelegateProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusDelegateProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.AudioFocusDelegateProvider;
              public defaultAudioFocusDelegate(audioManager: globalAndroid.media.AudioManager, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate;
              public defaultAudioFocusDelegate(context: globalAndroid.content.Context, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate;
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
        export module voice {
          export module api {
            export class AudioFocusRequestCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { invoke(param0: boolean): void });
              public constructor();
              public invoke(param0: boolean): void;
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
        export module voice {
          export module api {
            export class BundleProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.BundleProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.BundleProvider;
              public retrieveBundle(): globalAndroid.os.Bundle;
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
        export module voice {
          export module api {
            export class FileInputStreamProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.FileInputStreamProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.FileInputStreamProvider;
              public retrieveFileInputStream(file: java.io.File): java.io.FileInputStream;
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
        export module voice {
          export module api {
            export class MapboxAudioGuidance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance>;
              public static create(options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
              public toggle(): void;
              public static create(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
              public static getRegisteredInstance(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public unmute(): void;
              public getCurrentVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
              public onAttached(this_: com.mapbox.navigation.core.MapboxNavigation): void;
              public updateSpeechApiOptions(options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): void;
              public constructor(audioGuidanceServices: com.mapbox.navigation.ui.voice.internal.impl.MapboxAudioGuidanceServices, dispatcher: kotlinx.coroutines.CoroutineDispatcher, options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions);
              public stateFlow(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidanceState>;
              public mute(): void;
            }
            export module MapboxAudioGuidance {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance.Companion>;
                public getRegisteredInstance(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
                public create(options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
                public create(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
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
        export module voice {
          export module api {
            export class MapboxAudioGuidanceState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidanceState>;
              public isPlayable(): boolean;
              public constructor();
              public constructor(isPlayable: boolean, isMuted: boolean, isFirst: boolean, voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions, speechAnnouncement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
              public isFirst(): boolean;
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public hashCode(): number;
              public getSpeechAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public equals(other: any): boolean;
              public toString(): string;
              public isMuted(): boolean;
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
        export module voice {
          export module api {
            export class MapboxSpeechApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechApi>;
              public cancel(): void;
              public generate(voiceInstruction: com.mapbox.api.directions.v5.models.VoiceInstructions, consumer: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.voice.model.SpeechError, com.mapbox.navigation.ui.voice.model.SpeechValue>>): void;
              public predownload$libnavui_voice_release(typeAndAnnouncement: java.util.List<any>): void;
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions);
              public cancelPredownload$libnavui_voice_release(): void;
              public generatePredownloaded(voiceInstruction: com.mapbox.api.directions.v5.models.VoiceInstructions, consumer: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.voice.model.SpeechError, com.mapbox.navigation.ui.voice.model.SpeechValue>>): void;
              public clean(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string);
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
        export module voice {
          export module api {
            export class MapboxSpeechFileProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider>;
              public cancel(): void;
              public delete(file: java.io.File): void;
              public generateVoiceFileFrom(inputStream: java.io.InputStream, $completion: any): any;
              public constructor(cacheDirectory: java.io.File);
            }
            export module MapboxSpeechFileProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider.Companion>;
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
        export module voice {
          export module api {
            export class MapboxSpeechProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider>;
              public load(voiceInstruction: com.mapbox.api.directions.v5.models.VoiceInstructions, $this$load_u24lambda_u2d1: any): any;
              public constructor(accessToken: string, language: string, urlSkuTokenProvider: com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider, options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions, resourceLoader: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader);
            }
            export module MapboxSpeechProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider.WhenMappings>;
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
        export module voice {
          export module api {
            export class MapboxVoiceApi extends com.mapbox.navigation.ui.voice.api.VoiceApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceApi>;
              public cancel(): void;
              public retrieveVoiceFile(this_: com.mapbox.api.directions.v5.models.VoiceInstructions, this_: any): any;
              public clean(it: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public constructor(speechLoader: com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider, speechFileProvider: com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider);
              public retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
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
        export module voice {
          export module api {
            export class MapboxVoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer>;
              public constructor(context: globalAndroid.content.Context, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AudioFocusDelegate);
              public play(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, consumer: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>): void;
              public clear(): void;
              public constructor(context: globalAndroid.content.Context, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
              public shutdown(): void;
              public constructor(context: globalAndroid.content.Context, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate);
              /** @deprecated */
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate);
              public constructor(context: globalAndroid.content.Context, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate, timerFactory: com.mapbox.navigation.ui.utils.internal.Provider<java.util.Timer>);
              public constructor(context: globalAndroid.content.Context, language: string);
              /** @deprecated */
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AudioFocusDelegate);
              public updateLanguage(language: string): void;
              /** @deprecated */
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, audioFocusDelegate: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate, timerFactory: com.mapbox.navigation.ui.utils.internal.Provider<java.util.Timer>);
              /** @deprecated */
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
              /** @deprecated */
              public constructor(context: globalAndroid.content.Context, accessToken: string, language: string);
              public volume(this_: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
            }
            export module MapboxVoiceInstructionsPlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer.WhenMappings>;
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
        export module voice {
          export module api {
            export class MediaPlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MediaPlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.MediaPlayerProvider;
              public retrieveMediaPlayer(): globalAndroid.media.MediaPlayer;
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
        export module voice {
          export module api {
            export class NextVoiceInstructionsProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions> });
              public constructor();
              public getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
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
        export module voice {
          export module api {
            export class OreoAndLaterAudioFocusDelegate extends com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.OreoAndLaterAudioFocusDelegate>;
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public constructor(audioManager: globalAndroid.media.AudioManager, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
              public abandonFocus(this_: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public requestFocus(this_: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, owner: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
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
        export module voice {
          export module api {
            export class PlayCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PlayCallback>;
              public getConsumer(): com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public hashCode(): number;
              public component1(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public copy(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, consumer: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>): com.mapbox.navigation.ui.voice.api.PlayCallback;
              public getAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public equals(other: any): boolean;
              public constructor(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, consumer: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>);
              public component2(): com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public toString(): string;
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
        export module voice {
          export module api {
            export class PreOreoAudioFocusDelegate extends com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PreOreoAudioFocusDelegate>;
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public requestFocus(result: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, this_: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public abandonFocus(callback: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public constructor(audioManager: globalAndroid.media.AudioManager, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
            }
            export module PreOreoAudioFocusDelegate {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PreOreoAudioFocusDelegate.WhenMappings>;
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
        export module voice {
          export module api {
            export class RouteProgressData {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.RouteProgressData>;
              public getStepDistanceRemaining(): number;
              public hashCode(): number;
              public component2(): number;
              public component5(): number;
              public toString(): string;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public constructor(route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, stepIndex: number, stepDurationRemaining: number, stepDistanceRemaining: number);
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public getStepDurationRemaining(): number;
              public getLegIndex(): number;
              public component4(): number;
              public equals(other: any): boolean;
              public component3(): number;
              public getStepIndex(): number;
              public copy(route: com.mapbox.api.directions.v5.models.DirectionsRoute, legIndex: number, stepIndex: number, stepDurationRemaining: number, stepDistanceRemaining: number): com.mapbox.navigation.ui.voice.api.RouteProgressData;
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
        export module voice {
          export module api {
            export class TextToSpeechProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TextToSpeechProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.TextToSpeechProvider;
              public getTextToSpeech(context: globalAndroid.content.Context, onInitListener: globalAndroid.speech.tts.TextToSpeech.OnInitListener): globalAndroid.speech.tts.TextToSpeech;
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
        export module voice {
          export module api {
            export class TimeBasedNextVoiceInstructionsProvider extends com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TimeBasedNextVoiceInstructionsProvider>;
              public constructor(observableTimeSeconds: number);
              public getNextVoiceInstructions(it: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
            }
            export module TimeBasedNextVoiceInstructionsProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TimeBasedNextVoiceInstructionsProvider.Companion>;
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
        export module voice {
          export module api {
            export class UrlUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.UrlUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.UrlUtils;
              public encodePathSegment(pathSegment: string): string;
              public canonicalize$libnavui_voice_release(codePoint: string, i: number, this_: number, $this$canonicalize: string, pos: boolean, limit: boolean, encodeSet: boolean, alreadyEncoded: boolean, strict: java.nio.charset.Charset): string;
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
        export module voice {
          export module api {
            export class VoiceApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceApi>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any; clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void });
              public constructor();
              public clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
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
        export module voice {
          export module api {
            export class VoiceApiProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceApiProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceApiProvider;
              public retrieveMapboxVoiceApi(context: globalAndroid.content.Context, accessToken: string, language: string, options: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.api.MapboxVoiceApi;
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
        export module voice {
          export module api {
            export class VoiceInstructionsFilePlayer extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer>;
              public volume(state: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public setMediaPlayer$libnavui_voice_release(param0: globalAndroid.media.MediaPlayer): void;
              public play(file: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, this_: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public getCurrentPlay$libnavui_voice_release(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              public getVolumeLevel$libnavui_voice_release(): number;
              public setVolumeLevel$libnavui_voice_release(param0: number): void;
              public shutdown(): void;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public setCurrentPlay$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public getMediaPlayer$libnavui_voice_release(): globalAndroid.media.MediaPlayer;
              public constructor(context: globalAndroid.content.Context, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
            }
            export module VoiceInstructionsFilePlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsFilePlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayerProvider;
              public retrieveVoiceInstructionsFilePlayer(context: globalAndroid.content.Context, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer;
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
        export module voice {
          export module api {
            export class VoiceInstructionsParser {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsParser>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsParser;
              public parse(speechAnnouncement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): com.mapbox.bindgen.Expected<java.lang.Throwable, com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
              public parse(voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions): com.mapbox.bindgen.Expected<java.lang.Throwable, com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void; volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void; clear(): void; shutdown(): void });
              public constructor();
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public shutdown(): void;
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
        export module voice {
          export module api {
            export abstract class VoiceInstructionsPlayerAttributes {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes>;
              public configureMediaPlayer(): any;
              public applyOn$libnavui_voice_release(mediaPlayer: globalAndroid.media.MediaPlayer): void;
              public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
              public applyOn$libnavui_voice_release(owner: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, audioFocusRequestBuilder: globalAndroid.media.AudioFocusRequest.Builder): void;
              public configureTextToSpeech(): any;
              public configureAudioFocusRequestBuilder(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
              public applyOn$libnavui_voice_release(textToSpeech: globalAndroid.speech.tts.TextToSpeech, bundle: globalAndroid.os.Bundle): void;
            }
            export module VoiceInstructionsPlayerAttributes {
              export class OreoAndLaterAttributes extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes>;
                public toString(): string;
                public copy(options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, builder: any): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes;
                public configureMediaPlayer(): any;
                public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public audioAttributes$libnavui_voice_release(builder: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public component1(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public constructor(options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, builder: any);
                public configureAudioFocusRequestBuilder(owner: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public component2(): any;
                public equals(other: any): boolean;
                public getBuilder(): any;
                public configureTextToSpeech(): any;
                public hashCode(): number;
              }
              export module OreoAndLaterAttributes {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes.WhenMappings>;
                }
              }
              export class PreOreoAttributes extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.PreOreoAttributes>;
                public toString(): string;
                public configureMediaPlayer(): any;
                public constructor(options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
                public copy(options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.PreOreoAttributes;
                public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public configureTextToSpeech(): any;
                public component1(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public hashCode(): number;
                public configureAudioFocusRequestBuilder(owner: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public equals(other: any): boolean;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPlayerAttributesProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributesProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributesProvider;
              public retrievePlayerAttributes(options: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPlayerCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onDone(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void });
              public constructor();
              public onDone(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPrefetcher {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPrefetcher>;
              public static DEFAULT_OBSERVABLE_TIME_SECONDS: number = 180;
              public static DEFAULT_TIME_PERCENTAGE_TO_TRIGGER_AFTER: number = 0.5;
              public constructor(speechApi: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi);
              public constructor(speechApi: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi, observableTime: number, timePercentageToTriggerAfter: number, nextVoiceInstructionsProvider: com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider, timeProvider: com.mapbox.navigation.utils.internal.Time);
              public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public onAttached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            }
            export module VoiceInstructionsPrefetcher {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPrefetcher.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsTextPlayer extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer>;
              public volume(state: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public getCurrentPlay$libnavui_voice_release(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public setLanguageSupported$libnavui_voice_release(param0: boolean): void;
              public clear(): void;
              public getVolumeLevel$libnavui_voice_release(): number;
              public play(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, this_: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public setVolumeLevel$libnavui_voice_release(param0: number): void;
              public shutdown(): void;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public setCurrentPlay$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public isLanguageSupported$libnavui_voice_release(): boolean;
              public getTextToSpeech$libnavui_voice_release(): globalAndroid.speech.tts.TextToSpeech;
              public updateLanguage(language: string): void;
              public initializeWithLanguage$libnavui_voice_release(language: java.util.Locale): void;
              public constructor(context: globalAndroid.content.Context, language: string, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
            }
            export module VoiceInstructionsTextPlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsTextPlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayerProvider;
              public retrieveVoiceInstructionsTextPlayer(context: globalAndroid.content.Context, language: string, playerAttributes: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer;
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
        export module voice {
          export module databinding {
            export class MapboxAudioGuidanceButtonLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding>;
              public buttonText: androidx.appcompat.widget.AppCompatTextView;
              public container: androidx.constraintlayout.widget.ConstraintLayout;
              public iconImage: androidx.appcompat.widget.AppCompatImageView;
              public static inflate(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding;
              public static bind(buttonText: globalAndroid.view.View): com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding;
              public getRoot(): globalAndroid.view.View;
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
        export module voice {
          export module internal {
            export class MapboxAudioGuidanceVoice {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxAudioGuidanceVoice>;
              public speak(voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions, $completion: any): any;
              public getMapboxSpeechApi$libnavui_voice_release(): com.mapbox.navigation.ui.voice.api.MapboxSpeechApi;
              public constructor(mapboxSpeechApi: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi, mapboxVoiceInstructionsPlayer: com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer);
              public speakPredownloaded(voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions, $completion: any): any;
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
        export module voice {
          export module internal {
            export class MapboxVoiceInstructions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions>;
              public constructor();
              public voiceInstructions(): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State>;
              public registerObservers(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
              public voiceLanguage(): kotlinx.coroutines.flow.Flow<string>;
              public unregisterObservers(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
            }
            export module MapboxVoiceInstructions {
              export class State {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isPlayable(): boolean; isFirst(): boolean; getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions });
                public constructor();
                public isFirst(): boolean;
                public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
                public isPlayable(): boolean;
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
        export module voice {
          export module internal {
            export class MapboxVoiceInstructionsState extends com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructionsState>;
              public isPlayable(): boolean;
              public copy(isPlayable: boolean, isFirst: boolean, voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions): com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructionsState;
              public constructor();
              public isFirst(): boolean;
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public component1(): boolean;
              public hashCode(): number;
              public component2(): boolean;
              public equals(other: any): boolean;
              public constructor(isPlayable: boolean, isFirst: boolean, voiceInstructions: com.mapbox.api.directions.v5.models.VoiceInstructions);
              public toString(): string;
              public component3(): com.mapbox.api.directions.v5.models.VoiceInstructions;
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
        export module voice {
          export module internal {
            export module impl {
              export class MapboxAudioGuidanceServices {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.impl.MapboxAudioGuidanceServices>;
                public dataStoreOwner(context: globalAndroid.content.Context): com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner;
                public configOwner(context: globalAndroid.content.Context): com.mapbox.navigation.ui.utils.internal.configuration.NavigationConfigOwner;
                public getVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
                public constructor();
                public mapboxSpeechApi(accessToken: com.mapbox.navigation.core.MapboxNavigation, this_: string, mapboxNavigation: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.api.MapboxSpeechApi;
                public getOrUpdateMapboxVoiceInstructionsPlayer($this$getOrUpdateMapboxVoiceInstructionsPlayer_u24lambda_u2d0: com.mapbox.navigation.core.MapboxNavigation, param1: string): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
                public mapboxVoiceInstructions(): com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions;
                public mapboxAudioGuidanceVoice(mapboxVoiceInstructionsPlayer: com.mapbox.navigation.core.MapboxNavigation, this_: string, mapboxNavigation: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.internal.MapboxAudioGuidanceVoice;
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
        export module voice {
          export module internal {
            export module ui {
              export class AudioComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>; isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>; mute(): void; unMute(): void });
                public constructor();
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public mute(): void;
                public unMute(): void;
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
        export module voice {
          export module internal {
            export module ui {
              export class AudioGuidanceButtonComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.AudioGuidanceButtonComponent>;
                public onAttached(receiver$iv: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor(audioGuidanceButton: com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton, contractProvider: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract>);
                public onDetached(mapboxNavigation: com.mapbox.navigation.core.MapboxNavigation): void;
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
        export module voice {
          export module internal {
            export module ui {
              export class MapboxAudioComponentContract extends com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.MapboxAudioComponentContract>;
                public constructor(it: kotlinx.coroutines.CoroutineScope, $i$f$unsafeFlow: com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance);
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public mute(): void;
                public unMute(): void;
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
        export module voice {
          export module model {
            export class AudioFocusOwner {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.AudioFocusOwner>;
              public static MediaPlayer: com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static TextToSpeech: com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static valueOf(value: string): com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static values(): androidNative.Array<com.mapbox.navigation.ui.voice.model.AudioFocusOwner>;
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
        export module voice {
          export module model {
            export class SpeechAnnouncement {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public getSsmlAnnouncement(): string;
              public toBuilder(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
              public hashCode(): number;
              public getAnnouncement(): string;
              public equals(other: any): boolean;
              public getFile(): java.io.File;
              public toString(): string;
            }
            export module SpeechAnnouncement {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder>;
                public build(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
                public file($this$file_u24lambda_u2d1: java.io.File): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
                public constructor(announcement: string);
                public ssmlAnnouncement($this$ssmlAnnouncement_u24lambda_u2d0: string): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
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
        export module voice {
          export module model {
            export class SpeechError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechError>;
              public getFallback(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public constructor(errorMessage: string, throwable: java.lang.Throwable, fallback: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
              public getThrowable(): java.lang.Throwable;
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
        export module voice {
          export module model {
            export class SpeechValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechValue>;
              public getAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public constructor(announcement: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
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
        export module voice {
          export module model {
            export class SpeechVolume {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechVolume>;
              public constructor(this_: number);
              public component1(): number;
              public copy(level: number): com.mapbox.navigation.ui.voice.model.SpeechVolume;
              public getLevel(): number;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
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
        export module voice {
          export module model {
            export class TypeAndAnnouncement {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
              public component2(): string;
              public copy(type: string, announcement: string): com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement;
              public hashCode(): number;
              public getAnnouncement(): string;
              public equals(other: any): boolean;
              public constructor(type: string, announcement: string);
              public toString(): string;
              public getType(): string;
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
    export module navigation {
      export module ui {
        export module voice {
          export module model {
            export abstract class VoiceState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState>;
            }
            export module VoiceState {
              export class VoiceError extends com.mapbox.navigation.ui.voice.model.VoiceState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState.VoiceError>;
                public component1(): string;
                public toString(): string;
                public constructor(exception: string);
                public copy(exception: string): com.mapbox.navigation.ui.voice.model.VoiceState.VoiceError;
                public getException(): string;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export class VoiceFile extends com.mapbox.navigation.ui.voice.model.VoiceState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState.VoiceFile>;
                public copy(instructionFile: java.io.File): com.mapbox.navigation.ui.voice.model.VoiceState.VoiceFile;
                public toString(): string;
                public constructor(instructionFile: java.io.File);
                public component1(): java.io.File;
                public hashCode(): number;
                public equals(other: any): boolean;
                public getInstructionFile(): java.io.File;
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
        export module voice {
          export module options {
            export class MapboxSpeechApiOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions>;
              public getGender(): string;
              public toBuilder(): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder;
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public getBaseUri(): string;
            }
            export module MapboxSpeechApiOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder>;
                public constructor();
                public gender($this$gender_u24lambda_u2d1: string): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder;
                public build(): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions;
                public baseUri($this$baseUri_u24lambda_u2d0: string): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder;
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
        export module voice {
          export module options {
            export class VoiceGender {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceGender>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.options.VoiceGender;
              public static MALE: string = 'male';
              public static FEMALE: string = 'female';
            }
            export module VoiceGender {
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceGender.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.voice.options.VoiceGender$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module ui {
        export module voice {
          export module options {
            export class VoiceInstructionsPlayerOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions>;
              public getTtsStreamType(): number;
              public getStreamType(): number;
              public getUsage(): number;
              public hashCode(): number;
              public getUseLegacyApi(): boolean;
              public equals(other: any): boolean;
              public getAbandonFocusDelay(): number;
              public getFocusGain(): number;
              public toString(): string;
              public getContentType(): number;
              public toBuilder(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
              public getCheckIsLanguageAvailable(): boolean;
            }
            export module VoiceInstructionsPlayerOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder>;
                public ttsStreamType($this$ttsStreamType_u24lambda_u2d2: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public build(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public focusGain($this$focusGain_u24lambda_u2d0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public useLegacyApi($this$useLegacyApi_u24lambda_u2d5: boolean): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public constructor();
                public streamType($this$streamType_u24lambda_u2d1: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public checkIsLanguageAvailable($this$checkIsLanguageAvailable_u24lambda_u2d6: boolean): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public abandonFocusDelay($this$abandonFocusDelay_u24lambda_u2d7: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public usage($this$usage_u24lambda_u2d3: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public contentType($this$contentType_u24lambda_u2d4: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
              }
              export module Builder {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder.Companion>;
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
        export module voice {
          export module view {
            export class MapboxAudioGuidanceButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton>;
              public setMuteText(param0: string): void;
              public muteAndExtend(): void;
              public updateStyle($this$updateStyle_u24lambda_u2d1: number): void;
              public getIconImage(): androidx.appcompat.widget.AppCompatImageView;
              public setUnmuteText(param0: string): void;
              public unmute(): void;
              public getContainerView(): androidx.constraintlayout.widget.ConstraintLayout;
              public mute(): void;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public muteAndExtend(duration: number): void;
              public getUnmuteIconResId(): number;
              public unmuteAndExtend(duration: number): void;
              public getTextView(): androidx.appcompat.widget.AppCompatTextView;
              public getMuteText(): string;
              public constructor($this$_init__u24lambda_u2d0: globalAndroid.content.Context, this_: globalAndroid.util.AttributeSet, context: number, attrs: number);
              public getMuteIconResId(): number;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public setMuteIconResId(param0: number): void;
              public getUnmuteText(): string;
              public setUnmuteIconResId(param0: number): void;
              public unmuteAndExtend(): void;
              public constructor(context: globalAndroid.content.Context);
            }
            export module MapboxAudioGuidanceButton {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton.Companion>;
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
        export module voice {
          export module view {
            export class MapboxSoundButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxSoundButton>;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
              public mute(): boolean;
              public unmute(): boolean;
              public updateStyle(this_: number): void;
              public muteAndExtend(duration: number): boolean;
              public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
              public muteAndExtend(it: number, this_: string): boolean;
              public unmuteAndExtend(it: number, this_: string): boolean;
              public unmuteAndExtend(duration: number): boolean;
              public constructor(context: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
