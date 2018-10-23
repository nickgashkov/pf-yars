import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/things/" className="navbar-item">Things</Link>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {};

export default Navbar;
