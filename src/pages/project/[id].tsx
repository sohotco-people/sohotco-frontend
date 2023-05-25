import ProjectDetail from '@templates/projectDetail'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProjectInfo = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query.id)
  })

  return (
    <ProjectDetail />
  )
}

export default ProjectInfo