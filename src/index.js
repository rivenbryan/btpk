import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Links from './Links';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Links />
    </Router>
  </React.StrictMode>
);


