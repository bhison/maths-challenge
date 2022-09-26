import { GameNumber } from "types";
import { v4 as uuidv4 } from "uuid";

const GetGameNumber = (val: number): GameNumber => {
  return {
    id: uuidv4(),
    value: val,
  };
};

export { GetGameNumber };
