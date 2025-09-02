// React와 useState Hook을 가져옵니다
// useState는 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 Hook입니다
import React, { useState } from 'react';

// SCSS 스타일 파일을 가져옵니다
// 이 파일에는 이 컴포넌트의 모든 스타일이 정의되어 있습니다
import './App.scss';

// App이라는 이름의 함수형 컴포넌트를 정의합니다
// 함수형 컴포넌트는 React에서 가장 현대적이고 권장되는 방식입니다
function App() {
  // useState Hook을 사용하여 count라는 상태 변수를 생성합니다
  // count: 현재 카운터 값 (초기값: 0)
  // setCount: count 값을 변경할 수 있는 함수
  // useState(0)에서 0은 count의 초기값입니다
  const [count, setCount] = useState(0);

  // 컴포넌트가 화면에 렌더링할 내용을 반환합니다
  // JSX라는 문법을 사용하여 HTML과 유사한 구조를 만듭니다
  return (
    // 최상위 div 요소, className으로 CSS 클래스를 지정합니다
    <div className="App">
      {/* header 요소, 메인 헤더 영역을 나타냅니다 */}
      <header className="App-header">
        {/* h1: 가장 큰 제목, 환영 메시지를 표시합니다 */}
        <h1>React 애플리케이션에 오신 것을 환영합니다!</h1>
        
        {/* p: 단락, 설명 텍스트를 표시합니다 */}
        <p>이것은 React boilerplate입니다.</p>
        
        {/* 카운터 기능을 담당하는 섹션 */}
        <div className="counter-section">
          {/* h2: 두 번째 제목, 현재 카운터 값을 표시합니다 */}
          {/* {count}: JavaScript 표현식을 JSX 안에서 사용할 때는 중괄호로 감쌉니다 */}
          <h2>카운터: {count}</h2>
          
          {/* 버튼들: 각각 다른 기능을 수행합니다 */}
          {/* onClick: 버튼을 클릭했을 때 실행될 함수를 지정합니다 */}
          {/* () => setCount(count + 1): 화살표 함수(arrow function)로 즉시 실행되는 함수를 만듭니다 */}
          
          {/* 증가 버튼: 현재 count 값에 1을 더합니다 */}
          <button onClick={() => setCount(count + 1)}>
            증가
          </button>
          
          {/* 감소 버튼: 현재 count 값에서 1을 뺍니다 */}
          <button onClick={() => setCount(count - 1)}>
            감소
          </button>
          
          {/* 리셋 버튼: count 값을 0으로 초기화합니다 */}
          <button onClick={() => setCount(0)}>
            리셋
          </button>
        </div>

        {/* 주요 기능을 나열하는 섹션 */}
        <div className="features">
          <h3>주요 기능:</h3>
          {/* ul: 순서가 없는 목록을 만듭니다 */}
          <ul>
            {/* li: 목록의 각 항목을 나타냅니다 */}
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

// App 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다
// default export는 한 파일에서 하나만 가능합니다
export default App;
