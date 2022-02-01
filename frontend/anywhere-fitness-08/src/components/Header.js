import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    h2{
        padding: 20px 50px;
        border: lightgrey solid 1px;
    
    }
`


const Header = (props) => {


    return (
        <StyledHeader>
            <Link to='/'>
                <h2>Login</h2>
            </Link>
            <Link to='/classes'>
                <h2>Classes</h2>
            </Link>
            <Link to='/logout'>
                <h2>Logout</h2>
            </Link>
        </StyledHeader>
    )
}

export default Header;