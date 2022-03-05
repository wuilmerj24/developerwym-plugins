import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NsCountryCodeComponent } from './ns-country-code.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NsCountryCodeComponent }])],
  declarations: [NsCountryCodeComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NsCountryCodeModule {}
