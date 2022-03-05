import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsCountryCode } from '@demo/shared';
import { } from '@developerwym/ns-country-code';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsCountryCode {
	
}
