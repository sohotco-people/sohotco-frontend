import { createContext, Dispatch, SetStateAction } from 'react'
import { Type_Project } from 'types/Types'

export const NavContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => { }])

export const ModalsStateContext = createContext<any[]>([])

export const ModalsDispatchContext = createContext({
  openModal: (props: object) => { },
  closeModal: (props: object) => { },
})

export const LoginContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => { }])

export const SignInContext = createContext({
  signInPage: false,
  toggleSignIn: (flag: boolean) => { }
})

export const NewProjectContext = createContext<
  [Type_Project, Dispatch<SetStateAction<Type_Project>>]
>([
  {
    title: '',
    intro: '',
    meetType: '',
    location: [],
    week: [],
    time: [],
    position: [],
  },
  () => { },
])
