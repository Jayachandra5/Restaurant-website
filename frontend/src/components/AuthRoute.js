import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const AuthRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const user = getCurrentUser();
      if (!user) return <Redirect to="/login" />;

      if (roles && roles.indexOf(user.role) === -1) return <Redirect to="/menu" />;

      return <Component {...props} />;
    }}
  />
);

export default AuthRoute;
