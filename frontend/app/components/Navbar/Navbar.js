import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <navbar className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/things/" className="navbar-item">Things</Link>
        </div>
      </navbar>
    )
  }
}

Navbar.propTypes = {};

export default Navbar;
