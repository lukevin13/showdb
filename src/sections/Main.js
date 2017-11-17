import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import SearchPage from '../pages/SearchPage';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component={SearchPage} />
      <Route path="/list/:showType/:listType/:page" component={ListPage} />
    </Switch>
  </div>
);

export default Main;
