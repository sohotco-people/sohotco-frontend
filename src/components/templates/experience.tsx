import Layout from "@atoms/layout"
import ButtonGroupPercent from "@molecules/buttonGroupPercent"
import ExperienceRadios from "@molecules/experienceRadios"
import { ModalsDispatchContext } from "context/contexts"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"

const Experience = () => {
    const router = useRouter()
    const { openModal } = useContext(ModalsDispatchContext)
    const [experience, setExperience] = useState<string[]>([])


    const handleRadios = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement

        let val = target.value
        if (val == 'online') {
            setExperience([])
        }

        setExperience([val])
    }

    const save = () => {
        let txt = null

        if (experience.length == 0) {
            txt = '경력을 선택하세요.'
        }

        if (txt) {
            const modalobj = {
                id: 'modal-meetingType',
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
            <h1 className="font-bold mb-10">경력을 선택해 주세요.</h1>
            <ExperienceRadios onChange={handleRadios} />

            <ButtonGroupPercent leftBtnClick={cancel} rightBtnClick={save} />
        </ Layout>
    )
}

export default Experience