import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { SingInRequest } from 'src/app/model/request/SingInRequest';
import { SingInResponse } from 'src/app/model/response/SingInResponse';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

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

  login() {
    this.request.username = 'KEVINC2F48D';
    this.request.password = 'kevin12345@';

    this.authenticationService.singIn(this.request).subscribe(
      (response: SingInResponse) => {
        console.log(response);
        this.router.navigateByUrl('/');
      },
      (error: any) => console.log(error)
    );
  }
}
