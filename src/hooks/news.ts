import { ModalsDispatchContext } from "context/contexts"
import { useContext, useState } from "react"
import { Type_News } from "types/Types"
import { fetchGet } from "util/fetch"

export const useNews = () => {
    const { openModal } = useContext(ModalsDispatchContext)
    const [news, setNews] = useState<Type_News[]>([])
    const [newsOne, setNewsOne] = useState<Type_News>()

    const getNews = () => {
        fetchGet('/news/me').then(res => {
            setNews(res.data)
        }).catch(err => {
            openModal({ id: err.cause, content: err.message })
        })
    }

    const getNewsId = (id: string) => {
        fetchGet('/news/' + id).then(res => {
            setNewsOne(res.data)
        }).catch(err => {
            openModal({ id: err.cause, content: err.message })
        })
    }

    const letter = () => {
        openModal({
            id: 'letter',
            content: newsOne?.message
        })
    }

    return {
        news, getNews, getNewsId, newsOne, letter
    }
}