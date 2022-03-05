import { Component, NgZone } from '@angular/core';
import { DemoSharedNsCountryCode } from '@demo/shared';
import { } from '@developerwym/ns-country-code';

@Component({
	selector: 'demo-ns-country-code',
	templateUrl: 'ns-country-code.component.html',
})
export class NsCountryCodeComponent {
  
  demoShared: DemoSharedNsCountryCode;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsCountryCode();
  }

}