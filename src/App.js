import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const selectNumber = useSelector((state) => state.changeTheNumber);
  const dispatchData = useDispatch();

  return (
    <div>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatchData(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={selectNumber}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatchData(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
