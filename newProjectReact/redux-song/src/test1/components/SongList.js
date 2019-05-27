import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  render() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-8">{`Song:  ${song.title}, Duration: ${
            song.duration
          }s `}</div>
          <div className="col-4">
            <button
              className="btn btn-warning"
              onClick={() => this.props.selectSong(song)}
            >
              Song
            </button>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
