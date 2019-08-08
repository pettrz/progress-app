import React from "react";
import cn from "classnames";

import "./button.css";

const AddButton = ({ text, className, type, onClick }) => {
  const btnClasses = cn("btn", className, {
    [`btn--${type}`]: type === "secondary"
  });

  return (
    <button className={btnClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default AddButton;
