import React from "react"

interface Props {
  title: string
  content: string
}

const ProjectContent: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="grid gap-2.5">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-base font-medium text-black">{content}</div>
    </div>
  )
}

export default ProjectContent