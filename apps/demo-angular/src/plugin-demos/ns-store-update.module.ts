import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsStoreUpdateComponent } from './ns-store-update.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsStoreUpdateComponent }])],
  declarations: [NsStoreUpdateComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsStoreUpdateModule {}
