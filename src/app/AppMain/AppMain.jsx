import React from 'react';
import PropTypes from 'prop-types';
import { EmpireFilterToolbar } from '../../components/EmpireFilterToolbar/EmpireFilterToolbar';
import { EmpireFilterButton } from '../../components/EmpireFilterButton/EmpireFilterButton';

export const AppMain = props => {
  return (
    <main>
      <EmpireFilterToolbar>
        <EmpireFilterButton empire="ALL" />
        <EmpireFilterButton empire="TR" />
        <EmpireFilterButton empire="NC" />
        <EmpireFilterButton empire="VS" />
      </EmpireFilterToolbar>
      { props.children }
    </main>
  );
};
