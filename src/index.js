import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProgressMeter from "./progress-meter/progress-meter";
import AddButton from "./components/btn-add/BtnAdd";
import "./styles.css";

function App() {
  const [MeterCount, setMeterCount] = useState([1]);
  const addProgressMeter = () => {
    const pmIteration = MeterCount.length + 1;
    setMeterCount(MeterCount.concat(pmIteration));
  };

  const renderProgressMeters = MeterCount.map(i => <ProgressMeter key={i} />);
  return (
    <div className="App">
      {renderProgressMeters}
      <AddButton
        text="Add Meter"
        className="mt-20"
        type="secondary"
        onClick={addProgressMeter}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
