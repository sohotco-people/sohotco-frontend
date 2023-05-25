import Layout from "@atoms/layout"
import ProjectBasicInfo from "@molecules/projectBasicInfo"
import React from "react"

interface Props {
  project: any
}

const ProjectListItem: React.FC<Props> = ({ project }) => {
  const { title, desc, date, cnt } = project

  return (
    <Layout>
      <div className="grid gap-[30px]">
        <ProjectBasicInfo title={title} desc={desc} subTexts={[date, '조회수 ' + cnt]} />
      </div>
    </Layout>
  )
}

export default ProjectListItem