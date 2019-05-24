import React from "react";
import { connect } from "react-redux";
import "./Todo.css";

const List = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="shadow-sm p-3 mb-5 bg-white rounded header-text">
            Shoping List
          </h3>
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                value={props.inputSearchText}
                onChange={props.handleChange}
                placeholder="Enter item for shop"
              />
            </div>
          </form>
          <div>
            <div className="jumbotron items">
              <p className="length-items">
                Number of todos:
                <span className="item-color">{`  ${props.todos.length}`}</span>
              </p>
            </div>
            <ul className="list-group">
              {props.todos.map((todo, index) => {
                return (
                  <li key={index} className="list-group-item list-item">
                    <div>{todo}</div>
                    <div>
                      <button
                        onClick={() => props.onUpdate(index)}
                        className="btn btn-outline-success btn-padding"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => props.onDelete(index)}
                        className="btn btn-outline-danger btn-padding"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputSearchText: state.inputSearchText,
    todos: state.todos
  };
};

const mapDispachToProps = dispatch => {
  return {
    handleChange: e => {
      dispatch({ type: "INPUT_CHANGE", text: e.target.value });
    },
    onSubmit: e => {
      e.preventDefault();
      dispatch({ type: "ADD_TODO" });
    },
    onDelete: index => {
      dispatch({ type: "DELETE_TODO", index: index });
    },
    onUpdate: index => {
      console.log("Update:", index);
      dispatch({ type: "UPDATE_TODO", index: index });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(List);
