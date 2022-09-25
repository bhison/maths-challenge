export type bigStartingNumber = 25 | 50 | 75 | 100;
export type smallStartingNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10;
export type startingNumber = bigStartingNumber | smallStartingNumber;
export type operator = "multiply" | "divide" | "add" | "subtract";

export type sum = {
  leftNumber: number;
  rightNumber?: number;
  operator?: operator;
};
