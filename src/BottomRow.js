import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, quarterNum] = useState(0);

  let quarterArray = ["1st", "2nd", "3rd", "4th", "Game Over"];

  const quarterChange = (quarterArray) => {
    if (quarter <= 3) {
      quarterNum(quarter + 1);
    } else quarterNum(5);
    if (quarter == 5) {
      quarterNum((quarterArray = 0));
    }
  };

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <button className="quarter__value" onClick={quarterChange}>
          {quarterArray[quarter]}
        </button>
      </div>
    </div>
  );
};

export default BottomRow;
