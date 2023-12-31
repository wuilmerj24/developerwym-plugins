import { Button, Color, EventData, GridLayout, GridUnitType, ItemSpec, Label, View, Screen, Utils, Image } from '@nativescript/core';
import { GaleriaViewAlbumnsData } from '../class/data.imagenes.class';
import { CLog } from '../common';

export class ModalPreviewImagesForAndroid extends GridLayout {
  private posicion: number = 1;
  private titulo: Label;
  constructor(private files: Array<GaleriaViewAlbumnsData>) {
    super();
    this.backgroundColor = new Color('black');
    this.configureActionBar();
    this.configureData();
  }

  configureActionBar() {
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    const actionBar: GridLayout = new GridLayout();
    actionBar.marginTop = 5;
    actionBar.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    actionBar.addColumn(new ItemSpec(1, GridUnitType.STAR));
    actionBar.row = 0;
    actionBar.backgroundColor = new Color('black');
    const btnBack: Image = new Image();
    btnBack.col = 0;
    btnBack.src = 'res://baseline_close_24';
    btnBack.androidElevation = -1;
    btnBack.color = new Color('#FFFFFF');
    btnBack.width = 32;
    btnBack.height = 32;
    btnBack.on('tap', (args: EventData) => {
      this.closeModal();
    });
    actionBar.addChild(btnBack);

    this.titulo = new Label();
    this.titulo.text = `${this.posicion}/${this.files.length}`;
    this.titulo.fontSize = 20;
    this.titulo.style.fontWeight = 'bold';
    this.titulo.verticalAlignment = 'middle';
    this.titulo.horizontalAlignment = 'center';
    this.titulo.col = 1;
    actionBar.addChild(this.titulo);

    this.addChild(actionBar);
  }

  configureData() {
    const viewpager2: ViewPager2DeveloperwymPlugin = new ViewPager2DeveloperwymPlugin(this.files);
    viewpager2.row = 1;
    viewpager2.width = Screen.mainScreen.widthDIPs;
    viewpager2.height = Screen.mainScreen.heightDIPs;
    this.addChild(viewpager2);
    const self = this;
    Utils.setTimeout(() => {
      viewpager2.nativeView.registerOnPageChangeCallback(
        new PageChangeCallbackEvent({
          onPageScrolled(position, positionOffset, positionOffsetPixels) {},
          onPageScrollStateChanged(position) {},
          onPageSelected(position) {
            self.posicion = 1 + position;
            self.titulo.text = `${self.posicion}/${self.files.length}`;
          },
        })
      );
    }, 200);
  }
}

class ViewPager2DeveloperwymPlugin extends View {
  private viewpager2: androidx.viewpager2.widget.ViewPager2;
  constructor(private files: Array<GaleriaViewAlbumnsData>) {
    super();
  }

  createNativeView(): Object {
    this.viewpager2 = new androidx.viewpager2.widget.ViewPager2(this._context);
    this.viewpager2.setLayoutParams(new androidx.viewpager2.widget.ViewPager2.LayoutParams(androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT, androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT));
    const adaptador: ViewPager2AdapterPluginsDeveloperwym = new ViewPager2AdapterPluginsDeveloperwym(this.files);
    this.viewpager2.setAdapter(adaptador);
    this.viewpager2.setOrientation(androidx.viewpager2.widget.ViewPager2.ORIENTATION_HORIZONTAL);
    const that = this;
    // this.viewpager2.registerOnPageChangeCallback(
    //     new PageChangeCallbackEvent({
    //         onPageScrolled(position, positionOffset, positionOffsetPixels) { },
    //         onPageScrollStateChanged(position) { },
    //         onPageSelected(position) {
    //         },
    //     })
    // );
    this.nativeView = this.viewpager2;
    return this.viewpager2;
  }
  get nativeView(): androidx.viewpager2.widget.ViewPager2 {
    return this.viewpager2;
  }
  set nativeView(value: androidx.viewpager2.widget.ViewPager2) {
    this.setNativeView(value);
  }
}

@NativeClass()
export class ViewPager2AdapterPluginsDeveloperwym extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
  constructor(private files: Array<GaleriaViewAlbumnsData>) {
    super();
  }

  public getItemCount(): number {
    if (this.files != null || this.files != undefined || this.files.length == 0) {
      return this.files.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder {
    const ly: android.widget.LinearLayout = new android.widget.LinearLayout(parent.getContext());
    ly.setId(android.view.View.generateViewId());
    ly.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
    img.setId(android.view.View.generateViewId());
    ly.addView(img);
    return new ViewHolderImagesAdapter(ly, img.getId());
  }

  public onBindViewHolder(param0: unknown, param1: unknown, param2?: unknown): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void {
    try {
      com.bumptech.glide.Glide.with(holder.itemView.getContext())
        .load(this.files[position].file)
        .centerCrop()
        .override(200, 200)
        .fallback(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE))
        .placeholder(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY))
        .error(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED))
        .priority(com.bumptech.glide.Priority.HIGH)
        .diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.ALL)
        //.diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.NONE)
        .onlyRetrieveFromCache(false)
        .skipMemoryCache(false)
        .thumbnail(0.25)
        .into((holder as any).imageView);
    } catch (error) {
      CLog('error ', error);
    }
  }
}

@NativeClass()
class ViewHolderImagesAdapter extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public imageView: android.widget.ImageView;
  constructor(private view: android.view.View, private vid: number) {
    super(view);
    this.imageView = view.findViewById(this.vid) as android.widget.ImageView;
    this.imageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
  }
}

interface ViewPager2EventListener {
  onPageScrollStateChanged(position: number);
  onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number);
  onPageSelected(position: number);
}

@NativeClass
class PageChangeCallbackEvent extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
  private listener: ViewPager2EventListener;
  constructor(_listener: ViewPager2EventListener) {
    super();
    this.listener = _listener;
  }

  public onPageScrollStateChanged(position: number): void {
    super.onPageScrollStateChanged(position);
    this.listener.onPageScrollStateChanged(position);
  }

  public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void {
    super.onPageScrolled(position, positionOffset, positionOffsetPixels);
    this.listener.onPageScrolled(position, positionOffset, positionOffsetPixels);
  }

  public onPageSelected(position: number): void {
    super.onPageSelected(position);
    this.listener.onPageSelected(position);
  }
}
