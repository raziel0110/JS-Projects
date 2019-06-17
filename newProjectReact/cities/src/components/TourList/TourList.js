import React from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tours } from "../../assets/tourData";

class TourList extends React.Component {
  state = {
    tours: tours
  };

  removeTour = id => {
    console.log(id);

    const tours = this.state.tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({ tours: tours });
  };

  render() {
    console.log(this.state.tours);
    return (
      <section className="tourlist">
        {this.state.tours.map(tour => {
          return (
            <Tour tour={tour} key={tour.id} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
