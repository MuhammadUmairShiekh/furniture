import React from "react";
import CountUp from "react-countup";

const Counter = ({ number }) => {
  return (
    <>
      <div className="number">
        <CountUp duration={10} className="counter" end={number} />
      </div>
    </>
  );
};

export default Counter;
