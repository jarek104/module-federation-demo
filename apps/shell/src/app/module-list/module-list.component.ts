import { Component, Input } from '@angular/core';
import { Microfrontend } from '../remote-module-registry.service';

@Component({
  selector: 'mfd-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent {

  @Input()
  modules: Microfrontend[] = [];
}
