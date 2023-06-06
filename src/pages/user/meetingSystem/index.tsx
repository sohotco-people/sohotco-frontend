import MeetingSystem from "@templates/meetingSystem"
import { useUser } from "context/hooks"
import { useEffect } from "react"

const UserMeetingSystem = () => {
    const { me, getMe } = useUser()

    useEffect(() => {
        getMe()
    }, [])
    return (
        <MeetingSystem user={me} />
    )
}

export default UserMeetingSystem