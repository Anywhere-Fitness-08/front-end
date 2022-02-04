import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NewClassForm from "./components/NewClassForm";
import Classes from "./components/Classes";
import PrivateRoute from './components/PrivateRoute';
import React from "react";

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>

        <PrivateRoute path='/classes' component={Classes} />

        <PrivateRoute path='/newclass' component={NewClassForm} />

        <PrivateRoute path='/logout' component={Logout} />

        <Route path="/register">
          <Register className="registerComponent" />
        </Route>

        <Route path="/">
          <div className="login-container">
            <Login />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
