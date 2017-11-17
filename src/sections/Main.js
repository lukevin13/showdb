import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/list/:showType/:listType/:page" component={ListPage} />
    </Switch>
  </div>
);

export default Main;
