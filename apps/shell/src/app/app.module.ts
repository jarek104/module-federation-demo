import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleSelectorComponent } from './module-selector/module-selector.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { WidgetHostComponent } from './dashboard-view/widget-host/widget-host.component';
import { ShellAuthService } from '@mfd/shell-services';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
  },
];

@NgModule({
  declarations: [AppComponent, ModuleListComponent, ModuleSelectorComponent, HomeViewComponent, DashboardViewComponent, WidgetHostComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule, MaterialModule],
  providers: [ShellAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
