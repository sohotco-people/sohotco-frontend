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
        const arr = ['locations', 'meeting_systems', 'weeks', "meeting_times", "positions"]
        const target = e.target as HTMLInputElement

        if (arr.includes(target.name)) {
            const num = Number(target.value)

            let valArr: number[] = []
            if (target.name == 'locations') {
                valArr = project.locations
            }
            if (target.name == 'weeks') {
                valArr = project.weeks
            }
            if (target.name == 'positions') {
                valArr = project.positions
            }

            if (target.checked) {
                valArr.push(num)
            } else {
                valArr = valArr.filter(n => n != num)
            }

            setProject({
                ...project,
                [target.name]: valArr
            })

            return
        }

        setProject({
            ...project,
            [target.name]: target.value
        })

    }

    const update = () => {
        fetchPost('/project/me', project).then(res => {

        }).catch(e => {
            console.log(e)
        })
    }

    const updateDescription = (value: string) => {
        setProject({
            ...project,
            description: value
        })
    }

    return { project, update, onChange, updateDescription }
}