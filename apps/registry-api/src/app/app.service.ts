import { Injectable } from '@nestjs/common';
import { RemoteModule } from './types';

const initialData: RemoteModule[] = [
  {
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'feature',
    exposedModule: './Module',
    displayName: 'Feature One Module',
    routePath: 'feature',
    ngModuleName: 'AppModule'
  },
  {
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    remoteName: 'feature_two',
    exposedModule: './Module',
    displayName: 'Feature Two Module',
    routePath: 'feature_two',
    ngModuleName: 'AppModule'
  }
];

@Injectable()
export class AppService {

  registry: RemoteModule[] = [...initialData];

  getRegistry(): RemoteModule[] {
    return initialData;
  }

  putRegistry(module: RemoteModule) {
    initialData.push(module);
  }
}
