import TeamMateList from "@templates/teamMateList"
import { useUser } from "hooks/user"
import { useEffect } from "react"

const Page = () => {
    const { user, getUser } = useUser()

    useEffect(() => {
        getUser({})
    }, [])

    return (
        <TeamMateList list={user} getUser={getUser} />
    )
}

export default Page