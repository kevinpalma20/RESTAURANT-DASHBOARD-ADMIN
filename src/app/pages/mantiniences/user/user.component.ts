import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../services/user.service';
import { ShowAlertService } from './../../../services/show-alert.service';
import { UserResponse } from './../../../model/response/entity/UserResponse';
import { UserResponseCollection } from 'src/app/model/response/retrive/UserResponseCollection';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public loading: boolean = true;

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: UserResponse[] = [];
  /** Response collection by pets */

  constructor(
    private userService: UserService,
    private showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.retrive(0);
  }

  retrive(pages: number) {
    this.loading = true;
    this.userService
      .retrive(pages)
      .subscribe((response: UserResponseCollection) => {
        this.totalCollection = response.totalItems;
        this.pagesTotal = response.totalPages;
        this.array = response.collections;

        this.loading = false;
      }),
      (err: any) => {
        this.showAlertService.showMessageError(err);
        this.loading = false;
      };
  }
  changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) this.to = this.pagesTotal - 1;
    }
    this.retrive(this.to);
  }
}
