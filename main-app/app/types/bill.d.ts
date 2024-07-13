export interface Person {
  name: string;
  amount: number;
  address: string;
}

export interface Bill {
  description: string;
  people: Person[];
  amountDue: number;
}
