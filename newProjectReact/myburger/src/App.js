import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route component={CheckOut} path="/checkout" />
            <Route component={Orders} path="/orders" />
            <Route component={Auth} path="/auth" />
            <Route component={BurgerBuilder} path="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
