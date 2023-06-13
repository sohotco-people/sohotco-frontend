import MeetingSystem from '@templates/meetingSystem'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserMeetingSystem = () => {
  const router = useRouter()

  // 해당 페이지 history stack에서 제거
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (as !== router.asPath) {
        router.replace(as)
      }
      return true
    })
  }, [router])

  return <MeetingSystem />
}

export default UserMeetingSystem
