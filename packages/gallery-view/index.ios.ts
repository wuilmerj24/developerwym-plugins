import { Color, Frame, GridLayout, GridUnitType, ItemSpec, Label, Screen } from '@nativescript/core';
import { RecyclerViewCustomView } from './class/recyclerviewcustomview.andorid';
import { GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/language.enum';
import { OrientationView } from './enums/orientation.enum';
import { MediaStoreData } from './interfaces/mediastore.interface';
import { Traductor } from './class/language';

export class GalleryView extends GalleryViewCommon {
  private gridMaster: GridLayout;
  private headerGrid: GridLayout;
  private footerGrid: GridLayout;
  private lblAlbunNameSelect: Label;
  private lblCountSelect: Label;
  private rv: RecyclerViewCustomView;
  private dataFiles: Array<MediaStoreData> = new Array();
  @GetSetProperty()
  public language: ELenguajesSoportados;
  @GetSetProperty()
  public showHeader: boolean;
  @GetSetProperty()
  public headerBgColor: string;
  @GetSetProperty()
  public arrowIconColor: string;
  @GetSetProperty()
  public selectMax: number;
  @GetSetProperty()
  public showFooter: boolean;
  @GetSetProperty()
  public footerBgColor: string;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  public textColor: string;
  @GetSetProperty()
  public orientation: OrientationView;
  constructor() {
    super();
  }

  createNativeView(): Object {
    this.currentIdioma = new Traductor(this.language);
    const gridContenedor: GridLayout = new GridLayout();
    gridContenedor.backgroundColor = new Color('red');
    gridContenedor.width = Screen.mainScreen.widthDIPs;
    gridContenedor.height = Screen.mainScreen.heightDIPs;

    gridContenedor.addRow(new ItemSpec(1, GridUnitType.AUTO));
    gridContenedor.addRow(new ItemSpec(1, GridUnitType.STAR));
    gridContenedor.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.gridMaster = gridContenedor;

    Frame.topmost()._addView(gridContenedor);
    return gridContenedor.android;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
