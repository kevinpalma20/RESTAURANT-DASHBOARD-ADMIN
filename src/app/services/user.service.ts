import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment.prod';
import { UserRequest } from 'src/app/model/request/entity/UserRequest';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { RetriveCredentialsService } from 'src/app/services/auth/retrive-credentials.service';
import { UserResponseCollection } from 'src/app/model/response/retrive/UserResponseCollection';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private SERVICE_USER: string = SERVICE + '/user';

  constructor(
    private http: HttpClient,
    private service: RetriveCredentialsService
  ) {}

  save(request: UserRequest): Observable<MessageResponse> {
    const credentials = this.service.retriveCredentials();
    const endpoint = this.SERVICE_USER + '/save';

    return this.http.post<MessageResponse>(endpoint, request, credentials);
  }

  retrive(page: number): Observable<UserResponseCollection> {
    const credentials = this.service.retriveCredentials();
    const endpoint = this.SERVICE_USER.concat(`?page=${page}&size=4`);

    return this.http.get<UserResponseCollection>(endpoint, credentials);
  }
}
