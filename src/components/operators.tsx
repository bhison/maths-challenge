import { Button, HStack } from "@chakra-ui/react";
import InputManager from "helpers/inputManager";
import { useMemo } from "react";
import { FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { operator, sum } from "types";

const OperatorButton = ({
  operator,
  enabled,
  onSelect,
}: {
  operator: operator;
  enabled: boolean;
  onSelect: () => void;
}) => {
  return (
    <Button
      disabled={!enabled}
      textColor="black"
      fontSize="2xl"
      w={enabled ? ["10", "12", "16"] : ["3", "4"]}
      h={enabled ? ["8", "10", "12"] : ["5", "6"]}
      shadow={"md"}
      onClick={onSelect}
    >
      {operator === "add" ? (
        <FaPlus />
      ) : operator === "subtract" ? (
        <FaMinus />
      ) : operator === "multiply" ? (
        <FaTimes />
      ) : operator === "divide" ? (
        <FaDivide />
      ) : (
        ""
      )}
    </Button>
  );
};

const Operators = ({
  currentSum,
  setCurrentSum,
}: {
  currentSum: sum;
  setCurrentSum: (val: sum) => void;
}) => {
  const enabled = useMemo(
    () => !!currentSum.leftNumber && !currentSum.operator,
    [currentSum]
  );
  return (
    <HStack
      w="full"
      maxW="container.sm"
      color="white"
      textAlign="center"
      p="2"
      fontSize="2xl"
      justify="center"
      spacing={enabled ? ["3", "4", "5"] : "1"}
    >
      {(["add", "subtract", "multiply", "divide"] as operator[]).map(
        (operator: operator) => (
          <OperatorButton
            key={operator}
            operator={operator}
            enabled={enabled}
            onSelect={() => {
              InputManager({
                activeSum: currentSum,
                setActiveSum: setCurrentSum,
                inputValue: operator,
              });
            }}
          />
        )
      )}
    </HStack>
  );
};

export default Operators;
