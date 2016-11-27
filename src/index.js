import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'

import './bootstrap.min.css'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
