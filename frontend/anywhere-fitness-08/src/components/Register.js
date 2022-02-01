import React, { useState } from "react";
import styled from "styled-components";

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
        ofAge: false,
        accountType: ''
    });

    const handleChange = e => {
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
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