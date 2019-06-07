import React from 'react';
import PropTypes from 'prop-types';
import './EmpireFilterButton.scss';

export const EmpireFilterButton = props => {
  const { empire, changeEmpire } = props

  return (
    <button onClick={changeEmpire}>{empire}</button>
  );
};

EmpireFilterButton.propTypes = {
  empire: PropTypes.string,
  changeEmpire: PropTypes.func,
};

EmpireFilterButton.defaultProptypes = {
  empire: 'ALL',
  changeEmpire: () => {},
};
