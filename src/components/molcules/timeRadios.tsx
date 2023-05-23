import Radio from "@atoms/radio"
import React, { ChangeEventHandler } from "react"

interface Props {
    onChange: ChangeEventHandler
}

const TimeRadios: React.FC<Props> = ({ onChange }) => {
    const time = [
        { title: '6시~12시', value: '6-12' },
        { title: '12시~18시', value: '12-18' },
        { title: '18시~24시', value: '18-24' }
    ]

    return (
        <div>
            {time.map(obj => <Radio key={obj.value} name={"time"} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default TimeRadios