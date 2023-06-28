import React from "react"
import { Type_User } from "types/Types"

interface Props {
    mate: Type_User
}

const TeamMateInfo: React.FC<Props> = ({ mate }) => {

    const subTxt = [
        ...mate.positions.map(p => p.name),
        ...mate.experiences.map(e => e.name)
    ].join(' ⋅ ')

    return (
        <>
            <div className="text-[22px] leading-[27px] font-semibold">{mate.name}</div>
            <div className="text-[18px] leading-[22px] font-medium">{subTxt}</div>
            <div className="text-[16px] leading-[26px] font-medium">{mate.intro}</div>
        </>
    )
}

export default TeamMateInfo