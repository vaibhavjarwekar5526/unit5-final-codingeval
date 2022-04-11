import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  background-color: lightcoral;
  height: 35px;
  text-align: center;
  font-size: 20px;
  padding: 15px;
`


const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 25px;
    color: white;
    
`

const Navbar = () => {
  return (
    <NavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/employees">Employees</StyledLink>
    </NavWrapper>
  )
}

export { Navbar };