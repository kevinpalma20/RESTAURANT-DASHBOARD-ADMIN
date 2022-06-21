import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from './../../environments/environment.prod';
import { SpecialtyResponse } from './../model/response/entity/SpecialtyResponse';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  private ENDPINT: string = SERVICE + '/specialty';

  constructor(private http: HttpClient) {}

  retriveAll(): Observable<SpecialtyResponse[]> {
    const endpoint = this.ENDPINT.concat(`/retrieve`);
    return this.http.get<SpecialtyResponse[]>(endpoint);
  }
}
