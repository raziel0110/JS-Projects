import React from "react";
import { recipeData } from "../../data/tempDetails";
import { Link } from "react-router-dom";

class SingleRecipe extends React.Component {
  state = {
    recipe: {},
    id: this.props.match.params.id,
    loading: true
  };
  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=1c40a6d69c087d546228db8c682a38a9&rId=${
      this.state.id
    }`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        return this.setState({
          recipe: data.recipe,
          loading: false
        });
      });
  }

  render() {
    console.log(this.state.id);
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe....
              </h2>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link to="/recepies" className="btn btn-warning mb-5">
                Back to recipies list
              </Link>
              <img
                src={image_url}
                className="d-block w-100"
                style={{ maxHeight: "30rem" }}
                alt="recipe"
              />
            </div>

            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-capitalize"
              >
                publisher webpage
              </a>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success text-capitalize mx-2"
              >
                recipe url
              </a>

              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">ingredients</h2>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <h4>Hello from Recepy Page</h4>
        </div>
      );
    }
  }
}

export default SingleRecipe;
