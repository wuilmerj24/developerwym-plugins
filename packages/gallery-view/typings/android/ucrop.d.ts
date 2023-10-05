declare module com {
  export module yalantis {
    export module ucrop {
      export class BuildConfig {
        public static class: java.lang.Class<com.yalantis.ucrop.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCrop {
        public static class: java.lang.Class<com.yalantis.ucrop.UCrop>;
        public static REQUEST_CROP: number;
        public static RESULT_ERROR: number;
        public static MIN_SIZE: number;
        public static EXTRA_INPUT_URI: string;
        public static EXTRA_OUTPUT_URI: string;
        public static EXTRA_OUTPUT_CROP_ASPECT_RATIO: string;
        public static EXTRA_OUTPUT_IMAGE_WIDTH: string;
        public static EXTRA_OUTPUT_IMAGE_HEIGHT: string;
        public static EXTRA_OUTPUT_OFFSET_X: string;
        public static EXTRA_OUTPUT_OFFSET_Y: string;
        public static EXTRA_ERROR: string;
        public static EXTRA_ASPECT_RATIO_X: string;
        public static EXTRA_ASPECT_RATIO_Y: string;
        public static EXTRA_MAX_SIZE_X: string;
        public static EXTRA_MAX_SIZE_Y: string;
        public start(param0: globalAndroid.app.Activity, param1: number): void;
        public useSourceImageAspectRatio(): com.yalantis.ucrop.UCrop;
        public withMaxResultSize(param0: number, param1: number): com.yalantis.ucrop.UCrop;
        public getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
        public start(param0: globalAndroid.content.Context, param1: globalAndroid.app.Fragment, param2: number): void;
        public static getOutputImageWidth(param0: globalAndroid.content.Intent): number;
        public getFragment(): com.yalantis.ucrop.UCropFragment;
        public withOptions(param0: com.yalantis.ucrop.UCrop.Options): com.yalantis.ucrop.UCrop;
        public start(param0: globalAndroid.content.Context, param1: globalAndroid.app.Fragment): void;
        public start(param0: globalAndroid.content.Context, param1: androidx.fragment.app.Fragment, param2: number): void;
        public static getOutputImageHeight(param0: globalAndroid.content.Intent): number;
        public start(param0: globalAndroid.app.Activity): void;
        public static of(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri): com.yalantis.ucrop.UCrop;
        public withAspectRatio(param0: number, param1: number): com.yalantis.ucrop.UCrop;
        public static getOutputCropAspectRatio(param0: globalAndroid.content.Intent): number;
        public start(param0: globalAndroid.content.Context, param1: androidx.fragment.app.Fragment): void;
        public static getOutput(param0: globalAndroid.content.Intent): globalAndroid.net.Uri;
        public static getError(param0: globalAndroid.content.Intent): java.lang.Throwable;
        public getFragment(param0: globalAndroid.os.Bundle): com.yalantis.ucrop.UCropFragment;
      }
      export module UCrop {
        export class Options {
          public static class: java.lang.Class<com.yalantis.ucrop.UCrop.Options>;
          public static EXTRA_COMPRESSION_FORMAT_NAME: string;
          public static EXTRA_COMPRESSION_QUALITY: string;
          public static EXTRA_ALLOWED_GESTURES: string;
          public static EXTRA_MAX_BITMAP_SIZE: string;
          public static EXTRA_MAX_SCALE_MULTIPLIER: string;
          public static EXTRA_IMAGE_TO_CROP_BOUNDS_ANIM_DURATION: string;
          public static EXTRA_DIMMED_LAYER_COLOR: string;
          public static EXTRA_CIRCLE_DIMMED_LAYER: string;
          public static EXTRA_SHOW_CROP_FRAME: string;
          public static EXTRA_CROP_FRAME_COLOR: string;
          public static EXTRA_CROP_FRAME_STROKE_WIDTH: string;
          public static EXTRA_SHOW_CROP_GRID: string;
          public static EXTRA_CROP_GRID_ROW_COUNT: string;
          public static EXTRA_CROP_GRID_COLUMN_COUNT: string;
          public static EXTRA_CROP_GRID_COLOR: string;
          public static EXTRA_CROP_GRID_CORNER_COLOR: string;
          public static EXTRA_CROP_GRID_STROKE_WIDTH: string;
          public static EXTRA_TOOL_BAR_COLOR: string;
          public static EXTRA_STATUS_BAR_COLOR: string;
          public static EXTRA_UCROP_COLOR_CONTROLS_WIDGET_ACTIVE: string;
          public static EXTRA_UCROP_WIDGET_COLOR_TOOLBAR: string;
          public static EXTRA_UCROP_TITLE_TEXT_TOOLBAR: string;
          public static EXTRA_UCROP_WIDGET_CANCEL_DRAWABLE: string;
          public static EXTRA_UCROP_WIDGET_CROP_DRAWABLE: string;
          public static EXTRA_UCROP_LOGO_COLOR: string;
          public static EXTRA_HIDE_BOTTOM_CONTROLS: string;
          public static EXTRA_FREE_STYLE_CROP: string;
          public static EXTRA_ASPECT_RATIO_SELECTED_BY_DEFAULT: string;
          public static EXTRA_ASPECT_RATIO_OPTIONS: string;
          public static EXTRA_UCROP_ROOT_VIEW_BACKGROUND_COLOR: string;
          public static EXTRA_BRIGHTNESS: string;
          public static EXTRA_CONTRAST: string;
          public static EXTRA_SATURATION: string;
          public static EXTRA_SHARPNESS: string;
          public setAllowedGestures(param0: number, param1: number, param2: number): void;
          public setSaturationEnabled(param0: boolean): void;
          public getOptionBundle(): globalAndroid.os.Bundle;
          public setImageToCropBoundsAnimDuration(param0: number): void;
          public setSharpnessEnabled(param0: boolean): void;
          public setMaxBitmapSize(param0: number): void;
          public setToolbarColor(param0: number): void;
          public setToolbarCancelDrawable(param0: number): void;
          public setCropGridColumnCount(param0: number): void;
          public setLogoColor(param0: number): void;
          public setFreeStyleCropEnabled(param0: boolean): void;
          public setActiveControlsWidgetColor(param0: number): void;
          public constructor();
          public setCircleDimmedLayer(param0: boolean): void;
          public setDimmedLayerColor(param0: number): void;
          public setCropGridRowCount(param0: number): void;
          public setCropGridStrokeWidth(param0: number): void;
          public setAspectRatioOptions(param0: number, param1: androidNative.Array<com.yalantis.ucrop.model.AspectRatio>): void;
          public setCropGridCornerColor(param0: number): void;
          public setToolbarCropDrawable(param0: number): void;
          public setBrightnessEnabled(param0: boolean): void;
          public setCropFrameColor(param0: number): void;
          public setRootViewBackgroundColor(param0: number): void;
          public setCompressionQuality(param0: number): void;
          public setCropGridColor(param0: number): void;
          public setStatusBarColor(param0: number): void;
          public setToolbarTitle(param0: string): void;
          public useSourceImageAspectRatio(): void;
          public setCompressionFormat(param0: globalAndroid.graphics.Bitmap.CompressFormat): void;
          public setCropFrameStrokeWidth(param0: number): void;
          public setToolbarWidgetColor(param0: number): void;
          public setContrastEnabled(param0: boolean): void;
          public withAspectRatio(param0: number, param1: number): void;
          public setHideBottomControls(param0: boolean): void;
          public setShowCropGrid(param0: boolean): void;
          public withMaxResultSize(param0: number, param1: number): void;
          public setShowCropFrame(param0: boolean): void;
          public setMaxScaleMultiplier(param0: number): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCropActivity {
        public static class: java.lang.Class<com.yalantis.ucrop.UCropActivity>;
        public static DEFAULT_COMPRESS_QUALITY: number;
        public static DEFAULT_COMPRESS_FORMAT: globalAndroid.graphics.Bitmap.CompressFormat;
        public static NONE: number;
        public static SCALE: number;
        public static ROTATE: number;
        public static ALL: number;
        public setResultUri(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: number, param4: number, param5: number): void;
        public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public setResultError(param0: java.lang.Throwable): void;
        public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
        public onStop(): void;
        public cropAndSaveImage(): void;
        public constructor();
        public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
      }
      export module UCropActivity {
        export class GestureTypes {
          public static class: java.lang.Class<com.yalantis.ucrop.UCropActivity.GestureTypes>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.UCropActivity$GestureTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCropFragment {
        public static class: java.lang.Class<com.yalantis.ucrop.UCropFragment>;
        public static DEFAULT_COMPRESS_QUALITY: number;
        public static DEFAULT_COMPRESS_FORMAT: globalAndroid.graphics.Bitmap.CompressFormat;
        public static NONE: number;
        public static SCALE: number;
        public static ROTATE: number;
        public static ALL: number;
        public static TAG: string;
        public onAttach(param0: globalAndroid.content.Context): void;
        public setCallback(param0: com.yalantis.ucrop.UCropFragmentCallback): void;
        public getResult(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: number, param4: number, param5: number): com.yalantis.ucrop.UCropFragment.UCropResult;
        public getError(param0: java.lang.Throwable): com.yalantis.ucrop.UCropFragment.UCropResult;
        public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
        public static newInstance(param0: globalAndroid.os.Bundle): com.yalantis.ucrop.UCropFragment;
        public cropAndSaveImage(): void;
        public setupViews(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
        public constructor();
      }
      export module UCropFragment {
        export class GestureTypes {
          public static class: java.lang.Class<com.yalantis.ucrop.UCropFragment.GestureTypes>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.UCropFragment$GestureTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class UCropResult {
          public static class: java.lang.Class<com.yalantis.ucrop.UCropFragment.UCropResult>;
          public mResultCode: number;
          public mResultData: globalAndroid.content.Intent;
          public constructor(param0: com.yalantis.ucrop.UCropFragment, param1: number, param2: globalAndroid.content.Intent);
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCropFragmentCallback {
        public static class: java.lang.Class<com.yalantis.ucrop.UCropFragmentCallback>;
        /**
         * Constructs a new instance of the com.yalantis.ucrop.UCropFragmentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { loadingProgress(param0: boolean): void; onCropFinish(param0: com.yalantis.ucrop.UCropFragment.UCropResult): void });
        public constructor();
        public loadingProgress(param0: boolean): void;
        public onCropFinish(param0: com.yalantis.ucrop.UCropFragment.UCropResult): void;
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCropHttpClientStore {
        public static class: java.lang.Class<com.yalantis.ucrop.UCropHttpClientStore>;
        public static INSTANCE: com.yalantis.ucrop.UCropHttpClientStore;
        public setClient(param0: okhttp3.OkHttpClient): void;
        public getClient(): okhttp3.OkHttpClient;
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module callback {
        export class BitmapCropCallback {
          public static class: java.lang.Class<com.yalantis.ucrop.callback.BitmapCropCallback>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.callback.BitmapCropCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onBitmapCropped(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: number, param4: number): void; onCropFailure(param0: java.lang.Throwable): void });
          public constructor();
          public onBitmapCropped(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: number, param4: number): void;
          public onCropFailure(param0: java.lang.Throwable): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module callback {
        export class BitmapLoadCallback {
          public static class: java.lang.Class<com.yalantis.ucrop.callback.BitmapLoadCallback>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.callback.BitmapLoadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.yalantis.ucrop.model.ExifInfo, param2: string, param3: string): void; onFailure(param0: java.lang.Exception): void });
          public constructor();
          public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.yalantis.ucrop.model.ExifInfo, param2: string, param3: string): void;
          public onFailure(param0: java.lang.Exception): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module callback {
        export class CropBoundsChangeListener {
          public static class: java.lang.Class<com.yalantis.ucrop.callback.CropBoundsChangeListener>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.callback.CropBoundsChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropAspectRatioChanged(param0: number): void });
          public constructor();
          public onCropAspectRatioChanged(param0: number): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module callback {
        export class OverlayViewChangeListener {
          public static class: java.lang.Class<com.yalantis.ucrop.callback.OverlayViewChangeListener>;
          /**
           * Constructs a new instance of the com.yalantis.ucrop.callback.OverlayViewChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropRectUpdated(param0: globalAndroid.graphics.RectF): void });
          public constructor();
          public onCropRectUpdated(param0: globalAndroid.graphics.RectF): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module model {
        export class AspectRatio {
          public static class: java.lang.Class<com.yalantis.ucrop.model.AspectRatio>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.yalantis.ucrop.model.AspectRatio>;
          public constructor(param0: globalAndroid.os.Parcel);
          public getAspectRatioTitle(): string;
          public describeContents(): number;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public constructor(param0: string, param1: number, param2: number);
          public getAspectRatioX(): number;
          public getAspectRatioY(): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module model {
        export class CropParameters {
          public static class: java.lang.Class<com.yalantis.ucrop.model.CropParameters>;
          public getExifInfo(): com.yalantis.ucrop.model.ExifInfo;
          public getContrast(): number;
          public getCompressQuality(): number;
          public getImageOutputPath(): string;
          public getImageInputPath(): string;
          public getMaxResultImageSizeY(): number;
          public getSaturation(): number;
          public getCompressFormat(): globalAndroid.graphics.Bitmap.CompressFormat;
          public getSharpness(): number;
          public constructor(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.CompressFormat, param3: number, param4: string, param5: string, param6: com.yalantis.ucrop.model.ExifInfo, param7: number, param8: number, param9: number, param10: number);
          public getMaxResultImageSizeX(): number;
          public getBrightness(): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module model {
        export class ExifInfo {
          public static class: java.lang.Class<com.yalantis.ucrop.model.ExifInfo>;
          public equals(param0: any): boolean;
          public getExifDegrees(): number;
          public constructor(param0: number, param1: number, param2: number);
          public setExifDegrees(param0: number): void;
          public getExifTranslation(): number;
          public setExifOrientation(param0: number): void;
          public getExifOrientation(): number;
          public hashCode(): number;
          public setExifTranslation(param0: number): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module model {
        export class ImageState {
          public static class: java.lang.Class<com.yalantis.ucrop.model.ImageState>;
          public getCurrentImageRect(): globalAndroid.graphics.RectF;
          public getCurrentScale(): number;
          public getCurrentAngle(): number;
          public constructor(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.RectF, param2: number, param3: number);
          public getCropRect(): globalAndroid.graphics.RectF;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module task {
        export class BitmapCropTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Throwable> {
          public static class: java.lang.Class<com.yalantis.ucrop.task.BitmapCropTask>;
          public onPostExecute(param0: java.lang.Throwable): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: com.yalantis.ucrop.model.ImageState, param3: com.yalantis.ucrop.model.CropParameters, param4: com.yalantis.ucrop.callback.BitmapCropCallback);
          public static cropCImg(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): boolean;
          public doInBackground(param0: androidNative.Array<java.lang.Void>): java.lang.Throwable;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module task {
        export class BitmapLoadTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult> {
          public static class: java.lang.Class<com.yalantis.ucrop.task.BitmapLoadTask>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: globalAndroid.net.Uri, param3: number, param4: number, param5: com.yalantis.ucrop.callback.BitmapLoadCallback);
          public doInBackground(param0: androidNative.Array<java.lang.Void>): com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult;
          public onPostExecute(param0: com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult): void;
        }
        export module BitmapLoadTask {
          export class BitmapWorkerResult {
            public static class: java.lang.Class<com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult>;
            public constructor(param0: java.lang.Exception);
            public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.yalantis.ucrop.model.ExifInfo);
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class BitmapLoadUtils {
          public static class: java.lang.Class<com.yalantis.ucrop.util.BitmapLoadUtils>;
          public static decodeBitmapInBackground(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: globalAndroid.net.Uri, param3: number, param4: number, param5: com.yalantis.ucrop.callback.BitmapLoadCallback): void;
          public static close(param0: java.io.Closeable): void;
          public static transformBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Matrix): globalAndroid.graphics.Bitmap;
          public static exifToTranslation(param0: number): number;
          public constructor();
          public static calculateInSampleSize(param0: globalAndroid.graphics.BitmapFactory.Options, param1: number, param2: number): number;
          public static exifToDegrees(param0: number): number;
          public static calculateMaxBitmapSize(param0: globalAndroid.content.Context): number;
          public static getExifOrientation(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class ColorFilterGenerator {
          public static class: java.lang.Class<com.yalantis.ucrop.util.ColorFilterGenerator>;
          public static adjustHue(param0: globalAndroid.graphics.ColorMatrix, param1: number): void;
          public static adjustSaturation(param0: globalAndroid.graphics.ColorMatrix, param1: number): number;
          public constructor();
          public static adjustBrightness(param0: globalAndroid.graphics.ColorMatrix, param1: number): number;
          public static adjustContrast(param0: globalAndroid.graphics.ColorMatrix, param1: number): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class CubicEasing {
          public static class: java.lang.Class<com.yalantis.ucrop.util.CubicEasing>;
          public static easeInOut(param0: number, param1: number, param2: number, param3: number): number;
          public constructor();
          public static easeIn(param0: number, param1: number, param2: number, param3: number): number;
          public static easeOut(param0: number, param1: number, param2: number, param3: number): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class EglUtils {
          public static class: java.lang.Class<com.yalantis.ucrop.util.EglUtils>;
          public static getMaxTextureSize(): number;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class FastBitmapDrawable {
          public static class: java.lang.Class<com.yalantis.ucrop.util.FastBitmapDrawable>;
          public getAlpha(): number;
          public getMinimumWidth(): number;
          public constructor(param0: globalAndroid.graphics.Bitmap);
          public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
          public getIntrinsicHeight(): number;
          public getIntrinsicWidth(): number;
          public setAlpha(param0: number): void;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public setFilterBitmap(param0: boolean): void;
          public draw(param0: globalAndroid.graphics.Canvas): void;
          public getMinimumHeight(): number;
          public getOpacity(): number;
          public setBitmap(param0: globalAndroid.graphics.Bitmap): void;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class FileUtils {
          public static class: java.lang.Class<com.yalantis.ucrop.util.FileUtils>;
          public static isDownloadsDocument(param0: globalAndroid.net.Uri): boolean;
          public static isExternalStorageDocument(param0: globalAndroid.net.Uri): boolean;
          public static copyFile(param0: string, param1: string): void;
          public static isMediaDocument(param0: globalAndroid.net.Uri): boolean;
          public static getPath(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
          public static isGooglePhotosUri(param0: globalAndroid.net.Uri): boolean;
          public static getDataColumn(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string, param3: androidNative.Array<string>): string;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class ImageHeaderParser {
          public static class: java.lang.Class<com.yalantis.ucrop.util.ImageHeaderParser>;
          public static UNKNOWN_ORIENTATION: number;
          public constructor(param0: java.io.InputStream);
          public getOrientation(): number;
          public static copyExif(param0: androidx.exifinterface.media.ExifInterface, param1: number, param2: number, param3: string): void;
        }
        export module ImageHeaderParser {
          export class RandomAccessReader {
            public static class: java.lang.Class<com.yalantis.ucrop.util.ImageHeaderParser.RandomAccessReader>;
            public order(param0: java.nio.ByteOrder): void;
            public length(): number;
            public getInt32(param0: number): number;
            public constructor(param0: androidNative.Array<number>, param1: number);
            public getInt16(param0: number): number;
          }
          export class Reader {
            public static class: java.lang.Class<com.yalantis.ucrop.util.ImageHeaderParser.Reader>;
            /**
             * Constructs a new instance of the com.yalantis.ucrop.util.ImageHeaderParser$Reader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getUInt16(): number; getUInt8(): number; skip(param0: number): number; read(param0: androidNative.Array<number>, param1: number): number });
            public constructor();
            public skip(param0: number): number;
            public getUInt16(): number;
            public read(param0: androidNative.Array<number>, param1: number): number;
            public getUInt8(): number;
          }
          export class StreamReader extends com.yalantis.ucrop.util.ImageHeaderParser.Reader {
            public static class: java.lang.Class<com.yalantis.ucrop.util.ImageHeaderParser.StreamReader>;
            public skip(param0: number): number;
            public constructor(param0: java.io.InputStream);
            public getUInt16(): number;
            public read(param0: androidNative.Array<number>, param1: number): number;
            public getUInt8(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class RectUtils {
          public static class: java.lang.Class<com.yalantis.ucrop.util.RectUtils>;
          public static getCenterFromRect(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
          public static getCornersFromRect(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
          public constructor();
          public static getRectSidesFromCorners(param0: androidNative.Array<number>): androidNative.Array<number>;
          public static trapToRect(param0: androidNative.Array<number>): globalAndroid.graphics.RectF;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class RotationGestureDetector {
          public static class: java.lang.Class<com.yalantis.ucrop.util.RotationGestureDetector>;
          public constructor(param0: com.yalantis.ucrop.util.RotationGestureDetector.OnRotationGestureListener);
          public getAngle(): number;
          public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        }
        export module RotationGestureDetector {
          export class OnRotationGestureListener {
            public static class: java.lang.Class<com.yalantis.ucrop.util.RotationGestureDetector.OnRotationGestureListener>;
            /**
             * Constructs a new instance of the com.yalantis.ucrop.util.RotationGestureDetector$OnRotationGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean });
            public constructor();
            public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
          }
          export class SimpleOnRotationGestureListener extends com.yalantis.ucrop.util.RotationGestureDetector.OnRotationGestureListener {
            public static class: java.lang.Class<com.yalantis.ucrop.util.RotationGestureDetector.SimpleOnRotationGestureListener>;
            public constructor();
            public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module util {
        export class SelectedStateListDrawable {
          public static class: java.lang.Class<com.yalantis.ucrop.util.SelectedStateListDrawable>;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
          public isStateful(): boolean;
          public onStateChange(param0: androidNative.Array<number>): boolean;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export class ControlLayout {
          public static class: java.lang.Class<com.yalantis.ucrop.view.ControlLayout>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: globalAndroid.content.Context);
          public onMeasure(param0: number, param1: number): void;
          public addView(param0: globalAndroid.view.View, param1: number): void;
          public addView(param0: globalAndroid.view.View): void;
          public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
          public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export class CropImageView extends com.yalantis.ucrop.view.TransformImageView {
          public static class: java.lang.Class<com.yalantis.ucrop.view.CropImageView>;
          public static DEFAULT_MAX_BITMAP_SIZE: number;
          public static DEFAULT_IMAGE_TO_CROP_BOUNDS_ANIM_DURATION: number;
          public static DEFAULT_MAX_SCALE_MULTIPLIER: number;
          public static SOURCE_IMAGE_ASPECT_RATIO: number;
          public static DEFAULT_ASPECT_RATIO: number;
          public zoomInImage(param0: number, param1: number, param2: number): void;
          public postRotate(param0: number, param1: number, param2: number): void;
          public isImageWrapCropBounds(param0: androidNative.Array<number>): boolean;
          public getCropBoundsChangeListener(): com.yalantis.ucrop.callback.CropBoundsChangeListener;
          public setMaxResultImageSizeX(param0: number): void;
          public processStyledAttributes(param0: globalAndroid.content.res.TypedArray): void;
          public zoomOutImage(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public cancelAllAnimations(): void;
          public getMinScale(): number;
          public getTargetAspectRatio(): number;
          public zoomImageToPosition(param0: number, param1: number, param2: number, param3: number): void;
          public setTargetAspectRatio(param0: number): void;
          public postScale(param0: number, param1: number, param2: number): void;
          public postRotate(param0: number): void;
          public cropAndSaveImage(param0: globalAndroid.graphics.Bitmap.CompressFormat, param1: number, param2: com.yalantis.ucrop.callback.BitmapCropCallback): void;
          public setImageToWrapCropBoundsAnimDuration(param0: number): void;
          public onImageLaidOut(): void;
          public setCropBoundsChangeListener(param0: com.yalantis.ucrop.callback.CropBoundsChangeListener): void;
          public isImageWrapCropBounds(): boolean;
          public setMaxResultImageSizeY(param0: number): void;
          public setImageToWrapCropBounds(param0: boolean): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public constructor(param0: globalAndroid.content.Context);
          public getMaxScale(): number;
          public zoomInImage(param0: number): void;
          public zoomOutImage(param0: number, param1: number, param2: number): void;
          public setImageToWrapCropBounds(): void;
          public setMaxScaleMultiplier(param0: number): void;
          public setCropRect(param0: globalAndroid.graphics.RectF): void;
        }
        export module CropImageView {
          export class WrapCropBoundsRunnable {
            public static class: java.lang.Class<com.yalantis.ucrop.view.CropImageView.WrapCropBoundsRunnable>;
            public run(): void;
            public constructor(param0: com.yalantis.ucrop.view.CropImageView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean);
          }
          export class ZoomImageToPosition {
            public static class: java.lang.Class<com.yalantis.ucrop.view.CropImageView.ZoomImageToPosition>;
            public run(): void;
            public constructor(param0: com.yalantis.ucrop.view.CropImageView, param1: number, param2: number, param3: number, param4: number, param5: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export class GestureCropImageView extends com.yalantis.ucrop.view.CropImageView {
          public static class: java.lang.Class<com.yalantis.ucrop.view.GestureCropImageView>;
          public getDoubleTapScaleSteps(): number;
          public isScaleEnabled(): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public init(): void;
          public setDoubleTapScaleSteps(param0: number): void;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public isRotateEnabled(): boolean;
          public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public setGestureEnabled(param0: boolean): void;
          public setScaleEnabled(param0: boolean): void;
          public setRotateEnabled(param0: boolean): void;
          public isGestureEnabled(): boolean;
          public getDoubleTapTargetScale(): number;
        }
        export module GestureCropImageView {
          export class GestureListener {
            public static class: java.lang.Class<com.yalantis.ucrop.view.GestureCropImageView.GestureListener>;
            public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
            public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
          }
          export class RotateListener extends com.yalantis.ucrop.util.RotationGestureDetector.SimpleOnRotationGestureListener {
            public static class: java.lang.Class<com.yalantis.ucrop.view.GestureCropImageView.RotateListener>;
            public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
          }
          export class ScaleListener {
            public static class: java.lang.Class<com.yalantis.ucrop.view.GestureCropImageView.ScaleListener>;
            public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export class OverlayView {
          public static class: java.lang.Class<com.yalantis.ucrop.view.OverlayView>;
          public static FREESTYLE_CROP_MODE_DISABLE: number;
          public static FREESTYLE_CROP_MODE_ENABLE: number;
          public static FREESTYLE_CROP_MODE_ENABLE_WITH_PASS_THROUGH: number;
          public static DEFAULT_SHOW_CROP_FRAME: boolean;
          public static DEFAULT_SHOW_CROP_GRID: boolean;
          public static DEFAULT_CIRCLE_DIMMED_LAYER: boolean;
          public static DEFAULT_FREESTYLE_CROP_MODE: number;
          public static DEFAULT_CROP_GRID_ROW_COUNT: number;
          public static DEFAULT_CROP_GRID_COLUMN_COUNT: number;
          public mThisWidth: number;
          public mThisHeight: number;
          public mCropGridCorners: androidNative.Array<number>;
          public mCropGridCenter: androidNative.Array<number>;
          public setDimmedColor(param0: number): void;
          public processStyledAttributes(param0: globalAndroid.content.res.TypedArray): void;
          public setCropGridColumnCount(param0: number): void;
          public drawCropGrid(param0: globalAndroid.graphics.Canvas): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public getOverlayViewChangeListener(): com.yalantis.ucrop.callback.OverlayViewChangeListener;
          public setTargetAspectRatio(param0: number): void;
          public setCircleDimmedLayer(param0: boolean): void;
          public setCropGridRowCount(param0: number): void;
          public setCropGridStrokeWidth(param0: number): void;
          public setCropGridCornerColor(param0: number): void;
          public setCropFrameColor(param0: number): void;
          public onDraw(param0: globalAndroid.graphics.Canvas): void;
          public getCropViewRect(): globalAndroid.graphics.RectF;
          public setCropGridColor(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public init(): void;
          /** @deprecated */
          public setFreestyleCropEnabled(param0: boolean): void;
          public setCropFrameStrokeWidth(param0: number): void;
          public getFreestyleCropMode(): number;
          public constructor(param0: globalAndroid.content.Context);
          public setFreestyleCropMode(param0: number): void;
          /** @deprecated */
          public isFreestyleCropEnabled(): boolean;
          public setShowCropGrid(param0: boolean): void;
          public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
          public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public setShowCropFrame(param0: boolean): void;
          public setupCropBounds(): void;
          public drawDimmedLayer(param0: globalAndroid.graphics.Canvas): void;
          public setOverlayViewChangeListener(param0: com.yalantis.ucrop.callback.OverlayViewChangeListener): void;
        }
        export module OverlayView {
          export class FreestyleMode {
            public static class: java.lang.Class<com.yalantis.ucrop.view.OverlayView.FreestyleMode>;
            /**
             * Constructs a new instance of the com.yalantis.ucrop.view.OverlayView$FreestyleMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  export module yalantis {
    export module ucrop {
      export module view {
        export class TransformImageView {
          public static class: java.lang.Class<com.yalantis.ucrop.view.TransformImageView>;
          public mCurrentImageCorners: androidNative.Array<number>;
          public mCurrentImageCenter: androidNative.Array<number>;
          public mCurrentImageMatrix: globalAndroid.graphics.Matrix;
          public mThisWidth: number;
          public mThisHeight: number;
          public mTransformImageListener: com.yalantis.ucrop.view.TransformImageView.TransformImageListener;
          public mBitmapDecoded: boolean;
          public mBitmapLaidOut: boolean;
          public getMatrixScale(param0: globalAndroid.graphics.Matrix): number;
          public getMaxBitmapSize(): number;
          public postRotate(param0: number, param1: number, param2: number): void;
          public getViewBitmap(): globalAndroid.graphics.Bitmap;
          public setMaxBitmapSize(param0: number): void;
          public setTransformImageListener(param0: com.yalantis.ucrop.view.TransformImageView.TransformImageListener): void;
          public getCurrentBrightness(): number;
          public postTranslate(param0: number, param1: number): void;
          public postSaturation(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public setImageMatrix(param0: globalAndroid.graphics.Matrix): void;
          public getExifInfo(): com.yalantis.ucrop.model.ExifInfo;
          public getCurrentSharpness(): number;
          public getImageInputPath(): string;
          public getMatrixAngle(param0: globalAndroid.graphics.Matrix): number;
          public printMatrix(param0: string, param1: globalAndroid.graphics.Matrix): void;
          public postScale(param0: number, param1: number, param2: number): void;
          public postBrightness(param0: number): void;
          public postContrast(param0: number): void;
          public onImageLaidOut(): void;
          public setImageUri(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri): void;
          public getCurrentScale(): number;
          public getImageOutputPath(): string;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public init(): void;
          public constructor(param0: globalAndroid.content.Context);
          public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
          public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
          public postSharpness(param0: number): void;
          public getCurrentSaturation(): number;
          public getMatrixValue(param0: globalAndroid.graphics.Matrix, param1: number): number;
          public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
          public getCurrentAngle(): number;
          public getCurrentContrast(): number;
        }
        export module TransformImageView {
          export class SharpnessScriptTask extends globalAndroid.os.AsyncTask<java.lang.Float, java.lang.Void, java.lang.Boolean> {
            public static class: java.lang.Class<com.yalantis.ucrop.view.TransformImageView.SharpnessScriptTask>;
            public onPostExecute(param0: java.lang.Boolean): void;
            public onCancelled(param0: java.lang.Boolean): void;
            public doInBackground(param0: androidNative.Array<java.lang.Float>): java.lang.Boolean;
          }
          export class TransformImageListener {
            public static class: java.lang.Class<com.yalantis.ucrop.view.TransformImageView.TransformImageListener>;
            /**
             * Constructs a new instance of the com.yalantis.ucrop.view.TransformImageView$TransformImageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onLoadComplete(): void; onLoadFailure(param0: java.lang.Exception): void; onRotate(param0: number): void; onScale(param0: number): void; onBrightness(param0: number): void; onContrast(param0: number): void; onSaturation(param0: number): void; onSharpness(param0: number): void });
            public constructor();
            public onContrast(param0: number): void;
            public onLoadFailure(param0: java.lang.Exception): void;
            public onRotate(param0: number): void;
            public onBrightness(param0: number): void;
            public onSaturation(param0: number): void;
            public onScale(param0: number): void;
            public onLoadComplete(): void;
            public onSharpness(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export class UCropView {
          public static class: java.lang.Class<com.yalantis.ucrop.view.UCropView>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public shouldDelayChildPressedState(): boolean;
          public getCropImageView(): com.yalantis.ucrop.view.GestureCropImageView;
          public resetCropImageView(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public getOverlayView(): com.yalantis.ucrop.view.OverlayView;
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export module widget {
          export class AspectRatioTextView {
            public static class: java.lang.Class<com.yalantis.ucrop.view.widget.AspectRatioTextView>;
            public setActiveColor(param0: number): void;
            public getAspectRatio(param0: boolean): number;
            public constructor(param0: globalAndroid.content.Context);
            public setAspectRatio(param0: com.yalantis.ucrop.model.AspectRatio): void;
            public onDraw(param0: globalAndroid.graphics.Canvas): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module yalantis {
    export module ucrop {
      export module view {
        export module widget {
          export class HorizontalProgressWheelView {
            public static class: java.lang.Class<com.yalantis.ucrop.view.widget.HorizontalProgressWheelView>;
            public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public setScrollingListener(param0: com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.ScrollingListener): void;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
            public setMiddleLineColor(param0: number): void;
            public onDraw(param0: globalAndroid.graphics.Canvas): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
          export module HorizontalProgressWheelView {
            export class ScrollingListener {
              public static class: java.lang.Class<com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.ScrollingListener>;
              /**
               * Constructs a new instance of the com.yalantis.ucrop.view.widget.HorizontalProgressWheelView$ScrollingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onScrollStart(): void; onScroll(param0: number, param1: number): void; onScrollEnd(): void });
              public constructor();
              public onScrollStart(): void;
              public onScroll(param0: number, param1: number): void;
              public onScrollEnd(): void;
            }
          }
        }
      }
    }
  }
}
