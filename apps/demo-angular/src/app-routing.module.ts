import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'navigator', loadChildren: () => import('./plugin-demos/navigator.module').then(m => m.NavigatorModule) },
	{ path: 'ns-screen-orientacion', loadChildren: () => import('./plugin-demos/ns-screen-orientacion.module').then(m => m.NsScreenOrientacionModule) },
	{ path: 'ns-store-update', loadChildren: () => import('./plugin-demos/ns-store-update.module').then(m => m.NsStoreUpdateModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
