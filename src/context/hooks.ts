import { useContext } from 'react'
import { NavContext, NewProjectContext } from './contexts'

export const useNavOpenState = () => {
  const value = useContext(NavContext)
  if (value === undefined) {
    throw new Error('useNavOpenStae should be used within NavProvider')
  }

  return value
}

export const useNewProjectState = () => {
  const value = useContext(NewProjectContext)
  if (value === undefined) {
    throw new Error(
      'useNewProjectState should be used within NewProjectProvider',
    )
  }

  return value
}
