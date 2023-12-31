import { View } from '@nativescript/core';

export class ImageViewNativoAndroid extends View {
  constructor(private img: string) {
    super();
  }
  createNativeView(): Object {
    this.nativeView = new android.widget.ImageView(this._context);
    (this.nativeView as android.widget.ImageView).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    (this.nativeView as android.widget.ImageView).setId(android.view.View.generateViewId());
    (this.nativeView as android.widget.ImageView).setScaleType(android.widget.ImageView.ScaleType.FIT_XY);

    com.bumptech.glide.Glide.with(this._context)
      // .load("https://i.blogs.es/d1e3df/tanjiro-kamado/1366_2000.jpeg")
      .load(this.img)
      .centerCrop()
      .override(240, 240)
      .fallback(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE))
      .placeholder(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY))
      .error(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED))
      .priority(com.bumptech.glide.Priority.HIGH)
      .diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.ALL)
      .onlyRetrieveFromCache(false)
      .skipMemoryCache(false)
      .into(this.nativeView);

    return this.nativeView as android.widget.ImageView;
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
