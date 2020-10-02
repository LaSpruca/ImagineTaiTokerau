import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Ideas from "./pages/Ideas";
import Experts from "./pages/Experts";
import Participants from "./pages/Participants";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="content">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/ideas" component={Ideas} />
                    <Route exact path="/experts" component={Experts} />
                    <Route exact path="/participants" component={Participants} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
