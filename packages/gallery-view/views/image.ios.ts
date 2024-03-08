import { View } from '@nativescript/core';

export class ImageViewNativoIOS extends View {
  constructor(private img: string) {
    super();
  }

  createNativeView(): Object {
    const url: NSURL = NSURL.fileURLWithPath(this.img);
    this.nativeView = SDAnimatedImageView.alloc().initWithFrame(CGRectMake(0, 0, 75, 75));
    this.nativeView.contentMode = UIViewContentMode.ScaleToFill;
    this.nativeView.sd_setImageWithURL(url);
    return this.nativeView as SDAnimatedImageView;
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
