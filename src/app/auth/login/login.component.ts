import { Component } from '@angular/core';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { SingInRequest } from 'src/app/model/request/SingInRequest';
import { SingInResponse } from 'src/app/model/response/SingInResponse';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { ErrorResponse } from 'src/app/model/response/ErrorResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public request: SingInRequest = {};
  public response: SingInResponse = { token: '' };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  private showAlertError(error: ErrorResponse) {
    Swal.fire({
      title: error.error?.message,
      text: error.error?.error,
      icon: 'error',
    });
  }

  login() {
    //this.request.username = 'KEVIN6EE36D';
    //this.request.password = 'kevin12345@';
    this.authenticationService.singIn(this.request).subscribe(
      (response: SingInResponse) => this.router.navigateByUrl('/'),
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }
}
