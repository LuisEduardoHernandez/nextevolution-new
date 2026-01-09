import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <PageRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);