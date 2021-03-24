import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = (props) => {
    const getUser = localStorage.getItem('loggedIn')
    const location = useLocation()
    return (
      <Route
      path={props.path}
         render={data =>
          (getUser)? (
            <props.component {...data}></props.component>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;