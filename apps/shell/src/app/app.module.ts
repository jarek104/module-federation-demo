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

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'feature',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'feature',
        exposedModule: './Module'
      })
      .then(m => m.AppModule)
  },
];

@NgModule({
  declarations: [AppComponent, ModuleListComponent, ModuleSelectorComponent, HomeViewComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
