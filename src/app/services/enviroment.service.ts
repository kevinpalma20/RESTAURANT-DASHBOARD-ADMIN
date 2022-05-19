import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SERVICE } from 'src/environments/environment.prod';
import { EnviromentRequest } from '../model/request/EnviromentRequest';
import { EnviromentResponseCollection } from '../model/response/EnviromentResponseCollection';
import { MessageResponse } from '../model/response/MessageResponse';
import { RetriveCredentialsService } from './auth/retrive-credentials.service';

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
