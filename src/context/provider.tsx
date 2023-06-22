import { useState } from 'react'
import {
  ModalsDispatchContext,
  ModalsStateContext,
  NavContext,
  NewProjectContext,
  LoginContext,
  SignInContext,
  ProjectActiveStateContext,
} from './contexts'
import { Type_Project_Context } from 'types/Types'

interface Props {
  children: React.ReactNode
}

export const NavProvider = ({ children }: Props) => {
  const navState = useState(false)

  return <NavContext.Provider value={navState}>{children}</NavContext.Provider>
}

export const ModalsProvider = ({ children }: Props) => {
  const [openedModals, setOpenedModals] = useState<any[]>([])

  const openModal = (props: any) => {
    setOpenedModals(modals => {
      return [...modals, props]
    })
  }

  const closeModal = (props: any) => {
    const id = props.id

    setOpenedModals(modals => {
      return modals.filter(modal => modal.id !== id)
    })
  }

  const dispatch = { openModal, closeModal }
  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={openedModals}>
        {children}
      </ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  )
}

export const LoginProvider = ({ children }: Props) => {
  const loginState = useState(false)
  const [signInPage, setSignInPage] = useState(false)

  const toggleSignIn = (flag: boolean) => {
    setSignInPage(!flag)
  }

  return (
    <LoginContext.Provider value={loginState}>
      <SignInContext.Provider value={{ signInPage, toggleSignIn }}>
        {children}
      </SignInContext.Provider>
    </LoginContext.Provider>
  )
}

export const NewProjectProvider = ({ children }: Props) => {
  const projectState = useState<Type_Project_Context>({
    title: '',
    intro: '',
    desc: '',
    meetType: '',
    locations: [],
    meeting_systems: [],
    week: [],
    time: [],
    position: [],
    createdAt: '',
    updatedAt: '',
    isPublished: false,
    viewCnt: ''
  })

  return (
    <NewProjectContext.Provider value={projectState}>
      {children}
    </NewProjectContext.Provider>
  )
}

export const ProjectActiveProvider = ({ children }: Props) => {
  const [arr, setArr] = useState<string[]>([])

  const setActive = (idx: string) => {
    setArr(prev => [...prev, idx])
  }

  const value = { arr, setActive }
  return (
    <ProjectActiveStateContext.Provider value={value}>
      {children}
    </ProjectActiveStateContext.Provider>
  )
}
