import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./Loading";
import Home from "./Home";
import WeatherApp from "../WeatherAppComponents/WeatherApp";
import LoginPrompt from "./LoginPrompt";

const MainPage = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
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
  );
};

export default MainPage;
