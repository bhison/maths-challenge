import { Box, Button, HStack } from "@chakra-ui/react";
import SumAction from "helpers/sumActions";
import { useMemo } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { Operator, Sum } from "types";

const symbolLookup = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

const SumPane = ({ sum, trash }: { sum: Sum; trash: () => void }) => {
  const result = useMemo(() => SumAction(sum), [sum]);

  const { leftNumber, operator, rightNumber } = sum;

  return (
    <HStack w="full" maxW="md">
      <Button
        mx="auto"
        onClick={trash}
        color="black"
        float="left"
        fontSize="xl"
      >
        <FaTrash />
      </Button>
      <Box
        w="full"
        border="1px"
        shadow="md"
        bg="blackAlpha.100"
        color="white"
        textAlign="center"
        p="5"
        fontSize="2xl"
      >
        {"" +
          (leftNumber ? leftNumber.value : " ___ ") +
          " " +
          (symbolLookup[operator as Operator] ?? " ___ ") +
          " " +
          (rightNumber ? rightNumber.value : " ") +
          (result ? " = " + result : " ___ ")}
      </Box>

      <Button
        mx="auto"
        onClick={trash}
        color="black"
        float="right"
        disabled={!leftNumber || !operator || !rightNumber}
        fontSize="xl"
      >
        <FaCheck />
      </Button>
    </HStack>
  );
};

export default SumPane;
