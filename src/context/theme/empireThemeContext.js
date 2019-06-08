import React from 'react';
import { themes } from './empireThemes';

const initialState = {
  theme: themes.ALL,
  changeEmpireTheme: () => {},
};

export const EmpireThemeContext = React.createContext(initialState);
