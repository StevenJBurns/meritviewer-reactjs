import React from 'react';
import PropTypes from 'prop-types';
import './ThemeFilterButton.scss';

export const ThemeFilterButton = props => {
  const { empire, changeEmpire } = props

  return (
    <button onClick={changeEmpire}>{empire}</button>
  );
};

ThemeFilterButton.propTypes = {
  empire: PropTypes.string,
  changeEmpire: PropTypes.func,
};

ThemeFilterButton.defaultProptypes = {
  empire: 'ALL',
  changeEmpire: () => {},
};
