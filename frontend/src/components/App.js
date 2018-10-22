import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ThingList from "./ThingList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/things/" component={ThingList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
