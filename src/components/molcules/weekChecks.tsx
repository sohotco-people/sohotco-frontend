import CheckBox from "@atoms/checkbox"
import { ModalsDispatchContext } from "context/contexts"
import React, { ChangeEvent, ChangeEventHandler, useContext, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    week: Type_Detail[]
    onChange: ChangeEventHandler
    user?: Type_User
    optionChecked?: number[]
}

const WeekChecks: React.FC<Props> = ({ week, onChange, user, optionChecked }) => {
    const { openModal } = useContext(ModalsDispatchContext)

    const [checked, setChecked] = useState<number[]>([])

    const handleChecks = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        let val = Number(target.value)

        if (!checked.includes(val) && checked.length == 2) {

            openModal({
                id: 'modal-max2',
                content: '최대 2개까지 선택 가능합니다.',
            })
            setChecked(checked.filter(l => l != val))

            return
        }

        if (target.checked) {
            setChecked([...checked, val])
        } else {
            setChecked(checked.filter(l => l != val))
        }

        onChange(e)
    }

    useEffect(() => {
        if (user?.weeks && user?.weeks.length > 0) {
            setChecked(user?.weeks.map((p) => p.id))
        }
    }, [user])

    useEffect(() => {
        if (optionChecked) {
            setChecked(optionChecked)
        }
    }, [optionChecked])

    return (
        <div className="grid grid-cols-2">
            {week.map(obj => <CheckBox key={obj.id} value={obj.id} title={obj.name} name="weeks" onChange={handleChecks} check={checked.includes(obj.id)} />)}
        </div>
    )
}

export default WeekChecks