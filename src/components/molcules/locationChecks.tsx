import CheckBox from "@atoms/checkbox"
import { ChangeEventHandler } from "react"

interface Props {
    onChange: ChangeEventHandler
}

const LocationChecks: React.FC<Props> = ({ onChange }) => {

    const location = [
        { title: '강남', value: 'gn' },
        { title: '마포', value: 'mp' },
        { title: '서초', value: 'sc' },
        { title: '관악', value: 'ga' },
        { title: '가산디지털', value: 'gs' },
        { title: '구로', value: 'gr' },
        { title: '인천', value: 'ic' },
        { title: '경기', value: 'gg' },
        { title: '분당/판교', value: 'bd' },
    ]

    return (
        <div className="grid grid-cols-2">
            {location.map(obj => <CheckBox key={obj.value} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default LocationChecks