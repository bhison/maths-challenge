import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Operators from "src/components/operators";
import SumPane from "src/components/sumPane";
import { sum } from "types";
import StartingNumber from "../components/startingNumber";
import TargetDisplay from "../components/targetDisplay";

const Game = () => {
  const [currentSum, setCurrentSum] = useState<sum>({
    leftNumber: undefined,
    rightNumber: undefined,
    operator: undefined,
  });

  const [operatorsEnabled, setOperatorsEnabled] = useState<boolean>(false);

  return (
    <Container minW="full" py="4" bg="transparent">
      <VStack bg="transparent" spacing="2">
        <TargetDisplay />
        <Operators enabled={operatorsEnabled} />
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
      <Button onClick={() => setOperatorsEnabled(!operatorsEnabled)}>
        Debug
      </Button>
    </Container>
  );
};

export default Game;
