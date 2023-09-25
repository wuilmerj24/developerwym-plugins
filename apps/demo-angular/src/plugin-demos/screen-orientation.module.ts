import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ScreenOrientationComponent } from './screen-orientation.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ScreenOrientationComponent }])],
  declarations: [ScreenOrientationComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ScreenOrientationModule {}
