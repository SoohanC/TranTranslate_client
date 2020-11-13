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
import AboutUs from "../Routes/AboutUs"
import Contact from "../Routes/Contact"
//import HowTo from "../Routes/HowTo"
import Footer from "./Footer";
import Construction from "./Construction";
import { Hidden } from "@material-ui/core";
import ToForeignMobile from "../Routes/ToForeign/Mobile/ToForeignMobile"
import ToKoreanMobile from "../Routes/ToKorean/Mobile/ToKoreanMobile"

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
              <Hidden smDown>
              <ToForeign />
              </Hidden>
              <Hidden mdUp>
                <ToForeignMobile/>
              </Hidden>
            </Route>
            <Route path="/to-korean">
              <Hidden smDown>
              <ToKorean />
              </Hidden>
              <Hidden mdUp>
                <ToKoreanMobile/>
              </Hidden>
            
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
