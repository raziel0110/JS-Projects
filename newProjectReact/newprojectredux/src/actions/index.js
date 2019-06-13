import jsonPlaholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPostsAndsUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  console.log(userId);
  userId.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/**
 * Memoise version
 */

// export const fetchUser = id => async dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
