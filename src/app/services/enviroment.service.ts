import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SERVICE } from 'src/environments/environment.prod';
import { EnviromentRequest } from '../model/request/EnviromentRequest';
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

  save(request: EnviromentRequest): Observable<MessageResponse> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_ENIROMENT + '/create';

    return this.http.post<MessageResponse>(endpoint, request, credentials);
  }
}
