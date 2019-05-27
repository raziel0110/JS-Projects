import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends React.Component {
  render() {
    return (
      <div>
        {this.props.songs.map((song, idx) => {
          return (
            <div key={idx} className="row">
              <div className="col-6">
                <p>{song.title}</p>
              </div>
              <div className="col-4">
                <button onClick={() => this.props.selectedSong(song)}>
                  Song
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { selectedSong }
)(SongList);
