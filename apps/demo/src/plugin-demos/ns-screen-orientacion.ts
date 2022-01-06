import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsScreenOrientacion } from '@demo/shared';
import { } from '@developerwym/ns-screen-orientacion';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsScreenOrientacion {
	
}
