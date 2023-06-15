import Search from "@organisms/search"
import TeamMateListItem from "@organisms/teamMateListItem"
import { useRouter } from "next/router"

interface Props {
    list: any[]
}

const TeamMateList: React.FC<Props> = ({ list }) => {
    const router = useRouter()


    const handleClick = (idx: number) => {
        router.push('/teammate/suggest/' + idx)
    }

    const projects = list.map((mate, idx) => {
        let css = 'border-b border-b-gray3-500'

        return (
            <div key={idx} className={css} onClick={() => { handleClick(idx) }}>
                <TeamMateListItem mate={mate} />
            </div>
        )
    })

    return (
        <>
            <Search />
            {projects}
        </>

    )
}

export default TeamMateList