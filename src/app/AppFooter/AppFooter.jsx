import React from 'react';
import './AppFooter.css';

export const AppFooter = props => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h4>&copy; {year} &bull; Steven J Burns</h4>
    </footer>
  );
};
