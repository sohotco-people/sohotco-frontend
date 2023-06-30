import { ModalsDispatchContext } from "context/contexts"
import { useContext, useState } from "react"
import { Type_User } from "types/Types"
import { fetchGet, fetchPut } from "util/fetch"

export const useUser = () => {
    const { openModal } = useContext(ModalsDispatchContext)
    const [me, setMe] = useState<Type_User>()
    const [userOne, setUserOne] = useState<Type_User>({
        id: 0,
        kakao_id: '',
        name: '',
        link: '',
        intro: '',
        positions: [],
        experiences: [],
        locations: [],
        weeks: [],
        meeting_systems: [],
        meeting_times: [],
        created_at: new Date(),
        deleted_at: new Date(),
        project: {}
    })
    const [user, setUser] = useState<Type_User[]>([])
    const [selected, setSelected] = useState<any[]>([])

    const getMe = () => {
        fetchGet('/user/me', {}).then(res => {
            setMe(res.data)
        }).catch(err => {
            openModal({ id: err.cause, content: err.message })
        })
    }

    const update = (obj: any) => {
        fetchPut('/user/me', obj).then(res => {
            if (res.status == 200) {
                openModal({
                    id: 'user',
                    content: '저장되었습니다.'
                })
            }
        })
    }

    const getUser = (param: object) => {
        fetchGet('/user', param).then(res => {
            setUser(res.data)
        }).catch(err => {
            openModal({ id: err.cause, content: err.message })
        })
    }

    const getUserById = (id: string) => {
        fetchGet('/user/' + id).then(res => {
            setUserOne(res.data)
        }).catch(err => {
            openModal({ id: err.cause, content: err.message })
        })
    }


    return { update, me, getMe, user, getUser, selected, setSelected, userOne, getUserById }
}