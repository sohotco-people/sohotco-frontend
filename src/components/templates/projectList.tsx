import ProjectListItem from "@organisms/projectListItem"
import React from "react"

interface Props {
  list: any[]
  handleClick: Function
}

const ProjectList: React.FC<Props> = ({ list, handleClick }) => {

  const projects = list.map((project, idx) =>
    <div key={idx} className="border-b border-b-gray3-500" onClick={() => { handleClick(project.id) }}>
      <ProjectListItem project={project} />
    </div>
  )

  return (
    <>{projects}</>
  )
}

export default ProjectList