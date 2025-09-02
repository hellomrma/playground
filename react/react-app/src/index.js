// React 라이브러리를 가져옵니다
// React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다
import React from 'react';

// ReactDOM을 가져옵니다
// ReactDOM은 React 컴포넌트를 실제 웹 페이지의 DOM에 렌더링하는 역할을 합니다
import ReactDOM from 'react-dom/client';

// 전역 SCSS 스타일 파일을 가져옵니다
// 이 파일에는 웹사이트 전체에 적용되는 기본 스타일이 정의되어 있습니다
import './index.scss';

// App 컴포넌트를 가져옵니다
// App.js에서 정의한 메인 컴포넌트입니다
import App from './App';

// 웹 성능을 측정하는 함수를 가져옵니다
// 사용자가 웹사이트를 얼마나 빠르게 볼 수 있는지 측정합니다
import reportWebVitals from './reportWebVitals';

// React 18의 새로운 렌더링 방식입니다
// document.getElementById('root')로 HTML에서 'root'라는 id를 가진 요소를 찾습니다
// 이 요소는 public/index.html에 정의되어 있습니다
// createRoot()는 React 18에서 도입된 새로운 API입니다
const root = ReactDOM.createRoot(document.getElementById('root'));

// React 컴포넌트를 실제 DOM에 렌더링합니다
// root.render()는 React 컴포넌트를 화면에 그리는 역할을 합니다
root.render(
  // React.StrictMode는 개발 모드에서만 작동하는 특별한 컴포넌트입니다
  // 잠재적인 문제를 미리 발견하고 경고를 표시해줍니다
  // 프로덕션 빌드에서는 자동으로 제거됩니다
  <React.StrictMode>
    {/* App 컴포넌트를 렌더링합니다 */}
    <App />
  </React.StrictMode>
);

// 웹 성능을 측정하고 결과를 콘솔에 출력합니다
// 성능 측정을 원한다면 reportWebVitals(console.log)를 전달하세요
// 또는 https://bit.ly/CRA-vitals에서 더 자세한 정보를 확인하세요
reportWebVitals();
