import React from 'react';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import './AppHeader.css';

export const AppHeader = () => {
  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.color,
    backgroundColor: theme.backgroundDark
  };

  return(
    <header style={style}>
      <h2>PlanetSide MeritViewer</h2>
    </header>
  );
};
