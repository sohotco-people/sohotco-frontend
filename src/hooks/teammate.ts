import { ModalsDispatchContext } from "context/contexts"
import { useContext, useState } from "react"
import { fetchPost } from "util/fetch"

export const useTeamMate = () => {
    const { openModal } = useContext(ModalsDispatchContext)
    const [suggest, setSuggest] = useState('')

    const goSuggest = (id: string, name: string, pId: string) => {

        const obj = {
            user_id: id,
            user_name: name,
            project_id: pId,
            message: suggest
        }

        fetchPost('/project/propose', obj).then(res => {
            if (res.status == 200) {
                openModal({
                    id: 'suggest',
                    content: `프로젝트를 제안했습니다.`
                })
            }
        })
    }

    return { suggest, setSuggest, goSuggest }
}