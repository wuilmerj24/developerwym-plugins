import { Component, NgZone } from '@angular/core';
import { DemoSharedNsStoreUpdate } from '@demo/shared';
import { } from '@developerwym/ns-store-update';

@Component({
	selector: 'demo-ns-store-update',
	templateUrl: 'ns-store-update.component.html',
})
export class NsStoreUpdateComponent {
  
  demoShared: DemoSharedNsStoreUpdate;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsStoreUpdate();
  }

}