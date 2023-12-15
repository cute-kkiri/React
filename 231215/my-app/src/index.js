// npm start하면 제일 먼저 실행되는 것. index.js
// public에 있는 html 실행
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './component/App';
import reportWebVitals from './component/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
