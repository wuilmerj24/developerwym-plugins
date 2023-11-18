import { Button, Color, EventData, GridLayout, GridUnitType, ItemSpec, Label, Screen, View } from '@nativescript/core';
import { MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { CLog } from '../common';

let position_global: number = 1;
let lbl: Label;

export class ModalViewPresentarImagen extends GridLayout {
  constructor(private files: Array<MediaStoreDataFiles>) {
    super();
    this.configureActionBar();
    this.configureData();
  }

  configureActionBar() {
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    const actionBar: GridLayout = new GridLayout();
    actionBar.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    actionBar.addColumn(new ItemSpec(1, GridUnitType.STAR));
    actionBar.row = 0;
    actionBar.backgroundColor = new Color('#F4F4F4');
    const btnBack: Button = new Button();
    btnBack.col = 0;
    btnBack.text = 'X';
    btnBack.backgroundColor = '#F4F4F4';
    btnBack.androidElevation = -1;
    btnBack.boxShadow = 'transparent';
    btnBack.color = new Color('#FFFFFF');
    btnBack.on('tap', (args: EventData) => {
      this.closeModal();
    });
    actionBar.addChild(btnBack);

    lbl = new Label();
    lbl.text = `${position_global}/${this.files.length}`;
    lbl.col = 1;
    lbl.color = new Color('#FFFFFF');
    lbl.fontSize = 16;
    lbl.style.fontWeight = 'bold';
    lbl.textWrap = true;
    lbl.verticalAlignment = 'middle';
    lbl.horizontalAlignment = 'center';
    actionBar.addChild(lbl);

    this.addChild(actionBar);
  }

  configureData() {
    const viewpager2: ViewPager2DeveloperwymPlugin = new ViewPager2DeveloperwymPlugin(this.files);
    viewpager2.row = 1;
    viewpager2.width = Screen.mainScreen.widthDIPs;
    viewpager2.height = Screen.mainScreen.heightDIPs;
    this.addChild(viewpager2);
  }
}

class ViewPager2DeveloperwymPlugin extends View {
  private viewpager2: androidx.viewpager2.widget.ViewPager2;
  constructor(private files: Array<MediaStoreDataFiles>) {
    super();
  }

  createNativeView(): Object {
    this.viewpager2 = new androidx.viewpager2.widget.ViewPager2(this._context);
    this.viewpager2.setLayoutParams(new androidx.viewpager2.widget.ViewPager2.LayoutParams(androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT, androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT));
    const adaptador: ViewPager2AdapterPluginsDeveloperwym = new ViewPager2AdapterPluginsDeveloperwym(this.files);
    this.viewpager2.setAdapter(adaptador);
    this.viewpager2.setOrientation(androidx.viewpager2.widget.ViewPager2.ORIENTATION_HORIZONTAL);
    const that = this;
    this.viewpager2.registerOnPageChangeCallback(
      new PageChangeCallbackEvent({
        onPageScrolled(position, positionOffset, positionOffsetPixels) {},
        onPageScrollStateChanged(position) {},
        onPageSelected(position) {
          position_global = position;
          lbl.text = `${position_global + 1}/${that.files.length}`;
        },
      })
    );
    return this.viewpager2;
  }
}

@NativeClass()
export class ViewPager2AdapterPluginsDeveloperwym extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
  constructor(private files: Array<MediaStoreDataFiles>) {
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
