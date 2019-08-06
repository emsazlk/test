import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from 'components/Header';
import store from 'store';

const LayoutDefault = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => {
        const { Auth } = store.getState().auth;

        return Auth ? (
          <div className="page-wrapper">
            <Header />
            <Component {...props} />
          </div>
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }}
    />
  );
}

export default LayoutDefault;

