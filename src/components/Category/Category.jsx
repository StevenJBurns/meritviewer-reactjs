import React from 'react';
import PropTypes from 'prop-types';
import './Category.scss';

export const Category = props => {
  const { title } = props;

  return (
    <React.Fragment>
      <span>{ title }</span>
      { props.children}
    </React.Fragment>
  );
};
