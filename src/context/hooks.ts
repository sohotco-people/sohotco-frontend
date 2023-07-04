import { useContext, useState } from 'react'
import { LoginContext, ModalsDispatchContext, NavContext, NewProjectContext, SignInContext } from './contexts'
import { fetchGet, fetchPut } from 'util/fetch'
import { Type_User } from 'types/Types'


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

export const useNewProjectState = () => {
  const value = useContext(NewProjectContext)
  if (value === undefined) {
    throw new Error(
      'useNewProjectState should be used within NewProjectProvider',
    )
  }

  return value
}

export const useSignInState = () => {
  const value = useContext(SignInContext)

  if (value === undefined) {
    throw new Error('useSignInState should be used within LoginProvider')
  }

  return value
}
