import { Component, NgZone } from '@angular/core';
import { DemoSharedMapboxNavigations } from '@demo/shared';
import {} from '@arepa/mapbox-navigations';

@Component({
  selector: 'demo-mapbox-navigations',
  templateUrl: 'mapbox-navigations.component.html',
})
export class MapboxNavigationsComponent {
  demoShared: DemoSharedMapboxNavigations;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMapboxNavigations();
  }
}
