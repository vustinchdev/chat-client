import { ComponentPropsWithoutRef } from 'react'

import s from './page.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Page = ({ ...rest }: Props) => {
  const classNames = {
    root: s.root,
  }

  return <div className={classNames.root} {...rest} />
}
