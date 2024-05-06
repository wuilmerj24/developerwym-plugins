import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMapboxNavigations } from '@demo/shared';
import { MapboxNavigations } from '@arepa/mapbox-navigations';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMapboxNavigations {}
