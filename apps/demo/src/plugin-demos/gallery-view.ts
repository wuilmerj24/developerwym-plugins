import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import { GalleryView } from '@arepa/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  // page.actionBarHidden = true;
}

export function onScroll(args: any) {
  console.log(`onScroll ev ${JSON.stringify(args.data)}`);
}

export function onClick(args: any) {
  console.log(`onClick ${JSON.stringify(args.data)}`);
}

export class DemoModel extends DemoSharedGalleryView {}
