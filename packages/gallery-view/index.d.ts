import { ContainerView } from '@nativescript/core';
import { GalleryViewCommon } from './common';
import { ELenguajesSoportados } from './enums/language.enum';
import { OrientationView } from './enums/orientation.enum';

export declare class GalleryView extends ContainerView {
  public static onScrollEvent: EGalleryViewEvents.OnScrolledEvent;
  public static onClickEvent: EGalleryViewEvents.OnClickEvent;
  public language: ELenguajesSoportados;
  public showHeader: boolean;
  public headerBgColor: string;
  public arrowIconColor: string;
  public selectMax: number;
  public showFooter: boolean;
  public footerBgColor: string;
  public edit: boolean;
  public preview: boolean;
  public textColor: string;
  public orientation: OrientationView;
}

export interface IGalleryViewEvents {
  onScrollEvent: OnScrolledEvent;
  onClickEvent: OnClickEvent;
  galleryViewLoadedEvent: GalleryViewLoadedEvent;
}
