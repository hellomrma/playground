import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정을 원한다면 reportWebVitals(console.log)를 전달하세요
// 또는 https://bit.ly/CRA-vitals에서 더 자세한 정보를 확인하세요
reportWebVitals();
