import React from "react";

class InputUser extends React.Component {
  constructor(props) {
    super(props);
    this.catchValue = this.catchValue.bind(this);
    this.state = { id: 0, userInput: "" };
  }

  catchValue(e) {
    this.setState({ userInput: e.target.value });
  }
  clickButton = e => {
    e.preventDefault();
    this.setState({ id: this.state.id + 1 });
    this.props.onAdd({ id: this.state.id, userInput: this.state.userInput });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.catchValue}
          />
          <button onClick={this.clickButton}>Add Something</button>
        </form>
      </div>
    );
  }
}

export default InputUser;
