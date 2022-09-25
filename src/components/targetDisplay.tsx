import { Box, Text } from "@chakra-ui/react";

const TargetDisplay = () => {
  return (
    <Box
      pt="2"
      w="sm"
      maxW="240px"
      border="4px"
      borderStyle="dashed"
      borderColor="white"
      shadow="lg"
      mx="auto"
      bg="whiteAlpha.300"
      borderRadius="md"
    >
      <Text
        w="full"
        textAlign="center"
        fontWeight="bold"
        bg="transparent"
        fontFamily="mono"
        color="green.500"
        fontSize="xl"
      >
        TARGET
      </Text>
      <Text
        bg="transparent"
        fontSize={"8xl"}
        w="full"
        textAlign="center"
        fontFamily="funt"
        lineHeight="none"
        mt="-5"
        color="red.500"
      >
        888
      </Text>
    </Box>
  );
};

export default TargetDisplay;
