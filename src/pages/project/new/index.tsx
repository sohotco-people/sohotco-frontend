import { useNewProjectState } from 'context/hooks'
import { fetchPost } from 'util/fetch'
import CreateProject from '@templates/CreateProject'

const NewProject = () => {
  const [newProject, setNewProject] = useNewProjectState()

  const clickSave = async () => {
    const params = {
      name: newProject.title,
      intro: newProject.intro,
      description: newProject.desc,
      meeting_times: newProject.time,
      meeting_systems: newProject.meetType,
      meeting_weeks: newProject.week,
      positions: newProject.position,
      location: newProject.location,
    }
    const res = await fetchPost('/project/me', params)

    if (res.status === 200) {
      setNewProject({
        title: '',
        intro: '',
        desc: '',
        meetType: '',
        location: [],
        week: [],
        time: [],
        position: [],
      })
      window.sessionStorage.removeItem('blockProjectInfoModal')
    }
  }

  return <CreateProject routeBack="/" clickSave={clickSave} />
}

export default NewProject
