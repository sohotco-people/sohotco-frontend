import { useContext } from 'react'
import { LoginContext, NavContext } from './contexts'

export const useNavOpenState = () => {
  const value = useContext(NavContext)
  if (value === undefined) {
    throw new Error('useNavOpenStae should be used within NavProvider')
  }

  return value
}

export const useIsLoginState = () => {
  const value = useContext(LoginContext)

  if (value === undefined) {
    throw new Error('useIsLoginState should be used within LoginProvider')
  }

  return value
}
