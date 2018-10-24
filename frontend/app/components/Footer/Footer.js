import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Copyright &copy; 2018 Nick Gashkov.
            &nbsp;
            <a href="https://github.com/nickgashkov/yet-another-rating-site">View on GitHub</a>
          </p>
        </div>
      </footer>
    );
  }
}

// Copyright &copy; 2018 Nick Gashkov. View project on GitHub.

Footer.propTypes = {};

export default Footer;
