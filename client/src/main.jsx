import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FloraContextProvider } from './context/FloraContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FloraContextProvider>
        <App />
      </FloraContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
