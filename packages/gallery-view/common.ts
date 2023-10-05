import { Color, ContentView, Property, booleanConverter, getCurrentPage } from '@nativescript/core';
import { GalleryView as GalleryViewDefinition } from '.';
import { GalleryViewEvents } from './events';
import { ELenguajesSoportados } from './enums/lenguaje.enums';
import { ETypeFiles } from './enums/type_files.enums';
import { EOrientacionLayout } from './enums/orientacion.enum';

export class GalleryViewUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (GalleryViewUtil.debug) {
    console.log('GalleryViewCommon debug ---', args);
  }
};

export class GalleryViewCommon extends ContentView implements GalleryViewDefinition {
  public set debug(value: boolean) {
    GalleryViewUtil.debug = value;
  }
  public events: any;

  // EVENTS
  public errorEvent: GalleryViewEvents.ErrorEvent;
  public onScrolledEvent: GalleryViewEvents.OnScrolledEvent;
  public onScrollStateChangedEvent: GalleryViewEvents.OnScrollStateChangedEvent;
  public onClickEvent: GalleryViewEvents.OnClickEvent;
  public onLongClick: GalleryViewEvents.OnLongClick;

  // OPCIONES VIEW
  @GetSetProperty()
  public language: ELenguajesSoportados = ELenguajesSoportados.SPANISH;
  @GetSetProperty()
  public typeFile: ETypeFiles = ETypeFiles.IMAGES;
  @GetSetProperty()
  public bgColorHeader: string = '#f4f4f4';
  @GetSetProperty()
  public bgColorFooter: string = '#f4f4f4';
  @GetSetProperty()
  public maxSelect: number = 9;
  @GetSetProperty()
  public edit: boolean = true;
  @GetSetProperty()
  public show: boolean = true;
  @GetSetProperty()
  public bgColorArrow: string = 'black';
  @GetSetProperty()
  public textColor: string = 'black';
  @GetSetProperty()
  public bgColorSpinner: string = '#FFFFFF';
  @GetSetProperty()
  public bgColorSpinnerList: string = '#FFFFFF';
  @GetSetProperty()
  public btnColor: string = 'red';
  @GetSetProperty()
  public orientacion: EOrientacionLayout = EOrientacionLayout.VERTICAL;
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
