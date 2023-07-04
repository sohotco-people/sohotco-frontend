import Image from "next/image"
import TeamMateListItem from "@organisms/teamMateListItem"
import { useRouter } from "next/router"
import { Type_User } from "types/Types"
import Options from "@organisms/options"
import { ChangeEvent, useState } from "react"
import { useProject } from "hooks/project"

interface Props {
    list: Type_User[]
    getUser: (param: object) => void
}

interface option {
    meeting_times: string[]
    meeting_systems: string[]
    weeks: string[]
    positions: string[]
    locations: string[]
    experiences: string[]
}

const TeamMateList: React.FC<Props> = ({ list, getUser }) => {
    const { project, onChange } = useProject()
    const router = useRouter()
    const [type, setType] = useState(0)

    const [optionChecked, setOptionChecked] = useState<option>({
        meeting_times: [],
        meeting_systems: [],
        weeks: [],
        positions: [],
        locations: [],
        experiences: []
    })

    const filter = [
        { name: '역할', fn: () => { setType(1) } },
        { name: '경력', fn: () => { setType(2) } },
        { name: '방식', fn: () => { setType(3) } },
        { name: '일정', fn: () => { setType(4) } }
    ]

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const label = target.labels?.item(0)

        const name = target.name
        const txt = label?.textContent || ''

        let arr: string[] = []
        if (name == 'positions') { arr = optionChecked.positions }
        if (name == 'meeting_systems') { arr = optionChecked.meeting_systems }
        if (name == 'locations') { arr = optionChecked.locations }
        if (name == 'weeks') { arr = optionChecked.weeks }
        if (name == 'meeting_times') { arr = optionChecked.meeting_times }
        if (name == 'experiences') { arr = optionChecked.experiences }

        if (arr.includes(txt)) {
            arr = arr.filter(str => str != txt)
        } else {
            if (name == 'experiences' || name == 'meeting_systems' || name == 'meeting_times') {
                arr = []
            }
            arr.push(txt)
        }

        setOptionChecked({
            ...optionChecked,
            [name]: arr
        })

        onChange(e)
    }

    const handleClick = (idx: number) => {
        router.push('/teammate/suggest/' + idx)
    }

    const search = () => {
        setType(0)
        getUser(project)
    }

    const teammates = list.map((mate, idx) => {
        let css = 'border-b border-b-gray3-500'

        return (
            <div key={idx} className={css} onClick={() => { handleClick(mate.id) }}>
                <TeamMateListItem mate={mate} />
            </div>
        )
    })

    return (
        <>
            <Options type={type} onchange={handleChange} save={search} optionChecked={project} />
            <div className="px-4 py-4 border-b border-b-gray3-500">
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {filter.map((f, idx) =>
                        <div key={idx} className="text-[16px] leading-[19px] font-medium" onClick={f.fn}>
                            {f.name}
                            <Image src="/images/bottomArrow.png" alt="link" width={16} height={16} style={{ display: 'inline-block' }} />
                        </div>
                    )}
                </div>
                <div className="text-[16px] leading-[19px] font-medium text-gray1 grid grid-cols-1 gap-y-2.5">
                    <div>{optionChecked.positions.join(' ⋅ ')}</div>
                    <div>{optionChecked.experiences.join(' ⋅ ')}</div>
                    <div>{optionChecked.meeting_systems.concat(optionChecked.locations).join(' ⋅ ')}</div>
                    <div>{optionChecked.weeks.concat(optionChecked.meeting_times).join(' ⋅ ')}</div>
                </div>
            </div>
            {teammates}
        </>
    )
}

export default TeamMateList