/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module canhub {
    export module cropper {
      export class BitmapCroppingWorkerJob {
        public static class: java.lang.Class<com.canhub.cropper.BitmapCroppingWorkerJob>;
        public start(): void;
        public constructor(param0: globalAndroid.content.Context, param1: java.lang.ref.WeakReference<com.canhub.cropper.CropImageView>, param2: globalAndroid.net.Uri, param3: globalAndroid.graphics.Bitmap, param4: androidNative.Array<number>, param5: number, param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: boolean, param14: boolean, param15: com.canhub.cropper.CropImageView.RequestSizeOptions, param16: globalAndroid.graphics.Bitmap.CompressFormat, param17: number, param18: globalAndroid.net.Uri);
        public cancel(): void;
        public getCoroutineContext(): any;
      }
      export module BitmapCroppingWorkerJob {
        export class Result {
          public static class: java.lang.Class<com.canhub.cropper.BitmapCroppingWorkerJob.Result>;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.net.Uri, param2: java.lang.Exception, param3: number);
          public component2(): globalAndroid.net.Uri;
          public component3(): java.lang.Exception;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public equals(param0: any): boolean;
          public toString(): string;
          public getSampleSize(): number;
          public component4(): number;
          public copy(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.net.Uri, param2: java.lang.Exception, param3: number): com.canhub.cropper.BitmapCroppingWorkerJob.Result;
          public component1(): globalAndroid.graphics.Bitmap;
          public getError(): java.lang.Exception;
          public getUri(): globalAndroid.net.Uri;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class BitmapLoadingWorkerJob {
        public static class: java.lang.Class<com.canhub.cropper.BitmapLoadingWorkerJob>;
        public constructor(param0: globalAndroid.content.Context, param1: com.canhub.cropper.CropImageView, param2: globalAndroid.net.Uri);
        public start(): void;
        public cancel(): void;
        public getUri$cropper_release(): globalAndroid.net.Uri;
        public getCoroutineContext(): any;
      }
      export module BitmapLoadingWorkerJob {
        export class Result {
          public static class: java.lang.Class<com.canhub.cropper.BitmapLoadingWorkerJob.Result>;
          public constructor(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: boolean, param5: boolean, param6: java.lang.Exception);
          public component3(): number;
          public getFlipHorizontally(): boolean;
          public component2(): globalAndroid.graphics.Bitmap;
          public getFlipVertically(): boolean;
          public component7(): java.lang.Exception;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public component5(): boolean;
          public component6(): boolean;
          public equals(param0: any): boolean;
          public copy(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: boolean, param5: boolean, param6: java.lang.Exception): com.canhub.cropper.BitmapLoadingWorkerJob.Result;
          public toString(): string;
          public component4(): number;
          public getError(): java.lang.Exception;
          public getUri(): globalAndroid.net.Uri;
          public getLoadSampleSize(): number;
          public hashCode(): number;
          public getDegreesRotated(): number;
          public component1(): globalAndroid.net.Uri;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class BitmapUtils {
        public static class: java.lang.Class<com.canhub.cropper.BitmapUtils>;
        public static INSTANCE: com.canhub.cropper.BitmapUtils;
        public getRectTop(param0: androidNative.Array<number>): number;
        public getRectBottom(param0: androidNative.Array<number>): number;
        public cropBitmapObjectHandleOOM(param0: globalAndroid.graphics.Bitmap, param1: androidNative.Array<number>, param2: number, param3: boolean, param4: number, param5: number, param6: boolean, param7: boolean): com.canhub.cropper.BitmapUtils.BitmapSampled;
        public getRectRight(param0: androidNative.Array<number>): number;
        public getPOINTS(): androidNative.Array<number>;
        public getRectFromPoints(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean, param4: number, param5: number): globalAndroid.graphics.Rect;
        public orientateBitmapByExif(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.content.Context, param2: globalAndroid.net.Uri): com.canhub.cropper.BitmapUtils.RotateBitmapResult;
        public orientateBitmapByExif(param0: globalAndroid.graphics.Bitmap, param1: androidx.exifinterface.media.ExifInterface): com.canhub.cropper.BitmapUtils.RotateBitmapResult;
        public getRectWidth(param0: androidNative.Array<number>): number;
        public getRECT(): globalAndroid.graphics.RectF;
        public getRectCenterX(param0: androidNative.Array<number>): number;
        public resizeBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: com.canhub.cropper.CropImageView.RequestSizeOptions): globalAndroid.graphics.Bitmap;
        public setMStateBitmap(param0: globalAndroid.util.Pair<string, java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>>): void;
        public getRectCenterY(param0: androidNative.Array<number>): number;
        public getRectHeight(param0: androidNative.Array<number>): number;
        public getEMPTY_RECT(): globalAndroid.graphics.Rect;
        public writeBitmapToUri(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap.CompressFormat, param3: number, param4: globalAndroid.net.Uri): globalAndroid.net.Uri;
        public getMStateBitmap(): globalAndroid.util.Pair<string, java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>>;
        public getPOINTS2(): androidNative.Array<number>;
        public writeTempStateStoreBitmap(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
        public getEMPTY_RECT_F(): globalAndroid.graphics.RectF;
        public getRectLeft(param0: androidNative.Array<number>): number;
        public decodeSampledBitmap(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: number, param3: number): com.canhub.cropper.BitmapUtils.BitmapSampled;
        public cropBitmap(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: androidNative.Array<number>, param3: number, param4: number, param5: number, param6: boolean, param7: number, param8: number, param9: number, param10: number, param11: boolean, param12: boolean): com.canhub.cropper.BitmapUtils.BitmapSampled;
      }
      export module BitmapUtils {
        export class BitmapSampled {
          public static class: java.lang.Class<com.canhub.cropper.BitmapUtils.BitmapSampled>;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: number);
          public getSampleSize(): number;
          public getBitmap(): globalAndroid.graphics.Bitmap;
        }
        export class RotateBitmapResult {
          public static class: java.lang.Class<com.canhub.cropper.BitmapUtils.RotateBitmapResult>;
          public getDegrees(): number;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: number, param2: boolean, param3: boolean);
          public getFlipHorizontally(): boolean;
          public getFlipVertically(): boolean;
          public getBitmap(): globalAndroid.graphics.Bitmap;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.canhub.cropper.BitmapUtils.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export abstract class CropException {
        public static class: java.lang.Class<com.canhub.cropper.CropException>;
        public static EXCEPTION_PREFIX: string;
      }
      export module CropException {
        export class Cancellation extends com.canhub.cropper.CropException {
          public static class: java.lang.Class<com.canhub.cropper.CropException.Cancellation>;
          public constructor();
        }
        export module Cancellation {
          export class Companion {
            public static class: java.lang.Class<com.canhub.cropper.CropException.Cancellation.Companion>;
          }
        }
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropException.Companion>;
        }
        export class FailedToDecodeImage extends com.canhub.cropper.CropException {
          public static class: java.lang.Class<com.canhub.cropper.CropException.FailedToDecodeImage>;
          public constructor(param0: globalAndroid.net.Uri);
        }
        export module FailedToDecodeImage {
          export class Companion {
            public static class: java.lang.Class<com.canhub.cropper.CropException.FailedToDecodeImage.Companion>;
          }
        }
        export class FailedToLoadBitmap extends com.canhub.cropper.CropException {
          public static class: java.lang.Class<com.canhub.cropper.CropException.FailedToLoadBitmap>;
          public constructor(param0: globalAndroid.net.Uri, param1: string);
        }
        export module FailedToLoadBitmap {
          export class Companion {
            public static class: java.lang.Class<com.canhub.cropper.CropException.FailedToLoadBitmap.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropFileProvider {
        public static class: java.lang.Class<com.canhub.cropper.CropFileProvider>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImage {
        public static class: java.lang.Class<com.canhub.cropper.CropImage>;
        public static INSTANCE: com.canhub.cropper.CropImage;
        public static CROP_IMAGE_EXTRA_SOURCE: string;
        public static CROP_IMAGE_EXTRA_OPTIONS: string;
        public static CROP_IMAGE_EXTRA_BUNDLE: string;
        public static CROP_IMAGE_EXTRA_RESULT: string;
        public static CROP_IMAGE_ACTIVITY_RESULT_ERROR_CODE: number;
        public toOvalBitmap(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
      }
      export module CropImage {
        export class ActivityResult extends com.canhub.cropper.CropImageView.CropResult {
          public static class: java.lang.Class<com.canhub.cropper.CropImage.ActivityResult>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.canhub.cropper.CropImage.ActivityResult>;
          public constructor(param0: globalAndroid.os.Parcel);
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.net.Uri, param4: java.lang.Exception, param5: androidNative.Array<number>, param6: globalAndroid.graphics.Rect, param7: globalAndroid.graphics.Rect, param8: number, param9: number);
          public describeContents(): number;
          public constructor(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri, param2: java.lang.Exception, param3: androidNative.Array<number>, param4: globalAndroid.graphics.Rect, param5: number, param6: globalAndroid.graphics.Rect, param7: number);
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        }
        export module ActivityResult {
          export class Companion {
            public static class: java.lang.Class<com.canhub.cropper.CropImage.ActivityResult.Companion>;
          }
        }
        export class CancelledResult extends com.canhub.cropper.CropImageView.CropResult {
          public static class: java.lang.Class<com.canhub.cropper.CropImage.CancelledResult>;
          public static INSTANCE: com.canhub.cropper.CropImage.CancelledResult;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageActivity implements com.canhub.cropper.CropImageView.OnSetImageUriCompleteListener, com.canhub.cropper.CropImageView.OnCropImageCompleteListener {
        public static class: java.lang.Class<com.canhub.cropper.CropImageActivity>;
        public static BUNDLE_KEY_TMP_URI: string;
        public updateMenuItemTextColor(param0: globalAndroid.view.Menu, param1: number, param2: number): void;
        public onPickImageResult(param0: globalAndroid.net.Uri): void;
        public onSetImageUriComplete(param0: com.canhub.cropper.CropImageView, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
        public setCropImageView(param0: com.canhub.cropper.CropImageView): void;
        public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
        public setResultCancel(): void;
        public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
        public constructor();
        public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
        public cropImage(): void;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public onStart(): void;
        public showImageSourceDialog(param0: any): void;
        public onCropImageComplete(param0: com.canhub.cropper.CropImageView, param1: com.canhub.cropper.CropImageView.CropResult): void;
        public onStop(): void;
        public updateMenuItemIconColor(param0: globalAndroid.view.Menu, param1: number, param2: number): void;
        public getResultIntent(param0: globalAndroid.net.Uri, param1: java.lang.Exception, param2: number): globalAndroid.content.Intent;
        public rotateImage(param0: number): void;
        public setResult(param0: globalAndroid.net.Uri, param1: java.lang.Exception, param2: number): void;
      }
      export module CropImageActivity {
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropImageActivity.Companion>;
        }
        export class Source {
          public static class: java.lang.Class<com.canhub.cropper.CropImageActivity.Source>;
          public static CAMERA: com.canhub.cropper.CropImageActivity.Source;
          public static GALLERY: com.canhub.cropper.CropImageActivity.Source;
          public static valueOf(param0: string): com.canhub.cropper.CropImageActivity.Source;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageActivity.Source>;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.canhub.cropper.CropImageActivity.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageAnimation {
        public static class: java.lang.Class<com.canhub.cropper.CropImageAnimation>;
        public constructor(param0: globalAndroid.widget.ImageView, param1: com.canhub.cropper.CropOverlayView);
        public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
        public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
        public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
        public setStartState(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Matrix): void;
        public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
        public setEndState(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Matrix): void;
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageContract extends androidx.activity.result.contract.ActivityResultContract<com.canhub.cropper.CropImageContractOptions, com.canhub.cropper.CropImageView.CropResult> {
        public static class: java.lang.Class<com.canhub.cropper.CropImageContract>;
        public parseResult(param0: number, param1: globalAndroid.content.Intent): com.canhub.cropper.CropImageView.CropResult;
        public createIntent(param0: globalAndroid.content.Context, param1: com.canhub.cropper.CropImageContractOptions): globalAndroid.content.Intent;
        public constructor();
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageContractOptions {
        public static class: java.lang.Class<com.canhub.cropper.CropImageContractOptions>;
        public constructor(param0: globalAndroid.net.Uri, param1: com.canhub.cropper.CropImageOptions);
        public component1(): globalAndroid.net.Uri;
        public getUri(): globalAndroid.net.Uri;
        public component2(): com.canhub.cropper.CropImageOptions;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getCropImageOptions(): com.canhub.cropper.CropImageOptions;
        public toString(): string;
        public copy(param0: globalAndroid.net.Uri, param1: com.canhub.cropper.CropImageOptions): com.canhub.cropper.CropImageContractOptions;
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageIntentChooser {
        public static class: java.lang.Class<com.canhub.cropper.CropImageIntentChooser>;
        public static GOOGLE_PHOTOS: string;
        public static GOOGLE_PHOTOS_GO: string;
        public static SAMSUNG_GALLERY: string;
        public static ONEPLUS_GALLERY: string;
        public static MIUI_GALLERY: string;
        public showChooserIntent(param0: boolean, param1: boolean, param2: globalAndroid.net.Uri): void;
        public setIntentChooserTitle(param0: string): com.canhub.cropper.CropImageIntentChooser;
        public constructor(param0: androidx.activity.ComponentActivity, param1: com.canhub.cropper.CropImageIntentChooser.ResultCallback);
        public setupPriorityAppsList(param0: java.util.List<string>): com.canhub.cropper.CropImageIntentChooser;
      }
      export module CropImageIntentChooser {
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropImageIntentChooser.Companion>;
        }
        export class ResultCallback {
          public static class: java.lang.Class<com.canhub.cropper.CropImageIntentChooser.ResultCallback>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageIntentChooser$ResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: globalAndroid.net.Uri): void; onCancelled(): void });
          public constructor();
          public onSuccess(param0: globalAndroid.net.Uri): void;
          public onCancelled(): void;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageOptions {
        public static class: java.lang.Class<com.canhub.cropper.CropImageOptions>;
        public imageSourceIncludeGallery: boolean;
        public imageSourceIncludeCamera: boolean;
        public cropShape: com.canhub.cropper.CropImageView.CropShape;
        public cornerShape: com.canhub.cropper.CropImageView.CropCornerShape;
        public cropCornerRadius: number;
        public snapRadius: number;
        public touchRadius: number;
        public guidelines: com.canhub.cropper.CropImageView.Guidelines;
        public scaleType: com.canhub.cropper.CropImageView.ScaleType;
        public showCropOverlay: boolean;
        public showCropLabel: boolean;
        public showProgressBar: boolean;
        public progressBarColor: number;
        public autoZoomEnabled: boolean;
        public multiTouchEnabled: boolean;
        public centerMoveEnabled: boolean;
        public maxZoom: number;
        public initialCropWindowPaddingRatio: number;
        public fixAspectRatio: boolean;
        public aspectRatioX: number;
        public aspectRatioY: number;
        public borderLineThickness: number;
        public borderLineColor: number;
        public borderCornerThickness: number;
        public borderCornerOffset: number;
        public borderCornerLength: number;
        public borderCornerColor: number;
        public circleCornerFillColorHexValue: number;
        public guidelinesThickness: number;
        public guidelinesColor: number;
        public backgroundColor: number;
        public minCropWindowWidth: number;
        public minCropWindowHeight: number;
        public minCropResultWidth: number;
        public minCropResultHeight: number;
        public maxCropResultWidth: number;
        public maxCropResultHeight: number;
        public activityTitle: string;
        public activityMenuIconColor: number;
        public activityMenuTextColor: java.lang.Integer;
        public customOutputUri: globalAndroid.net.Uri;
        public outputCompressFormat: globalAndroid.graphics.Bitmap.CompressFormat;
        public outputCompressQuality: number;
        public outputRequestWidth: number;
        public outputRequestHeight: number;
        public outputRequestSizeOptions: com.canhub.cropper.CropImageView.RequestSizeOptions;
        public noOutputImage: boolean;
        public initialCropWindowRectangle: globalAndroid.graphics.Rect;
        public initialRotation: number;
        public allowRotation: boolean;
        public allowFlipping: boolean;
        public allowCounterRotation: boolean;
        public rotationDegrees: number;
        public flipHorizontally: boolean;
        public flipVertically: boolean;
        public cropMenuCropButtonTitle: string;
        public cropMenuCropButtonIcon: number;
        public skipEditing: boolean;
        public showIntentChooser: boolean;
        public intentChooserTitle: string;
        public intentChooserPriorityList: java.util.List<string>;
        public cropperLabelTextSize: number;
        public cropperLabelTextColor: number;
        public cropperLabelText: string;
        public activityBackgroundColor: number;
        public toolbarColor: java.lang.Integer;
        public toolbarTitleColor: java.lang.Integer;
        public toolbarBackButtonColor: java.lang.Integer;
        public toolbarTintColor: java.lang.Integer;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.canhub.cropper.CropImageOptions>;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number);
        public component8(): com.canhub.cropper.CropImageView.Guidelines;
        public component25(): number;
        public component35(): number;
        public component45(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number,
          param65: java.lang.Integer,
          param66: java.lang.Integer
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number,
          param65: java.lang.Integer,
          param66: java.lang.Integer,
          param67: java.lang.Integer
        );
        public component32(): number;
        public component65(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number);
        public component22(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number);
        public component38(): string;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number);
        public component62(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number,
          param65: java.lang.Integer,
          param66: java.lang.Integer,
          param67: java.lang.Integer,
          param68: java.lang.Integer
        );
        public component46(): com.canhub.cropper.CropImageView.RequestSizeOptions;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number);
        public component47(): boolean;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean);
        public component56(): string;
        public component61(): java.util.List<string>;
        public component34(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number
        );
        public component44(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean
        );
        public component7(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number
        );
        public component40(): java.lang.Integer;
        public component17(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number);
        public component60(): string;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer
        );
        public component4(): com.canhub.cropper.CropImageView.CropCornerShape;
        public component49(): number;
        public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        public constructor(param0: boolean, param1: boolean);
        public component26(): number;
        public component36(): number;
        public component64(): string;
        public component48(): globalAndroid.graphics.Rect;
        public component39(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri
        );
        public component9(): com.canhub.cropper.CropImageView.ScaleType;
        public component29(): number;
        public component67(): java.lang.Integer;
        public component3(): com.canhub.cropper.CropImageView.CropShape;
        public component27(): number;
        public component5(): number;
        public component37(): number;
        public component69(): java.lang.Integer;
        public component57(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean
        );
        public component28(): number;
        public copy(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number,
          param65: java.lang.Integer,
          param66: java.lang.Integer,
          param67: java.lang.Integer,
          param68: java.lang.Integer
        ): com.canhub.cropper.CropImageOptions;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number);
        public component18(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines);
        public component19(): boolean;
        public component2(): boolean;
        public component16(): boolean;
        public component68(): java.lang.Integer;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number
        );
        public component59(): boolean;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number
        );
        public component1(): boolean;
        public constructor(param0: boolean);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number);
        public component54(): boolean;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat
        );
        public component41(): globalAndroid.net.Uri;
        public constructor();
        public component10(): boolean;
        public component52(): boolean;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number,
          param65: java.lang.Integer
        );
        public component51(): boolean;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public component6(): number;
        public component42(): globalAndroid.graphics.Bitmap.CompressFormat;
        public component50(): boolean;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean
        );
        public component13(): number;
        public component33(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean
        );
        public toString(): string;
        public component23(): number;
        public component63(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions
        );
        public component11(): boolean;
        public component53(): number;
        public component43(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number);
        public component12(): boolean;
        public component55(): boolean;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number);
        public component14(): boolean;
        public describeContents(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean);
        public component15(): boolean;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean
        );
        public component58(): boolean;
        public component24(): number;
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number,
          param57: boolean,
          param58: boolean,
          param59: string,
          param60: java.util.List<string>,
          param61: number,
          param62: number,
          param63: string,
          param64: number
        );
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect,
          param48: number,
          param49: boolean,
          param50: boolean,
          param51: boolean,
          param52: number,
          param53: boolean,
          param54: boolean,
          param55: string,
          param56: number
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number, param35: number);
        public component31(): number;
        public component21(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number,
          param44: number,
          param45: com.canhub.cropper.CropImageView.RequestSizeOptions,
          param46: boolean,
          param47: globalAndroid.graphics.Rect
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType);
        public component66(): java.lang.Integer;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean);
        public constructor(
          param0: boolean,
          param1: boolean,
          param2: com.canhub.cropper.CropImageView.CropShape,
          param3: com.canhub.cropper.CropImageView.CropCornerShape,
          param4: number,
          param5: number,
          param6: number,
          param7: com.canhub.cropper.CropImageView.Guidelines,
          param8: com.canhub.cropper.CropImageView.ScaleType,
          param9: boolean,
          param10: boolean,
          param11: boolean,
          param12: number,
          param13: boolean,
          param14: boolean,
          param15: boolean,
          param16: number,
          param17: number,
          param18: boolean,
          param19: number,
          param20: number,
          param21: number,
          param22: number,
          param23: number,
          param24: number,
          param25: number,
          param26: number,
          param27: number,
          param28: number,
          param29: number,
          param30: number,
          param31: number,
          param32: number,
          param33: number,
          param34: number,
          param35: number,
          param36: number,
          param37: string,
          param38: number,
          param39: java.lang.Integer,
          param40: globalAndroid.net.Uri,
          param41: globalAndroid.graphics.Bitmap.CompressFormat,
          param42: number,
          param43: number
        );
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number);
        public component20(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape);
        public component30(): number;
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number);
        public constructor(param0: boolean, param1: boolean, param2: com.canhub.cropper.CropImageView.CropShape, param3: com.canhub.cropper.CropImageView.CropCornerShape, param4: number, param5: number, param6: number, param7: com.canhub.cropper.CropImageView.Guidelines, param8: com.canhub.cropper.CropImageView.ScaleType, param9: boolean, param10: boolean, param11: boolean, param12: number, param13: boolean, param14: boolean, param15: boolean, param16: number, param17: number, param18: boolean, param19: number, param20: number, param21: number, param22: number);
      }
      export module CropImageOptions {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.canhub.cropper.CropImageOptions> {
          public static class: java.lang.Class<com.canhub.cropper.CropImageOptions.Creator>;
          public newArray(param0: number): androidNative.Array<com.canhub.cropper.CropImageOptions>;
          public constructor();
          public createFromParcel(param0: globalAndroid.os.Parcel): com.canhub.cropper.CropImageOptions;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropImageView implements com.canhub.cropper.CropOverlayView.CropWindowChangeListener {
        public static class: java.lang.Class<com.canhub.cropper.CropImageView>;
        public setMaxCropResultSize(param0: number, param1: number): void;
        public getCropLabelTextColor(): number;
        public flipImageVertically(): void;
        public croppedImageAsync(param0: globalAndroid.graphics.Bitmap.CompressFormat, param1: number, param2: number, param3: number, param4: com.canhub.cropper.CropImageView.RequestSizeOptions, param5: globalAndroid.net.Uri): void;
        public startCropWorkerTask(param0: number, param1: number, param2: com.canhub.cropper.CropImageView.RequestSizeOptions, param3: globalAndroid.graphics.Bitmap.CompressFormat, param4: number, param5: globalAndroid.net.Uri): void;
        public clearAspectRatio(): void;
        public setScaleType(param0: com.canhub.cropper.CropImageView.ScaleType): void;
        public getGuidelines(): com.canhub.cropper.CropImageView.Guidelines;
        public resetCropRect(): void;
        public setImageBitmap(param0: globalAndroid.graphics.Bitmap, param1: androidx.exifinterface.media.ExifInterface): void;
        public setFlippedHorizontally(param0: boolean): void;
        public onCropWindowChanged(param0: boolean): void;
        public setShowCropLabel(param0: boolean): void;
        public getImageUri(): globalAndroid.net.Uri;
        public setImageCropOptions(param0: com.canhub.cropper.CropImageOptions): void;
        public setCropLabelText(param0: string): void;
        public setOnSetCropOverlayMovedListener(param0: com.canhub.cropper.CropImageView.OnSetCropOverlayMovedListener): void;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public setOnCropWindowChangedListener(param0: com.canhub.cropper.CropImageView.OnSetCropWindowChangeListener): void;
        public setRotatedDegrees(param0: number): void;
        public expectedImageSize(): any;
        public setCropLabelTextSize(param0: number): void;
        public setOnCropImageCompleteListener(param0: com.canhub.cropper.CropImageView.OnCropImageCompleteListener): void;
        public getCroppedImage(param0: number): globalAndroid.graphics.Bitmap;
        public clearImage(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public isShowCropOverlay(): boolean;
        public setCropLabelTextColor(param0: number): void;
        public getCropShape(): com.canhub.cropper.CropImageView.CropShape;
        public setAspectRatio(param0: number, param1: number): void;
        public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
        public isShowCropLabel(): boolean;
        public setImageUriAsync(param0: globalAndroid.net.Uri): void;
        public isFixAspectRatio(): boolean;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setImageResource(param0: number): void;
        public setOnSetImageUriCompleteListener(param0: com.canhub.cropper.CropImageView.OnSetImageUriCompleteListener): void;
        public setMultiTouchEnabled(param0: boolean): void;
        public setShowProgressBar(param0: boolean): void;
        public rotateImage(param0: number): void;
        public setCustomOutputUri(param0: globalAndroid.net.Uri): void;
        /** @deprecated */
        public isSaveBitmapToInstanceState(): boolean;
        public setCornerShape(param0: com.canhub.cropper.CropImageView.CropCornerShape): void;
        public isFlippedHorizontally(): boolean;
        public setMinCropResultSize(param0: number, param1: number): void;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public setFlippedVertically(param0: boolean): void;
        public getWholeImageRect(): globalAndroid.graphics.Rect;
        public getCustomOutputUri(): globalAndroid.net.Uri;
        public getImageResource(): number;
        public isFlippedVertically(): boolean;
        public isShowProgressBar(): boolean;
        public getCropPoints(): androidNative.Array<number>;
        public getCroppedImage(): globalAndroid.graphics.Bitmap;
        public onSetImageUriAsyncComplete$cropper_release(param0: com.canhub.cropper.BitmapLoadingWorkerJob.Result): void;
        public getCroppedImage(param0: number, param1: number): globalAndroid.graphics.Bitmap;
        public isAutoZoomEnabled(): boolean;
        public constructor(param0: globalAndroid.content.Context);
        public getRotatedDegrees(): number;
        public getAspectRatio(): globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer>;
        public getCornerShape(): com.canhub.cropper.CropImageView.CropCornerShape;
        public getCropWindowRect(): globalAndroid.graphics.RectF;
        /** @deprecated */
        public croppedImage(): globalAndroid.graphics.Bitmap;
        public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
        public getScaleType(): com.canhub.cropper.CropImageView.ScaleType;
        public setGuidelines(param0: com.canhub.cropper.CropImageView.Guidelines): void;
        public getCropLabelText(): string;
        public flipImageHorizontally(): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public setOnSetCropOverlayReleasedListener(param0: com.canhub.cropper.CropImageView.OnSetCropOverlayReleasedListener): void;
        public setCenterMoveEnabled(param0: boolean): void;
        public getCropLabelTextSize(): number;
        public setAutoZoomEnabled(param0: boolean): void;
        public getMaxZoom(): number;
        public setFixedAspectRatio(param0: boolean): void;
        public onImageCroppingAsyncComplete$cropper_release(param0: com.canhub.cropper.BitmapCroppingWorkerJob.Result): void;
        public setShowCropOverlay(param0: boolean): void;
        /** @deprecated */
        public setSaveBitmapToInstanceState(param0: boolean): void;
        public setMaxZoom(param0: number): void;
        public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
        public onMeasure(param0: number, param1: number): void;
        public getCroppedImage(param0: number, param1: number, param2: com.canhub.cropper.CropImageView.RequestSizeOptions): globalAndroid.graphics.Bitmap;
        public setSnapRadius(param0: number): void;
        public setCropShape(param0: com.canhub.cropper.CropImageView.CropShape): void;
      }
      export module CropImageView {
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.Companion>;
          public getOnMeasureSpec$cropper_release(param0: number, param1: number, param2: number): number;
        }
        export class CropCornerShape {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.CropCornerShape>;
          public static RECTANGLE: com.canhub.cropper.CropImageView.CropCornerShape;
          public static OVAL: com.canhub.cropper.CropImageView.CropCornerShape;
          public static valueOf(param0: string): com.canhub.cropper.CropImageView.CropCornerShape;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageView.CropCornerShape>;
        }
        export class CropResult {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.CropResult>;
          public getCropRect(): globalAndroid.graphics.Rect;
          public getWholeImageRect(): globalAndroid.graphics.Rect;
          public getUriFilePath(param0: globalAndroid.content.Context, param1: boolean): string;
          public getUriContent(): globalAndroid.net.Uri;
          public getCropPoints(): androidNative.Array<number>;
          public getOriginalBitmap(): globalAndroid.graphics.Bitmap;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public getRotation(): number;
          public getBitmap(param0: globalAndroid.content.Context): globalAndroid.graphics.Bitmap;
          public getSampleSize(): number;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.net.Uri, param4: java.lang.Exception, param5: androidNative.Array<number>, param6: globalAndroid.graphics.Rect, param7: globalAndroid.graphics.Rect, param8: number, param9: number);
          public isSuccessful(): boolean;
          public getError(): java.lang.Exception;
          public getOriginalUri(): globalAndroid.net.Uri;
        }
        export class CropShape {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.CropShape>;
          public static RECTANGLE: com.canhub.cropper.CropImageView.CropShape;
          public static OVAL: com.canhub.cropper.CropImageView.CropShape;
          public static RECTANGLE_VERTICAL_ONLY: com.canhub.cropper.CropImageView.CropShape;
          public static RECTANGLE_HORIZONTAL_ONLY: com.canhub.cropper.CropImageView.CropShape;
          public static valueOf(param0: string): com.canhub.cropper.CropImageView.CropShape;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageView.CropShape>;
        }
        export class Guidelines {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.Guidelines>;
          public static OFF: com.canhub.cropper.CropImageView.Guidelines;
          public static ON_TOUCH: com.canhub.cropper.CropImageView.Guidelines;
          public static ON: com.canhub.cropper.CropImageView.Guidelines;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageView.Guidelines>;
          public static valueOf(param0: string): com.canhub.cropper.CropImageView.Guidelines;
        }
        export class OnCropImageCompleteListener {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.OnCropImageCompleteListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageView$OnCropImageCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropImageComplete(param0: com.canhub.cropper.CropImageView, param1: com.canhub.cropper.CropImageView.CropResult): void });
          public constructor();
          public onCropImageComplete(param0: com.canhub.cropper.CropImageView, param1: com.canhub.cropper.CropImageView.CropResult): void;
        }
        export class OnSetCropOverlayMovedListener {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.OnSetCropOverlayMovedListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageView$OnSetCropOverlayMovedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropOverlayMoved(param0: globalAndroid.graphics.Rect): void });
          public constructor();
          public onCropOverlayMoved(param0: globalAndroid.graphics.Rect): void;
        }
        export class OnSetCropOverlayReleasedListener {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.OnSetCropOverlayReleasedListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageView$OnSetCropOverlayReleasedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropOverlayReleased(param0: globalAndroid.graphics.Rect): void });
          public constructor();
          public onCropOverlayReleased(param0: globalAndroid.graphics.Rect): void;
        }
        export class OnSetCropWindowChangeListener {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.OnSetCropWindowChangeListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageView$OnSetCropWindowChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropWindowChanged(): void });
          public constructor();
          public onCropWindowChanged(): void;
        }
        export class OnSetImageUriCompleteListener {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.OnSetImageUriCompleteListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropImageView$OnSetImageUriCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSetImageUriComplete(param0: com.canhub.cropper.CropImageView, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void });
          public constructor();
          public onSetImageUriComplete(param0: com.canhub.cropper.CropImageView, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
        }
        export class RequestSizeOptions {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.RequestSizeOptions>;
          public static NONE: com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static SAMPLING: com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static RESIZE_INSIDE: com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static RESIZE_FIT: com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static RESIZE_EXACT: com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static valueOf(param0: string): com.canhub.cropper.CropImageView.RequestSizeOptions;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageView.RequestSizeOptions>;
        }
        export class ScaleType {
          public static class: java.lang.Class<com.canhub.cropper.CropImageView.ScaleType>;
          public static FIT_CENTER: com.canhub.cropper.CropImageView.ScaleType;
          public static CENTER: com.canhub.cropper.CropImageView.ScaleType;
          public static CENTER_CROP: com.canhub.cropper.CropImageView.ScaleType;
          public static CENTER_INSIDE: com.canhub.cropper.CropImageView.ScaleType;
          public static values(): androidNative.Array<com.canhub.cropper.CropImageView.ScaleType>;
          public static valueOf(param0: string): com.canhub.cropper.CropImageView.ScaleType;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropOverlayView {
        public static class: java.lang.Class<com.canhub.cropper.CropOverlayView>;
        public setMaxCropResultSize(param0: number, param1: number): void;
        public resetCropOverlayView(): void;
        public setCenterMoveEnabled(param0: boolean): boolean;
        public setMinCropResultSize(param0: number, param1: number): void;
        public fixCurrentCropWindowRect(): void;
        public getGuidelines(): com.canhub.cropper.CropImageView.Guidelines;
        public setCropWindowRect(param0: globalAndroid.graphics.RectF): void;
        public setCropperTextLabelVisibility(param0: boolean): void;
        public setCropWindowLimits(param0: number, param1: number, param2: number, param3: number): void;
        public setAspectRatioX(param0: number): void;
        public setInitialAttributeValues(param0: com.canhub.cropper.CropImageOptions): void;
        public constructor(param0: globalAndroid.content.Context);
        public setCropLabelText(param0: string): void;
        public setMultiTouchEnabled(param0: boolean): boolean;
        public getCornerShape(): com.canhub.cropper.CropImageView.CropCornerShape;
        public getCropWindowRect(): globalAndroid.graphics.RectF;
        public setCropCornerRadius(param0: number): void;
        public getAspectRatioX(): number;
        public setCropWindowChangeListener(param0: com.canhub.cropper.CropOverlayView.CropWindowChangeListener): void;
        public setCropLabelTextSize(param0: number): void;
        public setGuidelines(param0: com.canhub.cropper.CropImageView.Guidelines): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public setCropLabelTextColor(param0: number): void;
        public resetCropWindowRect(): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public getCropShape(): com.canhub.cropper.CropImageView.CropShape;
        public getAspectRatioY(): number;
        public isFixAspectRatio(): boolean;
        public setFixedAspectRatio(param0: boolean): void;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public setAspectRatioY(param0: number): void;
        public setCropCornerShape(param0: com.canhub.cropper.CropImageView.CropCornerShape): void;
        public setInitialCropWindowRect(param0: globalAndroid.graphics.Rect): void;
        public getInitialCropWindowRect(): globalAndroid.graphics.Rect;
        public setSnapRadius(param0: number): void;
        public setBounds(param0: androidNative.Array<number>, param1: number, param2: number): void;
        public setCropShape(param0: com.canhub.cropper.CropImageView.CropShape): void;
      }
      export module CropOverlayView {
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropOverlayView.Companion>;
          public getNewPaintWithFill$cropper_release(param0: number): globalAndroid.graphics.Paint;
          public getTextPaint$cropper_release(param0: com.canhub.cropper.CropImageOptions): globalAndroid.graphics.Paint;
          public getNewPaint$cropper_release(param0: number): globalAndroid.graphics.Paint;
          public getNewPaintOrNull$cropper_release(param0: number, param1: number): globalAndroid.graphics.Paint;
        }
        export class CropWindowChangeListener {
          public static class: java.lang.Class<com.canhub.cropper.CropOverlayView.CropWindowChangeListener>;
          /**
           * Constructs a new instance of the com.canhub.cropper.CropOverlayView$CropWindowChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCropWindowChanged(param0: boolean): void });
          public constructor();
          public onCropWindowChanged(param0: boolean): void;
        }
        export class ScaleListener {
          public static class: java.lang.Class<com.canhub.cropper.CropOverlayView.ScaleListener>;
          public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
          public constructor(param0: com.canhub.cropper.CropOverlayView);
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.canhub.cropper.CropOverlayView.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropWindowHandler {
        public static class: java.lang.Class<com.canhub.cropper.CropWindowHandler>;
        public setMaxCropResultSize(param0: number, param1: number): void;
        public getRect(): globalAndroid.graphics.RectF;
        public getScaleFactorWidth(): number;
        public getScaleFactorHeight(): number;
        public setMinCropResultSize(param0: number, param1: number): void;
        public getMinCropWidth(): number;
        public getMinCropHeight(): number;
        public showGuidelines(): boolean;
        public setCropWindowLimits(param0: number, param1: number, param2: number, param3: number): void;
        public constructor();
        public getMoveHandler(param0: number, param1: number, param2: number, param3: com.canhub.cropper.CropImageView.CropShape, param4: boolean): com.canhub.cropper.CropWindowMoveHandler;
        public setRect(param0: globalAndroid.graphics.RectF): void;
        public setInitialAttributeValues(param0: com.canhub.cropper.CropImageOptions): void;
        public getMaxCropWidth(): number;
        public getMaxCropHeight(): number;
      }
      export module CropWindowHandler {
        export class WhenMappings {
          public static class: java.lang.Class<com.canhub.cropper.CropWindowHandler.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export class CropWindowMoveHandler {
        public static class: java.lang.Class<com.canhub.cropper.CropWindowMoveHandler>;
        public move(param0: globalAndroid.graphics.RectF, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: number, param5: number, param6: number, param7: boolean, param8: number): void;
        public constructor(param0: com.canhub.cropper.CropWindowMoveHandler.Type, param1: com.canhub.cropper.CropWindowHandler, param2: number, param3: number);
      }
      export module CropWindowMoveHandler {
        export class Companion {
          public static class: java.lang.Class<com.canhub.cropper.CropWindowMoveHandler.Companion>;
          public calculateAspectRatio$cropper_release(param0: number, param1: number, param2: number, param3: number): number;
        }
        export class Type {
          public static class: java.lang.Class<com.canhub.cropper.CropWindowMoveHandler.Type>;
          public static TOP_LEFT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static TOP_RIGHT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static BOTTOM_LEFT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static BOTTOM_RIGHT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static LEFT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static TOP: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static RIGHT: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static BOTTOM: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static CENTER: com.canhub.cropper.CropWindowMoveHandler.Type;
          public static values(): androidNative.Array<com.canhub.cropper.CropWindowMoveHandler.Type>;
          public static valueOf(param0: string): com.canhub.cropper.CropWindowMoveHandler.Type;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.canhub.cropper.CropWindowMoveHandler.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export module databinding {
        export class CropImageActivityBinding {
          public static class: java.lang.Class<com.canhub.cropper.databinding.CropImageActivityBinding>;
          public cropImageView: com.canhub.cropper.CropImageView;
          public static bind(param0: globalAndroid.view.View): com.canhub.cropper.databinding.CropImageActivityBinding;
          public getRoot(): com.canhub.cropper.CropImageView;
          public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.canhub.cropper.databinding.CropImageActivityBinding;
          public static inflate(param0: globalAndroid.view.LayoutInflater): com.canhub.cropper.databinding.CropImageActivityBinding;
        }
      }
    }
  }
}

declare module com {
  export module canhub {
    export module cropper {
      export module databinding {
        export class CropImageViewBinding {
          public static class: java.lang.Class<com.canhub.cropper.databinding.CropImageViewBinding>;
          public CropOverlayView: com.canhub.cropper.CropOverlayView;
          public CropProgressBar: globalAndroid.widget.ProgressBar;
          public ImageViewImage: globalAndroid.widget.ImageView;
          public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.canhub.cropper.databinding.CropImageViewBinding;
          public getRoot(): globalAndroid.view.View;
          public static bind(param0: globalAndroid.view.View): com.canhub.cropper.databinding.CropImageViewBinding;
        }
      }
    }
  }
}

//Generics information:
