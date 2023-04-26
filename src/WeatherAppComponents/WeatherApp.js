import React from "react";
import "../style/WeatherApp.css";
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
        <div className="middle flex-in-row">
          <IterateCityId />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
