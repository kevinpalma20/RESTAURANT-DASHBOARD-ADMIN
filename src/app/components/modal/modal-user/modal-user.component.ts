import { Component, OnInit } from '@angular/core';

import { RoleService } from './../../../services/role.service';
import { UserService } from './../../../services/user.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { UserRequest } from './../../../model/request/entity/UserRequest';
import { SpecialityService } from './../../../services/speciality.service';
import { RoleResponse } from './../../../model/response/entity/RoleResponse';
import { MessageResponse } from './../../../model/response/messages/MessageResponse';
import { SpecialtyResponse } from './../../../model/response/entity/SpecialtyResponse';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
})
export class ModelUserComponent implements OnInit {
  public request: UserRequest = {
    dni: '',
    firstname: '',
    lastname: '',
    email: '',
    role: 0,
    specialty: 0,
  };

  public array_role: RoleResponse[] = [];
  public array_speciality: SpecialtyResponse[] = [];

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private toastService: ShowAlertService,
    private specialityService: SpecialityService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public save(): void {
    this.userService.save(this.request).subscribe(
      (response: MessageResponse) =>
        this.toastService.showToast(response.message, true),
      (error: any) => this.toastService.showToast(error.error.message, false)
    );
  }

  private getData(): void {
    this.getRole();
    this.getSpeciality();
  }

  private getSpeciality(): void {
    this.specialityService.retriveAll().subscribe(
      (collection: SpecialtyResponse[]) => (this.array_speciality = collection),
      (error: any) => this.toastService.showMessageError(error)
    );
  }

  private getRole(): void {
    this.roleService.retriveAll().subscribe(
      (collection: RoleResponse[]) => (this.array_role = collection),
      (error: any) => this.toastService.showMessageError(error)
    );
  }
}
