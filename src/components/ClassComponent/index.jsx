import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  handleButton = () => {
    this.setState((state) => ({ counter: ++state.counter }));
  };

  componentDidMount() {
    this.setState({ text: "Hello" });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButton}>Click me please</button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}

export default ClassComponent;
