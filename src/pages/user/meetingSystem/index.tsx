import MeetingSystem from "@templates/meetingSystem"
import { useUser } from "context/hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"

const UserMeetingSystem = () => {
  const router = useRouter()
  const { me, getMe } = useUser()

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
    <MeetingSystem user={me} />
  )
}

export default UserMeetingSystem
