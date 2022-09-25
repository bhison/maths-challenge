import { operator, sum } from "types";
const operators: operator[] = ["add", "subtract", "divide", "multiply"];

const InputManager = ({
  activeSum,
  setActiveSum,
  inputValue,
}: {
  activeSum: sum;
  setActiveSum: (sum: sum) => void;
  inputValue: number | operator;
}) => {
  if ((operators as any[]).includes(inputValue)) {
    setActiveSum({ ...activeSum, operator: inputValue as operator });
  } else {
    if (activeSum.leftNumber) {
      setActiveSum({ ...activeSum, rightNumber: inputValue as number });
    } else {
      setActiveSum({ ...activeSum, leftNumber: inputValue as number });
    }
  }
};

export default InputManager;
