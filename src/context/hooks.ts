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

export const useUser = () => {
  const { openModal } = useContext(ModalsDispatchContext)

  const [me, setMe] = useState<Type_User>()

  const [selected, setSelected] = useState<any[]>([])
  const [position, setPosition] = useState([])
  const [experience, setExperience] = useState([])

  const getMe = () => {
    fetchGet('/user/me', {}).then(res => {
      setMe(res.data)
    })
  }

  const getExperience = () => {
    fetchGet('/option/experiences', {}).then(res => {
      setExperience(res.data)
    })
  }

  const getPosition = () => {
    fetchGet('/option/positions', {}).then(res => {
      setPosition(res.data)
    })
  }

  const update = (obj: any) => {
    fetchPut('/user/me', obj).then(res => {
      if (res.status == 200) {

        openModal({
          id: 'm-alert',
          content: '저장되었습니다.'
        })
      }
    })
  }

  return { update, selected, setSelected, me, getMe, experience, getExperience, position, getPosition }
}
