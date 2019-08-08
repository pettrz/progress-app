import React from "react";

import "./meter.css";

const Meter = ({ amount }) => {
  return (
    <div className="progress">
      <h3>Amount: {amount}</h3>
      <div className="progress__meter">
        <div
          className="progress__meter-inner"
          style={{ flexBasis: amount + "%" }}
        />
      </div>
    </div>
  );
};

export default Meter;
