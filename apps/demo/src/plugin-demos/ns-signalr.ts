import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNsSignalr } from '@demo/shared';
import { } from '@developerwym/ns-signalr';
let arrs:Array<any>=[
	{ genero: "Masculino", selected: false, columns: 'auto' },
	{ genero: "Femenino", selected: false },
	{ genero: "MasculinoNo seleccionado", selected: false }
]
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNsSignalr {
	
}
