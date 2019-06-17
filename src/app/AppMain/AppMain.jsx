import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import { EmpireFilterToolbar } from '../../components/EmpireFilterToolbar/EmpireFilterToolbar';
import './AppMain.scss';

export const AppMain = props => {
  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.color,
    backgroundColor: theme.backgroundDark
  };

  return (
    <main style={style}>
      <EmpireFilterToolbar />
      { props.children }
    </main>
  );
};

AppMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

AppMain.defaultProps = {
  children: null
};
