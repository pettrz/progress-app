import React, { useState } from "react";

import Meter from "./meter/Meter";
import AddButton from "../components/btn-add/BtnAdd";
import Input from "./input/Input";

const ProgressMeter = ({ title }) => {
  const [Amount, setAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const onChangeProgress = e => {
    const { value } = e.target;
    const fixedAmount = value ? parseFloat(value) : 0; // Set to 0 if undefined
    setAmount(fixedAmount);
  };
  const submitAmount = e => {
    e.preventDefault();
    let fixedTotalAmount = totalAmount + Amount;
    fixedTotalAmount = +fixedTotalAmount.toFixed(2);
    setTotalAmount(fixedTotalAmount);
  };
  const btnText = "Add " + Amount;
  return (
    <>
      <h2>{title}</h2>
      <Meter amount={totalAmount} />
      <form
        onSubmit={submitAmount}
        className="justify-center align-center mt-20"
      >
        <Input onChange={onChangeProgress} />
        <AddButton text={btnText} />
      </form>
    </>
  );
};

export default ProgressMeter;
