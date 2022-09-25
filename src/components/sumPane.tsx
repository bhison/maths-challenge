import { Box } from "@chakra-ui/react";
import { sum } from "types";

const SumPane = ({ sum }: { sum: sum }) => {
  return (
    <Box
      w="full"
      maxW="container.sm"
      border="1px"
      shadow="md"
      bg="blackAlpha.100"
      color="white"
      textAlign="center"
      p="2"
      fontSize="2xl"
    >
      Sum pane here
    </Box>
  );
};

export default SumPane;
