import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'launch-navigator', loadChildren: () => import('./plugin-demos/launch-navigator.module').then((m) => m.LaunchNavigatorModule) },
  { path: 'time-range', loadChildren: () => import('./plugin-demos/time-range.module').then((m) => m.TimeRangeModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
