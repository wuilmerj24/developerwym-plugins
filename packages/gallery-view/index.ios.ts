import { Button, Color, Device, EventData, Frame, GestureTypes, GridLayout, GridUnitType, ItemSpec, Label, Page, Screen, ShowModalOptions, TapGestureEventData, Utils, getCurrentPage } from '@nativescript/core';
import { RecyclerViewCustomView } from './class/recyclerviewcustomview.andorid';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/language.enum';
import { OrientationView } from './enums/orientation.enum';
import { MediaStoreData, MediaStoreDataFiles } from './interfaces/mediastore.interface';
import { Traductor } from './class/language';
import { getCurrentActivity } from '@nativescript/core/utils/android';
import { MediaStoreHelperAndroid } from './class/mediastorehelper.android';
import { TypeFileShow } from './enums/typefiles.enums';
import { MediaStoreHelperIos } from './class/mediastorehelper.ios';
import { CollectionViewGaleria } from './class/uicollectionview.ios';

export class GalleryView extends GalleryViewCommon {
  private gridMaster: GridLayout;
  private headerGrid: GridLayout;
  private footerGrid: GridLayout;
  private lblAlbunNameSelect: Label;
  private lblCountSelect: Label;
  private rv: CollectionViewGaleria;
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
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
  _nativeView: UIView;
  constructor() {
    super();
    this.width = Screen.mainScreen.widthDIPs;
    this.height = Screen.mainScreen.heightDIPs;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
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
        .catch((err) => {
          CLog('Error solicitarPermiso', err);
        });
    }
    this.page.content = gridContenedor;
    return gridContenedor.ios;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }

  private checkPermisos(): any {
    let photoStatus: PHAuthorizationStatus;
    let status = false;
    if (parseFloat(Device.osVersion) >= 14) {
      photoStatus = PHPhotoLibrary.authorizationStatusForAccessLevel(PHAccessLevel.ReadWrite);
    } else {
      photoStatus = PHPhotoLibrary.authorizationStatus();
    }

    switch (photoStatus) {
      case PHAuthorizationStatus.Limited:
        status = true;
        break;
      case PHAuthorizationStatus.Authorized:
        status = true;
        break;
      case PHAuthorizationStatus.Denied:
        status = false;
        break;
      case PHAuthorizationStatus.Restricted:
        status = false;
        break;
      default:
        status = false;
    }

    const videoStatus = AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo);
    let videoStatusPermisos = false;
    switch (videoStatus) {
      case AVAuthorizationStatus.Authorized:
        videoStatusPermisos = true;
        break;
      case AVAuthorizationStatus.Denied:
        videoStatusPermisos = false;
        break;
      case AVAuthorizationStatus.Restricted:
        videoStatusPermisos = false;
        break;
      default:
        videoStatusPermisos = false;
    }

    if (status && videoStatusPermisos) {
      return true;
    } else {
      return false;
    }
  }

  private solicitarPermiso(): Promise<any> {
    return new Promise<any>((rs, rj) => {
      try {
        PHPhotoLibrary.requestAuthorization((pl: PHAuthorizationStatus) => {
          CLog('PHAuthorizationStatus ', pl);
          if (pl == PHAuthorizationStatus.Authorized || pl == PHAuthorizationStatus.Limited) {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, (pl_video: boolean) => {
              rs(pl_video);
            });
          } else {
            rj(false);
          }
        });
      } catch (error) {
        rj(error);
      }
    });
  }

  private renderUI() {
    const mediaStore: MediaStoreHelperIos = new MediaStoreHelperIos();
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    const files: Array<MediaStoreDataFiles> = new Array();
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    for (let i: number = 0; i < 200; i++) {
      files.push({
        id: `${i + 1}`,
        file: 'https://i.pinimg.com/736x/4d/72/77/4d727782288471a4310001b63c13e65f.jpg',
        isSelected: false,
        type: TypeFileShow.IMAGE,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    for (let i: number = 0; i < 20; i++) {
      this.dataFiles.push({
        id: `${i + 1}`,
        icon: 'https://i.pinimg.com/736x/4d/72/77/4d727782288471a4310001b63c13e65f.jpg',
        isSelected: i == 0 ? true : false,
        albunName: 'test 1',
        files: files,
      });
    }

    const dataFiles = mediaStore.getImagenes();

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

    this.headerGrid = this.createHeader();
    if (this.showHeader) {
      this.gridMaster.addChild(this.headerGrid);
    }
    try {
      this.rv = this.createBody();
      this.gridMaster.addChild(this.rv);
    } catch (error) {
      CLog('error cv', error);
    }

    this.footerGrid = this.createFooter();
    if (this.showFooter) {
      this.gridMaster.addChild(this.footerGrid);
    }
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
      // this.openModalAlbunList(args);
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
        const options: ShowModalOptions = {
          closeCallback(args) {
            CLog('s');
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          closeCallback(args) {
            CLog('s');
          },
          context: {},
          animated: true,
          fullscreen: true,
          stretched: true,
        };
        // getCurrentPage().showModal(new ModalViewPresentarImagen(this.dataFiles[0].files.filter((item) => item.isSelected == true)), options);
      }
    });
    if (this.preview) {
      grid.addChild(btnPreview);
    }

    return grid;
  }

  private createBody(): CollectionViewGaleria {
    const cv: CollectionViewGaleria = new CollectionViewGaleria(this.dataFiles);
    cv.row = 1;
    return cv;
  }
}
