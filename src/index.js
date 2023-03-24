import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { AuthContextProvider } from './Context/AuthContext';
import { TokenContextProvider } from './Context/TokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <TokenContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TokenContextProvider>
  </AuthContextProvider>
);
reportWebVitals();
