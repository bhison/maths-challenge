import { Button } from "@chakra-ui/react";

const StartingNumber = ({
  value,
  onClick,
  enabled,
}: {
  value: number;
  onClick: () => void;
  enabled: boolean;
}) => {
  return (
    <Button
      border="4px"
      borderColor="yellow.400"
      borderRadius="full"
      bg="yellow.200"
      p="4"
      h={[12, 14, 16]}
      w={[12, 14, 16]}
      _hover={{
        background: "yellow.300",
      }}
      _active={{
        background: "yellow.100",
      }}
      color="yellow.600"
      fontSize={["xl", "2xl", "3xl"]}
      shadow="md"
      onClick={onClick}
      disabled={!enabled}
    >
      {value}
    </Button>
  );
};

export default StartingNumber;
