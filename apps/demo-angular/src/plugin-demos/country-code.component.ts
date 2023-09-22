import { Component, NgZone } from '@angular/core';
import { DemoSharedCountryCode } from '@demo/shared';
import {} from '@arepa/country-code';

@Component({
  selector: 'demo-country-code',
  templateUrl: 'country-code.component.html',
})
export class CountryCodeComponent {
  demoShared: DemoSharedCountryCode;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCountryCode();
  }
}
