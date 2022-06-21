import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

import { BoardService } from 'src/app/services/board/board.service';
import { Details } from 'src/app/model/response/entity/BoardResponse';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { EnviromentService } from 'src/app/services/enviroment.service';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { BoardRetriveService } from 'src/app/services/board/board-retrive.service';
import { EnviromentResponse } from 'src/app/model/response/entity/EnviromentResponse';
import { BoardResponseCollection } from 'src/app/model/response/retrive/BoardResponseCollection';
import { EnviromentResponseCollection } from 'src/app/model/response/retrive/EnviromentResponseCollection';

import {
  BoardRequest,
  JoinBoardRequest,
} from 'src/app/model/request/entity/BoardRequest';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {
  public loading: boolean = true;
  public responseForRetrive: BoardResponseCollection = {
    totalPages: 0,
    totalItems: 0,
    collections: [],
  };

  public to: number = 0;
  public pagesTotal: number = 0;

  public boardRequest: BoardRequest = { name: '', environment: 0, seating: 0 };
  public joinBoardRequest: JoinBoardRequest = { board1: '', board2: '' };

  public enviromentCollection: EnviromentResponse[] = [];

  constructor(
    private boardService: BoardService,
    private showAlertService: ShowAlertService,
    private enviromentService: EnviromentService,
    private boardRetriveService: BoardRetriveService
  ) {}

  ngOnInit(): void {
    this.retrive(0);
    this.retriveEnviroment();
  }

  private retrive(page: number): void {
    this.boardRetriveService.retrive(page).subscribe(
      (response: BoardResponseCollection) => {
        this.responseForRetrive = response;
        this.pagesTotal = this.responseForRetrive.totalPages || 0;
        this.loading = false;
      },
      (error: any) => this.showAlertService.showMessageError(error)
    );
  }

  public retriveEnviroment() {
    this.enviromentService.retriveAll().subscribe(
      (response: EnviromentResponseCollection) =>
        (this.enviromentCollection = response.collections || []),
      (error: any) => this.showAlertService.showMessageError(error)
    );
  }

  public JoinBoard() {
    console.log(this.joinBoardRequest);
    this.boardService.join(this.joinBoardRequest).subscribe(
      (response: MessageResponse) =>
        this.showAlertService.showMessageSuccess(response.message),
      (error: any) => this.showAlertService.showMessageError(error)
    );
  }

  public save(): void {
    this.boardService.save(this.boardRequest).subscribe(
      (response: MessageResponse) =>
        this.showAlertService.showMessageSuccess(response.message),
      (error: any) => this.showAlertService.showMessageError(error)
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
