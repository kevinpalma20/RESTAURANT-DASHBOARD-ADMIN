import { UserResponse } from './../entity/UserResponse';
import { ResponseCollection } from './ResponseCollection';

export interface UserResponseCollection extends ResponseCollection {
  collections: UserResponse[];
}
