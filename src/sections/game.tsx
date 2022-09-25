import { Container, HStack, VStack } from "@chakra-ui/react";
import InputManager from "helpers/inputManager";
import { useEffect, useMemo, useState } from "react";
import Operators from "src/components/operators";
import StartingNumber from "src/components/startingNumber";
import SumPane from "src/components/sumPane";
import TargetDisplay from "src/components/targetDisplay";
import { sum } from "types";

const Game = () => {
  const [currentSum, setCurrentSum] = useState<sum>({
    leftNumber: undefined,
    rightNumber: undefined,
    operator: undefined,
  });
  const [gameNumbers, setGameNumbers] = useState<number[]>([
    100, 75, 2, 4, 10, 1,
  ]);

  const numbersEnabled = useMemo(
    () =>
      !currentSum.leftNumber ||
      (!!currentSum.leftNumber &&
        currentSum.operator &&
        !currentSum.rightNumber),
    [currentSum]
  );

  useEffect(() => console.log(currentSum), [currentSum]);

  return (
    <Container minW="full" py="4" bg="transparent">
      <VStack bg="transparent" spacing="2">
        <TargetDisplay />
        <Operators currentSum={currentSum} setCurrentSum={setCurrentSum} />
        <HStack
          mx="auto"
          align="center"
          justify="center"
          bg="transparent"
          spacing={[1, 2, 3]}
        >
          {gameNumbers.map((val: number, index: number) => (
            <StartingNumber
              key={index}
              value={val}
              enabled={numbersEnabled ?? false}
              onClick={() =>
                InputManager({
                  activeSum: currentSum,
                  setActiveSum: setCurrentSum,
                  // We will need to make a number struct so each number entry has an id to be added/removed from play
                  inputValue: val,
                })
              }
            />
          ))}
        </HStack>
        <SumPane sum={currentSum} />
      </VStack>
    </Container>
  );
};

export default Game;
