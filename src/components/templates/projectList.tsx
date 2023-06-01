import ProjectListItem from "@organisms/projectListItem"
import React, { useContext } from "react"
import { Type_Project } from "types/Types"
import { useRouter } from "next/router"
import { ProjectActiveStateContext } from "context/contexts"

interface Props {
  list: Type_Project[]
}

const ProjectList: React.FC<Props> = ({ list }) => {
  const router = useRouter()
  const { arr, setActive } = useContext(ProjectActiveStateContext)

  const handleClick = (obj: Type_Project, idx: string) => {
    setActive(idx)
    router.push('/project/' + obj.id)
  }

  console.log(arr)

  const projects = list.map((project, idx) => {
    let css = 'border-b border-b-gray3-500'
    if (arr.includes('list' + idx)) {
      css += ' bg-gray4'
    }

    return (
      <div key={idx} className={css} onClick={() => { handleClick(project, 'list' + idx) }}>
        <ProjectListItem project={project} />
      </div>)
  })

  return (
    <>
      {projects}
    </>

  )
}

export default ProjectList