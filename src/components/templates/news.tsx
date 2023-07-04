import { addDays, differenceInDays, parseISO } from 'date-fns'
import NewsItem from "@organisms/newsItem"
import React from "react"
import { Type_News, Type_User } from "types/Types"

interface Props {
    news: Type_News[]
    me?: Type_User
}

const News: React.FC<Props> = ({ news, me }) => {

    return (
        <>
            {news.some(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) == 0) &&
                <div className="px-5 py-5">
                    <div className="py-5 font-semibold text-lg">오늘</div>
                    {news
                        .filter(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) == 0)
                        .map((newsItem, idx) =>
                            <NewsItem key={idx} newsItem={newsItem} isSend={me?.id == newsItem.requestor_id} />
                        )}
                </div>
            }

            {news.some(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) == -1) &&
                <div className="px-5 py-5">
                    <div className="py-5 font-semibold text-lg">어제</div>
                    {news
                        .filter(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) == -1)
                        .map((newsItem, idx) =>
                            <NewsItem key={idx} newsItem={newsItem} isSend={me?.id == newsItem.requestor_id} />
                        )}
                </div>
            }

            {news.some(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) < -1) &&
                <div className="px-5 py-5">
                    <div className="py-5 font-semibold text-lg">이번달</div>
                    {news
                        .filter(newsItem => differenceInDays(parseISO(newsItem.created_at), new Date()) < -1)
                        .map((newsItem, idx) =>
                            <NewsItem key={idx} newsItem={newsItem} isSend={me?.id == newsItem.requestor_id} />
                        )}
                </div>
            }

        </>

    )
}

export default News