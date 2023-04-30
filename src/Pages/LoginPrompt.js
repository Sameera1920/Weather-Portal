import React from "react";
import "../style/WeatherApp.css";

const LoginPrompt = () => (
  <div className="login-prompt-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h2 className="messages red">Please Login to View Weather Data</h2>
  </div>
);

export default LoginPrompt;
