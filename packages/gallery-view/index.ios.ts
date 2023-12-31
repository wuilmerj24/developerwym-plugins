import { Color, CoreTypes, Device, GestureTypes, GridLayout, GridUnitType, ItemSpec, Label, RootLayout, Screen, TapGestureEventData, Image } from '@nativescript/core';
import { GaleriaViewAlbumns } from './class/data.imagenes.class';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/idiomas.enum';
import { OrientationView } from './enums/orientation.enum';
import { ListaView } from './views/lista.android';
import { Idioma } from './class/idioma.class';
import { ModalAlbuns } from './views/modal.albuns';

export class GalleryView extends GalleryViewCommon {
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
  public fontColor: string;
  @GetSetProperty()
  public orientation: OrientationView;
  // VARIABLES LOCALES
  private gridMaster: GridLayout;
  private headerGrid: GridLayout;
  private footerGrid: GridLayout;
  private bodyView: ListaView;
  private lblAlbunNameSelect: Label;
  private lblCountSelect: Label;
  private files: Array<GaleriaViewAlbumns> = new Array();
  private rootLayout: RootLayout;

  constructor() {
    super();
  }

  createNativeView(): Object {
    this.currentIdioma = new Idioma(this.language);
    this.gridMaster = new GridLayout();
    this.gridMaster.width = Screen.mainScreen.widthDIPs;
    this.gridMaster.height = Screen.mainScreen.heightDIPs;
    this.gridMaster.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.gridMaster.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.gridMaster.addRow(new ItemSpec(1, GridUnitType.AUTO));

    if (this.checkPermisos()) {
      this.renderUI();
    } else {
      const msjPermisos: Label = new Label();
      msjPermisos.text = this.currentIdioma.obtenerTraduccion('msj_permiso');
      msjPermisos.fontSize = 24;
      msjPermisos.style.fontWeight = 'bold';
      msjPermisos.textWrap = true;
      msjPermisos.color = new Color(this.fontColor);
      msjPermisos.rowSpan = 3;
      msjPermisos.verticalAlignment = 'middle';
      msjPermisos.horizontalAlignment = 'center';
      msjPermisos.margin = '10';
      this.gridMaster.addChild(msjPermisos);
      this.solicitarPermiso()
        .then((res) => {
          CLog('res: ', res);
          if (res) {
            this.gridMaster.removeChild(msjPermisos);
            this.renderUI();
          }
        })
        .catch((err) => {
          CLog('Error ', err);
        });
    }
    this.page.content = this.gridMaster;
    return this.gridMaster.android;
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

  initNativeView(): void {
    super.initNativeView();
  }

  private async renderUI() {}

  private createHeader(): GridLayout {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.backgroundColor = new Color(this.headerBgColor);
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = (Screen.mainScreen.heightDIPs * 7) / 100;
    grid.row = 0;
    grid.boxShadow = '0px 4px 56px 8px rgba(0,0,0,0.72)';
    grid.on(GestureTypes.tap, (args: TapGestureEventData) => {
      this.rootLayout
        .open(new ModalAlbuns(this.files, this.rootLayout), {
          shadeCover: {
            color: '#FFF',
            opacity: 0.7,
            tapToClose: true,
          },
          animation: {
            enterFrom: {
              translateY: 500,
              duration: 300,
              curve: CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11),
            },
            exitTo: {
              translateY: 500,
              duration: 300,
              curve: CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11),
            },
          },
        })
        .then((res) => {
          CLog(res);
          this.rootLayout.once('closedRootL', (args: any) => {
            CLog('se ejecuto el evento ', args.data);
            if (args.data != null || args.data != undefined) {
              this.files[parseInt(args.data.oldIndex)].isSelected = false;
              this.files[parseInt(args.data.index)].isSelected = !this.files[parseInt(args.data.index)].isSelected;
              this.lblAlbunNameSelect.text = `${this.files[parseInt(args.data.index)].albunName} (${this.files[parseInt(args.data.index)].files.length})`;
              this.bodyView.adaptador = this.files.filter((item) => item.isSelected === true)[0].files;
            }
          });
        })
        .catch((er) => {
          CLog(er);
        });
    });

    // TextField albunName
    const txtAlbunName: Label = new Label();
    txtAlbunName.text = `${this.files.filter((item) => item.isSelected == true)[0].albunName} (${this.files.filter((item) => item.isSelected == true)[0].files.length})`;
    txtAlbunName.fontSize = 20;
    txtAlbunName.style.fontWeight = 'bold';
    txtAlbunName.style.paddingLeft = 10;
    txtAlbunName.col = 0;
    txtAlbunName.verticalAlignment = 'middle';
    txtAlbunName.horizontalAlignment = 'left';
    txtAlbunName.id = 'albunName';
    txtAlbunName.color = new Color(this.fontColor);
    this.lblAlbunNameSelect = txtAlbunName;
    grid.addChild(txtAlbunName);

    // Label icono
    const imgIcon: Image = new Image();
    imgIcon.src = 'res://arrow_drop_down_24';
    imgIcon.tintColor = new Color(this.arrowIconColor);
    imgIcon.style.fontWeight = 'bold';
    imgIcon.style.paddingLeft = 10;
    imgIcon.style.paddingRight = 5;
    imgIcon.col = 1;
    imgIcon.verticalAlignment = 'middle';
    imgIcon.horizontalAlignment = 'center';
    imgIcon.width = 32;
    imgIcon.height = 32;
    grid.addChild(imgIcon);

    // Label contador
    this.lblCountSelect = new Label();
    this.lblCountSelect.text = `0/${this.selectMax}`;
    this.lblCountSelect.fontSize = 18;
    this.lblCountSelect.style.fontWeight = 'bold';
    this.lblCountSelect.style.paddingLeft = 5;
    this.lblCountSelect.style.paddingRight = 20;
    this.lblCountSelect.col = 2;
    this.lblCountSelect.verticalAlignment = 'middle';
    this.lblCountSelect.horizontalAlignment = 'center';
    this.lblCountSelect.color = new Color(this.fontColor);
    grid.addChild(this.lblCountSelect);

    return grid;
  }
}
