import SquareBtn from '@atoms/squareBtn'
import ProjectDetail from '@templates/projectDetail'
import { ModalsDispatchContext } from 'context/contexts'
import { useContext, useState } from 'react'
import { Type_Project } from 'types/Types'

const ProjectInfo = () => {
  const { openModal } = useContext(ModalsDispatchContext)
  const [open, setOpen] = useState(true)

  const project: Type_Project = {
    id: 'id',
    title: '재미있는 프로젝트를 같이 할 멤버를 구합니다!',
    intro: '프로젝트를 제안 받은 유저만 볼 수 있어요.',
    meetType: '오프라인',
    location: ['마포', '서초'],
    week: ['월요일', '화요일'],
    time: ['12시~14시'],
    position: ['백엔드', '디자이너'],
    createdAt: '17시간 전',
    updatedAt: '',
    isPublished: false,
    viewCnt: '234'
  }

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
      <ProjectDetail project={project} />
      <div className="fixed inset-x-0 bottom-0">
        <SquareBtn type="grey" width="w-4/12" onClick={leftBtnClick}>삭제</SquareBtn>
        <SquareBtn type="point" width="w-4/12" onClick={centerBtnClick}>{open ? '공개' : '비공개'}</SquareBtn>
        <SquareBtn type="grey" width="w-4/12" onClick={rightBtnClick}>수정</SquareBtn>
      </div>
    </>
  )
}

export default ProjectInfo