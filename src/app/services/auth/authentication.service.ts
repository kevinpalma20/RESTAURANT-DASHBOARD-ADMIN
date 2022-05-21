import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { SERVICE } from 'src/environments/environment.prod';

import { SingInResponse } from 'src/app/model/response/auth/SingInResponse';
import { SingInRequest } from 'src/app/model/request/auth/SingInRequest';
import { VerifyResponse } from 'src/app/model/response/auth/VerifyTokenResponse';

import { RetriveCredentialsService } from './retrive-credentials.service';

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

  singIn(singInRequest: SingInRequest): Observable<SingInResponse> {
    let endpoint = this.SERVICE_AUTH + '/singIn';
    return this.http
      .post<SingInResponse>(endpoint, singInRequest)
      .pipe(
        tap((res: SingInResponse) => localStorage.setItem('token', res.token))
      );
  }

  verify(): Observable<boolean> {
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
