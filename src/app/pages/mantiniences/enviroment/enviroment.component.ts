import { Component, OnInit } from '@angular/core';

import { ErrorResponse } from 'src/app/model/response/error/ErrorResponse';
import { EnviromentService } from 'src/app/services/enviroment.service';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { EnviromentResponseCollection } from 'src/app/model/response/retrive/EnviromentResponseCollection';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-enviroment',
  templateUrl: './enviroment.component.html',
})
export class EnviromentComponent implements OnInit {
  public loading: boolean = true;
  public responseForRetrive: EnviromentResponseCollection = {};

  public to: number = 0;
  public pagesTotal: number = 0;

  constructor(private enviromentService: EnviromentService) {}

  ngOnInit(): void {
    this.retrive(0);
  }

  private saveEnviroment(name: string): void {
    this.enviromentService.save({ name: name }).subscribe(
      (response: MessageResponse) => {
        Swal.fire({
          text: response.message,
          icon: 'success',
        });
        this.retrive(0);
      },
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  private retrive(pages: number): void {
    this.enviromentService.retrive(pages).subscribe(
      (response: EnviromentResponseCollection) => {
        this.responseForRetrive = response;
        this.pagesTotal = this.responseForRetrive.totalPages || 0;

        this.loading = false;
      },
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  private showAlertError(error: ErrorResponse) {
    Swal.fire({
      title: error.error?.message,
      text: error.error?.error,
      icon: 'error',
    });
  }

  public save(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Registrar un nuevo ambiente',
      input: 'text',
      inputAttributes: { autocapitalize: 'off' },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Registrar',

      preConfirm: (name: string) => this.saveEnviroment(name),
    });
  }

  public changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) this.to = this.pagesTotal - 1;
    }
    console.log(this.to);

    this.retrive(this.to);
  }
}
