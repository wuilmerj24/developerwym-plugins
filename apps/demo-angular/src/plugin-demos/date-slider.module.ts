import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DateSliderComponent } from './date-slider.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DateSliderComponent }])],
  declarations: [DateSliderComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DateSliderModule {}
