import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from 'yup';

const StyledNewClassForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    border: 1px solid black;
    margin-left: 30%;
    margin-top: 4rem;

    
`

const NewClassForm = () => {

    const [ form, setForm ] = useState({
        name: '',
        type: '',
        start_time: '',
        duration: '',
        intensity: '',
        location: '',
        registered_num: 0,
        registered_max: 10
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get('https://anywhere-fitness-008.herokuapp.com/api/classes', form)
        .then(resp => {
            console.log(resp);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleChange = e => {
        setForm({...form,
        [e.target.name]: e.target.value})
    }

    return (
        <StyledNewClassForm>
            <h1>Create a New Class</h1>
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
                            <option value="">--Select a Length--</option>
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
                            <option value="">--select a state--</option>
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
                <button>Submit Class</button>
            </form>
        </StyledNewClassForm>
    )
}

export default NewClassForm;