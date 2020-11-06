import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home"
import ToForeign from "../Routes/ToForeign"
import ToKorean from "../Routes/ToKorean"
/* import AboutUs from "../Routes/AboutUs"
import Contact from "../Routes/Contact"
import HowTo from "../Routes/HowTo" */
import Footer from "./Footer";
import Construction from "./Construction";



const RouterComponent = () =>{
    return(
        <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/to-foreign">
                <ToForeign/>
            </Route>
            <Route path="/to-korean">
                <ToKorean/>
            </Route>
            <Route path="/about-us">
                <Construction/>
            </Route>
            <Route path="/how-to">
            <Construction/>
            </Route>
            <Route path="/contact">
            <Construction/>
            </Route>
            <Redirect from="*" to="/to-foreign"/>
        </Switch>
        <Footer/>
    </Router>
    )

}

export default RouterComponent;