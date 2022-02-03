import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NewClassForm from "./components/NewClassForm";
import Classes from "./components/Classes";

const StyledApp = styled.div`
  display: flex;
  height: 95vh;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>

        <Route path="/classes">
          <Classes />
        </Route>

        <Route path="/newclass">
          <NewClassForm />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/register">
          <Register className="registerComponent" />
        </Route>

        <Route path="/">
          <div className="login-container">
            <Login />
          </div>
        </Route>
      </Switch>

      {/* <Register /> */}
    </div>
  );
}

export default App;
