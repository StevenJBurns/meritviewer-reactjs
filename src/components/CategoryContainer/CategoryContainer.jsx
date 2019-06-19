import React from 'react';
import PropTypes from 'prop-types';
import { AppDataContext } from '../../context/data/AppDataContext';
import './CategoryContainer.scss';

export const CategoryContainer = props => {
  const { currentAppData } = React.useContext(AppDataContext);

  return (
      <ul id="category-container">
        { currentAppData.map((category, index) => 
          <li key={index} className="category-container__item">{category.title}</li>
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