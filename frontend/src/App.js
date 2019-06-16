import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Login} />
          <Route path = "/home" component = {Home} />
          <Route path = "/manager" component = {Manager} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
