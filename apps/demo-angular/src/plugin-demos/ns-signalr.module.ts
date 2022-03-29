import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsSignalrComponent } from './ns-signalr.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsSignalrComponent }])],
  declarations: [NsSignalrComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsSignalrModule {}
