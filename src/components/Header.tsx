import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.container}>
      <img src='/images/logo.svg' alt='Logo Rocket Todo' />
    </div>
  )
}
