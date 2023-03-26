import React from 'react';
import { Route, Switch } from 'react-router-dom';
import la from './LazyComponent';
import PrivateRoute from './PrivateRoute';
import { routeData } from './routeData';
import { isMobile } from '../utils/toolTypes/browser_utls';

const isH5Flag = isMobile();
const NoMatch = () => import('../components/Layout/404.js');

export default () => (
  <Switch>
    {routeData.map((item) => {
      let newComponent = item.component;
      if (!item.component) {
        newComponent = isH5Flag ? item.componentH5 : item.componentPc;
      }
      return (
        <PrivateRoute
          path={item.path}
          exact
          component={la(newComponent)}
          key={item.path}
          redirect={item.redirect}
        />
      );
    })}
    <Route component={la(NoMatch)} key="NoMatch" />
  </Switch>
);
