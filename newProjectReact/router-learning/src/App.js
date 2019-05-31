import React from "react";
import Cars from "./components/cars/cars";
import Drivers from "./components/drivers/drivers";
import Car from "./components/car/car";
import Error404 from "./components/Error404/error404";
import { Route, NavLink, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              margin: "auto",
              padding: "10px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center"
            }}
          >
            <li
              style={{
                textDecoration: "none",
                display: "inline-block",
                margin: "10px"
              }}
            >
              <NavLink to="/cars">Cars</NavLink>
            </li>
            <li
              style={{
                textDecoration: "none",
                display: "inline-block",
                margin: "10px"
              }}
            >
              <NavLink to="/drivers">Drivers</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/drivers" component={Drivers} />
          {/* <Route path="/cars/:carId" component={Car} /> */}
          <Route path="/cars" component={Cars} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;
