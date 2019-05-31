import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckOutSummary.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We how it tastes well</h1>
      <div style={{ width: "100%", height: "300px" }}>
        <Burger ingredients={props.ingredients} />
        <div className="Checkout-btn">
          <Button btnType="Danger" clicked={props.onCheckoutCancel}>
            CANCEL
          </Button>
          <Button btnType="Success" clicked={props.onCheckoutContinued}>
            CONTINUE
          </Button>
        </div>
      </div>
      <div className="Buttons" />
    </div>
  );
};

export default checkoutSummary;
