import { Button, HStack } from "@chakra-ui/react";
import { FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { operator } from "types";

const OperatorButton = ({
  operator,
  enabled,
}: {
  operator: operator;
  enabled: boolean;
}) => {
  return (
    <Button
      disabled={!enabled}
      textColor="black"
      fontSize="2xl"
      w={enabled ? ["10", "12", "16"] : ["3", "4"]}
      h={enabled ? ["8", "10", "12"] : ["5", "6"]}
      shadow={"md"}
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

const Operators = ({ enabled }: { enabled: boolean } = { enabled: false }) => {
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
      <OperatorButton operator={"add"} enabled={enabled} />
      <OperatorButton operator={"subtract"} enabled={enabled} />
      <OperatorButton operator={"multiply"} enabled={enabled} />
      <OperatorButton operator={"divide"} enabled={enabled} />
    </HStack>
  );
};

export default Operators;
