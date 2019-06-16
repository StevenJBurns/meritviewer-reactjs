import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import { EmpireFilterToolbar } from '../../components/EmpireFilterToolbar/EmpireFilterToolbar';
import { EmpireFilterButton } from '../../components/EmpireFilterButton/EmpireFilterButton';
import './AppMain.scss';

export const AppMain = props => {
  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.color,
    backgroundColor: theme.backgroundDark
  };

  return (
    <main style={style}>
      <EmpireFilterToolbar>
        <EmpireFilterButton empire="ALL" />
        <EmpireFilterButton empire="TR" />
        <EmpireFilterButton empire="NC" />
        <EmpireFilterButton empire="VS" />
      </EmpireFilterToolbar>
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
