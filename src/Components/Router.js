import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import ToForeign from "../Routes/ToForeign";
import ToKorean from "../Routes/ToKorean";
import AboutUs from "../Routes/AboutUs";
import Contact from "../Routes/Contact";
//import HowTo from "../Routes/HowTo"
import Footer from "./Footer";
import Construction from "./Construction";


const RouterComponent = ({ serverStatus }) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home serverStatus={serverStatus} />
        </Route>
        {serverStatus ? (
          <>
            <Route path="/to-foreign">
              <ToForeign />
            </Route>
            <Route path="/to-korean">
              <ToKorean />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/wip">
              <Construction />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </>
        ) : null}
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
