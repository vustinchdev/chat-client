import { Message } from '@/components'
import { MessageResponse } from '@/pages'

import s from './messages-block.module.scss'

type Props = {
  messages: MessageResponse[]
}

export const MessagesBlock = ({ messages }: Props) => {
  const classNames = {
    container: s.container,
    name: s.name,
  }

  return (
    <div className={classNames.container}>
      {messages.map(message => {
        return (
          <div key={message.id}>
            <span className={classNames.name}>{message.userName}</span>
            <Message>{message.text}</Message>
          </div>
        )
      })}
    </div>
  )
}
