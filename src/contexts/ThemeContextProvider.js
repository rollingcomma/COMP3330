import React, {useReducer} from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from "../styles/theme";


const initialState = {
  currentTheme: theme.light
};

export const ThemeContext = React.createContext();

const reducer = (state, action) =>{
  switch (action.type) {
    case "toggleTheme": {
      const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
      return { ...state, currentTheme: theme[newThemeKey] };
    }
    default:
      throw new Error("");
  }
}

export const ThemeContextProvider = ({children}) => {
  const [themeState, dispatch] = useReducer(reducer, initialState);

  return(
    <ThemeProvider theme={themeState.currentTheme}>
      <ThemeContext.Provider value={{ theme: {...themeState}, dispatch: dispatch }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
    
  )
}