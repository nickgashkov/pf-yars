import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="section">
          <h1 className="title">Site Map</h1>
          <Link to="/things/">Go to things</Link>
        </section>
      </div>
    );
  }
}

export default Home;
