import React from 'react';
import PropTypes from 'prop-types';
import './Group.scss';

export const Group = props => {
  const { title } = props;

  return (
    <React.Fragment>
      <span>{ title }</span>
      { props.children}
    </React.Fragment>
  );
};
