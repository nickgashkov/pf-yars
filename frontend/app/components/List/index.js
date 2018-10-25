/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    return (
      <div className="container" style={{'padding-top': '20px'}}>
          {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    let len = Math.ceil(this.props.items.length / 2);
    let leftItems = this.props.items.splice(0, len);

    return (
      <div className="columns">
        <div className="column">
          {this.props.items.map(item => this.renderCard(item))}
        </div>
        <div className="column">
          {leftItems.map(item => this.renderCard(item))}
        </div>
      </div>
    )
  }

  renderCard(item) {
    return (
      <div className="card box">
        <header className="card-header">
          <Link to={item.link} className="card-header-title">{item.name}</Link>
        </header>
        <div className="card-content">
          <div className="content">
            {item.description}
          </div>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
};

export default List;