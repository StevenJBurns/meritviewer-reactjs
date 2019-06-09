import React from 'react';
// import { themes } from './empireThemes';

const initialTheme = localStorage.getItem('empireTheme').toString() || 'ALL';

const initialState = {
  theme: initialTheme,
  changeEmpireTheme: () => {},
};

export const EmpireThemeContext = React.createContext(initialState);
