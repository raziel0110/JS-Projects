import React, { Component } from "react";

class Course extends Component {
  state = { title: "" };
  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      this.setState({ title: param[1] });
    }
  }

  componentDidUpdate() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.title !== param[1]) {
        this.setState({ title: param[1] });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
