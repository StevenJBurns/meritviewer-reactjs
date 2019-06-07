import React from 'react';
import PropTypes from 'prop-types';
import { EmpireFilterButton } from '../../components/EmpireFilterButton/EmpireFilterButton';

export const AppMain = props => {
  return (
    <main>
      <EmpireFilterButton empire="ALL" />
      <EmpireFilterButton empire="TR" />
      <EmpireFilterButton empire="NC" />
      <EmpireFilterButton empire="VS" />
      { props.children }
    </main>
  );
};
