import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from 'yup';

const StyledRegister = styled.div`
    border: black solid 1px;
    width: 50%;
    padding: 100px 0;
    padding-top: 20px;

    padding: 20px 0 40px 0px;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 25% ;
    

    button{
        margin-top: 2rem;
    }
    
    form{
        width: 50%;
    }
`


const Register = () => {

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        role: 'user'
    });

    // const [ form, setForm ] = useState({
    //     username: '',
    //     password: '',
    //     role: 'user'
    // });

    const handleChange = e => {
        if(e.target.name)
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newRegister = {
            username: form.username,
            password: form.password,
            role: form.role
        }
        console.log('newRegister being sent: ', newRegister);
        axios.post('https://anywhere-fitness-008.herokuapp.com/api/auth/register', newRegister)
        .then(resp => {
            console.log(resp);
        })
        .then(error => {
            console.error(error);
        })
    }

    return(
        <StyledRegister>
            <h1>Register your new account below to get started on your workout journey</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label><span>First Name:</span>
                        <input 
                            type='input'
                            name='firstName'
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>Last Name:
                        <input 
                            type='input'
                            name='lastName'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label>Email:
                        <input 
                            type='input'
                            name='email'
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>Username: 
                        <input 
                            type='input'
                            name='username'
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

                <div>
                    <label> 
                        <input 
                            type='checkbox'
                            onChange={handleChange}
                            name='ofAge'
                        />
                        Are you at least 18 years old?
                    </label>
                </div>
                
                <div>
                    <label> 
                        <input 
                            type='checkbox'
                            onChange={handleChange}
                        />
                        Do you agree with our terms of service?
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </StyledRegister>
    )
}

export default Register;