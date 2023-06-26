import ProjectInfo from '@organisms/projectInfo'
import { Type_Project } from 'types/Types'

interface Props {
    project: Type_Project

}
const ProjectDetail: React.FC<Props> = ({ project }) => {

    return (
        <>
            <ProjectInfo project={project} />
        </>
    )
}

export default ProjectDetail
