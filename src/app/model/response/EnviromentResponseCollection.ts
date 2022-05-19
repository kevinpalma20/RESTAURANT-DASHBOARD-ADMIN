import { EnviromentResponse } from './EnviromentResponse';
import { ResponseCollection } from './ResponseCollection';

export interface EnviromentResponseCollection extends ResponseCollection {
  collections?: EnviromentResponse[];
}
