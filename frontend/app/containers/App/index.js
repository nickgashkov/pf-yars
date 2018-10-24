/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ThingListPage from "containers/ThingListPage/Loadable";
import ThingPage from "containers/ThingPage/Loadable";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/things/" component={ThingListPage} />
        <Route exact path="/things/:id(\d+)/" component={ThingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
