import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/model/response/entity/BoardResponse';
import { BoardResponseCollection } from 'src/app/model/response/retrive/BoardResponseCollection';
import { EnviromentResponse } from 'src/app/model/response/entity/EnviromentResponse';
import { EnviromentResponseCollection } from 'src/app/model/response/retrive/EnviromentResponseCollection';
import { ErrorResponse } from 'src/app/model/response/error/ErrorResponse';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { BoardRetriveService } from 'src/app/services/board/board-retrive.service';
import { BoardService } from 'src/app/services/board/board.service';
import { EnviromentService } from 'src/app/services/enviroment.service';

import {
  BoardRequest,
  JoinBoardRequest,
} from 'src/app/model/request/entity/BoardRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {
  public loading: boolean = true;
  public responseForRetrive: BoardResponseCollection = { collections: [] };

  public to: number = 0;
  public pagesTotal: number = 0;

  public boardRequest: BoardRequest = { name: '', environment: 0, seating: 0 };
  public joinBoardRequest: JoinBoardRequest = { board1: '', board2: '' };

  public enviromentCollection: EnviromentResponse[] = [];

  constructor(
    private boardService: BoardService,
    private enviromentService: EnviromentService,
    private boardRetriveService: BoardRetriveService
  ) {}

  ngOnInit(): void {
    this.retrive(0);
    this.retriveEnviroment();
  }

  private showAlertError(error: ErrorResponse) {
    Swal.fire({
      title: error.error?.message,
      text: error.error?.error,
      icon: 'error',
    });
  }

  private showAlertSuccess(message: MessageResponse) {
    Swal.fire({
      text: message.message,
      icon: 'success',
    });
    this.retrive(0);
  }

  private retrive(page: number): void {
    this.boardRetriveService.retrive(page).subscribe(
      (response: BoardResponseCollection) => {
        this.responseForRetrive = response;
        this.pagesTotal = this.responseForRetrive.totalPages || 0;
        this.loading = false;
      },
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  public retriveEnviroment() {
    this.enviromentService.retriveAll().subscribe(
      (response: EnviromentResponseCollection) =>
        (this.enviromentCollection = response.collections || []),
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  public JoinBoard() {
    console.log(this.joinBoardRequest);
    this.boardService.join(this.joinBoardRequest).subscribe(
      (response: MessageResponse) => this.showAlertSuccess(response),
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  public save(): void {
    this.boardService.save(this.boardRequest).subscribe(
      (response: MessageResponse) => this.showAlertSuccess(response),
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  public changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) this.to = this.pagesTotal - 1;
    }
    this.retrive(this.to);
  }

  public viewDetails(details: Details) {
    let isJoind = '';

    if (details.join != null) {
      isJoind =
        `<b>${details.join}</b>, ` +
        `<p> Cantidad de asientos en total ${details.seatings}</p>`;
    }

    Swal.fire({
      title: `<strong>${details.state}</strong>`,
      html: isJoind,
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
}
