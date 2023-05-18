import Layout from "@atoms/layout"
import ButtonGroupPercent from "@molecules/buttonGroupPercent"
import TimeRadios from "@molecules/timeRadios"
import WeekChecks from "@molecules/weekChecks"
import { ModalsDispatchContext } from "context/contexts"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"

const MeetingTime = () => {
    const [week, setWeek] = useState<string[]>([])
    const [time, setTime] = useState<string[]>([])
    const { openModal } = useContext(ModalsDispatchContext)
    const router = useRouter()

    const handleRadios = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement

        let val = target.value
        setTime([val])
    }

    const handleChecks = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement

        if (!week.includes(target.value) && week.length == 2) {

            const modalobj = {
                id: 'modal-max2',
                content: '최대 2개까지 선택 가능합니다.',
            }
            openModal(modalobj)
            target.checked = false
            return
        }

        console.log(week)
        if (target.checked) {
            setWeek([
                ...week, target.value
            ])
        } else {
            setWeek(week.filter(l => l != target.value))
        }

    }

    const save = () => {
        let txt = null

        if (week.length != 0 && time.length == 0) {
            txt = '회의 시간을 선택하세요.'
        }

        if (txt) {
            const modalobj = {
                id: 'modal-time',
                content: txt,
                confirm: () => { },
            }
            openModal(modalobj)
        }
    }

    const cancel = () => {
        router.back()
    }

    return (
        <Layout>
            <h1 className="font-bold mb-10">원하는 회의 요일과 시간을 선택해 주세요.</h1>
            <WeekChecks onChange={handleChecks} />
            <h1 className="font-bold mb-10">오프라인 위치를 선택해 주세요.</h1>
            <TimeRadios onChange={handleRadios} />
            <ButtonGroupPercent leftBtnClick={cancel} rightBtnClick={save} />
        </ Layout>
    )
}

export default MeetingTime