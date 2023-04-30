import React from "react";
import "../style/WeatherApp.css";

const Loading = () => (
  <div className="loading-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h3 className="messages yellow"> Loading...</h3>
  </div>
);

export default Loading;
