import ProjectList from "@templates/projectList"
import { useEffect, useState } from "react"
import { Type_Project } from "types/Types"
import { fetchGet } from "util/fetch"

const Project = () => {

  const [projects, setProjects] = useState<Type_Project[]>([])

  useEffect(() => {
    fetchGet('/project', {}).then(res => {
      const data = res.data as Type_Project[]
      setProjects(data)
    })
  }, [])

  return (
    <ProjectList list={projects} />
  )
}

export default Project