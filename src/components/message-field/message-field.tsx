import { ComponentPropsWithoutRef } from 'react'

import { iconSend } from '@/assets'

import s from './message-field.module.scss'

type Props = {
  onClick: () => void
} & ComponentPropsWithoutRef<'textarea'>

export const MessageField = ({ onClick, value, ...rest }: Props) => {
  const classNames = {
    buttonSend: s.buttonSend,
    container: s.container,
    textField: s.textField,
  }

  const handleClick = () => {
    onClick()
  }

  return (
    <div className={classNames.container}>
      <textarea className={classNames.textField} value={value} {...rest} />
      {value && (
        <button className={classNames.buttonSend} onClick={handleClick}>
          <img alt={'send message'} src={iconSend} style={{ width: '100%' }} />
        </button>
      )}
    </div>
  )
}
