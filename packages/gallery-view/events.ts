import { EventData } from '@nativescript/core';
import { GalleryViewCommon } from './common';

export enum GalleryViewEvents {
  ErrorEvent = 'errorEvent',
  OnScrolledEvent = 'onScrolledEvent',
  OnScrollStateChangedEvent = 'onScrollStateChangedEvent',
  OnClickEvent = 'OnClickEvent',
  OnLongClick = 'onLongClick',
}

export interface ErrorEvent extends EventData {
  eventName: GalleryViewEvents.ErrorEvent;
  data?: Error;
  message?: string;
}

export interface OnScrolledEvent extends EventData {
  eventName: GalleryViewEvents.OnScrolledEvent;
  data: any;
}

export interface OnScrollStateChangedEvent extends EventData {
  eventName: GalleryViewEvents.OnScrollStateChangedEvent;
  data: any;
}

export interface OnClickEvent extends EventData {
  eventName: GalleryViewEvents.OnClickEvent;
  data: [];
}

export interface OnLongClick extends EventData {
  eventName: GalleryViewEvents.OnLongClick;
  data: [];
}

export interface MediaSelectorLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: GalleryViewCommon;
}
