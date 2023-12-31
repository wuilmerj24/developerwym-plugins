import { Utils, View } from '@nativescript/core';
import { OrientationView } from '../enums/orientation.enum';
import { GaleriaViewAlbumnsData } from '../class/data.imagenes.class';
import { RecyclerAdapterMyPluginDeveloper } from '../adaptadores/adaptador.android';

export class ListaView extends View {
  private _rv: androidx.recyclerview.widget.RecyclerView;
  private _adaptador: RecyclerAdapterMyPluginDeveloper;
  constructor() // private files:Array<GaleriaViewAlbumnsData>,
  {
    super();
  }

  createNativeView(): Object {
    this._rv = new androidx.recyclerview.widget.RecyclerView(this._context);
    this._rv.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT, androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT));
    this._rv.setHasFixedSize(true);
    this._rv.setId(android.view.View.generateViewId());
    this._rv.setAddStatesFromChildren(true);
    this._rv.setEnabled(true);
    this.nativeView = this._rv;
    return this.nativeView;
  }

  public get nativeView(): androidx.recyclerview.widget.RecyclerView {
    return this._rv;
  }

  public set nativeView(value: androidx.recyclerview.widget.RecyclerView) {
    this.setNativeView(value);
  }

  public set orientacion(value: OrientationView) {
    if (value == OrientationView.H) {
      const layout: androidx.recyclerview.widget.LinearLayoutManager = new androidx.recyclerview.widget.LinearLayoutManager(this._context, 1, false);
      layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL);
      this._rv.setLayoutManager(layout);
    } else if (value == OrientationView.V) {
      const layout: androidx.recyclerview.widget.GridLayoutManager = new androidx.recyclerview.widget.GridLayoutManager(this._context, 4);
      layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.VERTICAL);
      this._rv.setLayoutManager(layout);
    }
  }

  public set adaptador(files: Array<GaleriaViewAlbumnsData>) {
    this._adaptador = new RecyclerAdapterMyPluginDeveloper(files);
    this.nativeView.setAdapter(this._adaptador);
    Utils.setTimeout(() => {
      this._rv.setItemViewCacheSize(this._adaptador.getItemCount());
      this._adaptador.notifyDataSetChanged();
    }, 10);
  }

  public get adaptador(): any {
    return this._adaptador;
  }
}
