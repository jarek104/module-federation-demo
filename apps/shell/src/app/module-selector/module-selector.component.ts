import { Component, Input } from '@angular/core';
import { Microfrontend } from '../remote-module-registry.service';

@Component({
  selector: 'mfd-module-selector',
  templateUrl: './module-selector.component.html',
  styleUrls: ['./module-selector.component.scss']
})
export class ModuleSelectorComponent {

  @Input()
  modules: Microfrontend[] = [];
}
