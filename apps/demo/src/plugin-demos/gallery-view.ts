import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import {} from '@arepa/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function Onscroll(args) {
  console.log('scroll view', args.data);
}

export function Onclick(args) {
  console.log('click view', args.data);
}

export class DemoModel extends DemoSharedGalleryView {}
