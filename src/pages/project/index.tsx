import ProjectList from "@templates/projectList"
import { Type_Project } from "types/Types"

const Project = () => {

  const obj: Type_Project = {
    id: 'id',
    title: '재미있는 프로젝트를 같이 할 멤버를 구합니다!',
    intro: '한줄소개 입니다. 프로젝트 기획 단계중이며 백엔드를 뽑습니다.',
    meetType: "",
    location: [],
    week: [],
    time: [],
    position: [],
    createdAt: "17시간 전",
    viewCnt: "234",
    updatedAt: "",
    isPublished: false
  }

  const arr = [obj, obj, obj, obj, obj, obj]

  return (
    <ProjectList list={arr} />
  )
}

export default Project