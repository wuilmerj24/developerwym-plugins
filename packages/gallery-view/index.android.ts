import { AndroidActivityRequestPermissionsEventData, AndroidApplication, Application, Button, Color, EventData, Frame, GridLayout, GridUnitType, Image, ItemSpec, Label, Screen, StackLayout, Utils, getCurrentPage } from '@nativescript/core';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/lenguaje.enums';
import { Traductor } from './class/lenguaje.class';
import { check as checkPermission, request as requestPermission, checkMultiple, ObjectPermissions, ObjectPermissionsRest } from '@nativescript-community/perms';
import { SpinnerData, SpinnerDataFiles } from './class/spinner.data.class';
import { MediaStoreHelper } from './class/mediastorehelper.class';
import { ETypeFiles } from './enums/type_files.enums';
import { SpinnerAdapter } from './adaptadores/spinner.adapter';
import { EOrientacionLayout } from './enums/orientacion.enum';

declare var developerwym;

export class GalleryView extends GalleryViewCommon {
  private _nativeView: android.widget.RelativeLayout;
  recyclerView: androidx.recyclerview.widget.RecyclerView;
  private READ_CODE: number = 101;
  public get nativeView(): android.widget.RelativeLayout {
    return this._nativeView;
  }
  public set nativeView(value: android.widget.RelativeLayout) {
    this._nativeView = value;
  }
  protected currentIdioma: any;
  @GetSetProperty()
  public language: ELenguajesSoportados;
  @GetSetProperty()
  public typeFile: ETypeFiles;
  @GetSetProperty()
  public bgColorHeader: string;
  @GetSetProperty()
  public bgColorFooter: string;
  @GetSetProperty()
  public maxSelect: number;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public show: boolean;
  @GetSetProperty()
  public bgColorArrow: string;
  @GetSetProperty()
  public textColor: string;
  @GetSetProperty()
  public bgColorSpinner: string;
  @GetSetProperty()
  public bgColorSpinnerList: string;
  @GetSetProperty()
  public btnColor: string;
  @GetSetProperty()
  public orientacion: EOrientacionLayout;

  private header: androidx.appcompat.widget.Toolbar;
  private footer: androidx.appcompat.widget.Toolbar;
  private spinner: android.widget.Spinner;
  private spinnerData: Array<SpinnerData> = new Array();
  private spinnerDataJava: java.util.ArrayList<java.lang.Object> = new java.util.ArrayList();
  // private spinnerDataJava: java.util.ArrayList<any> = new java.util.ArrayList();
  private textVieCont: android.widget.TextView;
  private _numberSelected: number = 0;
  private adaptador: SpinnerAdapter;
  private adaptadorRecyclerView;
  constructor() {
    super();
    // CONFIGURAMOS LOS IDIOMAS
    this.currentIdioma = new Traductor(this.language);
  }

  createNativeView(): Object {
    this.nativeView = new android.widget.RelativeLayout(this._context);
    this.nativeView.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    this.solicitarPermisos().then((response) => {
      const authorizedPermissions: boolean[] = [];
      for (const key in response) {
        if (response[key] === 'authorized' || response[key] === 'never_ask_again') {
          authorizedPermissions.push(true);
        } else {
          authorizedPermissions.push(false);
        }
      }
      const todosSonTrue = authorizedPermissions.every((item) => item === true);

      if (todosSonTrue) {
        this.renderUI();
      } else {
        const grid: GridLayout = new GridLayout();
        grid.width = Screen.mainScreen.widthDIPs;
        grid.height = Screen.mainScreen.heightDIPs;
        grid.verticalAlignment = 'middle';
        grid.horizontalAlignment = 'center';
        grid.addRow(new ItemSpec(1, GridUnitType.STAR));
        grid.addRow(new ItemSpec(1, GridUnitType.AUTO));

        const lbl: Label = new Label();
        lbl.text = this.currentIdioma.obtenerTraduccion('msj_permiso');
        lbl.fontSize = 18;
        lbl.style.fontWeight = 'bold';
        lbl.verticalAlignment = 'middle';
        lbl.horizontalAlignment = 'center';
        lbl.textWrap = true;
        lbl.row = 0;
        grid.addChild(lbl);
        Frame.topmost()._addView(grid);
        this.nativeView.addView(grid.android);
        CLog('no tiene permisos');
      }
    });
    return this.nativeView;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }

  private async solicitarPermisos(): Promise<any> {
    return requestPermission({
      'android.permission.READ_EXTERNAL_STORAGE': {},
      'android.permission.WRITE_EXTERNAL_STORAGE': {},
      'android.permission.READ_MEDIA_IMAGES': {},
      'android.permission.READ_MEDIA_VIDEO': {},
      'android.permission.WRITE_SETTINGS': {},
      'android.permission.MANAGE_EXTERNAL_STORAGE': {},
      'android.permission.FOREGROUND_SERVICE': {},
      'android.permission.CAMERA': {},
      'android.permission.VIBRATE': {},
    });
  }

