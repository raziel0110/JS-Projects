import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route component={CheckOut} path="/checkout" />
            <Route component={BurgerBuilder} path="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
