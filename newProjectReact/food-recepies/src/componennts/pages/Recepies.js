import React from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";
import { recipeData } from "../../data/tempList";

class Recepies extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { recipes: recipeData, search: "" };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipies={this.state.recipes} />
      </>
    );
  }
}

export default Recepies;
