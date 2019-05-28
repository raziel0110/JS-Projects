import React from "react";
import { connect } from "react-redux";

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return (
      <div>
        <div>Movie Detail</div>
        <div>Please Select One!</div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>{movie.title}</h3>
        <p>{movie.comment}</p>
        <p>{`Release year : ${movie.year}`}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    movie: state.showMovie
  };
};

export default connect(mapStateToProps)(MovieDetail);
