import { createContext, Dispatch, SetStateAction } from 'react'
import { Type_Project_Context } from 'types/Types'

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
  toggleSignIn: (flag: boolean) => { },
})

export const NewProjectContext = createContext<
  [Type_Project_Context, Dispatch<SetStateAction<Type_Project_Context>>]
>([
  {
    title: '',
    intro: '',
    desc: '',
    meetType: '',
    locations: [],
    week: [],
    time: [],
    position: [],
    meeting_systems: [],
    createdAt: '',
    updatedAt: '',
    isPublished: false,
    viewCnt: ''
  },
  () => { },
])

export const ProjectActiveStateContext = createContext<{
  arr: string[]
  setActive: Function
}>({
  arr: [],
  setActive: (idx: string) => { },
})
