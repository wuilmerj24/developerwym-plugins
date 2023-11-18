import { Color, Frame, GridLayout, Image, GridUnitType, ItemSpec, Screen, TextField, Label, Button, ContainerView, View, ContentView, Utils, StackLayout, GestureTypes, TapGestureEventData, ShowModalOptions, getCurrentPage, AndroidActivityRequestPermissionsEventData, AndroidApplication, Application, ViewBase, EventData } from '@nativescript/core';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { RecyclerViewCustomView } from './class/recyclerviewcustomview.andorid';
import { ModalAlbunNames } from './class/modal.class';
import { MediaStoreData } from './interfaces/mediastore.interface';
import { MediaStoreHelperAndroid } from './class/mediastorehelper.android';
import { ELenguajesSoportados } from './enums/language.enum';
import { OrientationView } from './enums/orientation.enum';
import { Traductor } from './class/language';
import { UCropModalAndroid } from './class/modaledit.android';
import { ModalViewPresentarImagen } from './class/modalpresent.android';

declare var developerwym;

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

    if (this.checkPermisos()) {
      this.renderUI();
    } else {
      const msjPermisos: Label = new Label();
      msjPermisos.text = this.currentIdioma.obtenerTraduccion('msj_permiso');
      msjPermisos.fontSize = 24;
      msjPermisos.style.fontWeight = 'bold';
      msjPermisos.textWrap = true;
      msjPermisos.color = new Color('white');
      msjPermisos.rowSpan = 3;
      msjPermisos.verticalAlignment = 'middle';
      msjPermisos.horizontalAlignment = 'center';
      msjPermisos.margin = '10';
      gridContenedor.addChild(msjPermisos);
      this.solicitarPermiso()
        .then((res) => {
          gridContenedor.removeChild(msjPermisos);
          this.renderUI();
        })
        .catch((err) => {});
    }
    Frame.topmost()._addView(gridContenedor);
    return gridContenedor.android;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  private renderUI() {
    const mediaStore = new MediaStoreHelperAndroid(this._context);
    this.dataFiles = mediaStore.getImagenes();
    if (this.dataFiles.length <= 0) {
      const msjNoData: Label = new Label();
      msjNoData.text = this.currentIdioma.obtenerTraduccion('msj_no_data');
      msjNoData.fontSize = 24;
      msjNoData.style.fontWeight = 'bold';
      msjNoData.textWrap = true;
      msjNoData.color = new Color('white');
      msjNoData.rowSpan = 3;
      msjNoData.verticalAlignment = 'middle';
      msjNoData.horizontalAlignment = 'center';
      msjNoData.margin = '10';
      this.gridMaster.addChild(msjNoData);
      return;
    }

    this.rv = this.createBody();
    this.rv.row = 1;
    if (this.orientation == OrientationView.H) {
      this.height = (Screen.mainScreen.heightDIPs * 24) / 100;
    } else if (this.orientation == OrientationView.V) {
      this.height = Screen.mainScreen.heightDIPs;
    }
    this.gridMaster.addChild(this.rv);
    this.headerGrid = this.createHeader();

    if (this.showHeader) {
      this.gridMaster.addChild(this.headerGrid);
    }

    this.footerGrid = this.createFooter();
    if (this.showFooter) {
      this.gridMaster.addChild(this.footerGrid);
    }
  }

  private checkPermisos(): any {
    let permisos: Array<any> = new Array();
    if (android.os.Build.VERSION.SDK_INT >= 33) {
      permisos = [android.Manifest.permission.READ_MEDIA_AUDIO, android.Manifest.permission.READ_MEDIA_IMAGES, android.Manifest.permission.READ_MEDIA_VIDEO];
    } else {
      permisos = [android.Manifest.permission.READ_EXTERNAL_STORAGE];
    }
    const granted = android.content.pm.PackageManager.PERMISSION_GRANTED;
    const permisos_respuesta: Array<any> = new Array();
    for (let i: number = 0; i < permisos.length; i++) {
      if (android.os.Build.VERSION.SDK_INT < 23) {
        permisos_respuesta.push((this._context as android.content.Context).checkPermission(permisos[i], android.os.Process.myPid(), android.os.Process.myUid()) === android.content.pm.PackageManager.PERMISSION_GRANTED ? 'authorized' : 'denied');
      } else {
        permisos_respuesta.push((this._context as android.content.Context).checkSelfPermission(permisos[i]));
      }
    }
    if (permisos_respuesta.some((elemento) => elemento === -1)) {
      return false;
    } else if (permisos_respuesta.some((elemento) => elemento === 0)) {
      return true;
    } else {
      return false;
    }
  }

  private solicitarPermiso(): Promise<any> {
    let permisos: Array<any> = new Array();
    if (android.os.Build.VERSION.SDK_INT >= 33) {
      permisos = [android.Manifest.permission.READ_MEDIA_AUDIO, android.Manifest.permission.READ_MEDIA_IMAGES, android.Manifest.permission.READ_MEDIA_VIDEO];
    } else {
      permisos = [android.Manifest.permission.READ_EXTERNAL_STORAGE];
    }

    const activity: android.app.Activity = Application.android.foregroundActivity || Application.android.startActivity;
    return new Promise<any>((rs, rj) => {
      try {
        activity.requestPermissions(permisos, 1001);
        const onActivityResult = (args: AndroidActivityRequestPermissionsEventData) => {
          let grantedPermissions: Array<any> = new Array();
          if (args.requestCode === 1001) {
            Application.off(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
            const results = args.grantResults;
            for (let j = 0; j < permisos.length; j++) {
              const permission = permisos[j];
              if (results.length > j && results[j] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                grantedPermissions.push('authorized');
              } else {
                if (activity.shouldShowRequestPermissionRationale(permission)) {
                  grantedPermissions.push('denied');
                } else {
                  grantedPermissions.push('never_ask_again');
                }
              }
            }

            if (grantedPermissions.some((elemento) => elemento === 'denied')) {
              CLog('se mete en denied');
              rj(false);
            } else if (grantedPermissions.some((elemento) => elemento === 'authorized') || grantedPermissions.some((elemento) => elemento === 'never_ask_again')) {
              CLog('se mete en authorized');
              rs(true);
            }
          }
        };
        AndroidApplication.on(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
      } catch (error) {
        rj(error);
      }
    });
  }

  private createHeader(): GridLayout {
    const ref = new WeakRef(this);

    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.backgroundColor = new Color(this.headerBgColor);
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = (Screen.mainScreen.heightDIPs * 7) / 100;
    grid.row = 0;
    grid.boxShadow = '0px 4px 56px 8px rgba(0,0,0,0.72)';
    grid.addEventListener(GestureTypes.tap, (args: TapGestureEventData) => {
      this.openModalAlbunList(args);
    });

    // TextField albunName
    const txtAlbunName: Label = new Label();
    txtAlbunName.text = `${this.dataFiles.filter((item) => item.isSelected == true)[0].albunName} (${this.dataFiles.filter((item) => item.isSelected == true)[0].files.length})`;
    txtAlbunName.fontSize = 20;
    txtAlbunName.style.fontWeight = 'bold';
    txtAlbunName.style.paddingLeft = 10;
    txtAlbunName.col = 0;
    txtAlbunName.verticalAlignment = 'middle';
    txtAlbunName.horizontalAlignment = 'left';
    txtAlbunName.id = 'albunName';
    txtAlbunName.color = new Color(this.textColor);
    this.lblAlbunNameSelect = txtAlbunName;
    grid.addChild(txtAlbunName);

    // Label icono
    const txtIcon: Label = new Label();
    txtIcon.text = ' ˅ ';
    txtIcon.color = new Color(this.arrowIconColor);
    txtIcon.fontSize = 18;
    txtIcon.style.fontWeight = 'bold';
    txtIcon.style.paddingLeft = 10;
    txtIcon.style.paddingRight = 5;
    txtIcon.col = 1;
    txtIcon.verticalAlignment = 'middle';
    txtIcon.horizontalAlignment = 'center';
    grid.addChild(txtIcon);

    // Label contador
    const txtCont: Label = new Label();
    txtCont.text = `0/${this.selectMax}`;
    txtCont.fontSize = 18;
    txtCont.style.fontWeight = 'bold';
    txtCont.style.paddingLeft = 5;
    txtCont.style.paddingRight = 20;
    txtCont.col = 2;
    txtCont.verticalAlignment = 'middle';
    txtCont.horizontalAlignment = 'center';
    this.lblCountSelect = txtCont;
    grid.addChild(txtCont);

    return grid;
  }

  private createFooter(): GridLayout {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.backgroundColor = new Color(this.footerBgColor);
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = (Screen.mainScreen.heightDIPs * 6) / 100;
    grid.row = 2;
    grid.boxShadow = '2px -10px 27px -11px rgba(0,0,0,1)';

    const btnEdit: Button = new Button();
    btnEdit.text = this.currentIdioma.obtenerTraduccion('btn_editar');
    btnEdit.backgroundColor = new Color('transparent');
    btnEdit.col = 0;
    btnEdit.horizontalAlignment = 'center';
    btnEdit.verticalAlignment = 'middle';
    btnEdit.androidElevation = 0;
    btnEdit.color = new Color(this.textColor);
    btnEdit.borderWidth = 0;
    btnEdit.addEventListener(GestureTypes.tap, (args: EventData) => {
      try {
        // new UCropModalAndroid(this.dataFiles.filter(item => item.isSelected == true), this._context);
        const self = this;
        const options: ShowModalOptions = {
          closeCallback(args) {
            if (args) {
            }
          },
          context: {},
          animated: true,
          fullscreen: true,
          stretched: true,
        };
        // getCurrentPage().showModal(new UCropModalAndroid(this.dataFiles.filter(item => item.isSelected == true)[0].files), options);
        CLog('NOT READY YET.');
      } catch (error) {
        CLog(error);
      }
    });
    if (this.edit) {
      grid.addChild(btnEdit);
    }

    const btnPreview: Button = new Button();
    btnPreview.text = this.currentIdioma.obtenerTraduccion('btn_presentar');
    btnPreview.backgroundColor = new Color('transparent');
    btnPreview.col = 1;
    btnPreview.horizontalAlignment = 'center';
    btnPreview.verticalAlignment = 'middle';
    btnPreview.androidElevation = 0;
    btnPreview.borderWidth = 0;
    btnPreview.color = new Color(this.textColor);
    btnPreview.on('tap', (args: EventData) => {
      if (this.dataFiles[0].files.filter((item) => item.isSelected == true).length > 0) {
        const options: ShowModalOptions = {
          closeCallback(...args) {
            if (args.length > 0) {
            } else {
            }
          },
          context: {},
          animated: true,
          fullscreen: true,
          stretched: true,
        };
        getCurrentPage().showModal(new ModalViewPresentarImagen(this.dataFiles[0].files.filter((item) => item.isSelected == true)), options);
      }
    });
    if (this.preview) {
      grid.addChild(btnPreview);
    }

    return grid;
  }

  private createBody(): RecyclerViewCustomView {
    const ref = new WeakRef(this);
    const rv: RecyclerViewCustomView = new RecyclerViewCustomView(this._context, this.selectMax, this.orientation, this.dataFiles);
    Utils.setTimeout(() => {
      rv.nativeView.addOnItemTouchListener(
        new developerwym.plugins.ns.RecyclerTouchListener(
          this._context,
          rv.nativeView,
          new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
            onClick: (view: android.view.View, position: number) => {
              this.dataFiles[0].files[position].isSelected = !this.dataFiles[0].files[position].isSelected;
              CLog(this.dataFiles[0].files[position].file);
              const current_select: number = this.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true).length;
              if (current_select <= this.selectMax) {
                const fl_local: android.widget.FrameLayout = view as android.widget.FrameLayout;
                const radiobtn: android.widget.RadioButton = fl_local.getChildAt(1) as android.widget.RadioButton;
                if (this.dataFiles[0].files[position].isSelected) {
                  radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color('green').android));
                } else {
                  radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color('transparent').android));
                }
                radiobtn.setChecked(this.dataFiles[0].files[position].isSelected);
                this.lblCountSelect.text = `${current_select}/${this.selectMax}`;
              } else {
                if (this.debug) {
                  CLog(`Select count max: ${this.selectMax} | current:${current_select}`);
                }
                this.dataFiles[0].files[position].isSelected = false;
              }

              ref?.get()?.sendEvent(
                GalleryView.clickEvent,
                this.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true)
              );
            },
            onLongClick: (view: android.view.View, position: number) => {
              // CLog("onLongClick")
            },
          })
        )
      );

      rv.nativeView.addOnScrollListener(
        new developerwym.plugins.ns.CustomRecyclerView(
          this._context,
          rv.nativeView,
          new developerwym.plugins.ns.CustomRecyclerView.ScrollEvento({
            onScrolled: (recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number) => {
              ref?.get()?.sendEvent(
                GalleryView.scrollEvent,
                this.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true)
              );
            },
            onScrollStateChanged: (recyclerView: androidx.recyclerview.widget.RecyclerView, state: number) => {
              // CLog("onScrollStateChanged")
            },
          })
        )
      );
    }, 500);
    return rv;
  }

  // abrir modal para mostrar lista de albuns
  private openModalAlbunList(args: TapGestureEventData) {
    const self = this;
    const options: ShowModalOptions = {
      closeCallback(args) {
        if (args) {
          self.dataFiles.filter((item) => item.isSelected == true)[0].isSelected = !self.dataFiles.filter((item) => item.isSelected == true)[0].isSelected;
          self.dataFiles[parseInt(args.index)].isSelected = !self.dataFiles[parseInt(args.index)].isSelected;
          self.lblAlbunNameSelect.text = `${self.dataFiles.filter((item) => item.isSelected)[0].albunName} (${self.dataFiles.filter((item) => item.isSelected)[0].files.length})`;
          self.rv.setDataNew();
        }
      },
      context: {},
      animated: true,
      fullscreen: true,
      stretched: true,
    };
    getCurrentPage().showModal(new ModalAlbunNames(this.dataFiles), options);
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    Frame.topmost()._removeView(this.gridMaster);
  }
}
