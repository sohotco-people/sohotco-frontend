import MeetingTime from "@templates/meetingTime"
import { useUser } from "context/hooks"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const UserMeetingTime = () => {
  const { me, getMe } = useUser()
  const router = useRouter()

  useEffect(() => {
    getMe()
    router.beforePopState(({ url, as, options }) => {
      if (as !== router.asPath) {
        router.replace(as)
      }
      return true
    })
  }, [router])

  return (
    <MeetingTime user={me} />
  )
}

export default UserMeetingTime
