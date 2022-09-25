import { Box, Container, Text } from "@chakra-ui/react";

const Game = () => {
  return (
    <Container maxW="container.lg">
      <Box
        pt="2"
        w="sm"
        border="1px"
        borderStyle="dashed"
        shadow="lg"
        mx="auto"
        bg="gray.100"
        borderRadius="md"
      >
        <Text w="full" textAlign="center" fontWeight="bold">
          Target
        </Text>
        <Text
          fontSize="9xl"
          w="full"
          textAlign="center"
          fontFamily="funt"
          lineHeight="none"
          mt="-5"
          color="red.500"
        >
          135
        </Text>
      </Box>
    </Container>
  );
};

export default Game;
