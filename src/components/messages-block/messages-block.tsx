import { UIEvent, useEffect, useRef, useState } from 'react'

import { Message } from '@/components'
import { MessageResponse } from '@/pages'

import s from './messages-block.module.scss'

type Props = {
  messages: MessageResponse[]
}

export const MessagesBlock = ({ messages }: Props) => {
  const classNames = {
    container: s.container,
    myMessage: s.myMessage,
    name: s.name,
  }

  const [autoScrollIsActive, setAutoScrollIsActive] = useState(true)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { clientHeight, scrollHeight, scrollTop } = e.currentTarget

    if (scrollTop + clientHeight < scrollHeight - 10) {
      setAutoScrollIsActive(false)
    } else {
      setAutoScrollIsActive(true)
    }
  }

  const messagesAnchorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (autoScrollIsActive) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, autoScrollIsActive])

  const userId = localStorage.getItem('userId')

  return (
    <div className={classNames.container} onScroll={handleScroll}>
      {messages.map(message => {
        return (
          <div className={userId === message.userId ? classNames.myMessage : ''} key={message.id}>
            <span className={classNames.name}>{message.userName}</span>
            <Message userId={message.userId}>{message.text}</Message>
          </div>
        )
      })}
      <div ref={messagesAnchorRef} />
    </div>
  )
}
