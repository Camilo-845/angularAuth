export enum Status {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'Unknown',
}

export interface Character {
  id: number;
  name: string;
  status: Status;
}
