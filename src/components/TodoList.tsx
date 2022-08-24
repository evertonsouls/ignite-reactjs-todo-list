import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './Header'
import { TodoCreateForm } from './TodoCreateForm'
import { TodoListHeader } from './TodoListHeader'
import { TodoListItems } from './TodoListItems'
import type { Todo } from '../types/Todo'

import style from './TodoList.module.css'

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = (value: string) => {
    setTodos([
      {
        id: uuidv4(),
        value,
        done: false
      },
      ...todos
    ])
  }

  const removeTodo = (id: string) => {
    setTodos(old => old.filter(item => item.id !== id))
  }

  const toggleDone = (id: string) => {
    setTodos(old =>
      old.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        }

        return item
      })
    )
  }

  const totalDone = todos.filter(item => item.done).length

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <TodoCreateForm onCreate={createTodo} />
        <TodoListHeader total={todos.length} closed={totalDone} />

        <TodoListItems
          todos={todos}
          onToggleDone={toggleDone}
          onRemove={removeTodo}
        />
      </div>
    </>
  )
}
