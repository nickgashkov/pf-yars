import React, { Component } from "react";

import logo from "../../../assets/logo.svg";

class Header extends Component {
  render() {
    let logoSrc = "/static/frontend/" + logo;
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logoSrc} alt="Logo" width="28" height="28" />
          </a>
          <a className="navbar-item" href="/">
            <span>YARS</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
