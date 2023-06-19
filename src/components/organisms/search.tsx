import Divider from "@atoms/Divider"
import Layout from "@atoms/layout"
import SquareBtn from "@atoms/squareBtn"
import ExperienceRadios from "@molecules/experienceRadios"
import LocationChecks from "@molecules/locationChecks"
import MeetingSystemRadios from "@molecules/meetingSystemRadios"
import PositionChecks from "@molecules/positionChecks"
import TimeRadios from "@molecules/timeRadios"
import WeekChecks from "@molecules/weekChecks"
import { useUser } from "context/hooks"
import Image from "next/image"
import { useState } from "react"

const Search = () => {
    const [type, setType] = useState(0)
    const { position, getPosition, experience, getExperience } = useUser()

    const handleClick = (idx: number) => {

        setType(idx)
    }

    if (type == 1) {
        if (position.length == 0) {
            getPosition()
        }
        return (
            <div className="fixed top-20 bg-white w-full h-full z-10">
                <Layout>
                    <h1 className="font-bold mb-10">역할을 선택해 주세요.</h1>
                    <PositionChecks position={position} onChange={(e) => { console.log(e.target) }} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={() => { setType(0) }}>저장</SquareBtn>
                    </div>
                </Layout>
            </div>
        )
    }
    if (type == 2) {
        if (experience.length == 0) {
            getExperience()
        }
        return (
            <div className="fixed top-20 bg-white w-full h-full z-10">
                <Layout>
                    <h1 className="font-bold mb-10">경력을 선택해 주세요.</h1>
                    <ExperienceRadios experience={experience} onChange={() => { }} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={() => { setType(0) }}>저장</SquareBtn>
                    </div>
                </ Layout>
            </div>
        )
    }
    if (type == 3) {
        return (
            <div className="fixed top-20 bg-white w-full h-full z-10">
                <Layout>
                    <h1 className="font-bold mb-10">원하는 회의방식을 선택해 주세요.</h1>
                    <MeetingSystemRadios onChange={() => { }} />
                    <h1 className="font-bold mb-10">오프라인 위치를 선택해 주세요.</h1>
                    <LocationChecks onChange={() => { }} />

                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={() => { setType(0) }}>저장</SquareBtn>
                    </div>
                </Layout>
            </div>

        )
    }
    if (type == 4) {
        return (
            <div className="fixed top-20 bg-white w-full h-full z-10">
                <Layout>
                    <h1 className="font-bold mb-10">
                        원하는 회의 요일과 시간을 선택해 주세요.
                    </h1>
                    <WeekChecks onChange={() => { }} />
                    <Divider />
                    <TimeRadios onChange={() => { }} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={() => { setType(0) }}>저장</SquareBtn>
                    </div>
                </Layout>
            </div>
        )
    }

    return (
        <div className="px-4 py-4 border-b border-b-gray3-500">
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-[16px] leading-[19px] font-medium" onClick={() => { handleClick(1) }}>
                    역할
                    <Image src="/images/bottomArrow.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                </div>
                <div className="text-[16px] leading-[19px] font-medium" onClick={() => { handleClick(2) }}>
                    경력
                    <Image src="/images/bottomArrow.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                </div>
                <div className="text-[16px] leading-[19px] font-medium" onClick={() => { handleClick(3) }}>
                    방식
                    <Image src="/images/bottomArrow.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                </div>
                <div className="text-[16px] leading-[19px] font-medium" onClick={() => { handleClick(4) }}>
                    일정
                    <Image src="/images/bottomArrow.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                </div>
            </div>
            <div className="text-[16px] leading-[19px] font-medium text-gray1 grid grid-cols-1 gap-y-2.5">
                <div>백엔드 ⋅ 기획자</div>
                <div>4~6년 이상</div>
                <div>온라인 ⋅ 강남 ⋅ 서초</div>
                <div>화요일 ⋅ 목요일 ⋅ 6시~12시</div>
            </div>
        </div>
    )
}

export default Search