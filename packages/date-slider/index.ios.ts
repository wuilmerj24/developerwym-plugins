import { GridLayout, GridUnitType, ItemSpec, Label, Screen } from '@nativescript/core';
import { Calendario } from './class/calendario.class';
import { DateSliderCommon, GetSetProperty } from './common';
import { Shape } from './enums/formas.enum';
import { Language } from './enums/language.enum';
import { CalendarMonth } from './interfaces/meses.interface';
import { ListaiOS } from './views/lista.ios';

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
  private thread: any;
  private lista: ListaiOS;
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
    const dias_seleccionados = this.dias.filter((item) => item.isSelected == true);
    // this.lista = new ListaiOS(this.txtColorMonth, this.txtColorMonthSize, this.txtColorDayName, this.txtColorDayNameSize, this.txtColorDayNum, this.txtColorDayNumSize, this.currentDateBorderColor, this.bgColorActive, this.bgColorDeactive,dias_seleccionados[0].days);
    // this.lista.row = 1;
    // this.contenedor.addChild(this.lista);
    this.page.content = this.contenedor;
    try {
      const lista: ListaForNs = ListaForNs.alloc().init();
      lista.createScrollWithContenedor(this.contenedor.ios);
    } catch (error) {
      console.log(error);
    }

    return this.contenedor.android;
  }
}
