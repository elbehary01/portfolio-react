import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import PortfolioContextProvider from './context/PortfolioContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PortfolioContextProvider>
    <App />
  </PortfolioContextProvider>
);
