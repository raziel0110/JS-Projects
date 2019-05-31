import React from "react";
import "./cars.css";
import { Link, Route } from "react-router-dom";
import Car from "../car/car";

class Cars extends React.Component {
  state = {
    cars: [
      { id: 1, name: "Dacia Golan" },
      { id: 2, name: "Renault Leguma" },
      { id: 3, name: "Peugeot Paradit" }
    ]
  };
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Amazing Romanin Cars</h2>
        <section className="cars">
          {this.state.cars.map(car => {
            return (
              <Link
                key={car.id}
                to={{
                  pathname: this.props.match.url + "/" + car.id,
                  search: "?name=" + car.name
                }}
              >
                <article className="car">{car.name}</article>
              </Link>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:carId"} component={Car} />
      </div>
    );
  }
}

export default Cars;
