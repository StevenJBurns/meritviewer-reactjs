import React from 'react';
import PropTypes from 'prop-types';
import './EmpireFilterToolbar.scss';

export const EmpireFilterToolbar = props => {
  return (
    <div id="empire-filter-toolbar__container">
      { props.children }
    </div>
  );
};

EmpireFilterToolbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),};

EmpireFilterToolbar.defaultProps = {
  children: null,
};
