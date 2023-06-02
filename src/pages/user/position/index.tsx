import Position from "@templates/position"
import { useEffect, useState } from "react"
import { fetchGet } from "util/fetch"

const UserPosition = () => {
    const [me, setMe] = useState([])

    useEffect(() => {
        fetchGet('/user/me', {}).then(res => {
            setMe(res.data.positions)
        })
    }, [])

    return (
        <Position me={me} />
    )
}

export default UserPosition