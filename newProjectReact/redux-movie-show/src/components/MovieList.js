import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";

class MovieList extends Component {
  render() {
    return (
      <div className="">
        {this.props.movies.map((movie, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-8">{movie.title}</div>
              <div className="col-4">
                <button
                  className="btn btn-success"
                  onClick={() => this.props.selectMovie(movie)}
                >
                  Show
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
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  { selectMovie }
)(MovieList);
