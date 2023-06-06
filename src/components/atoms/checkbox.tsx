import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"

interface Props {
    value: number
    title: string
    onChange: ChangeEventHandler
    check: boolean
}

const CheckBox: React.FC<Props> = ({ value, title, onChange, check }) => {
    let id = `check-${value}`
    const [checked, setChecked] = useState(false)

    const handle = (e: ChangeEvent) => {
        setChecked(!checked)
        onChange(e)
    }

    useEffect(() => {
        setChecked(check)
    }, [check])

    return (
        <div className="flex items-center mb-10">
            <input type="checkbox" id={id} value={value} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onChange={handle} checked={checked} />
            <label htmlFor={id} className="ml-2 text-sm font-medium">{title}</label>
        </div>
    )
}

export default CheckBox