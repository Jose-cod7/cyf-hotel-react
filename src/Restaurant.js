import React, { Component } from "react";

class Restaurant extends Component {
  state = {
    pizza: 0
  };

  addOrder = () => {
    console.log("Add pizza");
  };

  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {this.state.pizza}{" "}
            <button onClick={this.addOrder} className="btn btn-primary">
              Add
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
