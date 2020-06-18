import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  state = {
    orders: 0
  };

  addOrder = () => {
    console.log("Add new order");
    this.setState(prevState => {
      return {
        orders: prevState.orders + 1
      };
    });
  };
  render() {
    return (
      <li>
        <span>
          {this.props.orderType} {this.state.orders}{" "}
        </span>
        <RestaurantButton addOrders={this.addOrder} />
      </li>
    );
  }
}

export default Order;
