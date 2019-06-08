import React from 'react';
import AppData from '../data/meritviewer.json';
import { AppDataContext } from '../context/data/AppDataContext';
import { EmpireThemeContext } from '../context/theme/empireThemeContext';
import { themes } from '../context/theme/empireThemes';
import './App.css';

export const App = props => {
  const [theme, setTheme] = React.useState({});

  const changeTheme = newTheme => setTheme(themes[newTheme]);

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);
  
  return (
    <EmpireThemeContext.Provider value={{ theme, changeTheme }}>
      { props.children }
    </EmpireThemeContext.Provider>
  );
};
