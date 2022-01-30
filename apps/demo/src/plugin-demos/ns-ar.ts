import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsAr } from '@demo/shared';
import { } from '@developerwym/ns-ar';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsAr {
	
}
