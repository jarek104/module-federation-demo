import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'mfd-widget-host',
  templateUrl: './widget-host.component.html',
  styleUrls: ['./widget-host.component.scss']
})
export class WidgetHostComponent implements OnInit {
  @Input() remoteEntry: string;
  @Input() remoteName: string;
  @Input() exposedModule: string;


  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) { }

  async ngOnInit() {
    const remoteModule  = await loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    });
    this.vcref.createComponent(
      this.cfr.resolveComponentFactory(remoteModule[this.exposedModule.match(/[^\/]+$/)[0]])
    );
  }
}
