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

  const userId = localStorage.getItem('userId')

  return (
    <div className={classNames.container}>
      {messages.map(message => {
        return (
          <div className={userId === message.userId ? classNames.myMessage : ''} key={message.id}>
            <span className={classNames.name}>{message.userName}</span>
            <Message userId={message.userId}>{message.text}</Message>
          </div>
        )
      })}
    </div>
  )
}
