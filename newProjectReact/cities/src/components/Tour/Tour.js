import React from "react";
import "./Tour.scss";

class Tour extends React.Component {
  state = { showInfo: false };

  onToggleClickInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { img, city, name, info } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={this.props.tour.city} />
          <span
            className="close-btn"
            onClick={() => this.props.removeTour(this.props.tour.id)}
          >
            <i class="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h5>{name}</h5>
          <h5 onClick={this.onToggleClickInfo}>
            info
            <span>
              <i class="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>{this.state.showInfo ? info : null}</p>
        </div>
      </article>
    );
  }
}

export default Tour;
