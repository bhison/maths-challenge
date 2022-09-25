import { Box, Container, HStack, Text } from "@chakra-ui/react";
import StartingNumber from "../components/startingNumber";

const Game = () => {
  return (
    <Container minW="full" py="4" bg="transparent">
      <Box
        pt="2"
        w="sm"
        maxW="80vw"
        border="4px"
        borderStyle="dashed"
        borderColor="white"
        shadow="lg"
        mx="auto"
        mb="5"
        bg="whiteAlpha.500"
        borderRadius="md"
      >
        <Text
          w="full"
          textAlign="center"
          fontWeight="bold"
          bg="transparent"
          fontFamily="mono"
        >
          TARGET
        </Text>
        <Text
          bg="transparent"
          fontSize={["8xl", "9xl", "9xl"]}
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
      <Box></Box>
      <Box bg="transparent">
        <HStack mx="auto" align="center" justify="center" bg="transparent">
          <StartingNumber value={100} />
          <StartingNumber value={75} />
          <StartingNumber value={8} />
          <StartingNumber value={3} />
          <StartingNumber value={10} />
          <StartingNumber value={6} />
        </HStack>
      </Box>
    </Container>
  );
};

export default Game;
