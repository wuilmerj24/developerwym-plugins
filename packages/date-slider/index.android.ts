import { Application, Color, FlexboxLayout, Frame, GestureTypes, GridLayout, GridUnitType, ItemSpec, Label, Screen, ScrollView, TapGestureEventData, Utils } from '@nativescript/core';
import { DateSliderCommon, GetSetProperty } from './common';
import { Shape } from './enums/formas.enum';
import { Language } from './enums/language.enum';
import { Calendario } from './class/calendario.class';
import { CalendarMonth } from './interfaces/meses.interface';
import { ListaAndroid } from './views/lista.android';
import { SheetForAndroid } from './views/bottomShet.android';
import { Dia } from './interfaces/dias.interface';

declare var upinn;

export class DateSlider extends DateSliderCommon {
  // VARIABLES
  @GetSetProperty()
  public year: number;
  @GetSetProperty()
  public language: Language;
  // color de texto superiores no lista
  @GetSetProperty()
  public shape: Shape;
  @GetSetProperty()
  public currentDateBorderColor: string;
  @GetSetProperty()
  public bgColorActive: string;
  @GetSetProperty()
  public bgColorDeactive: string;
  @GetSetProperty()
  public txtColorMonth: string;
  @GetSetProperty()
  public txtColorMonthSize: number;
  @GetSetProperty()
  public txtColorDayName: string;
  @GetSetProperty()
  public txtColorDayNameSize: number;
  @GetSetProperty()
  public txtColorDayNum: string;
  @GetSetProperty()
  public txtColorDayNumSize: number;
  // FIN VARIABLES
  private contenedor: GridLayout;
  private calendario: Calendario;
  private dias: Array<CalendarMonth> = new Array();
  private thread: java.lang.Thread;
  private lista: ListaAndroid;
  private month: Label;
  createNativeView(): Object {
    const self = this;
    this.calendario = new Calendario(this.year);
    this.dias = this.calendario.getCalendar(this.language);
    this.contenedor = new GridLayout();
    this.contenedor.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.contenedor.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.contenedor.width = Screen.mainScreen.widthDIPs;
    this.contenedor.height = (Screen.mainScreen.heightDIPs * 15) / 100;
    this.lista = new ListaAndroid(this.txtColorMonth, this.txtColorMonthSize, this.txtColorDayName, this.txtColorDayNameSize, this.txtColorDayNum, this.txtColorDayNumSize, this.currentDateBorderColor, this.bgColorActive, this.bgColorDeactive);
    this.lista.row = 1;
    this.contenedor.addChild(this.lista);
    this.page.content = this.contenedor;
    return this.contenedor.android;
  }

  initNativeView(): void {
    super.initNativeView();
    const ref = new WeakRef(this);
    Utils.setTimeout(() => {
      const dias_seleccionados = this.dias.filter((item) => item.isSelected == true);
      const self = this;
      this.month = new Label();
      this.month.text = `${dias_seleccionados[0].monthName} ▼`;
      this.month.style.fontSize = this.txtColorMonthSize;
      this.month.style.fontWeight = 'bold';
      this.month.style.textAlignment = 'center';
      this.month.style.paddingRight = 10;
      this.month.style.textTransform = 'capitalize';
      this.month.style.color = new Color(this.txtColorMonth);
      this.month.verticalAlignment = 'middle';
      this.month.horizontalAlignment = 'right';
      this.month.row = 0;
      this.contenedor.addChild(this.month);
      this.contenedor.addEventListener(GestureTypes.tap, (args: TapGestureEventData) => {
        const bottomSheetDialog: com.google.android.material.bottomsheet.BottomSheetDialog = new com.google.android.material.bottomsheet.BottomSheetDialog(Application.android.foregroundActivity);
        const modal: SheetForAndroid = new SheetForAndroid(this.dias, bottomSheetDialog);
        Frame.topmost()._addView(modal);
        bottomSheetDialog.setContentView(modal.android);
        bottomSheetDialog.show();
        bottomSheetDialog.setDismissWithAnimation(true);
        bottomSheetDialog.setOnDismissListener(
          new android.content.DialogInterface.OnDismissListener({
            onDismiss(param0: android.content.DialogInterface) {
              if (modal.mes != null || modal.mes != undefined) {
                self.month.text = `${modal.mes} ▼`;
                self.dias.filter((item) => item.isSelected == true)[0].isSelected = false;
                self.dias.filter((item) => item.monthName == modal.mes)[0].isSelected = true;
                const dias_seleccionados = self.dias.filter((item) => item.isSelected == true);
                self.lista.set_shape(self.shape, self.calendario.error_view(self.language), dias_seleccionados[0].days, false);
                ref?.get()?.sendEvent(DateSlider.changeEvent, self.dias, 'change');
              }
            },
          })
        );
      });
      this.lista.set_shape(this.shape, this.calendario.error_view(this.language), dias_seleccionados[0].days, true);
      this.lista.nativeView.addOnItemTouchListener(
        new upinn.plugins.ns.RecyclerTouchListener(
          this._context,
          this.lista.nativeView,
          new upinn.plugins.ns.RecyclerTouchListener.ClickListener({
            onClick: (view: android.view.View, position: number) => {
              const drawable: android.graphics.drawable.GradientDrawable = view.getBackground() as android.graphics.drawable.GradientDrawable;
              const isCurrentDate: boolean = self.calendario.fechasSonIguales(new Date(), new Date(self.dias.filter((item) => item.isSelected === true)[0].days[position].fullDate));

              if (self.dias.filter((item) => item.isSelected === true)[0].days[position].isSelected) {
                if (isCurrentDate) {
                  drawable.setColor(new Color(this.bgColorDeactive).android);
                  drawable.setStroke(1, new Color(this.currentDateBorderColor).android);
                } else {
                  drawable.setColor(new Color(this.bgColorDeactive).android);
                  drawable.setStroke(1, new Color(this.bgColorDeactive).android);
                }
                view.setBackground(drawable);
                self.dias.filter((item) => item.isSelected === true)[0].days[position].isSelected = false;
              } else {
                drawable.setColor(new Color(this.bgColorActive).android);
                if (isCurrentDate) {
                  drawable.setColor(new Color(this.bgColorActive).android);
                  drawable.setStroke(1, new Color(this.currentDateBorderColor).android);
                } else {
                  drawable.setColor(new Color(this.bgColorActive).android);
                  drawable.setStroke(1, new Color(this.bgColorActive).android);
                }
                view.setBackground(drawable);
                self.dias.filter((item) => item.isSelected === true)[0].days[position].isSelected = true;
              }
              ref?.get()?.sendEvent(DateSlider.clickEvent, self.dias, 'click');
            },
            onLongClick: (view: android.view.View, position: number) => {
              // console.log("onLongClick ",position);
            },
          })
        )
      );
      this.lista.nativeView.addOnScrollListener(
        new upinn.plugins.ns.CustomRecyclerView(
          this._context,
          this.lista.nativeView,
          new upinn.plugins.ns.CustomRecyclerView.ScrollEvento({
            onScrolled: (recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number) => {
              ref?.get()?.sendEvent(DateSlider.scrollEvent, self.dias, 'scroll');
            },
            onScrollStateChanged: (recyclerView: androidx.recyclerview.widget.RecyclerView, state: number) => {
              // CLog("onScrollStateChanged")
            },
          })
        )
      );
    }, 10);
  }
}
