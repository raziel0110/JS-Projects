import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please Select a Song</div>;
  } else {
    return (
      <div>
        <p>{song.title}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};
export default connect(mapStateToProps)(SongDetail);
