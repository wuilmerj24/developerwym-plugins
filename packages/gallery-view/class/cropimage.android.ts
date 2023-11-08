import { Application, Utils } from '@nativescript/core';
import { MediaStoreData } from '../interfaces/mediastore.interface';
import { CLog } from '../common';

@NativeClass()
export class UCropImageAndroid {
  constructor(private images: Array<MediaStoreData>, private context: android.content.Context) {}

  start() {
    // com.yalantis.ucrop.UCrop.of(android.net.Uri.parse(this.images[0].files[0].file), android.net.Uri.fromFile(new java.io.File(this.context.getCacheDir(),new Date().getTime().toString())))
    // const urI= android.net.Uri.parse("content://media/external/images/media/1000018805")
    const urI = android.net.Uri.parse(this.images[0].files[0].file);
    com.yalantis.ucrop.UCrop.of(urI, android.net.Uri.fromFile(new java.io.File(this.context.getCacheDir(), new Date().getTime().toString())))
      .withAspectRatio(16, 9)
      .start(Application.android.foregroundActivity);
  }
}
