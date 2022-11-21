import { atom } from "recoil";
import { memoize } from "./memoize";

export const CellValueState = (cellId: string) =>
  memoize(cellId, () =>
    atom({
      key: `cell_${cellId}`,
      default: "",
    })
  );
