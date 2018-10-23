import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class HttpError extends React.PureComponent {
  render() {
    return (
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            {this.renderErrorCode()}
            {this.props.description && this.renderErrorDescription()}
            {this.props.linkTo && this.renderLinkTo()}
          </div>
        </div>
      </section>
    );
  }

  renderErrorCode() {
    return (
      <h1 className="title">
        {this.props.status}
      </h1>
    )
  }

  renderErrorDescription() {
    return (
      <h2 className="subtitle">
        {this.props.description}
      </h2>
    )
  }

  renderLinkTo() {
    return (
      <Link className="has-text-link" to={this.props.linkTo}>
        Let me out.
      </Link>
    )
  }

}

HttpError.propTypes = {
  status: PropTypes.number.isRequired,
  description: PropTypes.string,
  linkTo: PropTypes.string,
};

export default HttpError;
