import { useState } from 'react'

import { MessageField, MessagesBlock } from '@/components'

import s from './chat-page.module.scss'

export const ChatPage = () => {
  const [value, setValue] = useState('')
  const classNames = {
    container: s.container,
  }

  const handleSendMessage = () => {}

  return (
    <div className={classNames.container}>
      <MessagesBlock messages={[]} user={{ id: '', name: '' }} />
      <MessageField
        onChange={e => setValue(e.currentTarget.value)}
        sendMessage={handleSendMessage}
        value={value}
      />
    </div>
  )
}
