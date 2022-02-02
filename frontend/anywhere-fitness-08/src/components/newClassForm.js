import React from "react";
import styled from "styled-components";

const StyledNewClassForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

const NewClassForm = () => {

    const handleChange = () => {

    }

    return (
        <StyledNewClassForm>
            <form>
                <div>
                    <label>Name of class: 
                        <input 
                            type='input'
                            onChange={handleChange}
                            name='className'
                        />
                    </label>
                </div>

                <div>
                    <label>Type of class:

                    </label>
                </div>
                
                <div>
                    <label>Start Time: 
                        <input 
                            type='time'
                        />
                    </label>
                </div>

                <div>
                    <label>Duration of class:

                    </label>
                </div>

                <div>
                    <label>Intensity: 

                    </label>
                </div>

                <div>
                    <label>Location of class:
                        <input 
                            type='input'
                            name='location'

                        />
                    </label>
                </div>

                <div>
                    <label>Number of students: 

                    </label>
                </div>
                
                <div>
                    <label>Maximum number of students:

                    </label>
                </div>
            </form>
        </StyledNewClassForm>
    )
}

export default NewClassForm;