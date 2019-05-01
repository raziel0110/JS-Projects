import React from "react";
import Button from "./Components/Button";
import Person from "./Components/Person";

export default class App extends React.Component {
  state = {
    persons: [
      { id: "asd1", name: "Max", age: 20 },
      { id: "asd2", name: "xxx", age: 27 },
      { id: "asd3", name: "Andrei", age: 34 }
    ],
    showPersons: false
  };

  clickHandler = (e, id) => {
    const personIdx = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = { ...this.state.persons[personIdx] };
    person.name = e.target.value;
    console.log(person.name);

    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonhandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // changeHandler = e => {
  //   this.setState({
  //     username: e.target.value
  //   });
  // };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={e => this.clickHandler(e, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changeName={this.changeName}
          />
          <Person
            click={this.clickHandler.bind(this, "grivei")}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changeName={this.changeName}
          >
            Hobbies : Skydiving
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changeName={this.changeName}
          /> */}
        </div>
      );
    }

    return (
      <div className="body-container">
        <div className="container">
          <Button />
          <button onClick={this.togglePersonhandler}>Switch state</button>
          {/* {this.state.showPersons ? (
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                changeName={this.changeName}
              />
              <Person
                click={this.clickHandler.bind(this, "grivei")}
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changeName={this.changeName}
              >
                Hobbies : Skydiving
              </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                changeName={this.changeName}
              />
            </div>
          ) : null} */}
          {persons}
          {/* /// o alta varianta de a face toggle */}

          {/* <UserInput changed={this.changeHandler} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} /> */}
        </div>
      </div>
    );
  }
}
