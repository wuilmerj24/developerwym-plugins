import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedDateSlider } from '@demo/shared';
import {} from '@arepa/date-slider';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedDateSlider {}
