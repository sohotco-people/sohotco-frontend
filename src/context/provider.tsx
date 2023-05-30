import { useState } from 'react'
import {
  ModalsDispatchContext,
  ModalsStateContext,
  NavContext,
  NewProjectContext,
  LoginContext,
} from './contexts'
import { Type_Project } from 'types/Types'

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

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  )
}

export const NewProjectProvider = ({ children }: Props) => {
  const projectState = useState<Type_Project>({
    id: '',
    title: '',
    intro: '',
    meetType: '',
    location: [],
    week: [],
    time: [],
    position: [],
    createdAt: '',
    updatedAt: '',
    isPublished: false,
    viewCnt: '',
  })

  return (
    <NewProjectContext.Provider value={projectState}>
      {children}
    </NewProjectContext.Provider>
  )
}
