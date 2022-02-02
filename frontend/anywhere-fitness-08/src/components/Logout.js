import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {

    const { push } = useHistory();

    if(localStorage.getItem('token')){
        localStorage.removeItem('token');
        push('/login');
    }else{
        push('/login');
    }

    return (
        <></>
    )
}

export default Logout;