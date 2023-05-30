import ProjectListItem from "@organisms/projectListItem"
import React from "react"
import { Type_Project } from "types/Types"
import { useRouter } from "next/router"

interface Props {
  list: Type_Project[]
}

const ProjectList: React.FC<Props> = ({ list }) => {
  const router = useRouter()

  const handleClick = (obj: Type_Project) => {
    router.push('/project/' + obj.id)
  }

  const projects = list.map((project, idx) =>
    <div key={idx} className="border-b border-b-gray3-500" onClick={() => { handleClick(project) }}>
      <ProjectListItem project={project} />
    </div>
  )

  return (
    <>{projects}</>
  )
}

export default ProjectList