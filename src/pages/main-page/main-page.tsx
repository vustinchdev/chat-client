import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { socket } from '@/common'

import s from './main-page.module.scss'

export const MainPage = () => {
  const [data, setData] = useState({ room: '', userName: '' })
  const { room, userName } = data
  const navigate = useNavigate()
  const classNames = {
    buttonSubmit: s.buttonSubmit,
    container: s.container,
    textField: s.textField,
    title: s.title,
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    socket.emit('join', { room, userName })
    setData({ room: '', userName: '' })

    socket.on('userConnected', ({ userId }) => {
      localStorage.setItem('userId', userId)
    })

    navigate(`/chat`)
  }

  return (
    <div className={classNames.container}>
      <p className={classNames.title}>Join</p>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete={'off'}
          className={classNames.textField}
          name={'room'}
          onChange={e => setData({ ...data, room: e.currentTarget.value })}
          placeholder={'Room'}
          required
          type={'text'}
          value={data.room}
        />
        <input
          autoComplete={'off'}
          className={classNames.textField}
          name={'username'}
          onChange={e => setData({ ...data, userName: e.currentTarget.value })}
          placeholder={'Name'}
          required
          type={'text'}
          value={data.userName}
        />
        <button className={classNames.buttonSubmit} type={'submit'}>
          Sign In
        </button>
      </form>
    </div>
  )
}
