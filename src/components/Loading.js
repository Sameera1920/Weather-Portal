import React from "react";
import "../style/WeatherApp.css";
// import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="loading-page">
    {/* <img src={loading} alt="Loading" /> */}
    <h3 className="messages"> Loading...</h3>
  </div>
);

export default Loading;
