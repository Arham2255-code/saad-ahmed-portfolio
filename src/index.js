import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Zaroori: Bootstrap CSS ko yahan import karna hai
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Agar aapke paas koi custom CSS file ho toh
import App from './App'; // Aapka banaya hua App.jsx component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Humara App component yahan render ho raha hai */}
    <App />
  </React.StrictMode>
);