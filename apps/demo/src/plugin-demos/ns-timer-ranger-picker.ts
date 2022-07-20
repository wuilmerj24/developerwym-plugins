import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsTimerRangerPicker } from '@demo/shared';
import { } from '@developerwym/ns-timer-ranger-picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsTimerRangerPicker {
	
}
