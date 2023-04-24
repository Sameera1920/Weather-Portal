import React from "react";
import "./App9999.css";
import SelectCity from "./SelectCity";
import IterateCityId from "./IterateCityId";

function App9999() {
  return (
    <div className="app">
      git
      <div className="container">
        <div className="top">
          <div className="app-title">
            <p className="app-logo"></p>
            <p className="app-name">Weather App</p>
          </div>
          <div className="input-city">
            <SelectCity />
          </div>
        </div>
        <div className="middle">
          <IterateCityId />
        </div>
      </div>
      <div className="bottom">
        <div className="footer">2023 Fidenz Technologies</div>
      </div>
    </div>
  );
}

export default App9999;
