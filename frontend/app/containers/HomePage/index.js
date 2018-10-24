/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">YARS</h1>
              <h2 className="subtitle">Yet Another Rating Site</h2>
            </div>
          </div>
        </section>
        <Footer/>
      </React.Fragment>
    );
  }
}
