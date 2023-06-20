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
  const [location, setLocation] = useState([])
  const [experience, setExperience] = useState([])
  const [meetingSystem, setMeetingSystem] = useState([])
  const [week, setWeek] = useState([])
  const [meetingTime, setMeetingTime] = useState([])

  const getMe = () => {
    fetchGet('/user/me', {}).then(res => {
      setMe(res.data)
    }).catch(err => {
      openModal({ id: err.cause, content: err.message })
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

  const getMeetingSystem = () => {
    fetchGet('/option/meeting-systems', {}).then(res => {
      setMeetingSystem(res.data)
    })
  }

  const getLocation = () => {
    fetchGet('/option/locations', {}).then(res => {
      setLocation(res.data)
    })
  }

  const getWeek = () => {
    fetchGet('/option/weeks', {}).then(res => {
      setWeek(res.data)
    })
  }

  const getMeetingTime = () => {
    fetchGet('/option/meeting-times', {}).then(res => {
      setMeetingTime(res.data)
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

  return {
    update,
    me, getMe,
    selected, setSelected,
    position, getPosition,
    location, getLocation,
    experience, getExperience,
    meetingSystem, getMeetingSystem,
    week, getWeek,
    meetingTime, getMeetingTime
  }
}
