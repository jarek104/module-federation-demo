import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  // {
  //   path: 'feature',
  //   component: AppComponent,
  //   children: [
  //     { path: '', component: AppComponent },
  //     { path: 'child', pathMatch: 'full', component: ChildComponent },
  //   ]
  // }
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'child', component: ChildComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, 
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
