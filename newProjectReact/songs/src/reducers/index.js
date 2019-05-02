import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4.05" },
    { title: "Macarena", duration: "2.45" },
    { title: "All Stars", duration: "3.15" },
    { title: "I Want it that way", duration: "4.25" }
  ];
};

const selecteSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selecteSongReducer
});
