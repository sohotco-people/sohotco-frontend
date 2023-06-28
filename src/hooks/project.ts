import { ModalsDispatchContext } from "context/contexts"
import { useRouter } from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { Project_Post, Type_Project } from "types/Types"
import { fetchDelete, fetchGet, fetchPost, fetchPut } from "util/fetch"

export const useProject = () => {
    const { openModal } = useContext(ModalsDispatchContext)
    const router = useRouter()

    const [projectGet, setProjectGet] = useState<Type_Project>()

    const [project, setProject] = useState<Project_Post>({
        name: '',
        intro: '',
        description: '',
        meeting_times: [],
        meeting_systems: [],
        weeks: [],
        positions: [],
        locations: [],
        experiences: []
    })

    const [isPublished, setIsPublished] = useState(false)

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

    const update = (isUpdate?: boolean) => {
        let obj = {
            id: 'poject',
            content: '',
            confirm: () => { }
        }
        if (!project.name) {
            obj.content = '프로젝트 제목을 입력해주세요.'
            openModal(obj)
            return
        }
        if (!project.intro) {
            obj.content = '한줄소개를 입력해주세요.'
            openModal(obj)
            return
        }
        if (!project.description) {
            obj.content = '프로젝트 소개를 입력해주세요.'
            openModal(obj)
            return
        }

        if (isUpdate) {
            fetchPut('/project/me', project).then(res => {
                if (res.status == 200) {
                    obj.content = '저장 되었습니다.'
                    openModal(obj)
                }
            }).catch(e => {
                console.log(e)
            })
        } else {
            fetchPost('/project/me', project).then(res => {
                if (res.status == 200) {
                    obj.content = '저장 되었습니다.'
                    obj.confirm = () => { router.replace('/project/my') }
                    openModal(obj)
                }
            }).catch(e => {
                console.log(e)
            })
        }
    }

    const my = () => {
        fetchGet('/project/me', project).then(res => {
            if (res.status == 200) {
                const projectObj = res.data as Type_Project
                setProject({
                    ...projectObj,
                    meeting_times: projectObj.meeting_times.map((m) => m.id),
                    meeting_systems: projectObj.meeting_systems.map(m => m.id),
                    weeks: projectObj.weeks.map(w => w.id),
                    positions: projectObj.positions.map(p => p.id),
                    locations: projectObj.locations.map(l => l.id),
                    experiences: []
                })
                setProjectGet(res.data)
                setIsPublished(res.data.is_published)
            } else {
                router.replace('/project/new')
            }
            return
        }).catch(e => {
            router.replace('/project/new')
        })
    }

    const updateIsPublished = () => {
        fetchPut('/project/me/publish', { is_published: !isPublished }).then(res => {
            if (res.status == 200) {
                openModal({
                    id: 'updateIsPublished',
                    content: `프로젝트가 ${!isPublished ? '공개' : '비공개'} 되었습니다.`
                })
                setIsPublished(!isPublished)
            }
        })
    }

    const updateDescription = (value: string) => {
        setProject({
            ...project,
            description: value
        })
    }

    const onDelete = () => {
        fetchDelete('/project/me').then(res => {
            if (res.status == 200) {
                openModal({
                    id: 'updateIsPublished',
                    content: `프로젝트가 삭제 되었습니다.`,
                    confirm: () => {
                        router.replace('/')
                    }
                })
            }
        })
    }

    return { project, update, onChange, updateDescription, my, projectGet, isPublished, updateIsPublished, onDelete }
}