import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/reset.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

