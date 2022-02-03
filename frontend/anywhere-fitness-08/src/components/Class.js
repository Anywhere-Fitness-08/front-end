import React from "react";
import styled from "styled-components";

const StyledClass = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
    margin: 3rem 0;
    padding: .5rem;

    span{
        font-weight: bold;
    }
`

const Class = (props) => {

    const { item } = props;
    const { name, type, duration, start_time, intensity, location, registered_num, registered_max  } = item;

    return (
        <StyledClass>
            <div><h3>{name}</h3></div>
            <div><span>Type of workout:</span> {type}</div>
            <div><span>Class Length:</span> {duration}</div>
            <div><span>Start Time:</span> {start_time}</div>
            <div><span>Intensity:</span> {intensity}</div>
            <div><span>Location:</span> {location}</div>
            <div><span>People Registered:</span> {registered_num}</div>
            <div><span>Maximum Students:</span> {registered_max}</div>
            <button>Sign Up</button>
        </StyledClass>
    )
}

export default Class;