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

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
];

@NgModule({
  declarations: [AppComponent, ModuleListComponent, ModuleSelectorComponent, HomeViewComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
