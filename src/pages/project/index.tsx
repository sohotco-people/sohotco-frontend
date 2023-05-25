import ProjectList from "@templates/projectList"
import { useRouter } from "next/router"

const Project = () => {
  const router = useRouter()

  const obj = {
    id: 'id',
    title: '재미있는 프로젝트를 같이 할 멤버를 구합니다!',
    desc: '한줄소개 입니다. 프로젝트 기획 단계중이며 백엔드를 뽑습니다.',
    date: '17시간 전',
    cnt: '234'
  }

  const arr = [obj, obj, obj, obj, obj, obj]

  const handleClick = (idx: number) => {
    router.push('/project/' + idx)
  }

  return (
    <ProjectList list={arr} handleClick={handleClick} />
  )
}

export default Project