import s from './main-page.module.scss'

export const MainPage = () => {
  const classNames = {
    buttonSubmit: s.buttonSubmit,
    container: s.container,
    textField: s.textField,
    title: s.title,
  }

  return (
    <div className={classNames.container}>
      <p className={classNames.title}>Join</p>
      <input
        autoComplete={'off'}
        className={classNames.textField}
        name={'room'}
        placeholder={'Room'}
        required
        type={'text'}
      />
      <input
        autoComplete={'off'}
        className={classNames.textField}
        name={'userName'}
        placeholder={'Name'}
        required
        type={'text'}
      />
      <button className={classNames.buttonSubmit} type={'submit'}>
        Sign In
      </button>
    </div>
  )
}
