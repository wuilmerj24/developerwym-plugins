import { Component, NgZone } from '@angular/core';
import { DemoSharedLocaldb } from '@demo/shared';
import {} from '@arepa/localdb';

@Component({
  selector: 'demo-localdb',
  templateUrl: 'localdb.component.html',
})
export class LocaldbComponent {
  demoShared: DemoSharedLocaldb;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedLocaldb();
  }
}
