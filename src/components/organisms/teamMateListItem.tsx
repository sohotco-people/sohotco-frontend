import Layout from "@atoms/layout"
import TeamMateInfo from "@molecules/teamMateInfo"
import { Type_User } from "types/Types"

interface Props {
    mate: Type_User
}

const TeamMateListItem: React.FC<Props> = ({ mate }) => {
    const { } = mate

    return (
        < Layout >
            <div className="grid gap-[20px]">
                <TeamMateInfo mate={mate} />
            </div>
        </Layout >
    )
}

export default TeamMateListItem