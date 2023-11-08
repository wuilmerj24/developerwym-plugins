import { ContainerView } from '@nativescript/core';
import { GalleryView } from '.';
import { ELenguajesSoportados } from './enums/language.enum';
import { Traductor } from './class/language';
import { OrientationView } from './enums/orientation.enum';
import { MediaStoreData, MediaStoreDataFiles } from './interfaces/mediastore.interface';
import { EGalleryViewEvents } from './events';

export class GalleryViewUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (GalleryViewUtil.debug) {
    console.log('GalleryViewCommon debug ---', args);
  }
};

export class GalleryViewCommon extends ContainerView implements GalleryView {
  public set debug(value: boolean) {
    GalleryViewUtil.debug = value;
  }
  public events: any;

  // EVENTS
  public static scrollEvent = EGalleryViewEvents.OnScrolledEvent;
  public static clickEvent = EGalleryViewEvents.OnClickEvent;
  currentIdioma: Traductor;
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
  public textColor: string = 'green';
  @GetSetProperty()
  public orientation: OrientationView = OrientationView.H;

  public sendEvent(eventName: string, data?: Array<MediaStoreDataFiles>, msg?: string) {
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
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
