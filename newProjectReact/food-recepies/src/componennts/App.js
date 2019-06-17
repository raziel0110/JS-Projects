import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Recepies from "./pages/Recepies";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./Navbar/Navbar";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recepies" component={Recepies} />
          <Route path="/recipies/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </main>
    );
  }
}

export default App;
