import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Song List</h3>
        <div className="row">
          <div className="col-6">
            <SongList />
          </div>
          <div className="col-6">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
