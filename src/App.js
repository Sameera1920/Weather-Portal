import React from "react";
import { Router } from "react-router-dom";

import MainPage from "./views/MainPage";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";
import history from "./utils/history";

import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  return (
    <Router history={history}>
      <div id="app">
        <NavBar />
        <MainPage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
