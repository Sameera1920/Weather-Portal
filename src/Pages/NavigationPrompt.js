import React from "react";
import "../style/WeatherApp.css";

const Home = () => (
  <div className="home-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h2 className="messages green">You are Logged in!</h2>
    <h2 className="messages green">Please Navigate to Weather App</h2>
  </div>
);

export default Home;
