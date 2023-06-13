import Radio from "@atoms/radio"
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    meetingTime: Type_Detail[]
    onChange: ChangeEventHandler
    user?: Type_User
}

const TimeRadios: React.FC<Props> = ({ meetingTime, onChange, user }) => {
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

    return (
        <div>
            {meetingTime.map(obj => <Radio key={obj.id} name={"time"} value={obj.id} title={obj.name} onChange={handleRadio} checked={checked} />)}
        </div>
    )
}

export default TimeRadios