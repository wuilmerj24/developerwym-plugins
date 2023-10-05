import { ContentView } from '@nativescript/core';
import { ELenguajesSoportados } from './enums/lenguaje.enums';
import { ETypeFiles } from './enums/type_files.enums';
import { EOrientacionLayout } from './enums/orientacion.enum';

export * from './events';

export declare class GalleryView extends ContentView {
  events: IMediaSelectorEvents;
  public errorEvent: NsMediaSelectorEvents.ErrorEvent;
  public onScrolledEvent: NsMediaSelectorEvents.OnScrolledEvent;
  public onScrollStateChangedEvent: NsMediaSelectorEvents.OnScrollStateChangedEvent;
  public onClickEvent: NsMediaSelectorEvents.OnClickEvent;
  public onLongClick: NsMediaSelectorEvents.OnLongClick;

  // opciones para configurar la vista
  public language: ELenguajesSoportados;
  public typeFile: ETypeFiles;
  public bgColorHeader: string;
  public bgColorFooter: string;
  public bgColorSpinner: string;
  public bgColorSpinnerList: string;
  public bgColorArrow: string;
  public textColor: string;
  public btnColor: string;
  public maxSelect: number;
  public edit: boolean;
  public show: boolean;
  public orientacion: EOrientacionLayout;
}
