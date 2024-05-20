import { iconSend } from '@/assets'

import s from './message-field.module.scss'

export const MessageField = () => {
  const classNames = {
    buttonSend: s.buttonSend,
    container: s.container,
    textField: s.textField,
  }

  return (
    <div className={classNames.container}>
      <textarea className={classNames.textField} />
      <button className={classNames.buttonSend}>
        <img alt={'send message'} src={iconSend} style={{ width: '100%' }} />
      </button>
    </div>
  )
}
