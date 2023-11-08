import { AndroidActivityRequestPermissionsEventData, AndroidApplication, Application, Color, Screen, ShowModalOptions, Utils, View, getCurrentPage } from '@nativescript/core';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/language.enum';
import { Traductor } from './class/language';
import { MediaStoreData } from './interfaces/mediastore.interface';
import { MediaStoreHelper } from './class/mediastore.android.class';
import { SpinnerAdapter } from './adapters/spineradapters';
import { OrientationView } from './enums/orientation.enum';
import { DividerItemDecoration, RecyclerAdapterMyPluginDeveloper } from './adapters/recycleradapter';
import { ModalViewPresentarImagen } from './class/modal.android';
import { UCropImageAndroid } from './class/cropimage.android';

declare var developerwym;

export class GalleryView extends GalleryViewCommon {
  private rv: androidx.recyclerview.widget.RecyclerView;
  private rl: android.widget.RelativeLayout;
  private spinner: android.widget.Spinner;
  private dataFiles: Array<MediaStoreData>;
  private header: android.widget.Toolbar;
  private footer: android.widget.Toolbar;
  private txtField: android.widget.TextView;
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
    this.rl = new android.widget.RelativeLayout(this._context);
    this.rl.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT));
    if (this.checkPermisos()) {
      CLog(`tiene permisos`);
      // Solo dibuja:
      this.renderUI();
    } else {
      const txt: android.widget.TextView = new android.widget.TextView(this._context);
      txt.setTextSize(24);
      txt.setGravity(android.view.Gravity.CENTER);
      txt.setText(java.lang.String.valueOf(this.currentIdioma.obtenerTraduccion('msj_permiso')));
      const textViewParams: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      textViewParams.addRule(android.widget.RelativeLayout.CENTER_IN_PARENT);

      this.rl.addView(txt, textViewParams);
      this.solicitarPermiso()
        .then((res) => {
          this.rl.removeView(txt);
          this.renderUI();
        })
        .catch((err) => {
          CLog('err permisos: ', err);
        });
    }
    return this.rl;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  onLoaded(): void {
    super.onLoaded();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    this.rl.removeAllViews();
    this.rl = null;
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
              rs(false);
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

  private async renderUI() {
    const ref = new WeakRef(this);
    const self = this;
    const mediaStore = new MediaStoreHelper(this._context);
    this.dataFiles = mediaStore.getImagenes();

    // Creamo el header
    if (this.showHeader) {
      this.header = await this.headerToolbar();
      const layoutParamsHeader: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      layoutParamsHeader.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
      this.header.setBackgroundColor(new Color(this.headerBgColor).android);
      this.rl.addView(this.header, layoutParamsHeader);
    }

    // Creamos el footer
    if (this.showFooter) {
      this.footer = await this.createFooter();
      const layoutParamsFooter: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      layoutParamsFooter.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
      this.footer.setBackgroundColor(new Color(this.footerBgColor).android);
      this.rl.addView(this.footer, layoutParamsFooter);
    }

    //Creamos body
    this.rv = await this.createBodyList();
    const dividerItemDecoration: DividerItemDecoration = new DividerItemDecoration(this._context, 2);
    this.rv.addItemDecoration(dividerItemDecoration);
    this.rv.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.WRAP_CONTENT, androidx.recyclerview.widget.RecyclerView.LayoutParams.WRAP_CONTENT));
    const layoutParamsBody: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    layoutParamsBody.addRule(android.widget.RelativeLayout.BELOW, this.header.getId());
    layoutParamsBody.addRule(android.widget.RelativeLayout.ABOVE, this.footer.getId());
    if (this.orientation == OrientationView.H) {
      this.rv.setLayoutManager(new androidx.recyclerview.widget.LinearLayoutManager(this._context, androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL, false));
      this.height = (Screen.mainScreen.heightDIPs * 24) / 100;
    } else if (this.orientation == OrientationView.V) {
      this.rv.setLayoutManager(new androidx.recyclerview.widget.GridLayoutManager(this._context, 5, androidx.recyclerview.widget.RecyclerView.VERTICAL, false));
      this.height = Screen.mainScreen.heightDIPs;
    }
    this.rv.addOnItemTouchListener(
      new developerwym.plugins.ns.RecyclerTouchListener(
        this._context,
        this.rv,
        new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
          onClick: (view: android.view.View, position: number) => {
            self.dataFiles[0].files[position].isSelected = !self.dataFiles[0].files[position].isSelected;
            const current_select: number = self.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true).length;
            if (current_select <= self.selectMax) {
              const fl_local: android.widget.FrameLayout = view as android.widget.FrameLayout;
              const radiobtn: android.widget.RadioButton = fl_local.getChildAt(1) as android.widget.RadioButton;
              if (self.dataFiles[0].files[position].isSelected) {
                radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color('green').android));
              } else {
                radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color('transparent').android));
              }
              radiobtn.setChecked(this.dataFiles[0].files[position].isSelected);
              self.txtField.setText(`${current_select}/${self.selectMax}`);
            } else {
              if (self.debug) {
                CLog(`Select count max: ${self.selectMax} | current:${current_select}`);
              }
              self.dataFiles[0].files[position].isSelected = false;
            }
            ref?.get()?.sendEvent(
              GalleryView.clickEvent,
              self.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true)
            );
          },
          onLongClick: (view: android.view.View, position: number) => {
            // ref?.get()?.sendEvent(GalleryView.clickEvent, self.dataFiles.filter(item => item.isSelected == true)[0].files.filter(item => item.isSelected == true));
          },
        })
      )
    );

    this.rv.addOnScrollListener(
      new developerwym.plugins.ns.CustomRecyclerView(
        this._context,
        this.rv,
        new developerwym.plugins.ns.CustomRecyclerView.ScrollEvento({
          onScrolled: (recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number) => {
            ref?.get()?.sendEvent(
              GalleryView.scrollEvent,
              self.dataFiles.filter((item) => item.isSelected == true)[0].files.filter((item) => item.isSelected == true)
            );
          },
          onScrollStateChanged: (recyclerView: androidx.recyclerview.widget.RecyclerView, state: number) => {
            //ref?.get()?.sendEvent(GalleryView.scrollEvent, self.dataFiles.filter(item => item.isSelected == true)[0].files.filter(item => item.isSelected == true));
          },
        })
      )
    );

    this.rl.addView(this.rv, layoutParamsBody);
  }

  private headerToolbar(): android.widget.Toolbar {
    const toolbar: android.widget.Toolbar = new android.widget.Toolbar(this._context);
    toolbar.setLayoutParams(new android.widget.Toolbar.LayoutParams(android.widget.Toolbar.LayoutParams.MATCH_PARENT, android.widget.Toolbar.LayoutParams.WRAP_CONTENT));
    toolbar.setElevation(20);
    toolbar.setSoundEffectsEnabled(true);
    toolbar.setId(android.view.View.generateViewId());

    this.spinner = new android.widget.Spinner(this._context);
    const spinnerDrawable: android.graphics.drawable.Drawable = this.spinner.getBackground().getConstantState().newDrawable();
    spinnerDrawable.setColorFilter(new Color(this.arrowIconColor).android, android.graphics.PorterDuff.Mode.SRC_ATOP);
    const adaptador = new SpinnerAdapter(this.dataFiles, this._context, this.textColor, this.headerBgColor);
    this.spinner.setAdapter(adaptador);
    adaptador.notifyDataSetChanged();

    this.spinner.setBackground(spinnerDrawable);
    this.spinner.setLayoutParams(new android.widget.Spinner.LayoutParams(android.widget.Spinner.LayoutParams.MATCH_PARENT, android.widget.Spinner.LayoutParams.WRAP_CONTENT));
    this.spinner.setNestedScrollingEnabled(true);
    this.spinner.setDropDownVerticalOffset(140);
    this.spinner.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    this.spinner.setDropDownWidth(parseInt(Screen.mainScreen.widthPixels.toString()));
    const self = this;
    this.spinner.setOnItemSelectedListener(
      new android.widget.AdapterView.OnItemSelectedListener({
        onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, position: number, param3: number) {
          for (let i: number = 0; i < self.dataFiles.length; i++) {
            self.dataFiles[i].isSelected = false;
          }
          self.dataFiles[position].isSelected = !self.dataFiles[position].isSelected;
          Utils.setTimeout(() => {
            if (self.rv) {
              const adaptador: RecyclerAdapterMyPluginDeveloper = new RecyclerAdapterMyPluginDeveloper(self.dataFiles[position].files, OrientationView.V, self.dataFiles[position].albunName);
              self.rv.setAdapter(adaptador);
              adaptador.notifyDataSetChanged();
            }
          }, 100);
        },
        onNothingSelected(param0: android.widget.AdapterView<any>) {},
      })
    );

    this.txtField = new android.widget.TextView(this._context);
    this.txtField.setText(`0/${this.selectMax}`);
    this.txtField.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    this.txtField.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    this.txtField.setWidth(100);
    this.txtField.setTextSize(16);
    this.txtField.setTypeface(null, android.graphics.Typeface.BOLD);
    const leftParams: androidx.appcompat.widget.Toolbar.LayoutParams = new androidx.appcompat.widget.Toolbar.LayoutParams(700, androidx.appcompat.widget.Toolbar.LayoutParams.WRAP_CONTENT, 0.75);
    const rightParams: androidx.appcompat.widget.Toolbar.LayoutParams = new androidx.appcompat.widget.Toolbar.LayoutParams(300, androidx.appcompat.widget.Toolbar.LayoutParams.WRAP_CONTENT, 0.25);
    toolbar.addView(this.spinner, leftParams);
    toolbar.addView(this.txtField, rightParams);
    return toolbar;
  }

  private createFooter(): android.widget.Toolbar {
    const self = this;
    const toolbar: android.widget.Toolbar = new android.widget.Toolbar(this._context);
    toolbar.setId(android.view.View.generateViewId());
    toolbar.setLayoutParams(new android.widget.Toolbar.LayoutParams(android.widget.Toolbar.LayoutParams.MATCH_PARENT, 150));
    toolbar.setElevation(20);
    toolbar.setSoundEffectsEnabled(true);

    const linearLayout: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
    linearLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 150));

    const btnEditar: android.widget.Button = new android.widget.Button(this._context);
    btnEditar.setText(this.currentIdioma.obtenerTraduccion('btn_editar'));
    btnEditar.setTextColor(new Color(this.textColor).android);
    btnEditar.setBackground(null);
    btnEditar.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0) {
          // new UCropImageAndroid(self.dataFiles.filter(item=>item.isSelected==true),self._context);
        },
      })
    );

    const btnPreview: android.widget.Button = new android.widget.Button(this._context);
    btnPreview.setText(this.currentIdioma.obtenerTraduccion('btn_presentar'));
    btnPreview.setBackground(null);
    btnPreview.setTextColor(new Color(this.textColor).android);
    btnPreview.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0) {
          if (self.dataFiles[0].files.filter((item) => item.isSelected == true).length > 0) {
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
            getCurrentPage().showModal(new ModalViewPresentarImagen(self.dataFiles[0].files.filter((item) => item.isSelected == true)), options);
          }
        },
      })
    );

    const buttonParams: android.widget.LinearLayout.LayoutParams = new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
    buttonParams.weight = 1;

    btnEditar.setLayoutParams(buttonParams);
    btnPreview.setLayoutParams(buttonParams);

    if (this.edit) {
      linearLayout.addView(btnEditar);
    }

    if (this.preview) {
      linearLayout.addView(btnPreview);
    }
    linearLayout.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    toolbar.addView(linearLayout);
    return toolbar;
  }

  private createBodyList(): androidx.recyclerview.widget.RecyclerView {
    const rv: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
    try {
      rv.setAddStatesFromChildren(true);
      rv.setHasTransientState(true);
      rv.setHasFixedSize(true);
    } catch (error) {
      CLog('Error recyclerView ', error);
    }
    return rv;
  }
}
