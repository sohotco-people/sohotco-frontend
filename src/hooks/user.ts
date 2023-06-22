import { ModalsDispatchContext } from "context/contexts"
import { useContext, useState } from "react"
import { Type_User } from "types/Types"
import { fetchGet, fetchPut } from "util/fetch"

export const useUser = () => {
    const { openModal } = useContext(ModalsDispatchContext)
    const [me, setMe] = useState<Type_User>()

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

    return { update, me, getMe }
}