import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// import logo from "../src_weather_app/weather_app_assets/app_logo.png";
const Home = () => (
  <div className="home-page">
    {/* <img className="mb-3 app-logo" src={logo} alt="app logo" width="120" /> */}

    <h2 className="messages">You are Logged in!</h2>
    <h2 className="messages">Please Navigate Weather App to View Data</h2>

    {/* <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p> */}
  </div>
);

export default Home;