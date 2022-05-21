import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BoardResponseCollection } from 'src/app/model/response/BoardResponseCollection';
import { SERVICE } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BoardRetriveService {
  private SERVICE_BOARD: string = SERVICE + '/retriveBoard';

  constructor(private http: HttpClient) {}

  retrive(page: number): Observable<BoardResponseCollection> {
    const endpoint = this.SERVICE_BOARD.concat(`?page=${page}&size=2`);

    return this.http.get<BoardResponseCollection>(endpoint);
  }
}
