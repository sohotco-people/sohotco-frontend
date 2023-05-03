
interface Props {
    name: string
    value: string
    title: string
}

const Radio: React.FC<Props> = ({ name, title, value }) => {

    let id = `radio-${value}`

    return (
        <div className="flex items-center mb-1">
            <input type="radio" id={id} name={name} value={value} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
            <label htmlFor={id} className="ml-2 text-sm font-medium">{title}</label>
        </div>
    )
}

export default Radio