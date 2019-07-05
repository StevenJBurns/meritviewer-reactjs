import React from 'react';
import PropTypes from 'prop-types';
import { AppDataContext } from '../../context/data/AppDataContext';
import { EmpireThemeContext } from '../../context/theme/empireThemeContext'; 
import './CategoryContainer.scss';

export const CategoryContainer = props => {
  const { currentAppData } = React.useContext(AppDataContext);
  const { theme } = React.useContext(EmpireThemeContext);

  const style = {
    color: theme.color,
    backgroundColor: theme.backgroundLight,
  };

  return (
      <ul id="category-container" style={{style}}>
        { currentAppData.map((category, index) => 
          <li key={index} className="category-container__item" style={{style}}>{category.title}</li>
          )
        }
        { props.children }
      </ul>
  );
};

CategoryContainer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CategoryContainer.defaultProps = {
  children: null,
};