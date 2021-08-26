import { Component, OnInit } from '@angular/core';
import { RemoteModuleRegistryService } from '../remote-module-registry.service';

@Component({
  selector: 'mfd-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  _editing = false;
  _modules$ = this.registryService.getRemoteModules();

  constructor(private registryService: RemoteModuleRegistryService) { }

  ngOnInit(): void {
  }

}
