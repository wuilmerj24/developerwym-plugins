import { Component, NgZone } from '@angular/core';
import { DemoSharedDateSlider } from '@demo/shared';
import {} from '@arepa/date-slider';

@Component({
  selector: 'demo-date-slider',
  templateUrl: 'date-slider.component.html',
})
export class DateSliderComponent {
  demoShared: DemoSharedDateSlider;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedDateSlider();
  }
}
