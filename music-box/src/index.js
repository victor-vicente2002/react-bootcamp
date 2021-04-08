import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/reset.css';
import Home from './pages/Home';
import MyMusics from './pages/MyMusics';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <MyMusics />
  </React.StrictMode>,
  document.getElementById('root')
);

