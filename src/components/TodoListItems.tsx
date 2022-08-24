import { FC } from 'react'
import { Todo } from '../types/Todo'
import { TodoListEmpty } from './TodoListEmpty'
import { TodoListItem } from './TodoListItem'

import style from './TodoListItems.module.css'

export const TodoListItems: FC<{
  todos: Todo[]
  onToggleDone: (id: string) => void
  onRemove: (id: string) => void
}> = ({ todos, onToggleDone, onRemove }) => {
  if (todos.length === 0) return <TodoListEmpty />

  return (
    <div className={style.container}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
