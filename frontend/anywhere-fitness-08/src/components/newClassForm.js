import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from 'yup';
import { axiosWithAuth } from "./axiosAuth";
import { useHistory } from "react-router-dom";

const StyledNewClassForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-left: 30%;
    margin-top: 4rem;

    .errorMessages{
        color: red;
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }
`

const schema = Yup.object().shape({
    name: Yup.string().required('You must enter an event name'),
    type: Yup.string().required('Must enter a type of event'),
    start_time: Yup.string().required('Must enter a start time'),
    duration: Yup.string().required('Must enter a duration for the event'),
    intensity: Yup.string().required('Must select an intensity'),
    location: Yup.string().required('Must enter a location'),
    registered_max: Yup.string().required('Must enter a max number of students')
  })

const NewClassForm = () => {

    const { push } = useHistory();

    const [disabled, setDisabled] = useState(true);

    const [errors, setErrors] = useState({
        name: '',
        type: '',
        start_time: '',
        duration: '',
        intensity: '',
        location: '',
        registered_max: ''
    })

    const [ form, setForm ] = useState({
        name: '',
        type: '',
        start_time: '',
        duration: '',
        intensity: '',
        location: '',
        registered_num: 0,
        registered_max: 10,
    });

    useEffect(() => {
        schema.isValid(form).then(valid => {setDisabled(!valid)})
      }, [form])

    const setFormErrors = (name, value) => {
        Yup.reach(schema, name).validate(value)
        .then(() => {
          setErrors({ ...errors, [name]: ''})
        })
        .catch(error => {
          setErrors({...errors, [name]: error.errors[0]})
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault();

        push('/classes');

        // axiosWithAuth().post('https://anywhere-fitness-008.herokuapp.com/api/classes', form)
        // .then(resp => {
        //     console.log(resp);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }

    const handleChange = e => {
        setFormErrors(e.target.name, e.target.value)
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    return (
        <StyledNewClassForm>
            <h1>Create a New Class</h1>
            <div className="errorMessages">
                <span>{errors.name}</span>
                <span>{errors.type}</span>
                <span>{errors.time}</span>
                <span>{errors.duration}</span>
                <span>{errors.intensity}</span>
                <span>{errors.location}</span>
                <span>{errors.registered_max}</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name of class: 
                        <input 
                            type='input'
                            onChange={handleChange}
                            name='name'
                        />
                    </label>
                </div>

                <div>
                    <label>Type of class:
                        <input 
                            type='input'
                            onChange={handleChange}
                            name='type'
                        />
                    </label>
                </div>
                
                <div>
                    <label>Start Time: 
                        <input 
                            type='time'
                            name='start_time'
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>Duration of class:
                        <select value={form.duration} name="duration" onChange={handleChange}>
                            <option value="">--Select Length--</option>
                            <option value="30 minutes">30 Minutes</option>
                            <option value="1 hour">60 Minutes</option>
                            <option value="1.5 hours">90 Minutes</option>
                            <option value="2 hours">120 Minutes</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>Intensity: 
                        <select value={form.intensity} name="intensity" onChange={handleChange}>
                            <option value="">--Select Intensity--</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Intense">Intense</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>Location of class:
                        <input 
                            type='input'
                            name='location'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label>Maximum number of students:
                        <input 
                            type='input'
                            name='registered_max'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button disabled={disabled}>Submit Class</button>
            </form>
        </StyledNewClassForm>
    )
}

export default NewClassForm;