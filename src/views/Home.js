import React from "react";
import "../style/WeatherApp.css";

const Home = () => (
  <div className="home-page">
    <div className="badge">
      <p className="logo"></p>
      <p className="name">Weather App</p>
    </div>
    <h2 className="messages">You are Logged in!</h2>
    <h2 className="messages">Please Navigate Weather App to View Data</h2>
  </div>
);

export default Home;
