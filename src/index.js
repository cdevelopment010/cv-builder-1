import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/helper.css';
import './styles/index.css';
import './styles/mediaQueries.css';
import App from './App';
import Footer from "./Components/Footer";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
    
  </React.StrictMode>
);