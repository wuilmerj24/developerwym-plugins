import { DateSliderCommon } from './common';
import { Language } from './enums/language.enum';
import { Shape } from './enums/formas.enum';

export declare class DateSlider extends DateSliderCommon {
  public year: number;
  public language: Language;
  public shape: Shape;
  public currentDateBorderColor: string;
  public bgColorActive: string;
  public bgColorDeactive: string;
  public txtColorMonth: string;
  public txtColorMonthSize: number;
  public txtColorDayName: string;
  public txtColorDayNameSize: number;
  public txtColorDayNum: string;
  public txtColorDayNumSize: number;
}
