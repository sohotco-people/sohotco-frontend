import Layout from "@atoms/layout"
import TeamMateInfo from "@molecules/teamMateInfo"

interface Props {
    mate: {}
}

const TeamMateListItem: React.FC<Props> = ({ mate }) => {
    const { } = mate

    return (
        < Layout >
            <div className="grid gap-[20px]">
                <TeamMateInfo />
            </div>
        </Layout >
    )
}

export default TeamMateListItem