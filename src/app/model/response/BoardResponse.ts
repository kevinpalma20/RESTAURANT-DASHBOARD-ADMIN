export interface BoardResponse {
  id: number;
  name: string;
  environment?: string;
  seating: number;
  details: Details;
}

export interface Details {
  state: string;
  join?: string;
  seatings?: string;
}
