import { Component, NgZone } from '@angular/core';
import { DemoSharedNavigator } from '@demo/shared';
import { } from '@developerwym/navigator';

@Component({
	selector: 'demo-navigator',
	templateUrl: 'navigator.component.html',
})
export class NavigatorComponent {
  
  demoShared: DemoSharedNavigator;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNavigator();
  }

}