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

Category.propTypes = {
  title: PropTypes.string,
};

Category.defaultProps = {
  title: '',
};