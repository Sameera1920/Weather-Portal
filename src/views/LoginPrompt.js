import React from "react";
import "../style/Badge.css";

const LoginPrompt = () => (
  <div className="login-prompt-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h2 className="messages">Please Login to View Weather Data</h2>
  </div>
);

export default LoginPrompt;
