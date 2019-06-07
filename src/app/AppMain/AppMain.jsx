import React from 'react';
import PropTypes from 'prop-types';
import { ThemeFilterButton } from '../../components/ThemeFilterButton/ThemeFilterButton';

export const AppMain = props => {
  return (
    <main>
      <ThemeFilterButton empire="ALL" />
      <ThemeFilterButton empire="TR" />
      <ThemeFilterButton empire="NC" />
      <ThemeFilterButton empire="VS" />
      { props.children }
    </main>
  );
};
