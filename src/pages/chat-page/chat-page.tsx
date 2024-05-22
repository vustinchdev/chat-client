import { useEffect, useState } from 'react'

import { socket } from '@/common'
import { MessageField, MessagesBlock } from '@/components'

import s from './chat-page.module.scss'

export const ChatPage = () => {
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<any>([])
  const classNames = {
    container: s.container,
  }

  useEffect(() => {
    socket.on('joinedChat', messages => {
      setMessages(messages)
    })
  }, [messages])

  const handleSendMessage = () => {}

  return (
    <div className={classNames.container}>
      <MessagesBlock messages={messages} user={{ id: '', name: '' }} />
      <MessageField
        onChange={e => setValue(e.currentTarget.value)}
        sendMessage={handleSendMessage}
        value={value}
      />
    </div>
  )
}
