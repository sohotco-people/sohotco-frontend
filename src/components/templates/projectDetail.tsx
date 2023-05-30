import SquareBtn from '@atoms/squareBtn'
import ProjectInfo from '@organisms/projectInfo'
import { ModalsDispatchContext } from 'context/contexts'
import { useContext, useState } from 'react'
import { Type_Project } from 'types/Types'

interface Props {
    project: Type_Project

}
const ProjectDetail: React.FC<Props> = ({ project }) => {
    const { openModal } = useContext(ModalsDispatchContext)
    const [open, setOpen] = useState(true)

    const leftBtnClick = () => {
        let modalObj = {
            id: 'modal',
            content: '내용을 복구할 수 없습니다.\n정말로 삭제하시겠습니까?',
            type: 'confirm'
        }

        openModal(modalObj)
    }
    const rightBtnClick = () => { }
    const centerBtnClick = () => {
        setOpen(!open)

        let modalObj = {
            id: 'modal',
            content: `프로젝트가 ${open ? '공개' : '비공개'} 되었습니다.`
        }

        openModal(modalObj)
    }
    return (
        <>
            <ProjectInfo project={project} />

            {/* 내 프로젝트 아닐 경우 버튼 가리기 */}
            <div className="fixed inset-x-0 bottom-0">
                <SquareBtn type="grey" width="w-4/12" onClick={leftBtnClick}>삭제</SquareBtn>
                <SquareBtn type="point" width="w-4/12" onClick={centerBtnClick}>{open ? '공개' : '비공개'}</SquareBtn>
                <SquareBtn type="grey" width="w-4/12" onClick={rightBtnClick}>수정</SquareBtn>
            </div>
        </>

    )
}

export default ProjectDetail
