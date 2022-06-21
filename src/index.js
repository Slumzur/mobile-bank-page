import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App'

ReactDOM.render(
  <React.StrictMode>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic"
            rel="stylesheet" type="text/css" />
    <App/>
  </React.StrictMode>,
  document.getElementById('mobileBankPage')
);

