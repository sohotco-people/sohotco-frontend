import CheckBox from "@atoms/checkbox"
import { ChangeEventHandler } from "react"

interface Props {
    onChange: ChangeEventHandler
}

const PositionChecks: React.FC<Props> = ({ onChange }) => {
    const position = [
        { title: '프론트엔드', value: 'fr' },
        { title: '백엔드', value: 'ba' },
        { title: '디자이너', value: 'de' },
        { title: '기획자', value: 'pl' },
    ]

    return (
        <div className="grid grid-cols-1">
            {position.map(obj => <CheckBox key={obj.value} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default PositionChecks