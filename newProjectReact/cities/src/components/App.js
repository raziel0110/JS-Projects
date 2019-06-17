import React from "react";
import Navbar from "./Navbar/Navbar";
import TourList from "./TourList/TourList";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Our current App</h1>
        <TourList />
      </>
    );
  }
}

export default App;
