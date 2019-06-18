import React from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";
// import { recipeData } from "../../data/tempList";

class Recepies extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    recipes: [],
    search: "",
    baseUrl:
      "https://www.food2fork.com/api/search?key=c3ff99a5c47568da26496391aa6fe31f",
    query: "&q=",
    error: ""
  };

  componentDidMount() {
    const url =
      "https://www.food2fork.com/api/search?key=c3ff99a5c47568da26496391aa6fe31f";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return this.setState({
          recipes: data.recipes
        });
      });
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { baseUrl, query, search } = this.state;
    this.setState(
      {
        url: `${baseUrl}${query}${search}`,
        search: ""
      },
      () => {
        fetch(this.state.url)
          .then(response => {
            return response.json();
          })
          .then(data => {
            return this.setState({
              recipes: data.recipes
            });
          });
      }
    );
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
