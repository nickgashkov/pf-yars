/**
 *
 * Detail
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Detail extends React.Component {
  render() {
    return <section className="section">
        <div className="container">
          <h1 className="title">{this.props.item[this.props.itemTitleKey]}</h1>
          {this.props.itemsKeys.map(itemKey => this.renderItemValue(itemKey))}
        </div>
    </section>;
  }

  renderItemValue(itemKey) {
    return <p>{this.props.item[itemKey]}</p>
  }
}

Detail.propTypes = {};

export default Detail;
