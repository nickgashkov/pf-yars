import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectThingsError,
  makeSelectThingsLoading,
  makeSelectThingsSuccess
} from "./selectors";
import Navbar from "../../components/Navbar/Navbar";
import {loadThings} from "./actions";
import List from "../../components/List";

/* eslint-disable react/prefer-stateless-function */
export class ThingListPage extends React.Component {
  componentDidMount () {
    this.props.loadThings();
  };

  render() {

    return <div>
      <Navbar />
      {this.props.error && <span className="has-text-danger">{this.props.error}</span>}
      {this.props.things && <List headers={['Name', 'Description']} items={this.props.things} itemsKeys={['name', 'description']}/>}
    </div>;
  }
}

ThingListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  things: PropTypes.array,
  loadThings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectThingsLoading(),
  error: makeSelectThingsError(),
  things: makeSelectThingsSuccess(),
});


const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadThings: loadThings,
}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ThingListPage', reducer });
const withSaga = injectSaga({ key: 'ThingListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ThingListPage);
