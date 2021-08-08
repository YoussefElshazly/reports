import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { Home } from './pages';
import { ScrollToTop } from './util';

export default () => {
  return (
    <>
      <CssBaseline />

      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
};
