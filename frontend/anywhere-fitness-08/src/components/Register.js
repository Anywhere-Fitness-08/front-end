import React, { useState } from "react";
import styled from "styled-components";

const StyledRegister = styled.div`

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

    return(
        <StyledRegister>
            <form>
                <div>
                    <label>First Name:
                        <input 
                            type='input'
                            name='firstName'
                        />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input 
                            type='input'
                            name='lastName'
                        />
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input 
                            type='input'
                            name='email'
                        />
                    </label>
                </div>
                <div>
                    <label>Username: 
                        <input 
                            type='input'
                            name='username'
                        />
                    </label>
                </div>
                <div>
                    <label>Password: 
                        <input 
                            type='password'
                            name='password'
                        />
                    </label>
                </div>
                <div>
                    <label> Are you at least 18 years old?
                        <input 
                            type='checkbox'
                        />
                    </label>
                <div>
                    <label> Do you agree with our terms of service?
                        <input 
                            type='checkbox'
                        />
                    </label>
                </div>
                </div>
            </form>
        </StyledRegister>
    )
}

export default Register;