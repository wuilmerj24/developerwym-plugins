import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import {} from '@arepa/time-range';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onDrag(args) {
  console.log('onDrag ', args.data);
}

export class DemoModel extends DemoSharedTimeRange {}
