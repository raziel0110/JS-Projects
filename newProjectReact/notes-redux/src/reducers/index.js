import { combineReducers } from "redux";
import InputFolder from "./InputFolder";
import noteReducer from "./inputNote";

export default combineReducers({
  inputFolder: InputFolder,
  inputNote: noteReducer
});
