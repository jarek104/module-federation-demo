import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const registryApiUrl = 'http://localhost:4202/api';

export interface RemoteModule {
  url: string;
  export: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class RemoteModuleRegistryService {

  constructor(private http: HttpClient) {

  }

  getRemoteModules(): Observable<RemoteModule[]> {
    return this.http.get<RemoteModule[]>(registryApiUrl).pipe(
      map(modules => modules || []),
      startWith([]),
    );
  }
}
