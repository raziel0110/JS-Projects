import jsonPlaholder from "../apis/jsonplaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
