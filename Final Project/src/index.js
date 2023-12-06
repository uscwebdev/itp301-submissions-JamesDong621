import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom';
import App from './App'; // Assuming App.js is in the same src directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
