import React from "react";

import "./input.css";

const Input = ({ onChange }) => {
  return (
    <label>
      <input
        min="0"
        max="100"
        step="0.001"
        type="number"
        placeholder="777 777"
        onChange={onChange}
        className="input-add"
      />
    </label>
  );
};

export default Input;
