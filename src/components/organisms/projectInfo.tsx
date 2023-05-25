import Layout from "@atoms/layout"
import ProjectBasicInfo from "@molecules/projectBasicInfo"
import ProjectContent from "@molecules/projectContent"

const ProjectInfo = () => {
    return (
        <Layout>
            <div className="grid gap-[60px]">
                <div className="grid gap-2.5">
                    <ProjectBasicInfo title={"재미있는 프로젝트를 같이할 멤버를 구합니다!"} subTexts={["17시간 전"]} />
                </div>

                <ProjectContent title={"회의 방식"} content={"온라인 (마포 또는 서초)"} />
                <ProjectContent title={"회의 일정"} content={"18시~24시 (월요일 또는 수요일)"} />
                <ProjectContent title={"모집 역할"} content={"백엔드 ⋅ 프론트엔드 ⋅ 디자이너"} />
                <ProjectContent title={"프로젝트 소개"} content={"프로젝트를 제안 받은 유저만 볼 수 있어요."} />
            </div>
        </Layout>
    )
}

export default ProjectInfo