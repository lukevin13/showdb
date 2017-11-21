import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import SearchPage from '../pages/SearchPage';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/showdb/search" component={SearchPage} />
      <Route path="/showdb/list/:showType/:listType/:page" component={ListPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default Main;
