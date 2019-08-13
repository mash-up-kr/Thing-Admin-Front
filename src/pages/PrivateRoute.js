import React from 'react';
import { Redirect, Route } from "react-router-dom";
import Auth from '../services/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // eslint-disable-next-line no-unused-expressions
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
};

export default PrivateRoute;