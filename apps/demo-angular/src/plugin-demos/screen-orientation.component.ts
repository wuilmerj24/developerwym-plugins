import { Component, NgZone } from '@angular/core';
import { DemoSharedScreenOrientation } from '@demo/shared';
import {} from '@arepa/screen-orientation';

@Component({
  selector: 'demo-screen-orientation',
  templateUrl: 'screen-orientation.component.html',
})
export class ScreenOrientationComponent {
  demoShared: DemoSharedScreenOrientation;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedScreenOrientation();
  }
}
