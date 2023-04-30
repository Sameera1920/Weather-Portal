import React from "react";
import { Router } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
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
