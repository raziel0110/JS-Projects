import { combineReducers } from "redux";

const moviesReducer = () => {
  return [
    { title: "Movie 1", year: "2017", comment: "orice vrei" },
    { title: "Fast and furios", year: "2002", comment: "best car movie" },
    { title: "Avengers:The End Game", year: "2019", comment: "bla bla bla" }
  ];
};

const showMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case "SELECT_MOVIE":
      return action.payload;
    default:
      return selectedMovie;
  }
};

export default combineReducers({
  movies: moviesReducer,
  showMovie: showMovieReducer
});
