import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'country-code',
    },
    {
      name: 'gallery-view',
    },
    {
      name: 'launch-navigator',
    },
    {
      name: 'screen-orientation',
    },
    {
      name: 'store-update',
    },
    {
      name: 'time-range',
    },
  ];
}
