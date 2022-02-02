import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Footer from "./Footer";
import Social1 from "./images/social-insta.svg"
import Social2 from "./images/social-facebook.svg"
import Social3 from "./images/social-twitter.gif"
import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar 
    social1={Social1}
    social2={Social2}
    social3={Social3}
    />
    <Switch>
      <Route exact path="/"  component={Home} />
      <Redirect to="/" />
      <Home />
    </Switch>
    <Footer />
    </>
  );
};

export default App;
