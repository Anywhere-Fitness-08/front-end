import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  return (<Route {...rest} render={(renderProps) => {
    if(localStorage.getItem('token')){
      console.log('inside of private route, this message means localstorage has a token')
      return <Component {...renderProps}/>;
    }else {
      console.log('inside of PrivateRoute.js, the localstorage does not have a token');
      return <Redirect to='/login'/>;
    }
  }}/>);
}

export default PrivateRoute;