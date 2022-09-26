import { Sum } from "types";

const SumAction = (sum: Sum): number | false => {
  if (!sum.leftNumber || !sum.operator || !sum.rightNumber) return false;

  const leftNumber = sum.leftNumber.value;
  const operator = sum.operator;
  const rightNumber = sum.rightNumber.value;

  switch (operator) {
    case "add":
      return leftNumber + rightNumber;
    case "subtract":
      return rightNumber >= leftNumber ? 0 : leftNumber - rightNumber;
    case "multiply":
      return leftNumber * rightNumber;
    case "divide":
      const result = leftNumber / rightNumber;
      return result % 1 === 0 ? result : false;
  }
};

export default SumAction;