  private async renderUI() {
    // CREAR HEADER Y VER LAS OPCIONES
    const that = this;
    const handler = new android.os.Handler(android.os.Looper.getMainLooper());
    this.header = this.headerWidget();
    this.header.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    this.header.setBackgroundColor(new Color(this.bgColorHeader).android);
    const layoutParamsHeader: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    layoutParamsHeader.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
    this.nativeView.addView(this.header, layoutParamsHeader);

    // CREAR FOOTER Y LAS CONFIGURACION DEL FOOTER
    this.footer = this.footerWidget();
    const layoutParamsFooter: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    layoutParamsFooter.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
    this.footer.setBackgroundColor(new Color(this.bgColorFooter).android);
    this.nativeView.addView(this.footer, layoutParamsFooter);

    // BODY
    this.recyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
    this.recyclerView.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    const layoutParamsBody: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    layoutParamsBody.addRule(android.widget.RelativeLayout.BELOW, this.header.getId());
    layoutParamsBody.addRule(android.widget.RelativeLayout.ABOVE, this.footer.getId());
    try {
      handler.post(
        new java.lang.Runnable({
          run: () => {
            // Código que quieres ejecutar en el hilo principal
            // that.spinnerDataJava = Utils.dataSerialize(this.spinnerData.filter(item => item.isSelected === true)[0].files, true);
            // that.adaptadorRecyclerView = new developerwym.plugins.ns.RecyclerAdapter(that.spinnerDataJava);
            // that.recyclerView.setAdapter(this.adaptadorRecyclerView);
            const adaptador: RecyclerAdapterMyPluginDeveloper = new RecyclerAdapterMyPluginDeveloper(this.spinnerData.filter((item) => item.isSelected === true)[0].files);
            this.recyclerView.setAdapter(adaptador);

            that.recyclerView.setLayoutManager(new androidx.recyclerview.widget.GridLayoutManager(this._context, 5, androidx.recyclerview.widget.RecyclerView.VERTICAL, false));
            this.recyclerView.addOnItemTouchListener(
              new developerwym.plugins.ns.RecyclerTouchListener(
                this._context,
                this.recyclerView,
                new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
                  onClick: (view: android.view.View, position: number) => {
                    CLog('hizo click');
                  },
                  onLongClick: (view: android.view.View, position: number) => {
                    CLog(`onLongClick ${view}`);
                  },
                })
              )
            );
          },
        })
      );
    } catch (error) {
      CLog('error', error);
    }

    this.recyclerView.setBackgroundColor(new Color('red').android);
    this.nativeView.addView(this.recyclerView, layoutParamsBody);
  }

  private headerWidget(): androidx.appcompat.widget.Toolbar {
    const self = this;
    const header: androidx.appcompat.widget.Toolbar = new androidx.appcompat.widget.Toolbar(this._context);
    // Lista desplegable de los albunes
    this.spinner = new android.widget.Spinner(this._context);
    this.spinner.setId(android.view.View.generateViewId());
    this.spinner.setDropDownVerticalOffset(140);
    this.spinner.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    this.spinner.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    this.spinner.setDropDownWidth(android.view.ViewGroup.LayoutParams.MATCH_PARENT);
    this.spinner.setNestedScrollingEnabled(true);
    const mediaStoreHelper: MediaStoreHelper = new MediaStoreHelper(this._context);
    if ((this.typeFile = ETypeFiles.IMAGES)) {
      this.spinnerData = mediaStoreHelper.getImages();
    } else {
    }
    this.adaptador = new SpinnerAdapter(this.spinnerData, this._context, this.textColor, this.bgColorSpinnerList, this.bgColorSpinner);
    this.spinner.setAdapter(this.adaptador);
    this.adaptador.notifyDataSetChanged();
    const spinnerDrawable: android.graphics.drawable.Drawable = this.spinner.getBackground().getConstantState().newDrawable();
    spinnerDrawable.setColorFilter(new Color(this.bgColorArrow).android, android.graphics.PorterDuff.Mode.SRC_ATOP);
    this.spinner.setBackground(spinnerDrawable);

    // texto para mostrar el numero de item seleccionados
    this.textVieCont = new android.widget.TextView(this._context);
    this.textVieCont.setId(android.view.View.generateViewId());
    this.textVieCont.setText(java.lang.String.valueOf(this.numberSelected));
    this.textVieCont.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    this.textVieCont.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    this.textVieCont.setWidth(100);
    this.textVieCont.setTextSize(16);
    this.textVieCont.setTextColor(new Color(this.textColor).android);

    header.setId(android.view.View.generateViewId());
    const toolbarParams: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 180);
    toolbarParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP, android.widget.RelativeLayout.TRUE);
    const leftParams: androidx.appcompat.widget.Toolbar.LayoutParams = new androidx.appcompat.widget.Toolbar.LayoutParams(900, androidx.appcompat.widget.Toolbar.LayoutParams.WRAP_CONTENT, 0.75);
    const rightParams: androidx.appcompat.widget.Toolbar.LayoutParams = new androidx.appcompat.widget.Toolbar.LayoutParams(100, androidx.appcompat.widget.Toolbar.LayoutParams.WRAP_CONTENT, 0.25);
    header.addView(this.spinner, leftParams);

    header.addView(this.textVieCont, rightParams);

    this.spinner.setOnItemSelectedListener(
      new android.widget.AdapterView.OnItemSelectedListener({
        onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, position: number, param3: number) {
          console.log('setOnItemSelectedListener');
          for (let i: number = 0; i < self.spinnerData.length; i++) {
            self.spinnerData[i].isSelected = false;
          }
          self.spinnerData[position].isSelected = true;
        },
        onNothingSelected(param0: android.widget.AdapterView<any>) {},
      })
    );
    return header;
  }

  private get numberSelected(): number {
    let contador: number = 0;
    for (let i: number = 0; i < this.spinnerData.length; i++) {
      if (this.spinnerData[i].isSelected) {
        for (let j: number = 0; j < this.spinnerData[i].files.length; j++) {
          if (this.spinnerData[i].files[j].isSelected) {
            contador++;
          }
        }
      }
    }
    this._numberSelected += contador;
    this.textVieCont.setText(java.lang.String.valueOf(this._numberSelected));
    return this._numberSelected;
  }

  private set numberSelected(value: number) {
    this._numberSelected += value;
    this.textVieCont.setText(java.lang.String.valueOf(this._numberSelected));
  }

  private footerWidget(): androidx.appcompat.widget.Toolbar {
    const self = this;
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.width = Screen.mainScreen.widthDIPs;
    grid.height = 50;

    const btnEdit: Button = new Button();
    btnEdit.col = 0;
    btnEdit.verticalAlignment = 'middle';
    btnEdit.horizontalAlignment = 'center';
    btnEdit.text = this.currentIdioma.obtenerTraduccion('btn_editar');
    btnEdit.on('tap', (args: EventData) => {
      alert('on tap btnEdit');
    });
    btnEdit.androidElevation = -1;
    btnEdit.backgroundColor = new Color('transparent');
    btnEdit.color = new Color(this.btnColor);

    const btnPreview: Button = new Button();
    btnPreview.col = 1;
    btnPreview.verticalAlignment = 'middle';
    btnPreview.horizontalAlignment = 'center';
    btnPreview.on('tap', (args: EventData) => {
      alert('on tap btnPreview');
    });
    btnPreview.androidElevation = -1;
    btnPreview.backgroundColor = new Color('transparent');
    btnPreview.text = this.currentIdioma.obtenerTraduccion('btn_presentar');
    btnPreview.color = new Color(this.btnColor);

    grid.addChild(btnEdit);
    grid.addChild(btnPreview);

    Frame.topmost()._addView(grid);
    const toolbar: androidx.appcompat.widget.Toolbar = new androidx.appcompat.widget.Toolbar(this._context);
    toolbar.setId(android.view.View.generateViewId());
    const toolbarParams: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 180);
    toolbarParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP, android.widget.RelativeLayout.TRUE);
    toolbar.setLayoutParams(toolbarParams);
    toolbar.addView(grid.android);
    return toolbar;
  }
}

