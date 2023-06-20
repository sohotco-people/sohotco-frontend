import RoundBtn from "@atoms/roundBtn"
import React from "react"
import { useRouter } from 'next/router'

interface Props {
    type: string
}

const Error: React.FC<Props> = ({ type }) => {
    const router = useRouter()

    const home = () => {
        router.replace('/')
    }

    const refresh = () => {
        router.reload()
    }

    let txt1 = 'Page Not Found'
    let txt2 = '서비스 이용에 불편을 드려 죄송합니다.'
    let btn = <RoundBtn type={"point"} onClick={home}>홈으로</RoundBtn>

    if (type == '500') {
        txt1 = 'Server Error'
        btn =
            <>
                <RoundBtn type={"white"} onClick={home}>홈으로</RoundBtn>
                <RoundBtn type={"point"} onClick={refresh}>새로고침</RoundBtn>
            </>
    }

    return (
        <div className="fixed top-0 left-0 bg-white w-full h-full px-5 py-10 z-20">
            <div className="flex flex-col items-center justify-center h-full">

                <div className="flex-1">
                    <div className="flex flex-col items-center justify-center gap-2.5 h-full">
                        <div className="text-[22px] leading-[27px] text-gray1 font-semibold">{txt1}</div>
                        <div className="text-[16px] leading-[19px] font-semibold">{txt2}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5 w-full">{btn}</div>
            </div>
        </div >
    )
}

export default Error