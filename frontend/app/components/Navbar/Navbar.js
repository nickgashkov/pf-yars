import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
          <NavLink exact to="/things/" activeClassName="is-active" className="navbar-item">Things</NavLink>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {};

export default Navbar;
