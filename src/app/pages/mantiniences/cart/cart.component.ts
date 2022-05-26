import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartResponse } from 'src/app/model/response/entity/cart/CartResponse';
import { ErrorResponse } from 'src/app/model/response/error/ErrorResponse';
import { CartRetriveService } from 'src/app/services/cart/cart-retrive.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public loading: boolean = false;
  public collection: CartResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartRetriveService: CartRetriveService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (response: Params) => {
        this.cartRetriveService
          .retrive(response['name'])
          .subscribe(
            (response: CartResponse[]) => (this.collection = response)
          );
      },
      (error: ErrorResponse) => console.log(error)
    );
    this.loading = true;
  }
}
