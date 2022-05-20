import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RetriveCredentialsService {
  constructor() {}

  builderCredentials(token: string) {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return httpOptions;
  }

  retriveCredentials() {
    const token = localStorage.getItem('token') || '';
    return this.builderCredentials(token);
  }
}
