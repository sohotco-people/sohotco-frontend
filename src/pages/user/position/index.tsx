import Position from "@templates/position"
import { useUser } from "context/hooks"
import { useEffect } from "react"

const UserPosition = () => {
    const { me, getMe } = useUser()

    useEffect(() => {
        getMe()
    }, [])

    return (
        <Position user={me} />
    )
}

export default UserPosition