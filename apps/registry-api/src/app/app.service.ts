import { Injectable } from '@nestjs/common';
import { RemoteModule } from './types';

const initialData: RemoteModule[] = [{
  export: 'mockViewer',
  url: 'http://localhost:4201/remoteEntry.js',
  title: 'Document Viewer',
  description: 'Let\'s all pretend this is a viewer',
}, {
  export: 'mockContentList',
  url: 'http://localhost:4201/remoteEntry.js',
  title: 'Content List',
  description: 'Let\'s all pretend this is a content list',
}];

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
