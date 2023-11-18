import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import {} from '@arepa/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function Onscroll(args) {
  console.log('scroll');
}

export function Onclick(args) {
  console.log('click');
}

export class DemoModel extends DemoSharedGalleryView {}
