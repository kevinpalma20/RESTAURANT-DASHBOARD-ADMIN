export interface DeliveryUnitResponse {
  id: number;
  licensePlate: string;
  typeVehicule: string;
  details: Details;
}

export interface Details {
  state: string;
  external: string;
  number?: string;
  person?: string;
}
