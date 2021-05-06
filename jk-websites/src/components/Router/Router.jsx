import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Header from '../Header';

function Router() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
}

export default Router;
