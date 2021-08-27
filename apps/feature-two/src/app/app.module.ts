import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'child', component: ChildComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, 
    ChildComponent,
    WidgetComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
