import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import PrivateRoute from "./components/PrivateComponent";
import Profile from "./components/Profile";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Name</h1>
        <Menu />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/login" exact component={ Login } />
          <Route path="/signup" exact component={ Signup } />
          <PrivateRoute path="/profile" exact component={ Profile } />
          <PrivateRoute path="/about" exact component={ About } />
          <PrivateRoute path="/dashboard" exact component={ Dashboard } />
        </Switch>
      </div>
    );
  }
}

export default App;
