import { Controller, Get, Put } from '@nestjs/common';

import { AppService } from './app.service';
import { RemoteModule } from './types';

// appcontroller mounted at /api
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRegistry() {
    return this.appService.getRegistry();
  }

  @Put()
  putRegistry(module: RemoteModule) {
    return this.appService.putRegistry(module);
  }
}
