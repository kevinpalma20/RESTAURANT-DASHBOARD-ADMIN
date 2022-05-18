import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { SingInRequest } from 'src/app/model/request/SingInRequest';
import { SingInResponse } from 'src/app/model/response/SingInResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public request: SingInRequest = {};
  public response: SingInResponse = { token: '' };

  constructor(private router: Router) {}

  login() {
    this.request.email = 'umb.kevsidorov@gmail.com';
    this.request.password = 'hola123456';
    this.router.navigateByUrl('/');
  }
}
