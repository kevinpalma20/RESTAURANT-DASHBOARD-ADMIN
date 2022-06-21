import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from './../../environments/environment.prod';
import { RoleResponse } from './../model/response/entity/RoleResponse';
import { RetriveCredentialsService } from './auth/retrive-credentials.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private ENDPINT: string = SERVICE + '/role';

  constructor(
    private http: HttpClient,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  retriveAll(): Observable<RoleResponse[]> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.ENDPINT.concat(`/retrieve`);

    return this.http.get<RoleResponse[]>(endpoint, credentials);
  }
}
