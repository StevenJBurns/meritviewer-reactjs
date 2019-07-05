import React from 'react';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';

import './AppFooter.scss';

export const AppFooter = props => {
  const year = new Date().getFullYear();

  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.colorLight,
    backgroundColor: theme.backgroundDark
  };

  return (
    <footer style={style}>
      <h4>&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  );
};
