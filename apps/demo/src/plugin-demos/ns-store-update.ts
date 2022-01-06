import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsStoreUpdate } from '@demo/shared';
import { } from '@developerwym/ns-store-update';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsStoreUpdate {
	
}
