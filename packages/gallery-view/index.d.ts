import { ContainerView } from '@nativescript/core';
import { EGalleryViewEvents } from './events';

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
