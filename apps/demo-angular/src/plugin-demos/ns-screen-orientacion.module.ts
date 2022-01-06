import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsScreenOrientacionComponent } from './ns-screen-orientacion.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsScreenOrientacionComponent }])],
  declarations: [NsScreenOrientacionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsScreenOrientacionModule {}
