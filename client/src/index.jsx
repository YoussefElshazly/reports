import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import App from './App';
import store from './store';
import { theme } from './constants';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5001';
}

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
