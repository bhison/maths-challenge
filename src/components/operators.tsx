import { Button, HStack } from "@chakra-ui/react";
import InputManager from "helpers/inputManager";
import { useMemo } from "react";
import { FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { Operator, Sum } from "types";

const OperatorButton = ({
  operator,
  enabled,
  onSelect,
  selected,
}: {
  operator: Operator;
  enabled: boolean;
  onSelect: () => void;
  selected: boolean;
}) => {
  return (
    <Button
      disabled={!enabled}
      textColor={selected ? "white" : "black"}
      bg={selected ? "blue.700" : "white"}
      fontSize="2xl"
      w={["10", "12", "16"]}
      h={["8", "10", "12"]}
      shadow={"md"}
      onClick={onSelect}
      _hover={
        !enabled ? {} : selected ? { bg: "blue.800" } : { bg: "blue.100" }
      }
      _active={
        !enabled
          ? { bg: "red.900", textColor: "gray.700" }
          : { bg: "blue.600", textColor: "white" }
      }
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
  currentSum: Sum;
  setCurrentSum: (val: Sum) => void;
}) => {
  const enabled = useMemo(
    () => !!currentSum.leftNumber && !currentSum.rightNumber,
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
      spacing={["3", "4", "5"]}
    >
      {(["add", "subtract", "multiply", "divide"] as Operator[]).map(
        (operator: Operator) => (
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
            selected={currentSum.operator === operator}
          />
        )
      )}
    </HStack>
  );
};

export default Operators;
