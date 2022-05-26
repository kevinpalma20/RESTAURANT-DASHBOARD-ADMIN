import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICE } from 'src/environments/environment.prod';
import { DeliveryUnitRequest } from '../model/request/entity/DeliveryUnitRequest';
import { MessageResponse } from '../model/response/messages/MessageResponse';
import { DeliveryUnitResponseCollection } from '../model/response/retrive/DeliveryUnitResponseCollection';
import { RetriveCredentialsService } from './auth/retrive-credentials.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryUnitService {
  private service: string = SERVICE + '/deliveryUnit';

  constructor(
    private http: HttpClient,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  retrive(page: number): Observable<DeliveryUnitResponseCollection> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.service.concat(`?page=${page}&size=3  `);
    return this.http.get<DeliveryUnitResponseCollection>(endpoint, credentials);
  }

  save(request: DeliveryUnitRequest): Observable<MessageResponse> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.service.concat(`/create`);
    return this.http.post<MessageResponse>(endpoint, request, credentials);
  }
}
