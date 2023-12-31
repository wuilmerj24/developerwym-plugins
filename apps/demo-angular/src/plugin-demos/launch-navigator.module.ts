import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { LaunchNavigatorComponent } from './launch-navigator.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: LaunchNavigatorComponent }])],
  declarations: [LaunchNavigatorComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LaunchNavigatorModule {}
