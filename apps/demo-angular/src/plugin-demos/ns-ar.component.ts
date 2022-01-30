import { Component, NgZone } from '@angular/core';
import { DemoSharedNsAr } from '@demo/shared';
import { } from '@developerwym/ns-ar';

@Component({
	selector: 'demo-ns-ar',
	templateUrl: 'ns-ar.component.html',
})
export class NsArComponent {
  
  demoShared: DemoSharedNsAr;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsAr();
  }

}