import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { APP_ROUTES } from '../app.module';
import { Microfrontend, RemoteModuleRegistryService } from '../remote-module-registry.service';

@Component({
  selector: 'mfd-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  

}
