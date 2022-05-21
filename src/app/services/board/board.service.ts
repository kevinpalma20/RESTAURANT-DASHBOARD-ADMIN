import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  BoardRequest,
  JoinBoardRequest,
} from 'src/app/model/request/entity/BoardRequest';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { SERVICE } from 'src/environments/environment.prod';
import { RetriveCredentialsService } from '../auth/retrive-credentials.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private SERVICE_BOARD: string = SERVICE + '/board';

  constructor(
    private http: HttpClient,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  save(request: BoardRequest): Observable<MessageResponse> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_BOARD + '/create';

    return this.http.post<MessageResponse>(endpoint, request, credentials);
  }

  join(request: JoinBoardRequest): Observable<MessageResponse> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.SERVICE_BOARD + '/join';

    return this.http.put<MessageResponse>(endpoint, request, credentials);
  }
}
