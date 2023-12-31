import { Color, EventData, GestureTypes, GridLayout, GridUnitType, Image, ItemSpec, Label, RootLayout, Screen, ScrollEventData, ScrollView, SearchBar, StackLayout, Utils, View, getRootLayout } from '@nativescript/core';
import { GaleriaViewAlbumns } from '../class/data.imagenes.class';
import { CLog } from '../common';
import { ImageViewNativoAndroid } from './image.android';

export class ModalAlbuns extends GridLayout {
  private imgBtn: Image;
  constructor(private files: Array<GaleriaViewAlbumns>, private rootLayout: RootLayout) {
    super();
    this.width = Screen.mainScreen.widthDIPs;
    this.height = 350;
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.backgroundColor = new Color('#f3f3f3');
    this.verticalAlignment = 'bottom';
    this.borderRadius = 5;
  }

  initNativeView(): void {
    super.initNativeView();
    CLog('date: ', new Date());
  }

  onLoaded(): void {
    super.onLoaded();
    this.imgBtn = new Image();
    this.imgBtn.row = 0;
    this.imgBtn.verticalAlignment = 'middle';
    this.imgBtn.horizontalAlignment = 'left';
    this.imgBtn.width = 32;
    this.imgBtn.height = 32;
    this.imgBtn.src = 'res://baseline_close_24';
    this.imgBtn.margin = 10;
    this.imgBtn.addEventListener('tap', (args: EventData) => {
      this.rootLayout.notify({
        eventName: 'closedRootL',
        object: this,
        data: null,
      } as any);
      this.rootLayout
        .close(this, {})
        .then((res) => {
          CLog('res ', res);
        })
        .catch((err) => {
          CLog('err ', err);
        });
    });
    this.addChild(this.imgBtn);

    const scroll: ScrollView = new ScrollView();
    scroll.width = Screen.mainScreen.widthDIPs;
    scroll.row = 1;
    const grid: GridLayout = new GridLayout();
    grid.width = Screen.mainScreen.widthDIPs;

    for (let i: number = 0; i < this.files.length; i++) {
      const gridB: GridLayout = new GridLayout();
      gridB.addColumn(new ItemSpec(1, GridUnitType.AUTO));
      gridB.addColumn(new ItemSpec(1, GridUnitType.STAR));
      gridB.addColumn(new ItemSpec(1, GridUnitType.AUTO));
      gridB.height = (Screen.mainScreen.heightDIPs * 7) / 100;

      const img: ImageViewNativoAndroid = new ImageViewNativoAndroid(this.files[i].icon);
      img.width = 52;
      img.height = 52;
      img.col = 0;
      img.borderRadius = 15;
      img.margin = 5;
      img.verticalAlignment = 'middle';
      img.horizontalAlignment = 'center';
      gridB.addChild(img);

      const titulo: Label = new Label();
      titulo.text = this.files[i].albunName;
      titulo.fontSize = 18;
      titulo.style.fontWeight = 'bold';
      titulo.verticalAlignment = 'middle';
      titulo.horizontalAlignment = 'left';
      titulo.col = 1;
      titulo.textWrap = true;
      gridB.addChild(titulo);

      const circulo: GridLayout = new GridLayout();
      circulo.width = 22;
      circulo.height = 22;
      circulo.borderColor = new Color('black');
      circulo.borderWidth = 1;
      circulo.col = 2;
      circulo.verticalAlignment = 'middle';
      circulo.horizontalAlignment = 'center';
      circulo.borderRadius = 100;
      gridB.addChild(circulo);

      const itemSelect: boolean = this.files[i].isSelected;
      const circulob: GridLayout = new GridLayout();
      circulob.width = 12;
      circulob.height = 12;
      circulob.backgroundColor = new Color('black');
      circulob.col = 2;
      circulob.verticalAlignment = 'middle';
      circulob.horizontalAlignment = 'center';
      circulob.borderRadius = 100;
      circulob.visibility = itemSelect ? 'visible' : 'hidden';
      gridB.addChild(circulob);
      gridB.addEventListener('tap', (args: EventData) => {
        const oldIndex: number = this.files.findIndex((item) => item.isSelected == true);
        this.rootLayout.notify({
          eventName: 'closedRootL',
          object: this,
          data: { index: i, oldIndex: oldIndex },
        } as any);
        grid.removeEventListener('tap');
        this.rootLayout
          .close(this, {})
          .then((res) => {
            CLog('res ', res);
          })
          .catch((err) => {
            CLog('err ', err);
          });
      });

      gridB.row = grid.getRows().length;
      grid.addChild(gridB);
      grid.addRow(new ItemSpec(1, GridUnitType.AUTO));
    }

    scroll.content = grid;
    this.addChild(scroll);
  }

  disposeNativeView(): void {
    this.imgBtn.removeEventListener('tap');
    super.disposeNativeView();
  }

  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;
  on(event: 'scroll', callback: (args: ScrollEventData) => void, thisArg?: any): void;
  on(event: unknown, callback: unknown, thisArg?: unknown): void {
    CLog('hizo scroll ');
  }
}
