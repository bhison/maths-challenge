import { GameNumber, Operator, Sum } from "types";
const operators: Operator[] = ["add", "subtract", "divide", "multiply"];

const InputManager = ({
  activeSum,
  setActiveSum,
  inputValue,
}: {
  activeSum: Sum;
  setActiveSum: (sum: Sum) => void;
  inputValue: GameNumber | Operator;
}) => {
  if ((operators as any[]).includes(inputValue)) {
    if (inputValue === activeSum.operator) {
      setActiveSum({ ...activeSum, operator: undefined });
    } else {
      setActiveSum({ ...activeSum, operator: inputValue as Operator });
    }
  } else {
    if (!activeSum.operator) {
      setActiveSum({ ...activeSum, leftNumber: inputValue as GameNumber });
    } else {
      setActiveSum({ ...activeSum, rightNumber: inputValue as GameNumber });
    }
  }
};

export default InputManager;
