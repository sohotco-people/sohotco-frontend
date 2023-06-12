import CheckBox from "@atoms/checkbox"
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    week: Type_Detail[]
    onChange: ChangeEventHandler
    user?: Type_User
}

const WeekChecks: React.FC<Props> = ({ week, onChange, user }) => {
    const [checked, setChecked] = useState<number[]>([])

    const handleChecks = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        let val = Number(target.value)

        if (target.checked) {
            setChecked([...checked, val])
        } else {
            setChecked(checked.filter(l => l != val))
        }

        onChange(e)
    }

    useEffect(() => {
        if (user?.meetingWeeks && user?.meetingWeeks.length > 0) {
            setChecked(user?.meetingWeeks.map((p) => p.id))
        }
    }, [user])

    return (
        <div className="grid grid-cols-2">
            {week.map(obj => <CheckBox key={obj.id} value={obj.id} title={obj.name} onChange={handleChecks} check={checked.includes(obj.id)} />)}
        </div>
    )
}

export default WeekChecks