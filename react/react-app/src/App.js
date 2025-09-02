import React, { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React 애플리케이션에 오신 것을 환영합니다!</h1>
        <p>이것은 React boilerplate입니다.</p>
        
        <div className="counter-section">
          <h2>카운터: {count}</h2>
          <button onClick={() => setCount(count + 1)}>
            증가
          </button>
          <button onClick={() => setCount(count - 1)}>
            감소
          </button>
          <button onClick={() => setCount(0)}>
            리셋
          </button>
        </div>

                 <div className="features">
           <h3>주요 기능:</h3>
           <ul>
             <li>✅ React 18</li>
             <li>✅ Hooks 사용</li>
             <li>✅ SCSS 스타일링</li>
             <li>✅ 테스트 설정</li>
             <li>✅ 빌드 스크립트</li>
           </ul>
         </div>
      </header>
    </div>
  );
}

export default App;
