import { FC } from 'react'
import { Todo } from '../types/Todo'
import style from './TodoListItem.module.css'

export const TodoListItem: FC<{
  todo: Todo
  onToggleDone: (id: string) => void
  onRemove: (id: string) => void
}> = ({ todo, onToggleDone, onRemove }) => {
  const todoClassName = [style.container]
  if (todo.done) todoClassName.push(style.done)

  return (
    <div className={todoClassName.join(' ')}>
      <button className={style.btn} onClick={e => onToggleDone(todo.id)}>
        {todo.done ? (
          <img src='/images/checked.svg' />
        ) : (
          <img src='/images/uncheck.svg' />
        )}
      </button>
      <p>{todo.value}</p>
      <button className={style.btn} onClick={e => onRemove(todo.id)}>
        <img src='/images/trash.svg' />
      </button>
    </div>
  )
}
