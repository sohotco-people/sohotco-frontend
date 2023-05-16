import Radio from "@atoms/radio"
import React, { ChangeEvent, ChangeEventHandler } from "react"


interface Props {
    onChange: ChangeEventHandler
}

const MeetingSystemRadios: React.FC<Props> = ({ onChange }) => {
    const meetingSystem = [
        { title: '온라인', value: 'online' },
        { title: '오프라인', value: 'offline' },
    ]

    return (
        <div>
            {meetingSystem.map(obj => <Radio key={obj.value} name={"onOff"} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default MeetingSystemRadios