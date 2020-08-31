import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  countUp() {
    this.setState({ count: this.state.count + 1 });
  }

  countDown() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="mt-20">
        <div>count:{this.state.count}</div>
        <button onClick={this.countUp}>up!</button>
        <button onClick={this.countDown}>down!</button>
      </div>
    );
  }
}
