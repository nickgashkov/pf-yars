import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
