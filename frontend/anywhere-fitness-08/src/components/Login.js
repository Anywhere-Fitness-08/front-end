import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import hero from "../images/hero.svg";
import { useHistory } from "react-router-dom";

//Login Styles go here.
const StyledLogin = styled.div`
  border: black solid 1px;
  width: 30%;
  padding: 100px 0;
`;

const Login = () => {
  const { push } = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form: ", form);
    axios
      .post("https://anywhere-fitness-008.herokuapp.com/api/auth/login", form)
      .then((resp) => {
        console.log(resp.data.token);
        localStorage.setItem("token", resp.data.token);
      })
      .catch((error) => {
        console.log("here comes an error");
        console.log(error);
      });
  };

  return (
    <div className="loginContainer">
      <div className="login-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input name="username" type="input" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <button className="first-button">Login</button>
        </form>
        <h4 className="new">New Here?</h4>
        <button onClick={() => push("/register")} className="second-button">
          Sign up here
        </button>
      </div>
      <div className="svg">
        <img src={hero} alt="not worki" />
      </div>
    </div>
  );
};

export default Login;
