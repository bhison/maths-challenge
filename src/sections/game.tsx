import { Container, HStack, VStack } from "@chakra-ui/react";
import InputManager from "helpers/inputManager";
import { GetGameNumber } from "helpers/numberFunctions";
import SumAction from "helpers/sumActions";
import { useEffect, useState } from "react";
import Operators from "src/components/operators";
import StartingNumber from "src/components/startingNumber";
import SumPane from "src/components/sumPane";
import TargetDisplay from "src/components/targetDisplay";
import { GameNumber, Sum } from "types";

const Game = () => {
  const [currentSum, setCurrentSum] = useState<Sum>({
    leftNumber: undefined,
    rightNumber: undefined,
    operator: undefined,
  });
  const [gameNumbers, setGameNumbers] = useState<GameNumber[]>(
    [100, 75, 2, 4, 10, 1].map((n) => GetGameNumber(n))
  );

  useEffect(() => console.log(currentSum), [currentSum]);

  return (
    <Container minW="full" py="4" bg="transparent">
      <VStack bg="transparent" spacing="8">
        <TargetDisplay />
        <SumPane sum={currentSum} trash={() => setCurrentSum({})} />
        <HStack
          mx="auto"
          align="center"
          justify="center"
          bg="transparent"
          spacing={[1, 2, 3]}
        >
          {gameNumbers.map((gameNumber: GameNumber) => (
            <StartingNumber
              key={gameNumber.id}
              value={gameNumber.value}
              enabled={
                (currentSum.leftNumber
                  ? currentSum.leftNumber.id !== gameNumber.id
                  : true) &&
                (currentSum.rightNumber
                  ? currentSum.rightNumber.id !== gameNumber.id
                  : true) &&
                (currentSum.operator !== "divide" ||
                  !!SumAction({ ...currentSum, rightNumber: gameNumber })) &&
                (currentSum.operator !== "subtract" ||
                  !!SumAction({ ...currentSum, rightNumber: gameNumber }))
              }
              onClick={() =>
                InputManager({
                  activeSum: currentSum,
                  setActiveSum: setCurrentSum,
                  inputValue: gameNumber,
                })
              }
            />
          ))}
        </HStack>
        <Operators currentSum={currentSum} setCurrentSum={setCurrentSum} />
      </VStack>
    </Container>
  );
};

export default Game;
