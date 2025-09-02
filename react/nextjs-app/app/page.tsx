// 'use client' 지시어는 이 컴포넌트가 클라이언트 사이드에서 실행됨을 명시합니다
// Next.js 13+ App Router에서는 기본적으로 서버 컴포넌트이므로,
// useState 같은 클라이언트 기능을 사용하려면 이 지시어가 필요합니다
'use client'

// React의 useState Hook을 가져옵니다
// useState는 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 Hook입니다
import { useState } from 'react'

// CSS Modules를 사용한 SCSS 스타일 파일을 가져옵니다
// styles 객체를 통해 각 CSS 클래스에 접근할 수 있습니다
// CSS Modules는 클래스명 충돌을 방지하고 컴포넌트별로 스타일을 격리시킵니다
import styles from './page.module.scss'

// Todo 항목의 타입을 정의합니다
// TypeScript를 사용하면 데이터 구조를 명확하게 정의할 수 있습니다
interface Todo {
  id: number
  text: string
  completed: boolean
}

// Home이라는 이름의 함수형 컴포넌트를 정의합니다
// 이 컴포넌트는 Next.js의 메인 페이지 역할을 합니다
export default function Home() {
  // 카운터 상태를 관리합니다
  // count: 현재 카운터 값 (초기값: 0)
  // setCount: count 값을 변경할 수 있는 함수
  const [count, setCount] = useState<number>(0)

  // 할 일 목록 상태를 관리합니다
  // todos: 할 일 객체들의 배열
  // setTodos: todos 배열을 변경할 수 있는 함수
  // 각 할 일 객체는 id, text, completed 속성을 가집니다
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Next.js 학습하기', completed: false },
    { id: 2, text: '프로젝트 만들기', completed: false },
    { id: 3, text: '배포하기', completed: false }
  ])

  // 할 일의 완료 상태를 토글(전환)하는 함수입니다
  // id: 토글할 할 일의 고유 식별자
  const toggleTodo = (id: number): void => {
    // todos 배열의 각 요소를 map으로 순회하면서
    // id가 일치하는 할 일의 completed 속성만 반전시킵니다
    // ...todo는 스프레드 연산자로 기존 객체의 모든 속성을 복사합니다
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // 새로운 할 일을 추가하는 함수입니다
  const addTodo = (): void => {
    // 새로운 할 일 객체를 생성합니다
    const newTodo: Todo = {
      id: Date.now(),        // 현재 시간을 밀리초로 변환하여 고유 ID 생성
      text: '새로운 할 일',   // 할 일 내용
      completed: false       // 완료 상태 (기본값: false)
    }

    // 기존 todos 배열에 새로운 할 일을 추가합니다
    // ...todos는 스프레드 연산자로 기존 배열의 모든 요소를 복사합니다
    setTodos([...todos, newTodo])
  }

  // 컴포넌트가 화면에 렌더링할 내용을 반환합니다
  return (
    // main 요소: 페이지의 주요 콘텐츠 영역
    // styles.main: CSS Modules를 통해 main 클래스의 스타일을 적용
    <main className={styles.main}>
      {/* container: 콘텐츠를 감싸는 컨테이너 */}
      <div className={styles.container}>
        {/* 제목: 환영 메시지 */}
        <h1 className={styles.title}>
          Next.js 애플리케이션에 오신 것을 환영합니다!
        </h1>

        {/* 설명: 페이지에 대한 간단한 설명 */}
        <p className={styles.description}>
          이것은 Next.js 14 boilerplate입니다.
        </p>

        {/* 카운터 섹션: 숫자를 증가/감소/리셋할 수 있는 기능 */}
        <div className={styles.counterSection}>
          {/* 현재 카운터 값을 표시 */}
          <h2>카운터: {count}</h2>

          {/* 버튼 그룹: 카운터 조작 버튼들을 담습니다 */}
          <div className={styles.buttonGroup}>
            {/* 증가 버튼: count 값을 1 증가시킵니다 */}
            <button
              className={styles.button}
              onClick={() => setCount(count + 1)}
            >
              증가
            </button>

            {/* 감소 버튼: count 값을 1 감소시킵니다 */}
            <button
              className={styles.button}
              onClick={() => setCount(count - 1)}
            >
              감소
            </button>

            {/* 리셋 버튼: count 값을 0으로 초기화합니다 */}
            <button
              className={styles.button}
              onClick={() => setCount(0)}
            >
              리셋
            </button>
          </div>
        </div>

        {/* 할 일 목록 섹션: 할 일을 관리할 수 있는 기능 */}
        <div className={styles.todoSection}>
          <h3>할 일 목록</h3>

          {/* 할 일 추가 버튼: 새로운 할 일을 목록에 추가합니다 */}
          <button
            className={styles.addButton}
            onClick={addTodo}
          >
            할 일 추가
          </button>

          {/* 할 일 목록: todos 배열의 각 할 일을 li 요소로 렌더링합니다 */}
          <ul className={styles.todoList}>
            {/* map 함수로 todos 배열의 각 요소를 순회하며 렌더링 */}
            {todos.map((todo: Todo) => (
              <li
                key={todo.id}  // React에서 리스트 렌더링 시 각 요소를 구분하기 위한 고유 키
                // 조건부 클래스명: completed가 true면 completed 클래스를 추가
                // 템플릿 리터럴을 사용하여 여러 클래스를 조합합니다
                className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
                onClick={() => toggleTodo(todo.id)}  // 클릭 시 완료 상태를 토글
              >
                {todo.text}  {/* 할 일의 텍스트 내용을 표시 */}
              </li>
            ))}
          </ul>
        </div>

                       {/* 주요 기능 섹션: 이 프로젝트의 특징들을 나열합니다 */}
               <div className={styles.features}>
                 <h3>주요 기능:</h3>
                 <ul>
                   <li>✅ Next.js 14</li>
                   <li>✅ App Router</li>
                   <li>✅ React 18</li>
                   <li>✅ Hooks 사용</li>
                   <li>✅ CSS Modules</li>
                   <li>✅ 서버 사이드 렌더링</li>
                   <li>✅ TypeScript</li>
                 </ul>
                 
                 {/* About 페이지 링크 추가 */}
                 <div className={styles.aboutLink}>
                   <a href="/about" className={styles.aboutButton}>
                     회사 소개 보기 →
                   </a>
                 </div>
               </div>
      </div>
    </main>
  )
}
