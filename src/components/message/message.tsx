import { ComponentPropsWithoutRef } from 'react'

import s from './message.module.scss'

type Props = {
  userId: string
} & ComponentPropsWithoutRef<'div'>

export const Message = ({ userId, ...rest }: Props) => {
  const classNames = {
    message: s.message,
    myMessage: s.myMessage,
  }

  const localUserId = localStorage.getItem('userId')

  return (
    <div className={userId === localUserId ? classNames.myMessage : classNames.message} {...rest} />
  )
}
