import { GaleriaViewAlbumnsData } from '../class/data.imagenes.class';
import { CLog } from '../common';

@NativeClass()
export class RecyclerAdapterMyPluginDeveloper extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
  constructor(private files: Array<GaleriaViewAlbumnsData>) {
    super();
  }

  public getItemCount(): number {
    if (this.files != null || this.files != undefined || this.files.length == 0) {
      return this.files.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolder {
    const fl: android.widget.FrameLayout = new android.widget.FrameLayout(parent.getContext());
    fl.setLayoutParams(new android.widget.FrameLayout.LayoutParams(300, 260));

    const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
    img.setId(android.view.View.generateViewId());
    img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    img.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    const radiobtn: android.widget.RadioButton = new android.widget.RadioButton(parent.getContext());
    radiobtn.setLayoutParams(new android.view.ViewGroup.LayoutParams(100, 100));
    radiobtn.setId(android.view.View.generateViewId());
    radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(android.graphics.Color.GRAY));

    const gradientDrawable: android.graphics.drawable.GradientDrawable = new android.graphics.drawable.GradientDrawable();
    gradientDrawable.setColor(android.graphics.Color.WHITE);
    gradientDrawable.setStroke(5, android.graphics.Color.WHITE);
    gradientDrawable.setCornerRadius(12);
    const capa: android.widget.FrameLayout = new android.widget.FrameLayout(parent.getContext());
    capa.setLayoutParams(new android.widget.FrameLayout.LayoutParams(300, 260));
    capa.setBackgroundColor(android.graphics.Color.argb(150, 0, 0, 0));
    capa.setVisibility(android.widget.FrameLayout.INVISIBLE);
    capa.setId(android.view.View.generateViewId());

    img.setBackground(gradientDrawable);
    fl.setBackground(gradientDrawable);
    fl.addView(img);
    fl.addView(capa);
    fl.addView(radiobtn);
    fl.setPadding(1, 1, 1, 1);
    fl.setBackgroundColor(android.graphics.Color.BLACK);
    return new ViewHolder(fl, img.getId(), radiobtn.getId(), capa.getId());
  }

  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: ViewHolder, position: number): void {
    try {
      if (this.files[position].getIsSelected) {
        holder.radio.setChecked(true);
      }
      {
        holder.radio.setChecked(false);
      }

      com.bumptech.glide.Glide.with(holder.itemView.getContext())
        .load(this.files[position].file)
        .centerCrop()
        .override(250)
        .fallback(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE))
        .placeholder(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY))
        .error(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED))
        .priority(com.bumptech.glide.Priority.HIGH)
        .diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.ALL)
        //.diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.NONE)
        .onlyRetrieveFromCache(false)
        .skipMemoryCache(false)
        .into(holder.img);
    } catch (error) {
      CLog('se genero un error Glide ', error);
    }
  }

  public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
    super.onDetachedFromRecyclerView(param0);
  }
}

@NativeClass()
class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public img: android.widget.ImageView;
  public radio: android.widget.RadioButton;
  public capa: android.widget.FrameLayout;
  constructor(private view: android.view.View, private imgId: number, private radioId: number, private capaId: number) {
    super(view);
    this.img = this.itemView.findViewById(imgId) as android.widget.ImageView;
    this.radio = this.itemView.findViewById(radioId) as android.widget.RadioButton;
    this.capa = this.itemView.findViewById(capaId) as android.widget.FrameLayout;
  }
}
