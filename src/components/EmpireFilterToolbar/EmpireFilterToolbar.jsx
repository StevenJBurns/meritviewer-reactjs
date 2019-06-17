import React from 'react';
import PropTypes from 'prop-types';
import { EmpireFilterButton } from '../../components/EmpireFilterButton/EmpireFilterButton';
import './EmpireFilterToolbar.scss';

export const EmpireFilterToolbar = props => {
  const [hoverTitle, setHoverTitle] = React.useState('');

  return (
    <React.Fragment>
      <div id="empire-filter-toolbar__container">
        <EmpireFilterButton handleMouseHover={setHoverTitle} empire="ALL" />
        <EmpireFilterButton handleMouseHover={setHoverTitle} empire="TR" />
        <EmpireFilterButton handleMouseHover={setHoverTitle} empire="NC" />
        <EmpireFilterButton handleMouseHover={setHoverTitle} empire="VS" />
      </div>
      <h4 id="empire-filter-toolbar__hovered-title">{hoverTitle}</h4>
    </React.Fragment>
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
