import { Component, OnInit } from '@angular/core';
import { DeliveryUnitRequest } from 'src/app/model/request/entity/DeliveryUnitRequest';
import { DeliveryUnitResponse } from 'src/app/model/response/entity/DeliveryUnitResponse';
import { ErrorResponse } from 'src/app/model/response/error/ErrorResponse';
import { MessageResponse } from 'src/app/model/response/messages/MessageResponse';
import { DeliveryUnitResponseCollection } from 'src/app/model/response/retrive/DeliveryUnitResponseCollection';
import { DeliveryUnitService } from 'src/app/services/delivery-unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delivery-unit',
  templateUrl: './delivery-unit.component.html',
})
export class DeliveryUnitComponent implements OnInit {
  public collection: DeliveryUnitResponse[] = [];

  public request: DeliveryUnitRequest = {
    licensePlate: '',
    typeVehicule: '',
    external: false,
  };

  public collectionVehicules: string[] = ['Auto', 'Motocicleta', 'Bicicleta'];

  public to: number = 0;
  public pagesTotal: number = 0;
  public totalItems: number = 0;
  public loading: boolean = true;
  constructor(private deliveryUnitService: DeliveryUnitService) {}

  ngOnInit(): void {
    this.retrive(0);
  }

  private showAlertError(error: ErrorResponse) {
    Swal.fire({
      title: error.error?.message,
      text: error.error?.error,
      icon: 'error',
    });
    this.loading = false;
  }
  private showAlertSuccess(message: MessageResponse) {
    Swal.fire({
      text: message.message,
      icon: 'success',
    });
    this.retrive(0);
    this.loading = false;
  }

  private retrive(page: number): void {
    this.clear();
    this.loading = true;
    this.deliveryUnitService.retrive(page).subscribe(
      (response: DeliveryUnitResponseCollection) => {
        this.collection = response.collections;
        this.pagesTotal = response.totalPages || 0;
        this.totalItems = response.totalItems || 0;
        this.loading = false;
      },
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }

  public clear(): void {
    this.request.licensePlate = '';
    this.request.typeVehicule = '';
    this.request.numberPhone = '';
    this.request.person = '';
    this.request.external = false;
  }

  public save(): void {
    this.loading = true;
    this.deliveryUnitService.save(this.request).subscribe(
      (response: MessageResponse) => this.showAlertSuccess(response),
      (error: ErrorResponse) => this.showAlertError(error)
    );
  }
  public changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) {
        this.to = 0;
      }
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) {
        this.to = this.pagesTotal - 1;
      }
    }
    this.retrive(this.to);
  }
}
