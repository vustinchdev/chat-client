import { useEffect, useState } from 'react'

import { logout } from '@/assets'
import { socket } from '@/common'
import { MessageField, MessagesBlock, Page } from '@/components'

import s from './chat-page.module.scss'

export type MessageResponse = {
  id: string
  roomName: string
  text: string
  userId: string
  userName: null | string
}

export const ChatPage = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<MessageResponse[]>([])

  const classNames = {
    buttonLogout: s.buttonLogout,
    container: s.container,
    header: s.header,
    imageLogout: s.imageLogout,
  }

  useEffect(() => {
    socket.on('showRoomMessages', messages => {
      setMessages(messages)
    })
  }, [messages])

  const handleSendMessage = () => {
    socket.emit('sendMessage', message)
    setMessage('')
  }

  const handleLogout = () => {}

  const roomName = localStorage.getItem('roomName')

  return (
    <Page>
      <div className={classNames.container}>
        <div className={classNames.header}>
          <p>room: {roomName}</p>
          <button className={classNames.buttonLogout} onClick={handleLogout}>
            <img alt={'left room'} className={classNames.imageLogout} src={logout} />
          </button>
        </div>
        <MessagesBlock messages={messages} />
        <MessageField
          onChange={e => setMessage(e.currentTarget.value)}
          sendMessage={handleSendMessage}
          value={message}
        />
      </div>
    </Page>
  )
}
