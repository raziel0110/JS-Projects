import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="container">
      <h3 className="text-center">Song List</h3>
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
};

export default App;
