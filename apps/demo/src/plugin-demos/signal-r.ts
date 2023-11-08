import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSignalR } from '@demo/shared';
import {} from '@arepa/signal-r';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSignalR {}
