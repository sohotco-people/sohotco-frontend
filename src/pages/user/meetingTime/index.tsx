import MeetingTime from "@templates/meetingTime"
import { useUser } from "context/hooks"
import { useEffect } from "react"

const UserMeetingTime = () => {
    const { me, getMe } = useUser()

    useEffect(() => {
        getMe()
    }, [])

    return (
        <MeetingTime user={me} />
    )
}

export default UserMeetingTime