import React from "react";
import Person from "./Components/Person";

export default class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 20 },
      { id: 2, name: "XXX", age: 18 },
      { id: 3, name: "Vladut", age: 30 }
    ],
    show: false
  };

  deleteHandler = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  clickHandler = (e, id) => {
    const personId = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = { ...this.state.persons[personId] };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const show = this.state.show;
    this.setState({ show: !show });
  };

  render() {
    let persons = null;

    if (this.state.show) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deleteHandler(index)}
                changed={e => this.clickHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.toggleHandler}>Show</button>
        {persons}
      </div>
    );
  }
}
