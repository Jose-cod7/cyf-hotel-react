import React, { Component } from "react";
import Order from "./components/Order";
class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType={"Pizza"} />
          <Order orderType={"Salad"} />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
