import { createContext, Dispatch, SetStateAction } from 'react'

export const NavContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])
