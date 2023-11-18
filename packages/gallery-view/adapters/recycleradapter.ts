import { Color } from '@nativescript/core';
import { CLog } from '../common';
import { OrientationView } from '../enums/orientation.enum';
import { TypeFileShow } from '../enums/typefiles.enums';
import { MediaStoreDataFiles } from '../interfaces/mediastore.interface';

@NativeClass()
export class RecyclerAdapterMyPluginDeveloper extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
  private context: android.content.Context;
  private glide;
  constructor(private lista: Array<MediaStoreDataFiles>, private orientacion: OrientationView, private albunName: string) {
    super();
  }

  public getItemCount(): number {
    if (this.lista != null || this.lista != undefined || this.lista.length == 0) {
      return this.lista.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder {
    if (this.glide == null || this.glide == undefined) {
      this.glide = com.bumptech.glide.Glide.with(parent.getContext());
      CLog('Glide null');
    }
    const fl: android.widget.FrameLayout = new android.widget.FrameLayout(parent.getContext());
    fl.setLayoutParams(new android.widget.FrameLayout.LayoutParams(240, 240));

    const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
    img.setId(android.view.View.generateViewId());
    img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    img.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    img.setPadding(5, 5, 5, 5);
    const radiobtn: android.widget.RadioButton = new android.widget.RadioButton(parent.getContext());
    radiobtn.setLayoutParams(new android.view.ViewGroup.LayoutParams(100, 100));
    radiobtn.setId(android.view.View.generateViewId());
    radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color('transparent').android));

    const gradientDrawable: android.graphics.drawable.GradientDrawable = new android.graphics.drawable.GradientDrawable();
    gradientDrawable.setColor(new Color('white').android);
    gradientDrawable.setStroke(5, new Color('white').android);
    gradientDrawable.setCornerRadius(12);
    img.setBackground(gradientDrawable);
    fl.setBackground(gradientDrawable);
    fl.addView(img);
    fl.addView(radiobtn);
    // fl.setPadding(5,5,5,5);
    return new ViewHolder(fl, img.getId(), null, TypeFileShow.IMAGE, radiobtn.getId());
  }

  public onBindViewHolder(param0: unknown, param1: unknown, param2?: unknown): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void {
    try {
      this.glide
        .load(this.lista[position].file)
        //.centerCrop()

        .override(240, 240)
        .fallback(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE))
        .placeholder(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY))
        .error(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED))
        .priority(com.bumptech.glide.Priority.HIGH)
        .diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.ALL)
        //.diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.NONE)
        .onlyRetrieveFromCache(false)
        .skipMemoryCache(false)
        // .sizeMultiplier(0.5)
        .into((holder as any).imageView);
    } catch (error) {
      CLog('se genero un error Glide ', error);
    }
  }

  public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
    super.onDetachedFromRecyclerView(param0);
    this.glide = null;
  }
}

@NativeClass()
class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public imageView: android.widget.ImageView;
  public videoView: android.widget.VideoView;
  public radiobtn: android.widget.RadioButton;
  constructor(private view: android.view.View, private idImage: number, private idVideo: number, private tipoFile: TypeFileShow, private idRadioBtn: number) {
    super(view);
    // aqui se controla el tamaño de la imagen
    if (this.tipoFile == TypeFileShow.IMAGE) {
      this.imageView = view.findViewById(this.idImage) as android.widget.ImageView;
      // this.imageView.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(300,200));
      this.imageView.setLayoutParams(new android.widget.FrameLayout.LayoutParams(240, 240));
    } else if (this.tipoFile == TypeFileShow.VIDEO) {
      this.videoView = view.findViewById(this.idVideo) as android.widget.VideoView;
      // this.videoView.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(400,200));
      this.videoView.setLayoutParams(new android.widget.FrameLayout.LayoutParams(400, 200));
    }
    this.radiobtn = view.findViewById(this.idRadioBtn) as android.widget.RadioButton;
  }
}
