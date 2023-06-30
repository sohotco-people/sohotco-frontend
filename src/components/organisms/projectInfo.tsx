import Layout from "@atoms/layout"
import ProjectBasicInfo from "@molecules/projectBasicInfo"
import ProjectContent from "@molecules/projectContent"
import { formatDistance, parseISO } from "date-fns"
import { ko } from "date-fns/locale"
import { Type_Project } from "types/Types"

interface Props {
	project: Type_Project
}

const ProjectInfo: React.FC<Props> = ({ project }) => {

	if (!project) {
		return (<></>)
	}

	let { name, intro, meeting_systems, weeks, meeting_times, positions, created_at, locations } = project

	let timeStr = ''
	if (weeks && meeting_times) {
		timeStr = `${meeting_times.map(t => t.name).join()} (${weeks.map(w => w.name).join(' 또는 ')})`
	}

	let loStr = ''
	if (locations.length != 0) {
		loStr = `(${locations.map(l => l.name).join(' 또는 ')})`
	}

	return (
		<Layout>
			<div className="grid gap-[60px]">
				<div className="grid gap-2.5">
					<ProjectBasicInfo title={name} subTexts={[formatDistance(parseISO(created_at), new Date(), {
						addSuffix: true,
						locale: ko
					})]} />
				</div>

				<ProjectContent title={"회의 방식"} content={meeting_systems.map(sys => sys.name).join() + loStr} />
				<ProjectContent title={"회의 일정"} content={timeStr} />
				<ProjectContent title={"모집 역할"} content={positions.map(p => p.name).join(' ⋅ ')} />
				<ProjectContent title={"프로젝트 소개"} content={intro} />
			</div>
		</Layout>
	)
}

export default ProjectInfo