import { FC, FormEvent, useState } from 'react'
import style from './TodoCreateForm.module.css'

export const TodoCreateForm: FC<{ onCreate: (value: string) => void }> = ({
  onCreate
}) => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    const valueTrim = value.trim()
    if (valueTrim) {
      onCreate(valueTrim)
      setValue('')
    }
  }

  return (
    <form className={style.wrapper} onSubmit={handleSubmit}>
      <input
        placeholder='Add new task'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type='submit'>
        Create
        <img src='/images/plus.svg' />
      </button>
    </form>
  )
}
