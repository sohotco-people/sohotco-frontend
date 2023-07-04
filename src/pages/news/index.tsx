import News from "@templates/news"
import { useNews } from "hooks/news"
import { useUser } from "hooks/user"
import { useEffect } from "react"

const Page = () => {
    const { news, getNews } = useNews()
    const { me, getMe } = useUser()

    useEffect(() => {
        getNews()
        getMe()
    }, [])

    return (<News news={news} me={me} />)
}

export default Page