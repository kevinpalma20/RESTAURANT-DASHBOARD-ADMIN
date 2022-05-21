import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SERVICE } from 'src/environments/environment.prod';

import { RetriveCredentialsService } from './auth/retrive-credentials.service';

import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { EnviromentRequest } from 'src/app/model/request/entity/EnviromentRequest';
import { EnviromentResponseCollection } from 'src/app/model/response/retrive/EnviromentResponseCollection';

@Injectable({
  providedIn: 'root',
})
export class EnviromentService {
  private SERVICE_ENIROMENT: string = SERVICE + '/environment';
  constructor(
    private http: HttpClient,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  retriveAll(): Observable<EnviromentResponseCollection> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_ENIROMENT.concat(`/`);

    return this.http.get<EnviromentResponseCollection>(endpoint, credentials);
  }

  retrive(page: number): Observable<EnviromentResponseCollection> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_ENIROMENT.concat(`?page=${page}&size=5`);

    return this.http.get<EnviromentResponseCollection>(endpoint, credentials);
  }

  save(request: EnviromentRequest): Observable<MessageResponse> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_ENIROMENT + '/create';

    return this.http.post<MessageResponse>(endpoint, request, credentials);
  }
}
