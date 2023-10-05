import { ErrorEvent, OnClickEvent, OnLongClick, OnScrollStateChangedEvent, OnScrolledEvent } from '../events';

export interface IGalleryViewEvents {
  errorEvent: ErrorEvent;
  onScrolledEvent: OnScrolledEvent;
  onScrollStateChangedEvent: OnScrollStateChangedEvent;
  onClickEvent: OnClickEvent;
  onLongClick: OnLongClick;
}
