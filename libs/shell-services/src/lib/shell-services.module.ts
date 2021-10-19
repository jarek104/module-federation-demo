import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellAuthService } from './shell-auth.service';

@NgModule({
  imports: [CommonModule],
})
export class ShellServicesModule {

  static forRoot(): ModuleWithProviders<ShellServicesModule> {
    return {
      ngModule: ShellServicesModule,
      providers: [ShellAuthService]
    }
  }
}
