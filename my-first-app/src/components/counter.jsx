import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: "Baker Street",
      apartment: "221B",
    },
    imageURL: "https://picsum.photos/300",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageURL} alt="Not available" /> */}
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
