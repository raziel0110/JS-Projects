import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCar } from "../actions";

class CarList extends Component {
  renderList() {
    return this.props.cars.map(car => {
      return (
        <div className="item" key={car.id}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectCar(car)}
            >
              Select
            </button>
          </div>
          <div className="content">{car.Model}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { cars: state.cars };
};

export default connect(
  mapStateToProps,
  { selectCar }
)(CarList);
