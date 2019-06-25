import { combineReducers } from "redux";
import foldersReducer from "./InputFolder";
import noteReducer from "./inputNote";

export default combineReducers({
  folders: foldersReducer,
  inputNote: noteReducer
});
