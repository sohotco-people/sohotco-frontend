import SquareBtn from '@atoms/squareBtn'
import ProjectInfo from '@organisms/projectInfo'
import { ModalsDispatchContext } from 'context/contexts'
import { useContext, useState } from 'react'
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
