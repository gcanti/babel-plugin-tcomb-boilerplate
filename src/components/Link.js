// @flow
import React from 'react'

type Props = {
  active: boolean,
  children: any,
  onClick: Function
};

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

export default Link
