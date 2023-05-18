import CheckBox from "@atoms/checkbox"
import React, { ChangeEventHandler } from "react"

interface Props {
    onChange: ChangeEventHandler
}

const WeekChecks: React.FC<Props> = ({ onChange }) => {
    const week = [
        { title: '월요일', value: 'gn' },
        { title: '화요일', value: 'mp' },
        { title: '수요일', value: 'sc' },
        { title: '목요일', value: 'ga' },
        { title: '금요일', value: 'gs' },
        { title: '토요일', value: 'gr' },
        { title: '일요일', value: 'ic' },
    ]

    return (
        <div className="grid grid-cols-2">
            {week.map(obj => <CheckBox key={obj.value} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default WeekChecks