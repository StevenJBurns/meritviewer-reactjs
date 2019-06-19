import React from 'react';
import PropTypes from 'prop-types';

export const CategoryContainer = props => {
  const [] = React.useState();
  return (
    <section>
      { props.children }
    </section>
  );
};

CategoryContainer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

CategoryContainer.defaultProps = {
  children: null,
};