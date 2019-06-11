import React from 'react';
// import AppData from '../data/meritviewer.json';
// import { AppDataContext } from '../context/data/AppDataContext';
import { EmpireThemeContext } from '../context/theme/empireThemeContext';
import { themes } from '../context/theme/empireThemes';
import './App.scss';

export const App = props => {
  const [theme, setTheme] = React.useState('');

  const changeTheme = newTheme => {
    setTheme(themes[newTheme]);
    localStorage.setItem('empireTheme', newTheme);
  };

  React.useEffect(() => {
    const localStorageEmpire = localStorage.getItem('empireTheme') || 'ALL';
    changeTheme(localStorageEmpire)
  }, [])

  return (
    <EmpireThemeContext.Provider value={{ theme, changeTheme }}>
      { props.children }
    </EmpireThemeContext.Provider>
  );
};
