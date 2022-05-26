import { ProductResponse } from '../ProductResponse';

export interface LineCartResponse {
  idCart?: string;
  idLineCart?: string;
  quantity?: number;
  importt?: number;
  product: ProductResponse;
}
