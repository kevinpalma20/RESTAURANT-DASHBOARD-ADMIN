import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SERVICE } from 'src/environments/environment';
import { SingInResponse } from '../../model/response/SingInResponse';
import { SingInRequest } from '../../model/request/SingInRequest';
import { RetriveCredentialsService } from './retrive-credentials.service';
import { VerifyResponse } from '../../model/response/VerifyTokenResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public admin: boolean = false;
  public mod: boolean = false;

  private SERVICE_AUTH: string = SERVICE + '/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  singIn(singInRequest: SingInRequest) {
    let endpoint = this.SERVICE_AUTH + '/singIn';
    return this.http
      .post<SingInResponse>(endpoint, singInRequest)
      .pipe(
        tap((res: SingInResponse) => localStorage.setItem('token', res.token))
      );
  }

  verify() {
    let endpoint = this.SERVICE_AUTH + '/verify';
    const credentials = this.retriveCredentialsService.retriveCredentials();
    return this.http.post<VerifyResponse>(endpoint, null, credentials).pipe(
      tap((res: VerifyResponse) => {
        this.mod = res.mod;
        this.admin = res.admin;

        localStorage.setItem('token', res.token);
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  logOut(): void {
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');
  }
}
