import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

//Login Styles go here.
const StyledLogin = styled.div`
    border: black solid 1px;
    width: 30%;
    padding: 100px 0;
`


const Login = () => {

    const [ form, setForm ] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form: ',form);
        axios.post('https://anywhere-fitness-008.herokuapp.com/api/auth/login', form)
        .then(resp => {
            console.log(resp.data.token);
            localStorage.setItem('token', resp.data.token);
        })
        .catch(error => {
            console.log('here comes an error');
            console.log(error);
        })
    }


    return(
        <StyledLogin>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: 
                        <input
                            name='username'
                            type='input' 
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Password: 
                        <input 
                            type='password'
                            name='password'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Login</button>
            </form>
            <h4>New Here?</h4>
            <Link to='/register'><button>Sign up here</button></Link>
        </StyledLogin>
    )
}

export default Login;