export const selectMovie = movie => {
  console.log(movie);
  return {
    type: "SELECT_MOVIE",
    payload: movie
  };
};
