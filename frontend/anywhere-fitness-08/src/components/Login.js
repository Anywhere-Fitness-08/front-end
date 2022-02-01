import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
        axios.post(' https://anywhere-fitness-008.herokuapp.com/api/auth/login')
        .then(resp => {
            console.log(resp);
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
            <button>Sign up here</button>
        </StyledLogin>
    )
}

export default Login;