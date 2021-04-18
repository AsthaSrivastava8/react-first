import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    address: {
      street: "Baker Street",
      apartment: "221B",
    },
    imageURL: "https://picsum.photos/300",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // bind event handler
  // constructor() {
  //   super(); // for parent class Component
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product, product2) => {
    console.log(product);
    console.log(product2);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <img src={this.state.imageURL} alt="Not available" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement(this.state, this.state)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
