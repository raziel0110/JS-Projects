import React from "react";
import "./Order.css";
const order = props => {
  //scoaterea in array proprietatile si valorile aferente a unui obiect
  let ingredients = [];
  for (let ingredientName in props.order.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.order.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map((ig, idx) => {
    return (
      <span
        style={{
          display: "inline-block",
          border: "1px solid #eee",
          padding: "2px",
          margin: "5px",
          boxShadow: "0 2px 3px #ccc",
          fontFamily: "Arial",
          fontSize: "12px"
        }}
        key={idx}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Customer:{props.order.orderData.name}</p>
      <p>
        Adress: {props.order.orderData.street},{props.order.orderData.city}
      </p>
      <p>Email:{props.order.orderData.email}</p>
      <p>Ingredients:{ingredientOutput}</p>
      <p>
        Price:{" "}
        <strong>{Number.parseFloat(props.order.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
