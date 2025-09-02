# 🚀 초보 개발자를 위한 JavaScript/React/Next.js 학습 가이드

이 문서는 React와 Next.js 프로젝트의 코드를 이해하는 데 도움이 됩니다.

## 📚 기본 개념 이해하기

### 1. JavaScript 기본 문법

#### 변수 선언
```javascript
// const: 한 번 선언하면 값을 변경할 수 없는 상수
const name = "홍길동";

// let: 값을 변경할 수 있는 변수
let age = 25;
age = 26; // 가능

// var: 옛날 방식 (사용하지 않는 것을 권장)
var oldWay = "구식";
```

#### 함수 정의
```javascript
// 일반 함수
function sayHello(name) {
  return `안녕하세요, ${name}님!`;
}

// 화살표 함수 (Arrow Function)
const sayHelloArrow = (name) => {
  return `안녕하세요, ${name}님!`;
};

// 간단한 화살표 함수 (한 줄일 때)
const sayHelloSimple = name => `안녕하세요, ${name}님!`;
```

#### 배열과 객체
```javascript
// 배열: 순서가 있는 데이터 목록
const fruits = ['사과', '바나나', '오렌지'];

// 객체: 키-값 쌍으로 이루어진 데이터
const person = {
  name: '홍길동',
  age: 25,
  city: '서울'
};

// 배열의 요소에 접근
console.log(fruits[0]); // '사과'

// 객체의 속성에 접근
console.log(person.name); // '홍길동'
```

### 2. React 핵심 개념

#### 컴포넌트 (Component)
```javascript
// 컴포넌트는 UI의 재사용 가능한 조각입니다
function Welcome() {
  return <h1>안녕하세요!</h1>;
}

// 컴포넌트 사용
<Welcome />
```

#### Props (속성)
```javascript
// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

// 사용할 때
<Greeting name="홍길동" />
```

#### State (상태)
```javascript
import { useState } from 'react';

function Counter() {
  // count: 현재 상태 값
  // setCount: 상태를 변경하는 함수
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}
```

#### 이벤트 처리
```javascript
function Button() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };
  
  return (
    <button onClick={handleClick}>
      클릭하세요
    </button>
  );
}
```

### 3. Next.js 특별한 기능

#### App Router
```javascript
// app/layout.js: 모든 페이지의 공통 레이아웃
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/page.js: 메인 페이지
export default function Home() {
  return <h1>홈페이지입니다</h1>;
}
```

#### 'use client' 지시어
```javascript
// Next.js 13+에서는 기본적으로 서버 컴포넌트입니다
// 클라이언트 기능(useState, onClick 등)을 사용하려면 필요합니다
'use client'

import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0);
  // ...
}
```

## 🔍 코드에서 자주 보는 패턴들

### 1. 조건부 렌더링
```javascript
function ConditionalComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>환영합니다!</p>
      ) : (
        <p>로그인해주세요.</p>
      )}
    </div>
  );
}
```

### 2. 리스트 렌더링
```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

### 3. 스프레드 연산자
```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // [1, 2, 3, 4]

const originalObject = { name: '홍길동', age: 25 };
const newObject = { ...originalObject, city: '서울' };
// { name: '홍길동', age: 25, city: '서울' }
```

### 4. 구조 분해 할당
```javascript
const person = { name: '홍길동', age: 25, city: '서울' };

// 객체에서 특정 속성만 추출
const { name, age } = person;
console.log(name); // '홍길동'
console.log(age);  // 25

// 배열에서도 가능
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

## 🎨 CSS와 스타일링

### 1. CSS Modules
```javascript
import styles from './Button.module.scss';

function Button() {
  return (
    <button className={styles.button}>
      클릭하세요
    </button>
  );
}
```

### 2. 조건부 클래스명
```javascript
function Button({ variant, size }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      버튼
    </button>
  );
}
```

## 🚨 자주 하는 실수와 해결법

### 1. map 함수에서 key 누락
```javascript
// ❌ 잘못된 방법
{todos.map(todo => (
  <li>{todo.text}</li>
))}

// ✅ 올바른 방법
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
))}
```

### 2. 이벤트 핸들러에서 함수 호출
```javascript
// ❌ 잘못된 방법 (즉시 실행됨)
<button onClick={handleClick()}>클릭</button>

// ✅ 올바른 방법
<button onClick={handleClick}>클릭</button>
<button onClick={() => handleClick()}>클릭</button>
```

### 3. 상태 업데이트 시 불변성 유지
```javascript
// ❌ 잘못된 방법
const [todos, setTodos] = useState([]);
const addTodo = (text) => {
  todos.push({ id: Date.now(), text }); // 직접 수정
  setTodos(todos);
};

// ✅ 올바른 방법
const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text }]);
};
```

## 📖 학습 순서 제안

1. **JavaScript 기초** (1-2주)
   - 변수, 함수, 배열, 객체
   - ES6+ 문법 (화살표 함수, 구조 분해 할당 등)

2. **React 기초** (2-3주)
   - 컴포넌트, props, state
   - 이벤트 처리, 조건부 렌더링

3. **React 고급** (2-3주)
   - useEffect, useRef 등 다른 Hook들
   - 컴포넌트 간 데이터 전달

4. **Next.js** (1-2주)
   - App Router, 파일 기반 라우팅
   - 서버 컴포넌트 vs 클라이언트 컴포넌트

## 🔗 유용한 학습 자료

- [React 공식 문서 (한국어)](https://ko.react.dev/)
- [Next.js 공식 문서](https://nextjs.org/docs)
- [MDN JavaScript 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

---

**💡 팁: 코드를 이해할 때는 작은 부분부터 하나씩 파악해보세요. 전체를 한 번에 이해하려 하지 말고, 각 줄이 무엇을 하는지 차근차근 분석해보세요!**
