import React from 'react';
import PropTypes from 'prop-types';
import './Merit.scss';

export const Merit = props => {
  const { title } = props;

  return (
    <span>{ title }</span>
  );
};

Merit.propTypes = {
  title: PropTypes.string,
};

Merit.defaultProps = {
  title: '',
};
