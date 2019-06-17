import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import EmpireTitles from '../../data/empireTitles.json';
import './EmpireFilterButton.scss';

export const EmpireFilterButton = props => {
  const { empire,handleMouseHover } = props;

  const { changeTheme } = React.useContext(EmpireThemeContext);

  return (
    <button
      onMouseEnter={() => handleMouseHover(EmpireTitles[empire])}
      onMouseLeave={() => handleMouseHover('')}
      onClick={() => changeTheme(empire)}>
        {empire}
    </button>
  )
};

EmpireFilterButton.propTypes = {
  empire: PropTypes.string,
};

EmpireFilterButton.defaultProptypes = {
  empire: 'ALL',
};
