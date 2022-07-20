import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsTimerRangerPickerComponent } from './ns-timer-ranger-picker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsTimerRangerPickerComponent }])],
  declarations: [NsTimerRangerPickerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsTimerRangerPickerModule {}
