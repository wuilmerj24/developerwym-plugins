import { Component, NgZone } from '@angular/core';
import { DemoSharedSignalR } from '@demo/shared';
import {} from '@arepa/signal-r';

@Component({
  selector: 'demo-signal-r',
  templateUrl: 'signal-r.component.html',
})
export class SignalRComponent {
  demoShared: DemoSharedSignalR;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSignalR();
  }
}
