import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { StoreUpdateComponent } from './store-update.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: StoreUpdateComponent }])],
  declarations: [StoreUpdateComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StoreUpdateModule {}
