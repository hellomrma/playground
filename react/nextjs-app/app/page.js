'use client'

import { useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Next.js 학습하기', completed: false },
    { id: 2, text: '프로젝트 만들기', completed: false },
    { id: 3, text: '배포하기', completed: false }
  ])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: '새로운 할 일',
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Next.js 애플리케이션에 오신 것을 환영합니다!
        </h1>
        
        <p className={styles.description}>
          이것은 Next.js 14 boilerplate입니다.
        </p>

        <div className={styles.counterSection}>
          <h2>카운터: {count}</h2>
          <div className={styles.buttonGroup}>
            <button 
              className={styles.button}
              onClick={() => setCount(count + 1)}
            >
              증가
            </button>
            <button 
              className={styles.button}
              onClick={() => setCount(count - 1)}
            >
              감소
            </button>
            <button 
              className={styles.button}
              onClick={() => setCount(0)}
            >
              리셋
            </button>
          </div>
        </div>

        <div className={styles.todoSection}>
          <h3>할 일 목록</h3>
          <button 
            className={styles.addButton}
            onClick={addTodo}
          >
            할 일 추가
          </button>
          <ul className={styles.todoList}>
            {todos.map(todo => (
              <li 
                key={todo.id} 
                className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.features}>
          <h3>주요 기능:</h3>
          <ul>
            <li>✅ Next.js 14</li>
            <li>✅ App Router</li>
            <li>✅ React 18</li>
            <li>✅ Hooks 사용</li>
            <li>✅ CSS Modules</li>
            <li>✅ 서버 사이드 렌더링</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
