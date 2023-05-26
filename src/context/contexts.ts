import { createContext, Dispatch, SetStateAction } from 'react'

export const NavContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])

export const ModalsStateContext = createContext<any[]>([])

export const ModalsDispatchContext = createContext({
  openModal: (props: object) => {},
  closeModal: (props: object) => {},
})

export const LoginContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])
