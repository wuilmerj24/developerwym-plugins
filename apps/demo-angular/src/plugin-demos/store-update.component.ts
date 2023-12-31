import { Component, NgZone } from '@angular/core';
import { DemoSharedStoreUpdate } from '@demo/shared';
import {} from '@arepa/store-update';

@Component({
  selector: 'demo-store-update',
  templateUrl: 'store-update.component.html',
})
export class StoreUpdateComponent {
  demoShared: DemoSharedStoreUpdate;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedStoreUpdate();
  }
}
