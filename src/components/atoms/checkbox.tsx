import { ChangeEventHandler } from "react"

interface Props {
    value: string
    title: string
    onChange: ChangeEventHandler
}

const CheckBox: React.FC<Props> = ({ value, title, onChange }) => {
    let id = `check-${value}`

    return (
        <div className="flex items-center mb-10">
            <input type="checkbox" id={id} value={value} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onChange={onChange} />
            <label htmlFor={id} className="ml-2 text-sm font-medium">{title}</label>
        </div>
    )
}

export default CheckBox