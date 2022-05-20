import { Component, OnInit } from '@angular/core';
import { ErrorResponse } from 'src/app/model/response/ErrorResponse';
import { MessageResponse } from 'src/app/model/response/MessageResponse';
import { EnviromentService } from 'src/app/services/enviroment.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-enviroment',
  templateUrl: './enviroment.component.html',
  styleUrls: ['./enviroment.component.css'],
})
export class EnviromentComponent implements OnInit {
  public loading: boolean = false;
  constructor(private enviromentService: EnviromentService) {}

  ngOnInit(): void {}

  save(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Registrar un nuevo ambiente',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },

      showCancelButton: true,
      cancelButtonText: 'Cancelar',

      confirmButtonText: 'Registrar',

      preConfirm: (name: string) => {
        this.enviromentService.save({ name: name }).subscribe(
          (response: MessageResponse) => console.log(response),
          (error: ErrorResponse) => console.error(error.error?.message)
        );
      },
    });
  }
}
