import { ChangeEventHandler } from "react"

interface Props {
    name: string
    value: number
    title: string
    onChange: ChangeEventHandler
    checked: number
}

const Radio: React.FC<Props> = ({ name, title, value, onChange, checked }) => {

    let id = `radio-${value}`

    return (
        <div className="flex items-center mb-10">
            <input type="radio" id={id} name={name} value={value} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" onChange={onChange} checked={checked == value} />
            <label htmlFor={id} className="ml-2 text-sm font-medium">{title}</label>
        </div>
    )
}

export default Radio