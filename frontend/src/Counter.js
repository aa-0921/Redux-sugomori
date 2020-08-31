import React from 'react';
import { connect } from 'react-redux';
import { countUp, countDown } from './actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  countUp() {
    this.props.countUp();
  }

  countDown() {
    this.props.countDown();
  }
  render() {
    return (
      <div>
        <div>count:{this.props.count}</div>
        <button onClick={this.countUp}>up!</button>
        <button onClick={this.countDown}>down!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps, { countUp, countDown })(Counter);
