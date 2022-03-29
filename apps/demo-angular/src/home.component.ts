import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'navigator'
	},
	{
		name: 'ns-ar'
	},
	{
		name: 'ns-country-code'
	},
	{
		name: 'ns-screen-orientacion'
	},
	{
		name: 'ns-signalr'
	},
	{
		name: 'ns-store-update'
	}
];
}