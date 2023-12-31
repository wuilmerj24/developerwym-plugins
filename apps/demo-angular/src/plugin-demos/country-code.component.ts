import { Component, NgZone } from '@angular/core';
import { DemoSharedCountryCode } from '@demo/shared';
import { getCurrentPais, showListPaises } from '@arepa/country-code';
import { EventData } from '@nativescript/core';

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

  getPais(args: EventData) {
    getCurrentPais(true)
      .then((res) => {
        console.log('res', res);
      })
      .catch((er) => {
        console.log('er', er);
      });
  }

  showLis(args: EventData) {
    showListPaises()
      .then((res) => {
        console.log('res', res);
      })
      .catch((er) => {
        console.log('er', er);
      });
  }
}
