import { GalleryViewCommon } from './common';
import { ELenguajesSoportados } from './enums/idiomas.enum';

export declare class GalleryView extends GalleryViewCommon {
  public static onScrollEvent: EGalleryViewEvents.OnScrolledEvent;
  public static onClickEvent: EGalleryViewEvents.OnClickEvent;
  public showHeader: boolean;
  public headerBgColor: string;
  public arrowIconColor: string;
  public selectMax: number;
  public showFooter: boolean;
  public footerBgColor: string;
  public edit: boolean;
  public preview: boolean;
  public fontColor: string;
  public language: ELenguajesSoportados;
}

export interface IGalleryViewEvents {
  onScrollEvent: OnScrolledEvent;
  onClickEvent: OnClickEvent;
  galleryViewLoadedEvent: GalleryViewLoadedEvent;
}
