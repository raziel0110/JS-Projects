import { actionTypes } from "../actions";
import success from "./succesReducer";

test("returns default initial state of false when no action is passed", () => {
  const initialState = { success: false };
  const action = { type: "action" };
  expect(success(undefined, action)).toEqual(initialState);
});

test("returns state of true upon receving of type CORRECT_GUESS", () => {
  const action = { type: actionTypes.CORRECT_GUESS };
  const expectedState = { success: true };
  expect(success(undefined, action)).toEqual(expectedState);
});
