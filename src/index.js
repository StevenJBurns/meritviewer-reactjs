import React from 'react';
import ReactDOM from 'react-dom';
/* import * as serviceWorker from './serviceWorker'; */
import { App } from './app/App';
import { AppMain } from './app/AppMain/AppMain';
import { AppHeader } from './app/AppHeader/AppHeader';
import { AppFooter } from './app/AppFooter/AppFooter'

import './index.scss';

ReactDOM.render(
  <App>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </App>,
  document.getElementById('react-root')
);

/* serviceWorker.unregister(); */
