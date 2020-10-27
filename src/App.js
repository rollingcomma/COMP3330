import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import NavBar from './components/Navbar';
import { GlobalStyles } from './styles/styledComponents';

function App() {
  return(
    <ThemeContextProvider >
      <GlobalStyles />
      <NavBar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </ThemeContextProvider>
  )
}

export default App;


