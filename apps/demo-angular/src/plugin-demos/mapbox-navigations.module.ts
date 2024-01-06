import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MapboxNavigationsComponent } from './mapbox-navigations.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MapboxNavigationsComponent }])],
  declarations: [MapboxNavigationsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MapboxNavigationsModule {}
