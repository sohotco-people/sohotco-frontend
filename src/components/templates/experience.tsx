import Layout from "@atoms/layout"
import ButtonGroupPercent from "@molecules/buttonGroupPercent"
import ExperienceRadios from "@molecules/experienceRadios"
import { ModalsDispatchContext } from "context/contexts"
import { useOption } from "hooks/option"
import { useUser } from "hooks/user"
import { useRouter } from "next/router"
import React, { ChangeEvent, useContext, useEffect, useState } from "react"
import { Type_User } from "types/Types"

interface Props {
    user?: Type_User
}

const Experience: React.FC<Props> = ({ user }) => {
    const router = useRouter()
    const { openModal } = useContext(ModalsDispatchContext)
    const { experience, getExperience } = useOption()
    const { update, selected, setSelected } = useUser()

    const handleRadios = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement

        let val = Number(target.value)
        setSelected([val])
    }

    const save = () => {
        let txt = null

        if (selected.length == 0) {
            txt = '경력을 선택하세요.'
        }

        if (txt) {
            const modalobj = {
                id: 'modal-experience',
                content: txt,
                confirm: () => { },
            }
            openModal(modalobj)
            return
        }
        update({ 'experiences': selected })
    }

    const cancel = () => {
        router.replace('/user')
    }

    useEffect(() => {

        getExperience()
        if (user) {
            setSelected(user?.experiences.map(e => e.id))
        }
    }, [user])

    return (
        <Layout>
            <h1 className="font-bold mb-10">경력을 선택해 주세요.</h1>
            <ExperienceRadios experience={experience} user={user} onChange={handleRadios} />

            <ButtonGroupPercent leftBtnClick={cancel} rightBtnClick={save} />
        </ Layout>
    )
}

export default Experience