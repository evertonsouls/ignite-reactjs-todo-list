import { FC } from 'react'
import style from './TodoListHeader.module.css'

export const TodoListHeader: FC<{
  total: number
  closed: number
}> = ({ total, closed }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.createdTasks}>
        Created tasks <span className={style.counter}>{total}</span>
      </div>

      <div className={style.closedTasks}>
        Closed{' '}
        <span className={style.counter}>
          {total ? `${closed} de ${total}` : '0'}
        </span>
      </div>
    </div>
  )
}
