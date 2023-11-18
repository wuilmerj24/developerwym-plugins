import { AndroidActivityCallbacks, AndroidApplication, Application, Color, ContainerView, Frame, GridLayout, GridUnitType, ItemSpec, ListView, Screen, ShowModalOptions, Utils, View, setActivityCallbacks } from '@nativescript/core';
import { MediaStoreData, MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { CLog } from '../common';

export class UCropModalAndroid extends GridLayout {
  constructor(private images: Array<MediaStoreDataFiles>) {
    super();
    this.width = Screen.mainScreen.widthDIPs;
    this.height = Screen.mainScreen.heightDIPs;
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    const cropperImageAndroidView: CropperImageAndroidView = new CropperImageAndroidView(this.images.filter((item) => item.isSelected)[0].file);
    cropperImageAndroidView.row = 0;
    cropperImageAndroidView.width = Screen.mainScreen.widthDIPs;
    cropperImageAndroidView.height = (Screen.mainScreen.heightDIPs * 75) / 100;
    cropperImageAndroidView.verticalAlignment = 'top';
    this.addChild(cropperImageAndroidView);
  }
}

export class CropperImageAndroidView extends ContainerView {
  private _nativeView: com.canhub.cropper.CropImageView;
  constructor(private imagen: string) {
    super();
    this.width = Screen.mainScreen.widthDIPs;
    this.height = Screen.mainScreen.heightDIPs;
  }

  createNativeView(): Object {
    try {
      this.nativeView = new com.canhub.cropper.CropImageView(this._context);
      this.nativeView.setAutoZoomEnabled(false);
      this.nativeView.setCenterMoveEnabled(true);
      this.nativeView.setShowCropLabel(true);
      this.nativeView.setShowCropOverlay(true);
      this.nativeView.setShowProgressBar(true);
      this.nativeView.setCropLabelText('Editar imagenes');
      this.nativeView.setFixedAspectRatio(true);
      this.nativeView.setFlippedHorizontally(true);
      this.nativeView.setFlippedVertically(true);
      this.nativeView.setMultiTouchEnabled(true);
      const options: com.canhub.cropper.CropImageOptions = new com.canhub.cropper.CropImageOptions();
      options.scaleType = com.canhub.cropper.CropImageView.ScaleType.FIT_CENTER;
      new com.canhub.cropper.CropImageContractOptions(this.imagen as any, options);
      this.nativeView.setOnCropImageCompleteListener(
        new com.canhub.cropper.CropImageView.OnCropImageCompleteListener({
          onCropImageComplete(param0, param1) {},
        })
      );
      this.nativeView.setOnCropImageCompleteListener(
        new com.canhub.cropper.CropImageView.OnCropImageCompleteListener({
          onCropImageComplete(param0, param1) {},
        })
      );
      this.setImageUriAsyn(this.imagen);
      return this.nativeView;
    } catch (error) {
      CLog('Errror UCropView ', error);
    }
  }

  public setImageUriAsyn(img): void {
    this.nativeView.setImageUriAsync(img as any);
  }

  public get nativeView(): com.canhub.cropper.CropImageView {
    return this._nativeView;
  }
  public set nativeView(value: com.canhub.cropper.CropImageView) {
    this._nativeView = value;
  }
}
