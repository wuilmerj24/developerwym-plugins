import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'country-code', loadChildren: () => import('./plugin-demos/country-code.module').then((m) => m.CountryCodeModule) },
  { path: 'gallery-view', loadChildren: () => import('./plugin-demos/gallery-view.module').then((m) => m.GalleryViewModule) },
  { path: 'launch-navigator', loadChildren: () => import('./plugin-demos/launch-navigator.module').then((m) => m.LaunchNavigatorModule) },
  { path: 'localdb', loadChildren: () => import('./plugin-demos/localdb.module').then((m) => m.LocaldbModule) },
  { path: 'mapbox-navigations', loadChildren: () => import('./plugin-demos/mapbox-navigations.module').then((m) => m.MapboxNavigationsModule) },
  { path: 'screen-orientation', loadChildren: () => import('./plugin-demos/screen-orientation.module').then((m) => m.ScreenOrientationModule) },
  { path: 'signal-r', loadChildren: () => import('./plugin-demos/signal-r.module').then((m) => m.SignalRModule) },
  { path: 'store-update', loadChildren: () => import('./plugin-demos/store-update.module').then((m) => m.StoreUpdateModule) },
  { path: 'time-range', loadChildren: () => import('./plugin-demos/time-range.module').then((m) => m.TimeRangeModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
