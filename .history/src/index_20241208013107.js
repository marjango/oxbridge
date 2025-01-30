import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App'; // Главный компонент приложения

const root = ReactDOM.createRoot(document.getElementById('root')); // Связываем React с корневым элементом в HTML
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    

);
