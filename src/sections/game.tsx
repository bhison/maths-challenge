import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import SumPane from "src/components/sumPane";
import StartingNumber from "../components/startingNumber";

const Game = () => {
  return (
    <Container minW="full" py="4" bg="transparent">
      <Box
        pt="2"
        w="sm"
        maxW="240px"
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
      <Box></Box>
      <VStack bg="transparent" spacing={[2, 5]}>
        <HStack
          mx="auto"
          align="center"
          justify="center"
          bg="transparent"
          spacing={[1, 2, 3]}
        >
          <StartingNumber value={100} />
          <StartingNumber value={75} />
          <StartingNumber value={8} />
          <StartingNumber value={3} />
          <StartingNumber value={10} />
          <StartingNumber value={6} />
        </HStack>
        <SumPane
          sum={{
            leftNumber: 100,
            rightNumber: undefined,
            operator: undefined,
          }}
        />
      </VStack>
    </Container>
  );
};

export default Game;
