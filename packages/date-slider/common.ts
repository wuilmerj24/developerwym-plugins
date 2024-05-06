import { ContentView } from '@nativescript/core';
import { Language } from './enums/language.enum';
import { Shape } from './enums/formas.enum';

export class DateSliderCommon extends ContentView {
  @GetSetProperty()
  public year: number = new Date().getFullYear();
  @GetSetProperty()
  public language: Language = Language.SPANISH;
  @GetSetProperty()
  public shape: Shape = Shape.CIRCLE;
  @GetSetProperty()
  public currentDateBorderColor: string = 'green';
  @GetSetProperty()
  public bgColorActive: string = 'blue';
  @GetSetProperty()
  public bgColorDeactive: string = 'red';
  @GetSetProperty()
  public txtColorMonth: string = 'gray';
  @GetSetProperty()
  public txtColorMonthSize: number = 20;
  @GetSetProperty()
  public txtColorDayName: string = 'yellow';
  @GetSetProperty()
  public txtColorDayNameSize: number = 20;
  @GetSetProperty()
  public txtColorDayNum: string = 'black';
  @GetSetProperty()
  public txtColorDayNumSize: number = 20;
  // EVENTS
  public static clickEvent: string = 'click';
  public static scrollEvent: string = 'scroll';
  public static changeEvent: string = 'change';
  constructor() {
    super();
  }
  public sendEvent(eventName: string, data?: any, msg?: string) {
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }
}

export function GetSetProperty() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        if (this['_' + propertyKey] === value) {
          return;
        }
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        this['_' + propertyKey] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
