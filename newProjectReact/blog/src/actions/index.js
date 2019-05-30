import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => async dispach => {
  const response = await jsonPlaceholder.get("/posts");
  dispach({ type: "FETCH_POSTS", payload: response });
};
