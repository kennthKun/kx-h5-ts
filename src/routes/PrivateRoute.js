import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirect, location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (redirect) {
          return <Redirect to={redirect} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
export default PrivateRoute;
