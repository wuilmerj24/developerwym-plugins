import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsArComponent } from './ns-ar.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsArComponent }])],
  declarations: [NsArComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsArModule {}
