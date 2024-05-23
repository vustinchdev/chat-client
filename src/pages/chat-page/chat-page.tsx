import { useEffect, useState } from 'react'

import { socket } from '@/common'
import { MessageField, MessagesBlock } from '@/components'

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
    container: s.container,
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

  return (
    <div className={classNames.container}>
      <MessagesBlock messages={messages} />
      <MessageField
        onChange={e => setMessage(e.currentTarget.value)}
        sendMessage={handleSendMessage}
        value={message}
      />
    </div>
  )
}
