import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NavigatorComponent } from './navigator.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NavigatorComponent }])],
  declarations: [NavigatorComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NavigatorModule {}
