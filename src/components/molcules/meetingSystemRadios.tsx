import Radio from "@atoms/radio"
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    onChange: ChangeEventHandler
    meetingSystem: Type_Detail[]
    user?: Type_User
    optionChecked: number[]
}

const MeetingSystemRadios: React.FC<Props> = ({ onChange, meetingSystem, user, optionChecked }) => {
    const [checked, setChecked] = useState(0)

    const handleRadio = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const val = Number(target.value)
        setChecked(val)
        onChange(e)
    }

    useEffect(() => {
        if (user?.meeting_systems && user?.meeting_systems.length > 0) {
            setChecked(user?.meeting_systems[0].id)
        }
    }, [user])

    useEffect(() => {
        if (optionChecked) {
            setChecked(optionChecked[0])
        }
    }, [optionChecked])

    return (
        <div>
            {meetingSystem.map((obj, idx) =>
                <Radio key={'checked' + idx} name={"meeting_systems"} value={obj.id} title={obj.name} onChange={handleRadio} checked={checked} />
            )}
        </div>
    )
}

export default MeetingSystemRadios