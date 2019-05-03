import React from "react";
import CarList from "./CarsList";
import CarDetail from "./CarDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <CarList />
        </div>
        <div className="column eight wide">
          <CarDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
