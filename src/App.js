import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Switch>
          <Route path="/" exact component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
