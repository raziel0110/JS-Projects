import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "fear of the dark", duration: "4.05" },
    { title: "faster", duration: "3.34" },
    { title: "unknown", duration: "2.35" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
