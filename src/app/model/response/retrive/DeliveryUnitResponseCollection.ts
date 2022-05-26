import { DeliveryUnitResponse } from '../entity/DeliveryUnitResponse';
import { ResponseCollection } from './ResponseCollection';

export interface DeliveryUnitResponseCollection extends ResponseCollection {
  collections: DeliveryUnitResponse[];
}
