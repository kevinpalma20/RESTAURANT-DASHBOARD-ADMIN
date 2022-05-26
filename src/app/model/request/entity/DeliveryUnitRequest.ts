export interface DeliveryUnitRequest {
  licensePlate: string;
  typeVehicule: string;
  person?: string;
  numberPhone?: string;
  external: boolean;
}
