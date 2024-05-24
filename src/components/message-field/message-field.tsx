import { ComponentPropsWithoutRef } from 'react'

import { iconSend } from '@/assets'

import s from './message-field.module.scss'

type Props = {
  sendMessage: () => void
} & ComponentPropsWithoutRef<'textarea'>

export const MessageField = ({ sendMessage, value, ...rest }: Props) => {
  const classNames = {
    buttonSend: s.buttonSend,
    container: s.container,
    imageSendMessage: s.imageSendMessage,
    textField: s.textField,
  }

  const handleClick = () => {
    sendMessage()
  }

  return (
    <div className={classNames.container}>
      <textarea className={classNames.textField} value={value} {...rest} />
      {value && (
        <button className={classNames.buttonSend} onClick={handleClick}>
          <img alt={'send message'} className={classNames.imageSendMessage} src={iconSend} />
        </button>
      )}
    </div>
  )
}
