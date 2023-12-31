import { Button, GestureTypes, GridLayout, GridUnitType, Image, ItemSpec, Label, RootLayout, ShowModalOptions, TapGestureEventData, getCurrentPage } from '@nativescript/core/ui';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/idiomas.enum';
import { OrientationView } from './enums/orientation.enum';
import { GaleriaViewAlbumns, GaleriaViewAlbumnsData } from './class/data.imagenes.class';
import { Application, AndroidActivityRequestPermissionsEventData, AndroidApplication, Screen, Color, EventData, CoreTypes, Utils } from '@nativescript/core';
import { Idioma } from './class/idioma.class';
import { MediaStoreHelperAndroid } from './class/mediastorehelper.android';
import { ImageViewNativoAndroid } from './views/image.android';
import { ModalAlbuns } from './views/modal.albuns';
import { ListaView } from './views/lista.android';
import { TipoFile } from './enums/tipofile.enum';
import { RecyclerAdapterMyPluginDeveloper } from './adaptadores/adaptador.android';
import { BotonForAndroid } from './views/boton.android';
import { ModalPreviewImagesForAndroid } from './views/modal.preview.android';

declare var developerwym;

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
            } else if (grantedPermissions.some((elemento) => elemento === 'authorized')) {
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

  initNativeView(): void {
    super.initNativeView();
  }

  private async renderUI() {
    const mediaStore = new MediaStoreHelperAndroid(Application.android.foregroundActivity);
    this.files = mediaStore.getImagenes();
    await this.sleep(100);

    // creamos el body
    this.bodyView = await this.createBody();
    this.gridMaster.addChild(this.bodyView);

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

  private createFooter(): GridLayout {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.backgroundColor = new Color(this.footerBgColor);
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = (Screen.mainScreen.heightDIPs * 7) / 100;
    grid.row = 2;
    if (this.edit) {
      const btnEdit: BotonForAndroid = new BotonForAndroid(this.currentIdioma.obtenerTraduccion('btn_editar'));
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
      const btnPreview: BotonForAndroid = new BotonForAndroid(this.currentIdioma.obtenerTraduccion('btn_presentar'));
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
        getCurrentPage().showModal(new ModalPreviewImagesForAndroid(this.files.filter((item) => item.isSelected === true)[0].files.filter((item) => item.isSelected === true)), options);
      });
      grid.addChild(btnPreview);
    }
    return grid;
  }

  private async createBody(): Promise<ListaView> {
    const ref = new WeakRef(this);
    const self = this;
    const lista = new ListaView();
    lista.width = Screen.mainScreen.widthDIPs;
    lista.height = (Screen.mainScreen.heightDIPs * 86) / 100;
    lista.row = 1;
    lista.verticalAlignment = 'middle';
    lista.horizontalAlignment = 'center';
    lista.backgroundColor = new Color('blue');
    Utils.setTimeout(() => {
      try {
        if (this.orientation == OrientationView.H) {
          this.gridMaster.height = 200;
        }
        lista.orientacion = this.orientation;
        lista.adaptador = this.files.filter((item) => item.getIsSelected === true)[0].files;

        lista.nativeView.addOnItemTouchListener(
          new developerwym.plugins.ns.RecyclerTouchListener(
            this._context,
            lista.nativeView,
            new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
              onClick: (view: android.view.View, position: number) => {
                self.files.filter((item) => item.isSelected === true)[0].files[position].isSelected = !self.files.filter((item) => item.isSelected === true)[0].files[position].isSelected;
                const current_select: number = self.files.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true).length;
                if (current_select <= self.selectMax) {
                  const flItem: android.widget.FrameLayout = view as android.widget.FrameLayout;
                  const image: android.widget.ImageView = flItem.getChildAt(0) as android.widget.ImageView;
                  const radio: android.widget.RadioButton = flItem.getChildAt(2) as android.widget.RadioButton;
                  const capa: android.widget.FrameLayout = flItem.getChildAt(1) as android.widget.FrameLayout;
                  radio.setChecked(self.files.filter((item) => item.isSelected === true)[0].files[position].isSelected);
                  radio.setButtonTintList(android.content.res.ColorStateList.valueOf(android.graphics.Color.DKGRAY));

                  if (self.files.filter((item) => item.isSelected === true)[0].files[position].isSelected) {
                    capa.setVisibility(android.widget.FrameLayout.VISIBLE);
                  } else {
                    capa.setVisibility(android.widget.FrameLayout.INVISIBLE);
                  }
                  self.lblCountSelect.text = `${self.files.filter((item) => item.isSelected === true)[0].files.filter((item) => item.isSelected === true).length}/${self.selectMax}`;
                  const data_back: Array<GaleriaViewAlbumns> = new Array();
                  const albun_seleccionado: Array<GaleriaViewAlbumns> = self.files.filter((item) => item.isSelected == true);
                  const files_seleccionados: Array<GaleriaViewAlbumnsData> = albun_seleccionado[0].files.filter((item) => item.isSelected === true);
                  data_back.push(new GaleriaViewAlbumns(albun_seleccionado[0].id, albun_seleccionado[0].albunName, files_seleccionados, albun_seleccionado[0].icon, albun_seleccionado[0].isSelected));
                  ref?.get()?.sendEvent(GalleryView.clickEvent, data_back);
                } else {
                  self.files.filter((item) => item.isSelected === true)[0].files[position].isSelected = false;
                }
              },
              onLongClick: (view: android.view.View, position: number) => {
                CLog('onLongClick ', position);
              },
            })
          )
        );

        lista.nativeView.addOnScrollListener(
          new developerwym.plugins.ns.CustomRecyclerView(
            this._context,
            lista.nativeView,
            new developerwym.plugins.ns.CustomRecyclerView.ScrollEvento({
              onScrolled: (recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number) => {
                CLog('onScrolled');
                const data_back: Array<GaleriaViewAlbumns> = new Array();
                const albun_seleccionado: Array<GaleriaViewAlbumns> = self.files.filter((item) => item.isSelected == true);
                const files_seleccionados: Array<GaleriaViewAlbumnsData> = albun_seleccionado[0].files.filter((item) => item.isSelected === true);
                data_back.push(new GaleriaViewAlbumns(albun_seleccionado[0].id, albun_seleccionado[0].albunName, files_seleccionados, albun_seleccionado[0].icon, albun_seleccionado[0].isSelected));
                ref?.get()?.sendEvent(GalleryView.scrollEvent, data_back);
              },
              onScrollStateChanged: (recyclerView: androidx.recyclerview.widget.RecyclerView, state: number) => {
                // CLog("onScrollStateChanged")
              },
            })
          )
        );
      } catch (error) {
        CLog(error);
      }
    }, 10);
    return lista;
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
