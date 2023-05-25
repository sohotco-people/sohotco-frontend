import { createContext, Dispatch, SetStateAction } from 'react'
import { Type_NewProject } from 'types/Types'

export const NavContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])

export const ModalsStateContext = createContext<any[]>([])

export const ModalsDispatchContext = createContext({
  openModal: (props: object) => {},
  closeModal: (props: object) => {},
})

export const NewProjectContext = createContext<
  [Type_NewProject, Dispatch<SetStateAction<Type_NewProject>>]
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
  () => {},
])
