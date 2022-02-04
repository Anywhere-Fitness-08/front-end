import React, { useState } from "react";
import Class from "./Class";
import styled from "styled-components";
import { v4 as uuid } from 'uuid';
import { useHistory } from "react-router-dom";

const dummyData = [{name:"Early Morning Workout",
type:"Jog/Cardio",
start_time:"08:00",
duration:"1 hour",
intensity:"Intermediate",
location:"Cherry Creek Park",
registered_num:0,
registered_max: "20"},
{name:"Early Morning Workout",
type:"Jog/Cardio",
start_time:"08:00",
duration:"1 hour",
intensity:"Intermediate",
location:"Cherry Creek Park",
registered_num:0,
registered_max: "20"},
{name:"Early Morning Workout",
type:"Jog/Cardio",
start_time:"08:00",
duration:"1 hour",
intensity:"Intermediate",
location:"Cherry Creek Park",
registered_num:0,
registered_max: "20"}]

const StyledClasses = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    .classList{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    h3{
        border: black 1px solid;
        padding: 20px 10px;

        &:hover{
            border: 2px solid black;
        }
    }
`

const Classes = () => {

    const { push } = useHistory();

    const[classes] = useState(dummyData);

    return (
        <>
        <StyledClasses>
            <h1>Available Classes</h1>
            <h3 onClick={() => {
                push('/newclass');
            }} >Add a new Class</h3>
            <div className="classList">
                {classes.map(item => {
                    return <Class key={uuid()} item={item} />
                })}
            </div>
        </StyledClasses>
        </>
    )
}

export default Classes;