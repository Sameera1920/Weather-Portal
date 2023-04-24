import React from "react";
import "./WeatherApp.css";
import SelectCity from "./SelectCity";
import IterateCityId from "./IterateCityId";

function WeatherApp() {
  return (
    <div className="app">
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
      {/* <div className="bottom">
        <div className="footer">2023 Fidenz Technologies</div>
      </div> */}
    </div>
  );
}

export default WeatherApp;
