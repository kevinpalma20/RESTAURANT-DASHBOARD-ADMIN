export interface BoardRequest {
  name: string;
  seating: number;
  environment: number;
}

export interface JoinBoardRequest {
  board1: string;
  board2: string;
}
