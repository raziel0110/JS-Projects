import React, { Component } from "react";
import Aux from "../../hoc/Auxiliar";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as burgerBuilderActions from "../../store/actions/index";
import { connect } from "react-redux";
import axios from "../../axios-orders";

class BurgerBuilder extends Component {
  state = {
    // purchaseable: false,
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  // addIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];

  //   const updatedCounted = oldCount + 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCounted;
  //   const priceAddition = INGREDIENTS_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCounted = oldCount - 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCounted;
  //   const priceDeduction = INGREDIENTS_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // refactorizare

    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.props.price);
    // const queryParamsArray = queryParams.join("&");
    // this.props.history.push({
    //   pathname: "checkout",
    //   search: `?${queryParamsArray}`
    // });

    this.props.history.push("/checkout");
  };

  render() {
    const disableInfo = {
      ...this.props.ing
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.ing) {
      burger = (
        <Aux>
          <div>
            <Burger ingredients={this.props.ing} />
          </div>
          <div>
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientDeduction={this.props.onIngredientRemove}
              disabled={disableInfo}
              price={this.props.price}
              purchaseable={!this.updatePurchaseState(this.props.ing)}
              ordered={this.purchaseHandler}
            />
          </div>
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ing}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          clicked={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ing: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch(burgerBuilderActions.addIngrediend(ingName)),
    onIngredientRemove: ingName =>
      dispatch(burgerBuilderActions.removeIngrediend(ingName)),
    onInitIngredients: () => {
      dispatch(burgerBuilderActions.initIngredients());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
