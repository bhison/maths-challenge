import { Button } from "@chakra-ui/react";

const StartingNumber = ({ value }: { value: number }) => {
  return (
    <Button
      border="4px"
      borderColor="yellow.400"
      borderRadius="full"
      bg="yellow.200"
      p="4"
      h="20"
      w="20"
      _hover={{
        background: "yellow.300",
      }}
      _active={{
        background: "yellow.100",
      }}
      color="yellow.600"
      fontSize="3xl"
      shadow="md"
    >
      {value}
    </Button>
  );
};

export default StartingNumber;
