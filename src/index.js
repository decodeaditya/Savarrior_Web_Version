import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { AuthContextProvider } from './Context/AuthContext';
import { MessageContextProvider } from './Context/MessageContext';
import { FirebaseContext, FirebaseContextProvider } from './Context/FirebaseData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <AuthContextProvider>
      <MessageContextProvider>
        <FirebaseContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        </FirebaseContextProvider>
      </MessageContextProvider>
  </AuthContextProvider>
);
reportWebVitals();
