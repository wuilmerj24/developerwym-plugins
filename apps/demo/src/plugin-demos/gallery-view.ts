import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import {} from '@arepa/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.actionBarHidden = true;
  page.bindingContext = new DemoModel();
}

export function onScroll(args) {
  // console.log("onScroll: ",args.data)
}

export function Onclick(args) {
  // console.log("Onclick: ",args.data)
}

export class DemoModel extends DemoSharedGalleryView {}
