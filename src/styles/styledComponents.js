import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor}
  }

  .todoapp{
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    box-shadow: ${props => props.theme.boxShadow}
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: lightcoral;
  min-height: 50px;
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.theme.textColor};
  list-style: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  color:black;
  transition: 250ms ease background-color;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

export const ThemeToggle = styled.button`
  display: block;
  padding: 1rem;
  margin: 1rem;
  text-weight: bold;
  border: 2px solid darkgray;
  color:black;
`;

