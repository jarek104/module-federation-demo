import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { APP_ROUTES } from '../app.module';
import { Microfrontend, RemoteModuleRegistryService } from '../remote-module-registry.service';

@Component({
  selector: 'mfd-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {
  

}
