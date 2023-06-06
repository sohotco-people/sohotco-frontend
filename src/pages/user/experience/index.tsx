import Experience from "@templates/experience"
import { useUser } from "context/hooks"
import { useEffect } from "react"

const UserExperience = () => {

    const { me, getMe } = useUser()

    useEffect(() => {
        getMe()
    }, [])

    return (
        <Experience user={me} />
    )
}

export default UserExperience