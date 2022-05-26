import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartResponse } from 'src/app/model/response/entity/cart/CartResponse';
import { SERVICE_CART } from 'src/environments/environment.prod';
import { RetriveCredentialsService } from '../auth/retrive-credentials.service';

@Injectable({
  providedIn: 'root',
})
export class CartRetriveService {
  private service: string = SERVICE_CART + '/cart/retriveProductsByBoard';

  constructor(
    private http: HttpClient,
    private retriveCredentialsService: RetriveCredentialsService
  ) {}

  retrive(board: string): Observable<CartResponse[]> {
    const credentials = this.retriveCredentialsService.retriveCredentials();
    const endpoint = this.service.concat(`?board=${board}`);
    return this.http.get<CartResponse[]>(endpoint, credentials);
  }
}
