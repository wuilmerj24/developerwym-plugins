import { Color, View } from '@nativescript/core';
import { Shape } from '../enums/formas.enum';
import { AdapterCAndroid } from '../adapters/adapterC.android';
import { CalendarMonth } from '../interfaces/meses.interface';
import { Dia } from '../interfaces/dias.interface';

export class ListaAndroid extends View {
  private _rv: androidx.recyclerview.widget.RecyclerView;

  constructor(private txtColorMonth: string, private txtColorMonthSize: number, private txtColorDayName: string, private txtColorDayNameSize: number, private txtColorDayNum: string, private txtColorDayNumSize: number, private currentDateBorderColor: string, private bgColorActive: string, private bgColorDeactive: string) {
    super();
  }
  createNativeView(): Object {
    this._rv = new androidx.recyclerview.widget.RecyclerView(this._context);
    this._rv.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT, 300));
    this._rv.setId(android.view.View.generateViewId());
    this._rv.addItemDecoration(new ItemSpacingDecoration(10));
    this.nativeView = this._rv;
    return this.nativeView;
  }

  public get nativeView(): androidx.recyclerview.widget.RecyclerView {
    return this._rv;
  }

  public set nativeView(value: androidx.recyclerview.widget.RecyclerView) {
    this.setNativeView(value);
  }

  public set_shape(value: Shape, error_view: string, files: Array<Dia>, changePosition: boolean) {
    const position: number = files.findIndex((item) => item.isCurrentDate == true);
    const adaptador = new AdapterCAndroid(files, value, error_view, this.txtColorDayName, this.txtColorDayNameSize, this.txtColorDayNum, this.txtColorDayNumSize, this.currentDateBorderColor, this.bgColorActive, this.bgColorDeactive);
    this._rv.setAdapter(adaptador);
    const layout: androidx.recyclerview.widget.LinearLayoutManager = new androidx.recyclerview.widget.LinearLayoutManager(this._context, 1, false);
    layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL);
    this._rv.setLayoutManager(layout);
    this._rv.setItemViewCacheSize(adaptador.getItemCount());
    adaptador.notifyDataSetChanged();
    if (changePosition) {
      this._rv.smoothScrollToPosition(position + 2.1);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}

@NativeClass()
export class ItemSpacingDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
  constructor(private spacing: number) {
    super();
  }

  public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
  public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
  public getItemOffsets(outRect: android.graphics.Rect, view: any, parent: any, param3?: unknown): void {
    if (parent.getChildAdapterPosition(view) != null) {
      outRect.left = this.spacing;
      outRect.right = this.spacing;
    }
  }
}
