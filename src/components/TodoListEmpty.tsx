import style from './TodoListEmpty.module.css'

export const TodoListEmpty = () => {
  return (
    <div className={style.container}>
      <img src='/images/empty.svg' alt='Empty tasks' />
      <p>
        <strong>You don't have tasks registered yet</strong>
        <br />
        Create tasks and organize your to-do items
      </p>
    </div>
  )
}
