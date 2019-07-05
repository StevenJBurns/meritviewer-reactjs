import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import { EmpireFilterToolbar } from '../../components/EmpireFilterToolbar/EmpireFilterToolbar';
import { CategoryContainer } from '../../components/CategoryContainer/CategoryContainer';
import './AppMain.scss';

export const AppMain = props => {
  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.colorLight,
    backgroundColor: theme.backgroundDark
  };

  return (
    <main style={style}>
      <EmpireFilterToolbar />
      <CategoryContainer />
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
