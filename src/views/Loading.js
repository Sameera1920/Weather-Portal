import React from "react";
import "../style/Badge.css";

const Loading = () => (
  <div className="loading-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h3 className="messages"> Loading...</h3>
  </div>
);

export default Loading;
