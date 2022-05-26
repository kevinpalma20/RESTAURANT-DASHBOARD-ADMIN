import { LineCartResponse } from './LineCartResponse';

export interface CartResponse {
  idCart?: string;
  idLineRes?: string;
  total?: number;
  dateCreated?: string;
  collection: LineCartResponse[];
}
