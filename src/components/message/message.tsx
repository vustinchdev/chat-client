import { ComponentPropsWithoutRef } from 'react'

import s from './message.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Message = ({ ...rest }: Props) => {
  const classNames = {
    message: s.message,
  }

  return <div className={classNames.message} {...rest} />
}
