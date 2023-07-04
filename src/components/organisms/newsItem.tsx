import { formatDistance, parseISO } from "date-fns"
import React from "react"
import { Type_News } from "types/Types"
import { ko } from 'date-fns/locale'
import { useRouter } from "next/router"

interface Props {
    newsItem: Type_News
    isSend: boolean
}

const NewsItem: React.FC<Props> = ({ newsItem, isSend }) => {
    const router = useRouter()
    const { id, requestor_name, respondent_name, created_at } = newsItem
    let txt = `${requestor_name}님에게 제안이 왔어요.`
    if (isSend) {
        txt = `${respondent_name}님에게 제안을 보냈어요.`
    }

    const formatDate = formatDistance(parseISO(created_at), new Date(), {
        addSuffix: true,
        locale: ko
    })

    const handleClick = () => {
        if (isSend) {

        } else {
            router.push('/news/' + id)
        }
    }

    return (
        <div className=" grid grid-cols-[3fr_1fr] gap-2.5 py-5 font-medium text-base" onClick={handleClick}>
            <div>{txt}</div>
            <div className="font-medium text-sm text-gray1">{formatDate}</div>
        </div>
    )
}

export default NewsItem