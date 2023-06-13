import MeetingTime from '@templates/meetingTime'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserMeetingTime = () => {
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

  return <MeetingTime />
}

export default UserMeetingTime
