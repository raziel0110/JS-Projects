import { correctGuess, actionTypes } from "./index";

describe("correctGuess", () => {
  test("return an action with 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
