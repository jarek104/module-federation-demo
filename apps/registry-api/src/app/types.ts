export interface RemoteModule {
  // for loading
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  
  // for routing
  displayName: string;
  routePath: string;
  ngModuleName: string;
};