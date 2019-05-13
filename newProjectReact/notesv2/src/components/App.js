import React, { Component } from "react";
import IndexPage from "../pages/index";
import ShowPage from "../pages/show";
import Navbar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import New from "../pages/new";
import DB from "../DB";

export default class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: "hello",
        body: "This is the body",
        updated: new Date()
      },
      2: {
        _id: 2,
        title: "new Title",
        body: "this is a new context",
        update: new Date()
      }
    }
  };

  handleSave = note => {
    const ids = Object.keys(this.state.notes);
    const id = Math.max(...ids) + 1;
    note["_id"] = id;

    const { notes } = this.state;

    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });
    return id;
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <div className="container">
            <Route
              exact
              path="/"
              component={props => (
                <IndexPage {...props} notes={this.state.notes} />
              )}
            />

            <Route
              exact
              path="/notes/:id"
              component={props => (
                <ShowPage
                  {...props}
                  note={this.state.notes[props.match.params.id]}
                />
              )}
            />

            <Route
              exact
              path="/new"
              component={props => <New {...props} onSave={this.handleSave} />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
