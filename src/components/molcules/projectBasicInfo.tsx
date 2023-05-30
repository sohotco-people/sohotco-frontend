import React from "react"

interface Props {
  title: string
  desc?: string
  subTexts: string[]
}

const ProjectBasicInfo: React.FC<Props> = ({ title, desc, subTexts }) => {
  const contents = subTexts.map((subText, idx) => <span key={idx} className="mr-2.5">{subText}</span>)

  return (
    <>
      <div className="text-xl font-semibold">{title}</div>
      {desc || <div className="text-lg font-medium">{desc}</div>}

      <div className="text-base font-medium text-gray1">{contents}</div>
    </>
  )
}

export default ProjectBasicInfo