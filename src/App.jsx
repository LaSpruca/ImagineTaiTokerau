import React, {Component} from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Ideas from "./pages/Ideas";
import Experts from "./pages/Experts";
import Participants from "./pages/Participants";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/ideas" component={Ideas}/>
                    <Route exact path="/experts" component={Experts}/>
                    <Route exact path="/participants" component={Participants}/>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
