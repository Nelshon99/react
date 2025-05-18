import { WINNERS_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNERS_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //No winner
  return null;
};
