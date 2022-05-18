import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SERVICE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public admin: boolean = false;
  public mod: boolean = false;

  private SERVICE_AUTH: string = SERVICE + '/auth';

  constructor(private http: HttpClient, private router: Router) {}

  setAuthentication() {}

  verify() {}

  logOut(): void {
    localStorage.removeItem('routes');
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');
  }
}
