import React from "react";
import { connect } from "react-redux";

const CarDetail = ({ car }) => {
  if (!car) {
    return <div>Please select one Model</div>;
  } else {
    return (
      <div className="ui container">
        <h3>
          Car Model:{car.Model}, Year: {car.year}
        </h3>
        <img className="ui fluid image" src={car.img} alt={car.Model} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state.selectedCar);
  return { car: state.selectedCar };
};

export default connect(mapStateToProps)(CarDetail);
