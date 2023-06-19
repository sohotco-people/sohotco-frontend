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
import React, { ChangeEvent } from "react"

interface Props {
    type: number
    onchange: (e: ChangeEvent) => void
    save: () => void
    optionChecked: {
        positions: number[],
        meeting_systems: number[],
        locations: number[],
        weeks: number[],
        meeting_times: number[]
    }
}

const Options: React.FC<Props> = ({ type = 0, onchange, save, optionChecked }) => {

    const { position, getPosition, experience, getExperience, meetingSystem, getMeetingSystem, location, getLocation, week, getWeek, meetingTime, getMeetingTime } = useUser()

    if (type == 1) {
        if (position.length == 0) {
            getPosition()
        }
        return (
            <div className="fixed top-20 bg-white w-full h-full z-20">
                <Layout>
                    <h1 className="font-bold mb-10">역할을 선택해 주세요.</h1>
                    <PositionChecks position={position} optionChecked={optionChecked.positions} onChange={onchange} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={save}>저장</SquareBtn>
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
            <div className="fixed top-20 bg-white w-full h-full z-20">
                <Layout>
                    <h1 className="font-bold mb-10">경력을 선택해 주세요.</h1>
                    <ExperienceRadios experience={experience} onChange={onchange} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={save}>저장</SquareBtn>
                    </div>
                </ Layout>
            </div>
        )
    }
    if (type == 3) {
        if (meetingSystem.length == 0) {
            getMeetingSystem()
        }
        if (location.length == 0) {
            getLocation()
        }
        return (
            <div className="fixed top-20 bg-white w-full h-full z-20">
                <Layout>
                    <h1 className="font-bold mb-10">원하는 회의방식을 선택해 주세요.</h1>
                    <MeetingSystemRadios meetingSystem={meetingSystem} optionChecked={optionChecked.meeting_systems} onChange={onchange} />
                    <h1 className="font-bold mb-10">오프라인 위치를 선택해 주세요.</h1>
                    <LocationChecks location={location} optionChecked={optionChecked.locations} onChange={onchange} />

                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={save}>저장</SquareBtn>
                    </div>
                </Layout>
            </div>

        )
    }
    if (type == 4) {
        if (week.length == 0) {
            getWeek()
        }
        if (meetingTime.length == 0) {
            getMeetingTime()
        }
        return (
            <div className="fixed top-20 bg-white w-full h-full z-20">
                <Layout>
                    <h1 className="font-bold mb-10">
                        원하는 회의 요일과 시간을 선택해 주세요.
                    </h1>
                    <WeekChecks week={week} optionChecked={optionChecked.weeks} onChange={onchange} />
                    <Divider />
                    <TimeRadios meetingTime={meetingTime} optionChecked={optionChecked.meeting_times} onChange={onchange} />
                    <div className="fixed inset-x-0 bottom-0">
                        <SquareBtn width="w-full" type="point" onClick={save}>저장</SquareBtn>
                    </div>
                </Layout>
            </div>
        )
    }

    return (<div></div>)
}

export default Options