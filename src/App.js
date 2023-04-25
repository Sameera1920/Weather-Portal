import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Profile from "./views/Profile";
import WeatherApp from "./src_weather_app/WeatherApp";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/profile" component={Profile} /> */}
            <Route path="/weather-api" component={WeatherApp} />
          </Switch>
        </>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
