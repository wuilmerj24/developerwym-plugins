import { Color, View, Screen } from '@nativescript/core';
import { OrientationView } from '../enums/orientation.enum';
import { MediaStoreData, MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { RecyclerAdapterMyPluginDeveloper } from '../adapters/recycleradapter';
import { CLog } from '../common';

declare var developerwym;

export class RecyclerViewCustomView extends View {
  private _rv: androidx.recyclerview.widget.RecyclerView;
  public adaptador: RecyclerAdapterMyPluginDeveloper;
  constructor(private context: android.content.Context, private selectMax: number, private orientation: OrientationView, private dataFiles: Array<MediaStoreData>) {
    super();
  }

  createNativeView(): Object {
    const rv: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
    rv.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT, androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT));
    rv.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    const dividerItemDecoration: DividerItemDecoration = new DividerItemDecoration(this._context, 2);
    rv.addItemDecoration(dividerItemDecoration);
    if (this.orientation == OrientationView.H) {
      rv.setLayoutManager(new androidx.recyclerview.widget.LinearLayoutManager(this._context, androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL, false));
      // this.height = (Screen.mainScreen.heightDIPs * 24) / 100;
    } else if (this.orientation == OrientationView.V) {
      rv.setLayoutManager(new androidx.recyclerview.widget.GridLayoutManager(this._context, 5, androidx.recyclerview.widget.RecyclerView.VERTICAL, false));
      // this.height = Screen.mainScreen.heightDIPs;
    }
    const index: number = this.dataFiles.findIndex((item) => item.isSelected == true);
    this.adaptador = new RecyclerAdapterMyPluginDeveloper(this.dataFiles[index].files, OrientationView.V, this.dataFiles[index].albunName);
    rv.setAdapter(this.adaptador);
    this.adaptador.notifyDataSetChanged();

    this._rv = rv;

    return this._rv;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  public get nativeView(): any {
    return this._rv;
  }

  public set nativeView(value: androidx.recyclerview.widget.RecyclerView) {
    this._rv = value;
  }

  public setDataNew() {
    const index: number = this.dataFiles.findIndex((item) => item.isSelected == true);
    this.adaptador = new RecyclerAdapterMyPluginDeveloper(this.dataFiles[index].files, OrientationView.V, this.dataFiles[index].albunName);
    this._rv.setAdapter(this.adaptador);
    this.adaptador.notifyDataSetChanged();
  }

  disposeNativeView(): void {
    super.disposeNativeView;
  }
}

@NativeClass()
export class DividerItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
  private dividerHeight: number;
  private dividerPaint: android.graphics.Paint;
  constructor(private context: android.content.Context, private _dividerHeight: number) {
    super();
    this.dividerHeight = _dividerHeight;
    this.dividerPaint = new android.graphics.Paint();
    this.dividerPaint.setColor(new Color('white').android);
  }

  public onDraw(param0: unknown, param1: unknown, param2?: unknown): void;
  public onDraw(canvas: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void {
    const left: number = parent.getPaddingLeft();
    const right: number = parent.getWidth() - parent.getPaddingRight();
    const childCount: number = parent.getChildCount();
    for (let i: number = 0; i < childCount; i++) {
      const child: android.view.View = parent.getChildAt(i);
      const params: androidx.recyclerview.widget.RecyclerView.LayoutParams = <androidx.recyclerview.widget.RecyclerView.LayoutParams>child.getLayoutParams();
      const top: number = child.getBottom() + params.bottomMargin;
      const bottom: number = top + this.dividerHeight;
      canvas.drawRect(left, top, right, bottom, this.dividerPaint);
    }
  }
}
