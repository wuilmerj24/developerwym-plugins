import { Component, NgZone } from '@angular/core';
import { DemoSharedNsScreenOrientacion } from '@demo/shared';
import { } from '@developerwym/ns-screen-orientacion';

@Component({
	selector: 'demo-ns-screen-orientacion',
	templateUrl: 'ns-screen-orientacion.component.html',
})
export class NsScreenOrientacionComponent {
  
  demoShared: DemoSharedNsScreenOrientacion;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNsScreenOrientacion();
  }

}