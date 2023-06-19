import { ChangeEvent, useState } from "react"
import { Project_Post } from "types/Types"
import { fetchPost } from "util/fetch"

export const useProject = () => {
    const [project, setProject] = useState<Project_Post>({
        name: '',
        intro: '',
        description: '',
        meeting_times: [],
        meeting_systems: [],
        weeks: [],
        positions: [],
        locations: []
    })

    const onChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setProject({
            ...project,
            [target.name]: target.value
        })
    }

    const update = () => {
        fetchPost('/project/me', project).then(res => {

        })
    }

    return { update, onChange }
}