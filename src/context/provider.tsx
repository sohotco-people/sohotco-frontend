import { useState } from 'react'
import { NavContext } from './contexts'

interface Props {
  children: React.ReactNode
}

export const NavProvider = ({ children }: Props) => {
  const navState = useState(false)

  return <NavContext.Provider value={navState}>{children}</NavContext.Provider>
}
