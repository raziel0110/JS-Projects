import React from "react";
import Recipe from "../Recipe/Recipe";
class RecipeList extends React.Component {
  render() {
    const { recipies } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recepe List</h1>
            </div>
          </div>

          <div className="row">
            {this.props.recipies.map(recipe => {
              return <Recipe recipe={recipe} key={recipe.recipe_id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
