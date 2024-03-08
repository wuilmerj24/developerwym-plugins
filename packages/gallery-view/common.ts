import { ContentView, Observable, Utils } from '@nativescript/core';
import { EGalleryViewEvents } from './events';
import { Idioma } from './class/idioma.class';
import { ELenguajesSoportados } from './enums/idiomas.enum';
import { OrientationView } from './enums/orientation.enum';
import { GaleriaViewAlbumns } from './class/data.imagenes.class';

export class GalleryViewUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (GalleryViewUtil.debug) {
    console.log('GalleryViewCommon debug ---', args);
  }
};

export class GalleryViewCommon extends ContentView {
  public set debug(value: boolean) {
    GalleryViewUtil.debug = value;
  }
  public events: any;

  // EVENTS
  public static scrollEvent = EGalleryViewEvents.OnScrolledEvent;
  public static clickEvent = EGalleryViewEvents.OnClickEvent;

  currentIdioma: Idioma;
  // OPCIONES VIEW
  @GetSetProperty()
  public language: ELenguajesSoportados = ELenguajesSoportados.SPANISH;
  @GetSetProperty()
  public showHeader: boolean = true;
  @GetSetProperty()
  public headerBgColor: string = 'black';
  @GetSetProperty()
  public arrowIconColor: string = 'red';
  @GetSetProperty()
  public selectMax: number = 1;
  @GetSetProperty()
  public showFooter: boolean = true;
  @GetSetProperty()
  public footerBgColor: string = 'black';
  @GetSetProperty()
  public edit: boolean = true;
  @GetSetProperty()
  public preview: boolean = true;
  @GetSetProperty()
  public fontColor: string = 'green';
  @GetSetProperty()
  public orientation: OrientationView = OrientationView.H;

  public sendEvent(eventName: string, data?: Array<any>, msg?: string) {
    CLog('sendEvent ', eventName);
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => Utils.setTimeout(resolve, ms));
  }
}

export interface IGalleryViewEvents {
  onScrollEvent: any;
  onClickEvent: any;
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
