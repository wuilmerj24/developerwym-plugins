import { Color, Utils } from '@nativescript/core';
import { GalleryViewCommon } from './common';

export class GalleryView extends GalleryViewCommon {
  rv: androidx.recyclerview.widget.RecyclerView;
  contenedor: android.widget.RelativeLayout;
  createNativeView(): Object {
    this.contenedor = new android.widget.RelativeLayout(this._context);
    this.contenedor.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    // Verificar los permisos
    this.rv = new androidx.recyclerview.widget.RecyclerView(this._context);
    this.rv.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT, androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT));
    // HORIZONTAL
    // const linerLayout: androidx.recyclerview.widget.LinearLayoutManager = new androidx.recyclerview.widget.LinearLayoutManager(this._context, androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL,false);
    // this.rv.setLayoutManager(linerLayout);

    // VERTICAL
    const gridLayout: androidx.recyclerview.widget.GridLayoutManager = new androidx.recyclerview.widget.GridLayoutManager(this._context, 5);
    this.rv.setLayoutManager(gridLayout);

    const data: java.util.ArrayList<any> = new java.util.ArrayList<any>();
    for (let i: number = 0; i < 100; i++) {
      data.add(`data ${i + 1}`);
    }

    const recyclerViewController = new developerwym.plugins.ns.RecyclerViewController(this._context);
    recyclerViewController.setAdapterRecyclerView(this.rv);

    this.contenedor.addView(this.rv);
    return this.contenedor;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    this.rv = null;
    this.contenedor = null;
  }
}

@NativeClass()
class MyViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public textView: android.widget.TextView;

  constructor(private context: android.content.Context) {
    super(new android.widget.TextView(context));
    this.textView = this.itemView as android.widget.TextView;
    this.textView.setText('texto de prueba');
    this.textView.setTextSize(30);
  }
}
