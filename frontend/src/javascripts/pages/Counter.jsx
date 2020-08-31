import React from 'react';
import { connect } from 'react-redux';
import { countUp, countDown } from '../../actions/index';
import { useState } from 'react';

export const Counter = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  //   this.countUp = this.countUp.bind(this);
  //   this.countDown = this.countDown.bind(this);
  // }
  const [count, setCount] = useState(0);

  // const countUp = () => {
  //   setCount(count + 1);
  // };

  // const countDown = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="mt-20">
      <div>count:{count}</div>
      <button className="bg-gray-500" onClick={countUp}>
        up!
      </button>
      <button className="bg-gray-300" onClick={countDown}>
        down!
      </button>
    </div>
  );
};

const mapStateToProps = (count) => ({ count: count });

export default connect(mapStateToProps, { countUp, countDown })(Counter);
