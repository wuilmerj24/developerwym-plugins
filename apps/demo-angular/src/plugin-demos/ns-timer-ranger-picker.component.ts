import { Component, NgZone } from '@angular/core';
import { DemoSharedNsTimerRangerPicker } from '@demo/shared';
import { } from '@developerwym/ns-timer-ranger-picker';

@Component({
	selector: 'demo-ns-timer-ranger-picker',
	templateUrl: 'ns-timer-ranger-picker.component.html',
})
export class NsTimerRangerPickerComponent {
  
  demoShared: DemoSharedNsTimerRangerPicker;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsTimerRangerPicker();
  }

}