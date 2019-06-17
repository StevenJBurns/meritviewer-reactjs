import React from 'react';
import PropTypes from 'prop-types';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext';
import './EmpireFilterButton.scss';

export const EmpireFilterButton = props => {
  const { empire,handleMouseHover } = props;

  const { changeTheme } = React.useContext(EmpireThemeContext);

  const longEmpireTitles = {
    ALL: 'All Empires',
    TR: 'Terran Republic',
    NC: 'New Conglomerate',
    VS: 'Vanu Soverignty',
  };

  return (
    <button
      onMouseEnter={() => handleMouseHover(longEmpireTitles[empire])}
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
