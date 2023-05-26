import ProjectDetail from '@templates/projectDetail'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Type_Project } from 'types/Types'

const ProjectInfo = () => {
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
    viewCnt: '1234'
  }

  return (
    <ProjectDetail project={project} />
  )
}

export default ProjectInfo