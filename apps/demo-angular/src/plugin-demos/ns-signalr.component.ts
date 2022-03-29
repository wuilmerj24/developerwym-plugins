import { Component, NgZone } from '@angular/core';
import { DemoSharedNsSignalr } from '@demo/shared';
import { } from '@developerwym/ns-signalr';

@Component({
	selector: 'demo-ns-signalr',
	templateUrl: 'ns-signalr.component.html',
})
export class NsSignalrComponent {
  
  demoShared: DemoSharedNsSignalr;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsSignalr();
  }

}