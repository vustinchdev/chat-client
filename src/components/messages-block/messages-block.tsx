import { Message } from '@/components'

import s from './messages-block.module.scss'

type MessageResponse = {
  id: string
  text: string
}

type UserResponse = {
  id: string
  name: string
}

type Props = {
  messages: MessageResponse[]
  user: UserResponse
}

export const MessagesBlock = ({ messages, user }: Props) => {
  const classNames = {
    container: s.container,
    name: s.name,
  }

  return (
    <div className={classNames.container}>
      {messages.map(message => {
        return (
          <div key={message.id}>
            <span className={classNames.name}>{user.name}</span>
            <Message>{message.text}</Message>
          </div>
        )
      })}
    </div>
  )
}
