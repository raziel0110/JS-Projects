import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
// import axios from "axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        let fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch(err => this.setState({ loading: false }));
  }

  render() {
    console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map(order => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
