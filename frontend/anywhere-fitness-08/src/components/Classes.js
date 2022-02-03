import React from "react";
import Class from "./Class";
import styled from "styled-components";
import * as Yup from 'yup';

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
`

const Classes = () => {


    


    return (
        <>
            
        <StyledClasses>
            <h1>Available Classes</h1>
            <div className="classList">
                {dummyData.map(item => {
                    return <Class item={item} />
                })}
            </div>
        </StyledClasses>
        </>
    )
}

export default Classes;