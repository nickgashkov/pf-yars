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
  makeSelectThingError,
  makeSelectThingLoading,
  makeSelectThingSuccess
} from "./selectors";
import Navbar from "../../components/Navbar/Navbar";
import {loadThing} from "./actions";
import Detail from "../../components/Detail";

/* eslint-disable react/prefer-stateless-function */
export class ThingPage extends React.Component {
  componentDidMount () {
    this.props.loadThing();
  };

  render() {

    return <div>
      <Navbar />
      {this.props.error && <span className="has-text-danger">{this.props.error}</span>}
      {this.props.item && <Detail item={this.props.item} itemTitleKey={'name'} itemsKeys={['description']} itemKeysNames={['Description']}/>}
    </div>;
  }
}

ThingPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  item: PropTypes.object,
  loadThing: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectThingLoading(),
  error: makeSelectThingError(),
  item: makeSelectThingSuccess(),
});


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  loadThing: () => loadThing(ownProps.match.params.id)
}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'ThingPage', reducer });
const withSaga = injectSaga({ key: 'ThingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ThingPage);
