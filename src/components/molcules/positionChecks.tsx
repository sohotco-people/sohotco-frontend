import CheckBox from "@atoms/checkbox"
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_User } from "types/Types"

interface Props {
    position: Type_User[]
    onChange: ChangeEventHandler
    user?: Type_User
}

const PositionChecks: React.FC<Props> = ({ position, onChange, user }) => {
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
        if (user?.positions && user?.positions.length > 0) {
            setChecked(user?.positions.map((p) => p.id))
        }
    }, [user])

    return (
        <div className="grid grid-cols-1">
            {position.map(obj => < CheckBox key={obj.id} value={obj.id} title={obj.name} onChange={handleChecks} check={checked.includes(obj.id)} />)}
        </div>
    )
}

export default PositionChecks