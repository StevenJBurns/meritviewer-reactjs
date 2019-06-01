import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);

import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();
