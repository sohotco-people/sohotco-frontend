import Layout from "@atoms/layout"
import ProjectBasicInfo from "@molecules/projectBasicInfo"
import ProjectContent from "@molecules/projectContent"
import { Type_Project } from "types/Types"

interface Props {
	project: Type_Project
}

const ProjectInfo: React.FC<Props> = ({ project }) => {

	let { title, intro, meetType, location, week, time, position, createdAt } = project

	let locStr = ''
	if (location) {
		locStr = ` (${location.join(' 또는 ')})`
	}

	let timeStr = ''
	if (week && time) {
		timeStr = `${time.join(',')} (${week.join(' 또는 ')})`
	}

	return (
		<Layout>
			<div className="grid gap-[60px]">
				<div className="grid gap-2.5">
					<ProjectBasicInfo title={title} subTexts={[createdAt]} />
				</div>

				<ProjectContent title={"회의 방식"} content={meetType + locStr} />
				<ProjectContent title={"회의 일정"} content={timeStr} />
				<ProjectContent title={"모집 역할"} content={position.join(' ⋅ ')} />
				<ProjectContent title={"프로젝트 소개"} content={intro} />
			</div>
		</Layout>
	)
}

export default ProjectInfo