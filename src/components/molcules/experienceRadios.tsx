import Radio from "@atoms/radio"
import { ChangeEventHandler } from "react"

interface Props {
    onChange: ChangeEventHandler
}

const ExperienceRadios: React.FC<Props> = ({ onChange }) => {

    const experience = [
        { title: '경력 없음', value: 'none' },
        { title: '1년~3년', value: '1-3' },
        { title: '4년~6년', value: '4-6' },
        { title: '7년~9년', value: '7-9' },
        { title: '10년 이상', value: '10' },
    ]

    return (
        <div>
            {experience.map(obj => <Radio key={obj.value} name={"experience"} value={obj.value} title={obj.title} onChange={onChange} />)}
        </div>
    )
}

export default ExperienceRadios