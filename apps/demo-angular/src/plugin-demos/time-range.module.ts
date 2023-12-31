import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TimeRangeComponent } from './time-range.component';
import { NativeScriptTimeRangeModule } from '@arepa/time-range/angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptTimeRangeModule, NativeScriptRouterModule.forChild([{ path: '', component: TimeRangeComponent }])],
  declarations: [TimeRangeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TimeRangeModule {}
