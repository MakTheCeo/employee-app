import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import './components/i18n'; 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
