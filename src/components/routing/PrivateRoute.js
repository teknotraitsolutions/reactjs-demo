import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';



export const AdminPrivateRoute = ({
  component: Component,
  ...rest
}) => {
    const isAuthenticated =localStorage.getItem('isActivated');
    const role =localStorage.getItem('role'); 
    return(
  <Route
    {...rest}
    render={props =>
        role !== 'ADMIN' ? (
        <Redirect to="/" />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Spinner />
      )
    }
  />
)};

export const UserPrivateRoute = ({
    component: Component,
    ...rest
  }) => {
    const isAuthenticated =localStorage.getItem('isActivated');
    const role =localStorage.getItem('role');   
    return(
    <Route
      {...rest}
      render={props =>
        role !== 'STUDENT' ? (
            <Redirect to="/" />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Spinner />
        )
      }
    />
  )};


