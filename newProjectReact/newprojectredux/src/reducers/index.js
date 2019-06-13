import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import userReducer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer
});
