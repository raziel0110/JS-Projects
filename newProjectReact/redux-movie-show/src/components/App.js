import React from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Movies</h3>
        <div className="row">
          <div className="col-6">
            <MovieList />
          </div>
          <div className="col-6">
            <MovieDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
