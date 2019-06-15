import React from 'react';

const initialTheme = localStorage.getItem('empireTheme') || 'ALL';

const initialState = {
  theme: initialTheme,
};

export const EmpireThemeContext = React.createContext(initialState);
