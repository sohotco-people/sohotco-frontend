import SquareBtn from '@atoms/squareBtn'
import ProjectDetail from '@templates/projectDetail'
import { ModalsDispatchContext } from 'context/contexts'
import { useProject } from 'hooks/project'
import { useContext, useEffect, useState } from 'react'
import { Type_Project } from 'types/Types'

const ProjectInfo = () => {
  const { openModal } = useContext(ModalsDispatchContext)
  const { projectGet, my, isPublished, updateIsPublished, onDelete } = useProject()

  const leftBtnClick = () => {
    let modalObj = {
      id: 'modal',
      content: '내용을 복구할 수 없습니다.\n정말로 삭제하시겠습니까?',
      type: 'confirm',
      confirm: () => {
        onDelete()
      }
    }

    openModal(modalObj)
  }

  const rightBtnClick = () => { }

  useEffect(() => {
    my()
  }, [])

  if (!projectGet) {
    return
  }

  return (
    <>
      <ProjectDetail project={projectGet} />
      <div className="fixed inset-x-0 bottom-0">
        <SquareBtn type="grey" width="w-4/12" onClick={leftBtnClick}>삭제</SquareBtn>
        <SquareBtn type="point" width="w-4/12" onClick={() => { updateIsPublished() }}>{isPublished ? '공개' : '비공개'}</SquareBtn>
        <SquareBtn type="grey" width="w-4/12" onClick={rightBtnClick}>수정</SquareBtn>
      </div>
    </>
  )
}

export default ProjectInfo