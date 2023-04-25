import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginPrompt from "./components/LoginPrompt";
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
  const { isLoading, error, isAuthenticated } = useAuth0();

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
            <Route path="/home" exact component={Home} />
            <Route
              path=""
              exact
              component={isAuthenticated ? WeatherApp : LoginPrompt}
            />
          </Switch>
        </>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
