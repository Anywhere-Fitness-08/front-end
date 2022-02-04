import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import hero from "../images/hero.svg";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';

//Login Styles go here.
const StyledLogin = styled.div`
    border: black solid 1px;
    width: 30%;
    padding: 100px 0;

`;

const schema = Yup.object().shape({
  username: Yup.string().required('Please enter your username.'),
  password: Yup.string().required('Please enter your password')
})

const Login = () => {

    const { push } = useHistory();

    const [ disabled, setDisabled ] = useState(true);
    const [errors, setErrors] = useState({ username: '', password: ''})
    


  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const setFormErrors = (name, value) => {
    Yup.reach(schema, name).validate(value)
    .then(() => {
      setErrors({ ...errors, [name]: ''})
    })
    .catch(error => {
      setErrors({...errors, [name]: error.errors[0]})
    })
  }

  useEffect(() => {
    schema.isValid(form).then(valid => {setDisabled(!valid)})
  }, [form])

  const handleChange = (e) => {

    setFormErrors(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://anywhere-fitness-008.herokuapp.com/api/auth/login", form)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        push('/classes');
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
            <div className="errorMessage">{errors.username}</div>
            <label>
              Username:
              <input name="username" type="input" onChange={handleChange} />
            </label>
          </div>
          <div>
            <div className="errorMessage">{errors.password}</div>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <button disabled={disabled} className="first-button">Login</button>
        </form>
        <h4 className="new">New Here?</h4>
        <button className="second-button" onClick={() => {push('/register')}}>Sign up here</button>
      </div>
      <div className="svg">
        <img src={hero} alt="not worki" />
      </div>
    </div>
  );
};

export default Login;
