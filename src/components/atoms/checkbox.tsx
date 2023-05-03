
interface Props {
    value: string
    title: string
}

const CheckBox: React.FC<Props> = ({ value, title }) => {
    let id = `check-${value}`

    return (
        <div className="flex items-center mb-1">
            <input type="checkbox" id={id} value={value} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
            <label htmlFor={id} className="ml-2 text-sm font-medium">{title}</label>
        </div>
    )
}

export default CheckBox