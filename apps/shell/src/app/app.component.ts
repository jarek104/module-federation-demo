import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { APP_ROUTES } from './app.module';
import { Microfrontend, RemoteModuleRegistryService } from './remote-module-registry.service';

@Component({
  selector: 'mfd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  microfrontends: Microfrontend[] = [];

  _editing = false;
  _modules$ = this.registryService.getRemoteModules();

  constructor(
    private router: Router,
    private registryService: RemoteModuleRegistryService
  ) { }

  ngOnInit() {
    this.registryService.getRemoteModules().subscribe(modules => {
      const routes = this.buildRoutes(modules);
      console.log(routes);

      this.router.resetConfig(routes);
    });

  }

  buildRoutes(options: Microfrontend[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
    }));

    return [...APP_ROUTES, ...lazyRoutes];
  }
}
