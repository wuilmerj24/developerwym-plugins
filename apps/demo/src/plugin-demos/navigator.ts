import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNavigator } from '@demo/shared';
import { } from '@developerwym/navigator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNavigator {
	
}
