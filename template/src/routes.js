import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './pages';

const Routes = () => (
  <Switch>
    {Pages.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);
export default Routes;
