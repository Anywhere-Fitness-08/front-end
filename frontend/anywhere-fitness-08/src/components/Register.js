import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

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

    .errorMessages{
        color: red;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: .8rem;
    }
`

const schema = Yup.object().shape({
    firstName: Yup.string().required('You must enter your first name').min(2, 'Your first name must be 2 charaters or more'),
    lastName: Yup.string().required('You must enter your last name').min(2, 'Your last name must be 2 charaters or more'),
    email: Yup.string().required('you must enter a email'),
    username: Yup.string().required('You must enter a username').min(6, 'You must enter a username longer than 6 characters'),
    password: Yup.string().required('You must enter a password').min(6, 'You must enter a password longer than 6 characters')
})


const Register = () => {

    const { push } =  useHistory();


    const [disabled, setDisabled] = useState(true);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    })

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        role: 'user'
    });

    useEffect(() => {
        schema.isValid(form).then(valid => {setDisabled(!valid)})
      }, [form])

    const handleChange = e => {

        setFormErrors(e.target.name, e.target.value)
        if(e.target.name)
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    const setFormErrors = (name, value) => {
        Yup.reach(schema, name).validate(value)
        .then(() => {
          setErrors({ ...errors, [name]: ''})
        })
        .catch(error => {
          setErrors({...errors, [name]: error.errors[0]})
        })
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
            push('/login');
        })
        .then(error => {
            console.error(error);
        })
    }

    return(
        <StyledRegister>
            <h1>Register your new account below to get started on your workout journey</h1>
            <div className="errorMessages">
                <span>{errors.firstName}</span>
                <span>{errors.lastName}</span>
                <span>{errors.email}</span>
                <span>{errors.username}</span>
                <span>{errors.password}</span>
            </div>
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
                <button disabled={disabled}>Submit</button>
            </form>
        </StyledRegister>
    )
}

export default Register;