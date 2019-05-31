import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckOutSummary";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We how it tastes well</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked>
          CANCEL
        </Button>
        <Button btnType="Success" clicked>
          CONTINUE
        </Button>
      </div>
      <div className="Buttons" />
    </div>
  );
};

export default checkoutSummary;
