import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  h2 {
    padding: 20px 50px;
    border: lightgrey solid 1px;
  }
`;

const Header = (props) => {
  return (
    <div className="links-wrapper">
      <div className="links-container">
        <div className="logo">
          <Link style={{ textDecoration: "none", color: "#f8f9fa" }} to="/">
            <h2>Anywhere Fitness</h2>
          </Link>
        </div>
        <div className="nav-items">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#f8f9fa",
              "font-size": ".7em",
            }}
          >
            <h2>Login</h2>
          </Link>
          <Link
            to="/classes"
            style={{
              textDecoration: "none",
              color: "#f8f9fa",
              "font-size": ".7em",
            }}
          >
            <h2>Classes</h2>
          </Link>
          <Link
            to="/logout"
            style={{
              textDecoration: "none",
              color: "#f8f9fa",
              "font-size": ".7em",
              margin: "0-auto",
            }}
          >
            <h2>Logout</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
