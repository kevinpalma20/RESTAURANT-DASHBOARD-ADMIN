import { EnviromentResponse } from '../entity/EnviromentResponse';
import { ResponseCollection } from './ResponseCollection';

export interface EnviromentResponseCollection extends ResponseCollection {
  collections?: EnviromentResponse[];
}
