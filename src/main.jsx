import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.scss';
import './styles/index.scss';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
