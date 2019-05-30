import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select song!</div>;
  } else {
    return (
      <div>
        <h1>Song Details</h1>
        <p>Song title: {song.title}</p>
        <p>Duration: {song.duration}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
