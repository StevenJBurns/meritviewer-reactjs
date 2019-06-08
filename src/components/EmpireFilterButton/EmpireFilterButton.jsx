import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import './EmpireFilterButton.scss';

export const EmpireFilterButton = props => {
  const { empire } = props;
  const { changeTheme } = React.useContext(EmpireThemeContext);

  return (
    <button onClick={() => changeTheme(empire)}>{empire}</button>
  )
};

EmpireFilterButton.propTypes = {
  empire: PropTypes.string,
};

EmpireFilterButton.defaultProptypes = {
  empire: 'ALL',
};
