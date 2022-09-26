export type BigStartingNumber = 25 | 50 | 75 | 100;
export type SmallStartingNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10;
export type StartingNumber = BigStartingNumber | SmallStartingNumber;
export type Operator = "multiply" | "divide" | "add" | "subtract";

export type Sum = {
  leftNumber?: GameNumber;
  rightNumber?: GameNumber;
  operator?: Operator;
};

export type GameNumber = {
  id: string;
  value: number;
};
