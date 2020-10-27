import React, { useContext } from 'react';
import { Nav, NavMenu, NavLink, ThemeToggle } from '../styles/styledComponents';
import { ThemeContext } from '../contexts/ThemeContextProvider';

const NavBar = () => {
  const {theme, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <Nav >
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <span> | </span>
        <NavLink to="/about">About </NavLink>
      </NavMenu>
      <ThemeToggle onClick={toggleTheme}>{theme && theme.currentTheme.id === "dark" ? "Light":"Dark"} Theme</ThemeToggle>
    </Nav>)
}

export default NavBar