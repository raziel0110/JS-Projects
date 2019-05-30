import React from "react";
import { connect } from "react-redux";
import { selectedSongReducer } from "../actions";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) {
    return <div>Select a song</div>;
  } else {
    return (
      <div>
        <p>{song.title}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
