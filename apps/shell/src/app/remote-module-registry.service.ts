import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const registryApiUrl = 'http://localhost:4202/api';


export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemoteModuleRegistryService {

  constructor(private http: HttpClient) {

  }

  getRemoteModules(): Observable<Microfrontend[]> {
    return this.http.get<Microfrontend[]>(registryApiUrl).pipe(
      map(modules => modules || []),
    );
  }
}
