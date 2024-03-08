import { Color, CoreTypes, Device, GestureTypes, GridLayout, GridUnitType, ItemSpec, Label, RootLayout, Screen, TapGestureEventData, Image, Folder, knownFolders, getCurrentPage, EventData, ShowModalOptions, Utils } from '@nativescript/core';
import { GaleriaViewAlbumns } from './class/data.imagenes.class';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/idiomas.enum';
import { OrientationView } from './enums/orientation.enum';
import { Idioma } from './class/idioma.class';
import { ModalAlbuns } from './views/modal.albuns';
import { MediaStoreHelperiOS } from './class/mediastorehelper.ios';
import { BotonForIos } from './views/boton.ios';
import { ModalPreviewImagesForiOS } from './views/modal.preview.ios';
import { CustomCollectionViewDataSourceDelegate, CustomCollectionViewDelegate, ListaViewForiOS } from './views/lista.ios';

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
  private bodyView: ListaViewForiOS;
  private lblAlbunNameSelect: Label;
  public lblCountSelect: Label;
  private files: Array<GaleriaViewAlbumns> = new Array();
  private rootLayout: RootLayout;
  private adaptador: CustomCollectionViewDataSourceDelegate;
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
      const mediaStore = new MediaStoreHelperiOS();
      mediaStore.getImagenes().then((files) => {
        this.files = files;
        this.renderUI();
      });
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
            const mediaStore = new MediaStoreHelperiOS();
            mediaStore.getImagenes().then((files) => {
              this.files = files;
              this.renderUI();
            });
          }
        })
        .catch((err) => {
          getCurrentPage()._addView(this.gridMaster);
          CLog('Error ', err);
        });
    }
    this.page.content = this.gridMaster;
    return this.gridMaster.ios;
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
          CLog('PHAuthorizationStatus ', pl, PHAuthorizationStatus.Authorized);
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

  private async renderUI() {
    try {
      // creamos body
      this.bodyView = await this.createBody();
      this.gridMaster.addChild(this.bodyView);
    } catch (error) {
      CLog('err ', error);
    }

    // creamos la cabecera
    if (this.showHeader) {
      this.headerGrid = this.createHeader();
      this.gridMaster.addChild(this.headerGrid);
    }

    // creamos la footer
    if (this.showFooter) {
      this.footerGrid = this.createFooter();
      this.gridMaster.addChild(this.footerGrid);
    }
    this.rootLayout = new RootLayout();

    this.rootLayout.width = Screen.mainScreen.widthDIPs;
    this.rootLayout.height = Screen.mainScreen.heightDIPs;
    this.rootLayout.isPassThroughParentEnabled = true;
    this.rootLayout.isUserInteractionEnabled = true;
    this.rootLayout.rowSpan = 3;
    this.rootLayout.verticalAlignment = 'bottom';
    this.gridMaster.addChild(this.rootLayout);
  }

  private createHeader(): GridLayout {
    try {
      const grid: GridLayout = new GridLayout();
      grid.backgroundColor = new Color('red');

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
                // this.bodyView.adaptador = this.files.filter((item) => item.isSelected === true)[0].files;
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
    } catch (error) {
      CLog(error);
      return new GridLayout();
    }
  }

  private createFooter(): GridLayout {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.backgroundColor = new Color(this.footerBgColor);
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = (Screen.mainScreen.heightDIPs * 7) / 100;
    grid.row = 2;
    if (this.edit) {
      const btnEdit: BotonForIos = new BotonForIos(this.currentIdioma.obtenerTraduccion('btn_editar'));
      btnEdit.width = Screen.mainScreen.widthDIPs / 2;
      btnEdit.verticalAlignment = 'middle';
      btnEdit.horizontalAlignment = 'center';
      btnEdit.col = 0;
      btnEdit.backgroundColor = new Color('transparent');
      btnEdit.androidElevation = 0;
      btnEdit.color = new Color(this.fontColor);
      btnEdit.on('tap', (args: EventData) => {});
      grid.addChild(btnEdit);
    }

    if (this.preview) {
      const btnPreview: BotonForIos = new BotonForIos(this.currentIdioma.obtenerTraduccion('btn_presentar'));
      btnPreview.width = Screen.mainScreen.widthDIPs / 2;
      btnPreview.verticalAlignment = 'middle';
      btnPreview.horizontalAlignment = 'center';
      btnPreview.col = 1;
      btnPreview.color = new Color(this.fontColor);
      btnPreview.on('tap', (args: EventData) => {
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
        getCurrentPage().showModal(new ModalPreviewImagesForiOS(this.files.filter((item) => item.isSelected === true)[0].files.filter((item) => item.isSelected === true)), options);
      });
      grid.addChild(btnPreview);
    }
    return grid;
  }

  private async createBody(): Promise<ListaViewForiOS> {
    const lista: ListaViewForiOS = new ListaViewForiOS(this.files, this.orientation);
    lista.row = 1;
    if (this.orientation == OrientationView.H) {
      this.gridMaster.height = (Screen.mainScreen.heightDIPs * 20) / 100;
    }
    Utils.setTimeout(() => {
      try {
        this.adaptador = new CustomCollectionViewDataSourceDelegate(this.files.filter((item) => item.isSelected == true)[0].files, this.orientation);
        const delegate = new CustomCollectionViewDelegate(this.files.filter((item) => item.isSelected == true)[0].files, this);
        lista.nativeView.dataSource = this.adaptador;
        lista.nativeView.delegate = delegate;
        lista.nativeView.reloadData();
      } catch (error) {
        CLog('err ', error);
      }
    }, 1000);

    return lista;
  }
}
