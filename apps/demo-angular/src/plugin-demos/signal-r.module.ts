import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SignalRComponent } from './signal-r.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SignalRComponent }])],
  declarations: [SignalRComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SignalRModule {}