@NativeClass()
export class RecyclerAdapterMyPluginDeveloper extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
  private context: android.content.Context;
  private idImage: number = android.view.View.generateViewId();
  constructor(private lista: Array<SpinnerDataFiles>) {
    super();
  }

  public getItemCount(): number {
    if (this.lista != null || this.lista != undefined || this.lista.length == 0) {
      return this.lista.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder {
    this.context = parent.getContext();
    let rl: android.widget.RelativeLayout = new android.widget.RelativeLayout(parent.getContext());
    if (rl == undefined || rl !== null) {
      rl.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, 220));
      const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
      img.setId(this.idImage);
      img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
      rl.setBackgroundColor(new Color('green').android);
      rl.addView(img);
      return new ViewHolder(rl, this.idImage);
    } else {
      return new ViewHolder(rl, this.idImage);
    }
  }

  public onBindViewHolder(param0: unknown, param1: unknown, param2?: unknown): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void {
    try {
      com.bumptech.glide.Glide.with(holder.itemView.getContext())
        .load(this.lista[position].file)
        .centerCrop()
        .override(400)
        .placeholder(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK))
        .error(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED))
        .priority(com.bumptech.glide.Priority.IMMEDIATE)
        .into((holder as any).imageView);
    } catch (error) {
      CLog('error ', error);
    }
  }

  private getLayout(id: string) {
    return this.context.getResources().getIdentifier(id, 'layout', this.context.getPackageName());
  }

  private getId(id: string) {
    return this.context.getResources().getIdentifier(id, 'id', this.context.getPackageName());
  }
}

@NativeClass()
class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public imageView: android.widget.ImageView;
  constructor(private view: android.view.View, private vid: number) {
    super(view);
    this.imageView = view.findViewById(this.vid) as android.widget.ImageView;
  }
}
