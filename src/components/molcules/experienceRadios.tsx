import Radio from "@atoms/radio"
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"
import { Type_Detail, Type_User } from "types/Types"

interface Props {
    experience: Type_Detail[]
    user?: Type_User
    onChange: ChangeEventHandler
    optionChecked?: number[]
}

const ExperienceRadios: React.FC<Props> = ({ experience, user, onChange, optionChecked }) => {

    const [checked, setChecked] = useState(0)

    const handleRadio = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setChecked(Number(target.value))
        onChange(e)
    }

    useEffect(() => {
        if (user?.experiences && user?.experiences.length > 0) {
            setChecked(user?.experiences[0].id)
        }
    }, [user])

    useEffect(() => {
        if (optionChecked) {
            setChecked(optionChecked[0])
        }
    }, [optionChecked])

    return (
        <div>
            {experience.map((obj, idx) =>
                <Radio key={idx} name={"experiences"} value={obj.id} title={obj.name} onChange={handleRadio} checked={checked} />
            )}
        </div>
    )
}

export default ExperienceRadios