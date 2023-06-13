import Layout from "@atoms/layout"
import ProjectBasicInfo from "@molecules/projectBasicInfo"
import React from "react"
import { Type_Project } from "types/Types"

interface Props {
  project: Type_Project
}

const ProjectListItem: React.FC<Props> = ({ project }) => {
  const { name, intro, createdAt, viewCnt } = project

  return (
    <Layout>
      <div className="grid gap-[30px]">
        <ProjectBasicInfo title={name} desc={intro} subTexts={[createdAt, '조회수 ' + viewCnt]} />
      </div>
    </Layout>
  )
}

export default ProjectListItem