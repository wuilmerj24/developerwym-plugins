import { EventData, Observable } from '@nativescript/core';
import { GalleryView } from '.';

export enum EGalleryViewEvents {
  OnScrolledEvent = 'scroll',
  OnClickEvent = 'click',
}

export interface OnScrolledEvent extends EventData {
  eventName: EGalleryViewEvents.OnScrolledEvent;
  data?: any;
}

export interface OnClickEvent extends EventData {
  eventName: EGalleryViewEvents.OnClickEvent;
  data?: any;
}

export interface GalleryViewLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: Observable & GalleryView;
}
