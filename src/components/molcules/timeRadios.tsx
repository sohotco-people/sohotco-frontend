import Radio from "@atoms/radio"
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    meetingTime: Type_Detail[]
    onChange: ChangeEventHandler
    user?: Type_User
    optionChecked?: number[]
}

const TimeRadios: React.FC<Props> = ({ meetingTime, onChange, user, optionChecked }) => {
    const [checked, setChecked] = useState(0)

    const handleRadio = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setChecked(Number(target.value))
        onChange(e)
    }

    useEffect(() => {
        if (user?.meeting_times && user?.meeting_times.length > 0) {
            setChecked(user?.meeting_times[0].id)
        }
    }, [user])

    useEffect(() => {
        if (optionChecked) {
            setChecked(optionChecked[0])
        }
    }, [optionChecked])

    return (
        <div>
            {meetingTime.map(obj => <Radio key={obj.id} name={"meeting_times"} value={obj.id} title={obj.name} onChange={handleRadio} checked={checked} />)}
        </div>
    )
}

export default TimeRadios