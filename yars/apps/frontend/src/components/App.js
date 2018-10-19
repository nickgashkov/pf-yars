import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "src/components/Login/Login";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
