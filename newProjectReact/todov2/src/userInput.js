import React from "react";
import "./userInput.css";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, inputValue: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onButtonClick(e) {
    e.preventDefault();
    this.setState({ id: this.state.id + 1 });
    if (this.state.inputValue === "") {
      return;
    } else {
      this.props.onAdd({ id: this.state.id, value: this.state.inputValue });
      this.setState({ inputValue: "" });
    }
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="form-inner-container">
            <input
              type="text"
              className="add-item"
              onChange={this.onInputChange}
              value={this.state.inputValue}
              placeholder="Please enter some text"
            />

            <button type="" onClick={this.onButtonClick} className="addBtn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInput;
